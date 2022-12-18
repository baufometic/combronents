/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import {
	useEffect, useRef, useState 
} from "react";
import styled from "styled-components";
import {
	staticStyles, dynamicStyles, TStyleEntries 
} from "./styles";
import { GetOriginalFontName } from "./fonts";

// TODO SC with SSR - have to filter out repeat keys, maybe think useMemo or even outside of component
// TODO use describe to style the SC's
// TODO allow non boolean keys through the app
// TODO make sure clicks work for buttons
// TODO make hex and rgb available as well as ordinary colours
// TODO add loop created styles to the README
// TODO check the props array types match against a hard type somewhere
// TODO need to somehow merge the transformations or they are canceled by cascade
// TODO when using - transformations may be affected by further code, so extract consumers of these out into containers

//*____________________ STYLED COMPONENT - just exists to pass the filtered styles into a HTML element ____________________ 
const StyledComponent = styled.div<{arr: string[]}>`
	${ ({ arr }) => [ ...arr ] };
`;

function CreateItemHandler() {
	return {
		LogMe: function() {
			console.log("LOG ME");
			console.log(this.cssStyles);
		},
		NO_OF_CHILD_LEVELS      : 10,
		currentIterationIsChild : false,
		nthChildIndex           : -1,
		cssStylesChild          : [] as Array<string[]>,
		transformsChild         : [] as Array<string[]>,
		ResetChildren           : function(): void {
			this.currentIterationIsChild = false;
			this.nthChildIndex = -1;
		},
		InitialiseChildArrays: function() {
		//* Arr 0 to 10 are callable in a certain order to track pushes to specific children as group
			Array(this.NO_OF_CHILD_LEVELS+1).fill(null).map(() => {
				this.cssStylesChild.push([]);
				this.transformsChild.push([]);
			});
		},

		cssStyles   : [] as string[],
		transforms  : [] as string[],
		AddCSSStyle : function(items: string[]) {
			if (!this.currentIterationIsChild) {
				console.log(`Adding CSS style [not child]: ${ items.join(" ") }`);
				this.cssStyles.push(...items);
			} else {
				console.log(`Adding CSS style [child]: ${ items.join(" ") }`);
				this.cssStylesChild[this.nthChildIndex].push(...items);	
			}
		},
		AddTransform: function(items: string[]) {
			if (!this.currentIterationIsChild) {
				console.log("Adding transform [not child]: " + items.join(" "));
				this.transforms.push(...items);
			} else {
				console.log("Adding Transform [child]: " + items.join(" "));
				this.transformsChild[this.nthChildIndex].push(...items);
			}
		},

		Organise: function() {
			// * Push any transformations that were found
			if (this.transforms.length) {
				const sorted = Array.from(new Set(this.transforms)).sort();
				this.cssStyles.push("transform: " + sorted.map(s => s).join(" "));
			}

			for (let idx = 0; idx <= this.NO_OF_CHILD_LEVELS; idx++) {
				if (this.cssStylesChild[idx].length > 0 || this.transformsChild[idx].length > 0) {
					
					//*__________ CHILD STYLES __________
					//* Remove dupes and sort alphabetically so it looks nice in the DOM
					const sortedCSSChildren = Array.from(new Set(this.cssStylesChild[idx])).sort();
					
					//*__________ CHILD TRANSFORMS __________
					const sortedChildTransforms = Array.from(new Set(this.transformsChild[idx])).sort();

					//* 'sortedChildTransforms.map adds 'transform:' only on first iteration, looks like:
					//* transform: { ...items }
					const str = `> :nth-child(${ idx }) { ${ sortedCSSChildren.length <= 0 ? "" : sortedCSSChildren.map(s => s).join(";") } ${ sortedChildTransforms.length <= 0 ? "" : sortedChildTransforms.map((s, idx) => idx === 0? "transform: " + s : s).join(" ") + ";" } }`;
					console.log(str);
			
					this.cssStyles.push(str);
				}
			}
		
			//* Append ";" to each item just incase it's not done by the user
			this.cssStyles.map((style, idx) => {
				if (!this.cssStyles[idx].endsWith(";")) {
					this.cssStyles[idx] += ";";
				}
			});
		
			//* Remove duplicates from array and sort alphabetically
			return Array.from(new Set(this.cssStyles)).sort();
		}
	};
}

const InjectStylesheetToHead = (url: string) => {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = url;
	document.getElementsByTagName("head")[0].appendChild(link);
};

//*____________________ HOC ____________________
interface IHOCProps {
	children?: React.ReactNode;
	elementType:
	"button" | "div" | "h1" | "h2" | "p" |
	"section" | "span";
}

// * Works by returning an an array of css strings, which gets pushed to useRef and into a styled component
const HOC = ({ children, elementType, ...props }: IHOCProps) => {
	const [ stylesArray, setStylesArray ] = useState<string[]>([]);
	const googleFontsURLRef = useRef<string[]>([]);
	
	useEffect(() => {
		console.time("HOC performance");
		console.log("__________ HOC __________");
		console.log("elementType", elementType);
		console.log(props);

		const items = CreateItemHandler();
		items.InitialiseChildArrays();
	
		const booleanKeys = (Object.keys(props) as (keyof typeof props)[]).filter(key => {
			if (typeof props[key] === "boolean") {
				console.log(key);
				return key;
			}
		});
	
		// * CHECK THE KEY AGAINST MULTIPLE STYLES (child, static, dynamic)
		console.log("Checking potential keys against types:");

		booleanKeys.map((currentKey: string) => {
			items.ResetChildren(); // TODO document this
			console.log(`currentKey: ${ currentKey }`);
	
			//*____________________ CHILD ENTRIES ____________________
			//* Handle child entry by grouping it with other child elements before appending to the main array
			if (currentKey.startsWith("child")) {
				//* Mark the current iteration as a child, so it's styles are grouped together by the handler
				console.log("Type: child item");
				items.currentIterationIsChild = true;
	
				//* Grab the first part of the key i.e. 'child10_'
				const childPrefix = currentKey.split("_").shift();
	
				if (childPrefix) {
					console.log(`childPrefix: ${ childPrefix }`);
	
					const extractedChildIndex = childPrefix.match(/\d+/g); //* extract the number i.e. '10'
					if (extractedChildIndex) {
						//* Set the child index so the appropriate array gets populated in childCSS by the next stage of this map
						items.nthChildIndex = Number(extractedChildIndex);
						console.log(`nthChildIndex: ${ items.nthChildIndex }`);
	
						//* Extract the actual css shorcode i.e. h_full
						//* Continue on in the map, using the shortcode with the extracted code
						const actualCSSShortcode = currentKey.split(`child${ extractedChildIndex }_`).pop();
						if (actualCSSShortcode) {
							currentKey = actualCSSShortcode;
						}
					}
				}
			}
	
			//*____________________ REGULAR (intellisense) ____________________
			if (Object.keys(staticStyles).includes(currentKey)) {
				items.AddCSSStyle(staticStyles[currentKey as keyof typeof staticStyles]);
				return;
			}
	
			//*____________________ DYNAMIC TYPES (non intellisense) ____________________
			//* Grab the shortcodes prefix e.g. 'gtc' or 'gtr' (**no underscore**)
			//* to gauge which dynamic entry to get function of
			const dynamicPrefix = currentKey.split("_").shift() as keyof typeof dynamicStyles;
	
			if (dynamicPrefix) {
				if (Object.keys(dynamicStyles).includes(dynamicPrefix)) {
					const style = dynamicStyles[dynamicPrefix](currentKey);
					items.AddCSSStyle(style);
					return;
				}
			}
	
			//*____________________ CSS TRANSFORMS (non intellisense) ____________________
			// TODO these aren't currently in intellisense at all
			if (currentKey.toLowerCase().startsWith("rotatex_")) {
				const values = currentKey.split("_").pop();
				items.AddTransform([ `rotateX(${ values });` ]);
			} else if (currentKey.toLowerCase().startsWith("rotatey_")) {
				const values = currentKey.split("_").pop();
				items.AddTransform([ `rotateY(${ values });` ]);
			}
	
			//*____________________ FONTS (non intellisense) ____________________
			if (currentKey.toLowerCase().startsWith("font_")) {
				//* Remove font_ prefix
				const prefixRemoved = currentKey.split("font_").pop()!!;
				console.log(prefixRemoved);
				
				const fontWeight = prefixRemoved.split("_").pop()!!; // as TFontNames // TODO needed for TS?
				console.log(fontWeight);
	
				const fontName = prefixRemoved.split(`_${ fontWeight }`).shift()!!;
				console.log(fontName);
	
				const originalFontName = GetOriginalFontName(fontName);
				console.log("originalFontName", originalFontName);
				googleFontsURLRef.current.push(`${ originalFontName }:wght@${ fontWeight }`); // eg Roboto:wght@100;300  although multiple inline weights aren't currently allowed
				items.AddCSSStyle([ `font-family: ${ originalFontName }`, `font-weight: ${ fontWeight }` ]);
			}
		});

		if (googleFontsURLRef.current.length > 0) {
			const fontsURL =
				"https://fonts.googleapis.com/css2?family=" +
				googleFontsURLRef.current.map(n => n.replace(/ /g, "+")).join("&family=") +
				"&display=swap";
				
			InjectStylesheetToHead(fontsURL);
		}

		setStylesArray(items.Organise());
		console.log("stylesArray:");
		console.log(stylesArray);
		console.timeEnd("HOC performance");
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log("styled array again");
	}, [ stylesArray ]);

	return(
		<>
			{ /* { googleFontsURLRef.current.length > 0 && (
				TODO possible to speed up font load with this?
				<head>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
					/>
					<link
						href={
							fontsURL
						}
						rel="stylesheet"
					/>
				</head>
			) } */ }
		
			<StyledComponent
				arr={ [ ...stylesArray ] }
				as={ elementType }
				//data-testid="hoc-component"
				{ ...props }>

				{ children }
			</StyledComponent>
		</>
	);
};

interface IButton extends TStyleEntries, React.HTMLProps<HTMLButtonElement> {}
interface IDiv extends TStyleEntries, React.ComponentPropsWithoutRef<"div"> {}
interface IH1 extends TStyleEntries, React.ComponentPropsWithoutRef<"h1"> {}
interface IH2 extends TStyleEntries, React.ComponentPropsWithoutRef<"h2"> {}
interface IP extends TStyleEntries, React.HTMLProps<HTMLParagraphElement> {}
interface ISection extends TStyleEntries, React.HTMLProps<"section"> {}
interface ISpan extends TStyleEntries, React.HTMLProps<HTMLSpanElement> {}

export const Button = ({ ...props }: IButton) => <HOC
	elementType="button"
	{ ...props }
/>;
export const Div = ({ ...props }: IDiv) => <HOC
	elementType="div"
	{ ...props }
/>;
export const H1 = ({ ...props }: IH1) => <HOC
	elementType="h1"
	{ ...props }
/>;
export const H2 = ({ ...props }: IH2) => <HOC
	elementType="h2"
	{ ...props }
/>;
export const P = ({ ...props }: IP) => <HOC
	elementType="p"
	{ ...props }
/>;
export const Section = ({ ...props }: ISection) => <HOC
	elementType="section"
	{ ...props }
/>;
export const Span = ({ ...props }: ISpan) => <HOC
	elementType="span"
	{ ...props }
/>;

// interface I_A extends TStyleBooleanEntries, React.HTMLProps<HTMLAnchorElement> {}
// interface I_Area extends TStyleBooleanEntries, React.HTMLProps<HTMLAreaElement> {}
// interface I_Base extends TStyleBooleanEntries, React.HTMLProps<HTMLBaseElement> {}
// interface I_Body extends TStyleBooleanEntries, React.HTMLProps<HTMLBodyElement> {}
// interface I_Canvas extends TStyleBooleanEntries, React.HTMLProps<HTMLCanvasElement> {}
// interface I_Data extends TStyleBooleanEntries, React.HTMLProps<HTMLDataElement> {}
// interface I_Details extends TStyleBooleanEntries, React.HTMLProps<HTMLDetailsElement> {}
// interface I_Dialog extends TStyleBooleanEntries, React.HTMLProps<HTMLDialogElement> {}
// interface I_Embed extends TStyleBooleanEntries, React.HTMLProps<HTMLEmbedElement> {}
// interface I_Figure extends TStyleBooleanEntries, React.ComponentPropsWithoutRef<"figure"> {}
// interface I_Footer extends TStyleBooleanEntries, React.ComponentPropsWithoutRef<"footer"> {}
// interface I_Form extends TStyleBooleanEntries, React.HTMLProps<HTMLFormElement> {}
// interface I_Head extends TStyleBooleanEntries, React.HTMLProps<HTMLHeadElement> {}
// interface I_Header extends TStyleBooleanEntries, React.ComponentPropsWithoutRef<"header"> {}
// interface I_Html extends TStyleBooleanEntries, React.HTMLProps<HTMLHtmlElement> {}
// interface I_Img extends TStyleBooleanEntries, React.HTMLProps<HTMLImageElement> {}
// interface I_Input extends TStyleBooleanEntries, React.HTMLProps<HTMLInputElement> {}
// interface I_Label extends TStyleBooleanEntries, React.HTMLProps<HTMLLabelElement> {}
// interface I_Legend extends TStyleBooleanEntries, React.HTMLProps<HTMLLegendElement> {}
// interface I_Link extends TStyleBooleanEntries, React.HTMLProps<HTMLLinkElement> {}
// interface I_Main extends TStyleBooleanEntries, React.ComponentPropsWithoutRef<"main"> {}
// interface I_Map extends TStyleBooleanEntries, React.HTMLProps<HTMLMapElement> {}
// interface I_Meta extends TStyleBooleanEntries, React.HTMLProps<HTMLMetaElement> {}
// interface I_Meter extends TStyleBooleanEntries, React.HTMLProps<HTMLMeterElement> {}
// interface I_Nav extends TStyleBooleanEntries, React.ComponentPropsWithoutRef<"nav"> {}
// interface I_Object extends TStyleBooleanEntries, React.HTMLProps<HTMLObjectElement> {}
// interface I_Ol extends TStyleBooleanEntries, React.ComponentPropsWithoutRef<"ol"> {}
// interface I_Option extends TStyleBooleanEntries, React.HTMLProps<HTMLOptionElement> {}
// interface I_Output extends TStyleBooleanEntries, React.HTMLProps<HTMLOutputElement> {}
// interface I_Pre extends TStyleBooleanEntries, React.HTMLProps<HTMLPreElement> {}
// interface I_Progress extends TStyleBooleanEntries, React.HTMLProps<HTMLProgressElement> {}
// interface I_Script extends TStyleBooleanEntries, React.HTMLProps<HTMLScriptElement> {}
// interface I_Select extends TStyleBooleanEntries, React.HTMLProps<HTMLSelectElement> {}
// interface I_Source extends TStyleBooleanEntries, React.HTMLProps<HTMLSourceElement> {}
// interface I_Time extends TStyleBooleanEntries, React.HTMLProps<HTMLTimeElement> {}
// interface I_Title extends TStyleBooleanEntries, React.HTMLProps<HTMLTitleElement> {}
// interface I_Ul extends TStyleBooleanEntries, React.ComponentPropsWithoutRef<"ul"> {}
// interface I_Video extends TStyleBooleanEntries, React.ComponentPropsWithoutRef<"video"> {}

// export const A = ({ ...props }: I_A) => <HOC elementType="A" { ...props } />;
// export const Area = ({ ...props }: I_Area) => <HOC elementType="Area" { ...props } />;
// export const Base = ({ ...props }: I_Base) => <HOC elementType="Base" { ...props } />;
// export const Body = ({ ...props }: I_Body) => <HOC elementType="Body" { ...props } />;
// export const Canvas = ({ ...props }: I_Canvas) => <HOC elementType="Canvas" { ...props } />;
// export const Data = ({ ...props }: I_Data) => <HOC elementType="Data" { ...props } />;
// export const Details = ({ ...props }: I_Details) => <HOC elementType="Details" { ...props } />;
// export const Dialog = ({ ...props }: I_Dialog) => <HOC elementType="Dialog" { ...props } />;
// export const Embed = ({ ...props }: I_Embed) => <HOC elementType="Embed" { ...props } />;
// export const Figure = ({ ...props }: I_Figure) => <HOC elementType="Figure" { ...props } />;
// export const Footer = ({ ...props }: I_Footer) => <HOC elementType="Footer" { ...props } />;
// export const Form = ({ ...props }: I_Form) => <HOC elementType="Form" { ...props } />;
// export const Head = ({ ...props }: I_Head) => <HOC elementType="Head" { ...props } />;
// export const Header = ({ ...props }: I_Header) => <HOC elementType="Header" { ...props } />;
// export const Html = ({ ...props }: I_Html) => <HOC elementType="Html" { ...props } />;
// export const Img = ({ ...props }: I_Img) => <HOC elementType="Img" { ...props } />;
// export const Input = ({ ...props }: I_Input) => <HOC elementType="Input" { ...props } />;
// export const Label = ({ ...props }: I_Label) => <HOC elementType="Label" { ...props } />;
// export const Legend = ({ ...props }: I_Legend) => <HOC elementType="Legend" { ...props } />;
// export const Link = ({ ...props }: I_Link) => <HOC elementType="Link" { ...props } />;
// export const Main = ({ ...props }: I_Main) => <HOC elementType="Main" { ...props } />;
// export const Map = ({ ...props }: I_Map) => <HOC elementType="Map" { ...props } />;
// export const Meta = ({ ...props }: I_Meta) => <HOC elementType="Meta" { ...props } />;
// export const Meter = ({ ...props }: I_Meter) => <HOC elementType="Meter" { ...props } />;
// export const Nav = ({ ...props }: I_Nav) => <HOC elementType="Nav" { ...props } />;
// export const Object = ({ ...props }: I_Object) => <HOC elementType="Object" { ...props } />;
// export const Ol = ({ ...props }: I_Ol) => <HOC elementType="Ol" { ...props } />;
// export const Option = ({ ...props }: I_Option) => <HOC elementType="Option" { ...props } />;
// export const Output = ({ ...props }: I_Output) => <HOC elementType="Output" { ...props } />;
// export const Pre = ({ ...props }: I_Pre) => <HOC elementType="Pre" { ...props } />;
// export const Progress = ({ ...props }: I_Progress) => <HOC elementType="Progress" { ...props } />;
// export const Script = ({ ...props }: I_Script) => <HOC elementType="Script" { ...props } />;
// export const Select = ({ ...props }: I_Select) => <HOC elementType="Select" { ...props } />;
// export const Source = ({ ...props }: I_Source) => <HOC elementType="Source" { ...props } />;
// export const Time = ({ ...props }: I_Time) => <HOC elementType="Time" { ...props } />;
// export const Title = ({ ...props }: I_Title) => <HOC elementType="Title" { ...props } />;
// export const Ul = ({ ...props }: I_Ul) => <HOC elementType="Ul" { ...props } />;
// export const Video = ({ ...props }: I_Video) => <HOC elementType="Video" { ...props } />;
