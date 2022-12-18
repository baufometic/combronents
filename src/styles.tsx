/* eslint-disable no-console */

import { FONT_STRINGS } from "./fonts";

//*____________________ PLAIN STYLES ____________________
const plainStyles = {
	//*_______________ SIZE (BASIC) ____________________
	/**
	 * Gives the element 100% of its parents height
	 * - css:  `height: 100%;`
	*/
	h_full: [ "height: 100%" ],
	
	/**
	 * Gives the element 50% of its parents height
	 * - css:  `height: 50%;`
	*/
	h_half: [ "height: 50%" ],

	/**
	 * Gives the element 100% of its parents width
	 * - css:  `width: 100%;`
	*/
	w_full: [ "width: 100%" ],

	/**
	 * Gives the element 50% of its parents width
	 * - css:  `width: 50%;`
	*/
	w_half: [ "width: 50%" ],

	/**
	 * Sets the element height to 100vh
	 * - css:  `min-height: 100vh;`
	*/
	minheight_100vh: [ "min-height: 100vh" ],

	//*____________________ BORDER (BASIC) _______________
	/**
	 * css:  `border-style: solid; border-width: 1px;`
	*/
	border: [ "border-style: solid", "border-width: 1px" ],

	/**
	 * css:  `border-style: dashed;`
	*/
	border_dashed: [ "border-style: dashed" ],

	/**
	 * css:  `border-style: dotted;`
	*/
	border_dotted: [ "border-style: dotted" ],

	/**
	 * css:  `border-style: solid;`
	*/
	border_solid: [ "border-style: solid" ],

	//* ____________________ ALIGNMENT ____________________
	// * ALIGN CONTENT
	/**
	* css:  `align-content: center;`
	*/
	ac_center: [ "align-content: center" ],

	/**
	* css:  `align-content: flex-start;`
	*/
	ac_start: [ "align-content: flex-start" ],

	/**
	* css:  `align-content: flex-end;`
	*/
	ac_end: [ "align-content: flex-end" ],

	/**
	* css:  `align-content: space-between;`
	*/
	ac_between: [ "align-content: space-between" ],
	
	/**
	* css:  `align-content: space-around;`
	*/
	ac_around: [ "align-content: space-around" ],
	
	/**
	* css:  `align-content: space-evenly;`
	*/
	ac_evenly: [ "align-content: space-evenly" ],
	
	// * ALIGN ITEMS
	/**
	* css:  `align-items: flex-start;`
	*/
	ai_start: [ "align-items: flex-start" ],
	
	/**
	* css:  `align-items: flex-end;`
	*/
	ai_end: [ "align-items: flex-end" ],
	
	/**
	* css:  `align-items: center;`
	*/
	ai_center: [ "align-items: center" ],
	
	/**
	* css:  `align-items: baseline;`
	*/
	ai_baseline: [ "align-items: baseline" ],
	
	/**
	* css:  `align-items: stretch;`
	*/
	ai_stretch: [ "align-items: stretch" ],
	
	/**
	* css:  `align-self: start;`
	*/
	as_start: [ "align-self: start" ],

	//*____________________ JUSTIFY CONTENT ____________________
	/**
	* css:  `justify-content: flex-start;`
	*/
	jc_start: [ "justify-content: flex-start" ],

	/**
	* css:  `justify-content: flex-end;`
	*/
	jc_end: [ "justify-content: flex-end" ],

	/**
	* css:  `justify-content: center;`
	*/
	jc_center: [ "justify-content: center" ],

	/**
	* css:  `justify-content: space-between;`
	*/
	jc_between: [ "justify-content: space-between" ],

	/**
	* css:  `justify-content: space-around;`
	*/
	jc_around: [ "justify-content: space-around" ],

	/**
	* css:  `justify-content: space-evenly;`
	*/
	jc_evenly: [ "justify-content: space-evenly" ],

	// * JUSTIFY ITEMS
	/**
	* css:  `justify-items: start;`
	*/
	ji_start: [ "justify-items: start" ],
	
	/**
	* css:  `justify-items: end;`
	*/
	ji_end: [ "justify-items: end" ],
	
	/**
	* css:  `justify-items: center;`
	*/
	ji_center: [ "justify-items: center" ],
	
	/**
	* css:  `justify-items: stretch;`
	*/
	ji_stretch: [ "justify-items: stretch" ],

	/**
	 * For grid elements
	 * css:  `justify-self: start;`
	*/
	js_start: [ "justify-self: start" ],
	
	//*____________________ SCROLL SNAPPING ____________________
	/**
	* css:  `scroll-snap-align: start;`
	*/
	scrollSnapAlignStart: [ "scroll-snap-align: start" ],

	//*____________________ DISPLAY ____________________
	// TODO add all of the display: variations
	/**
	* css:  `display: block;`
	*/
	display_block: [ "display: block" ],

	/**
	* css:  `display: grid;`
	*/
	display_grid: [ "display: grid" ],

	/**
	* css:  `display: flex;`
	*/
	display_flex: [ "display: flex" ],

	//*____________________ POSITIONING ____________________
	
	
	/**
	 * css:  `z-index: 99999999;`
	*/
	bring_to_top: [ "z-index: 99999999" ],
	
	/**
	 * css:  `position: absolute;`
	*/
	absolute: [ "position: absolute" ],
	
	/**
	 * css:  `position: absolute;`
	*/
	pos_absolute: [ "position: absolute" ],
	
	/**
	 * css:  `position: relative;`
	*/
	relative: [ "position: relative" ],
	
	/**
	 * css:  `position: relative;`
	*/
	pos_relative: [ "position: relative" ],
	
	//*__________ !! __________
	top: [
		"position: absolute",
		"top: 0"
	],
	bottom: [
		"position: absolute",
		"bottom: 0"
	],
	left: [
		"position: absolute",
		"left: 0"	
	],
	right: [
		"position: absolute",
		"right: 0"
	],

	//*__________ !! __________
	//*  FORMAT: Clockwise from top left... TOP|MIDDLE|BOTTOM  &  LEFT|CENTRE|RIGHT - 8x combinations
	/**
	 * Positions the item
		- `position: absolute;`
		- `left: 0;`
		- `top: 0;`
	 */
	top_left: [
		"position: absolute",
		"left: 0",
		"top: 0"
	],
	
	/**
	 * Positions the item
		- `position: absolute;`
		- `left: 50%;`
		- `top: 0;`
		- `transform: translateX(-50%);`
	 */
	top_center: [
		"position: absolute",
		"left: 50%",
		"top: 0",
		"transform: translateX(-50%)"
	],

	/**
	 * Positions the item
		- `position: absolute`
		- `right: 0;`
		- `top: 0;`
	 */
	top_right: [
		"position: absolute",
		"right: 0",
		"top: 0"
	],

	/**
	 * Positions the item
		- `position: absolute;`
		- `right: 0;`
		- `top: 50%;`
		- `transform: translateY(-50%);`
	 */
	middle_right: [
		"position: absolute",
		"right: 0",
		"top: 50%",
		"transform: translateY(-50%)"
	],

	/**
	 * Positions the item
		- `position: absolute;`
		- `bottom: 0;`
		- `right: 0;`
	 */
	bottom_right: [
		"position: absolute",
		"bottom: 0",
		"right: 0"
	],

	/**
	 * Positions the item
		- `position: absolute;`
		- `bottom: 0;`
		- `left: 50%;`
		- `transform: translateX(-50%);`
	 */
	bottom_center: [
		"position: absolute",
		"bottom: 0",
		"left: 50%",
		"transform: translateX(-50%)"
	],

	/**
	 * Positions the item
		- `position: absolute;`
		- `bottom: 0;`
		- `left: 0;`
	 */
	bottom_left: [
		"position: absolute",
		"bottom: 0",
		"left: 0"
	],

	/**
	 * Positions the item
		- `position: absolute;`
		- `left: 0;`
		- `top: 50%;`
		- `transform: translateY(-50%);`
	 */
	middle_left: [
		"position: absolute",
		"left: 0",
		"top: 50%",
		"transform: translateY(-50%)"
	],

	//*____________________ FLEX ____________________
	/**
	 * Sets the display format of the object to flex
	 * - css:  `display: flex;`
	*/
	flex: [ "display: flex" ],

	/**
	 * Centers element horizontally and vertically using flex
	*	- `align-items: center;`
	*	- `display: flex;`
	*	- `justify-content: center;`
	*/
	flex_center: [
		"align-items: center",
		"display: flex",
		"justify-content: center"
	],

	/** Sets flex to cascade in columns (vertical)
		- `display: flex;`
		- `flex-direction: column;`
	*/
	flex_column: [
		"display: flex",
		"flex-direction: column"
	],

	/** Sets flex to cascade in rows (horizontal)
		- `display: flex;`
		- `flex-direction: row;`
	*/
	flex_row: [
		"display: flex",
		"flex-direction: row"
	],

	//*____________________ GRID ____________________
	/**
	 * Defines a basic CSS3 grid
	 * - `display: grid;`
	*/
	grid: [ "display: grid" ],

	/**
		- `display: grid;`
		- `grid-auto-flow: column;`
		- `grid-auto-columns: 1fr;`
	*/
	grid_auto_column: [
		"display: grid",
		"grid-auto-flow: column",
		"grid-auto-columns: 1fr"
	],

	/**
		- `display: grid;`
		- `grid-auto-flow: row;`
		- `grid-auto-columns: 1fr;`
	*/
	grid_auto_row: [
		"display: grid",
		"grid-auto-flow: row",
		"grid-auto-rows: 1fr"
	],

	//*____________________ FONTS ____________________
	// TODO does this need every fonts thickness downloaded?
	// TODO type annotations for all
	//bold           : [ "font-weight: 700" ], // TODO tend to this - possibly just use font-weight: bold
	font_smoothing: [
		"-webkit-font-smoothing: antialiased",
		"-moz-osx-font-smoothing: grayscale",
		"text-rendering: optimizeLegibility"
	],
	text_sm     : [ "font-size: 0.875rem", "line-height: 1.25rem" ],
	text_md     : [ "font-size: 1rem", "line-height: 2rem" ],
	text_lg     : [ "font-size: 1.5rem", "line-height: 3rem" ],
	text_center : [ "text-align: center" ],
	uppercase   : [ "text-transform: uppercase" ],
	truncate    : [
		"overflow: hidden",
		"text-overflow: ellipsis",
		"white-space: nowrap"
	],

	/**
		- `text-align: center;`
	*/
	text_align_center: [ "text-align: center;" ],
	
	/**
		- `text-align: justify;`
	*/
	text_align_justify: [ "text-align: justify;" ],
	
	/**
		- `text-align: right;`
	*/
	text_align_right: [ "text-align: right;" ],

	//*____________________ TRANSFORMATIONS ____________________
	preserve_3d: [ "transform-style: preserve-3d" ],

	//*____________________ TRANSITIONS ____________________
	duration_150 : [ "transition-duration: 150ms" ],
	ease_in_out  : [ "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)" ],
	transition   : [ "transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform" ],

	// * CURSOR
	cursor_pointer: [ "cursor: pointer" ],

	// * FOCUS
	focus_outline_none : [ "&:focus { outline: none; }" ],
	focus_bg_gray_200  : [ "&:focus { background-color: #E5E7EB; }" ],

	// * OVERFLOW
	overflow_hidden: [ "overflow: hidden" ],

	// * SHADOW
	shadow: [
		`box-shadow:
			0 1px 3px 0 rgba(0, 0, 0, 0.1),
			0 1px 2px 0 rgba(0, 0, 0, 0.06)` ],

	// * SCROLLBARS
	hidescrollbars: [
		"scrollbar-width: none", // firefox
		`&::-webkit-scrollbar {
			display: none;
		}`, // Chrome, Safari and Opera
		"-ms-overflow-style: none" //IE and Edge
	],

	// * CUSTOM EFFECTS
	effect_flux: [
		"color: #426DFB",
		"font-family: 'Orbitron', sans-serif",
		"text-shadow: 0 0 5vw rgb(77, 77, 78)"
	],
	effect_reflection_left  : [ "-webkit-box-reflect: left 1px linear-gradient(transparent, #0005)" ],
	effect_reflection_right : [ "-webkit-box-reflect: right 1px linear-gradient(transparent, #0005)" ],
	
	// TODO needs testing
	effect_glass_active: [
		"background-color: rgba(0, 222, 255, 0.075)",
		"box-shadow: rgba(255, 255, 255, 0.3) 2px 5px 8px",
		"border-color: rgba(255, 255, 255, 0.4) rgba(22, 233, 220, 0.65) rgba(22, 233, 220, 0.65) rgba(255, 255, 255, 0.4)",
		"border-style: solid",
		"border-width: 2px",
		"border-image: none 100% / 1 / 0 stretch",
		"border-radius: 11px"
	],
	effect_glass_inactive: [
		"background-color: rgba(0, 222, 255, 0.075)",
		"box-shadow: rgba(255, 255, 255, 0.3) 2px 5px 8px",
		"border-color: rgba(255, 255, 255, 0.4) rgba(40, 40, 40, 0.35) rgba(40, 40, 40, 0.35) rgba(255, 255, 255, 0.4)",
		"border-style: solid",
		"border-width: 2px",
		"border-image: none 100% / 1 / 0 stretch",
		"border-radius: 11px"
	]
};

//*____________________ DYNAMIC STYLES ____________________
//* these types won't appear in intellisense - too many combinations to flood it with, however...
//* they will flag type errors due to template literal pattern below
export const dynamicStyles = {
	//* css: grid-template-columns
	//* Pass it something like gtc_1fr_1px
	gtc: (str: string): string[] => {
		const values = str.split("_");
		values.shift();
		return [
			"display: grid",
			`grid-template-columns: ${ values.map(s => s).join(" ") }`
		];
	},
	
	//* css: grid-template-rows
	//* Pass it something like gtr_1fr_1px
	gtr: (str: string): string[] => {
		const values = str.split("_");
		values.shift();
		return [
			"display: grid",
			`grid-template-rows: ${ values.map(s => s).join(" ") }`
		];
	}
};

//*____________________ FUNCTIONS ____________________
//* Converts simple number types like h_1 to // 1 = 0.25rem | 4 = 1rem | 8 = 2rem ... etc
const RemStr = (value: number): string => `${ value * 0.25 }rem`;

//*__________ LOOP CREATED TYPES __________
type num0to9 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type num0to10 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type num0to20 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20; 
type num0to100fixed = `0${ num0to9 }${ num0to9 }`|"100";
type num1to9 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
//type num1to10 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type num1to10fixed = `0${ num1to9 }` | "10";

const COLOURS = [ "black", "blue", "green", "grey", "orange", "red", "white" ] as const;

//* THESE TYPES ARE CREATED IN THE LOOPS FURTHER DOWN
type __main__ =
	typeof plainStyles &
	// old version of plainStyles:
	//TPlainStyles &
	//Record<keyof typeof plainStyles, string[]> &

	Record<`${ keyof typeof dynamicStyles }_${ string }`, string[]> &
	
	//* These are inserted properly by loops
	Record<`bg_${ typeof COLOURS[number] }`, string[]> &
	Record<`border_radius_${ num0to10 }`, string[]> &
	Record<`border_width_${ num0to10 }`, string[]> &
	Record<`border_${ num0to10 }`, string[]> &
	Record<`border_${ typeof COLOURS[number] }`, string[]> &
	Record<`p_${ num0to10 }`, string[]> &
	Record<`pt_${ num0to10 }`, string[]> &
	Record<`pb_${ num0to10 }`, string[]> &
	Record<`pl_${ num0to10 }`, string[]> &
	Record<`pr_${ num0to10 }`, string[]> &
	Record<`px_${ num0to10 }`, string[]> &
	Record<`py_${ num0to10 }`, string[]> &
	Record<`m_${ num0to10 }`, string[]> &
	Record<`mt_${ num0to10 }`, string[]> &
	Record<`mb_${ num0to10 }`, string[]> &
	Record<`ml_${ num0to10 }`, string[]> &
	Record<`mr_${ num0to10 }`, string[]> &
	Record<`mx_${ num0to10 }`, string[]> &
	Record<`my_${ num0to10 }`, string[]> &
	Record<`h_${ num0to10 }`, string[]> &
	Record<`w_${ num0to10 }`, string[]> &
	Record<`h_${ num0to100fixed }pc`, string[]> &
	Record<`w_${ num0to100fixed }pc`, string[]> &
	Record<`text_${ typeof COLOURS[number] }`, string[]> &
	Record<`lineheight_${ num0to20 }`, string[]> &
	Record<`fontsize_${ num0to20 }`, string[]> &
	Record<`gap_${ num0to10 }`, string[]> &
	Record<`font_${ FONT_STRINGS }`, string[]>; //* FONT HANDLING - CALLS THE GOOGLE API AND INJECTS TO THE HEAD DYNAMICALLY

//* CHILD TYPES ARE JUST AN MAIN TYPES WITH 'CHILD_' IN FRONT
type __child__ = Record<`child${ num1to10fixed }_${ keyof __main__ }`, string[]>;

//! COMBINATION OF MAIN AND CHILD TYPES
type T_entries = __main__ & __child__;

//*____________________ FUNCTION TYPES ____________________
type T_addStaticStyle = (
	arraySize: number,
	format: "rem" | "px",
	shortCode: string,
	cssOutputs: string[],
	additionalStyles?: string[]
) => T_entries;

//*____________________ ADD STYLES AS A LOOP - i.e. 0 to 10 ____________________ 
const AddStaticStyleInLoop: T_addStaticStyle = (arraySize, format, shortCode, cssOutputs, additionalStyles) => {
	const obj = {} as T_entries;
	
	for (let idx = 0; idx <= arraySize; idx++) {
		const key = `${ shortCode }_${ idx }` as keyof T_entries;
		let s = "";
		if (format === "rem") s = RemStr(idx);
		if (format === "px") s = idx + "px";
		obj[key] = [
			...cssOutputs.map(cssPrefix => `${ cssPrefix }: ${ s }`),
			...additionalStyles? additionalStyles : []
		];
	}
	return obj;
};

//*____________________ ADD STYLES FROM A LIST ____________________
type T_addStylesFromList = (
	shortCode: string,
	cssOutput: string,
	list: readonly string[]
) => T_entries;

const AddStylesFromList: T_addStylesFromList = (shortCode, cssOutput, list) => {
	const obj = {} as T_entries;
	list.map(item => {
		const key = `${ shortCode }_${ item }` as keyof T_entries;
		obj[key] = [
			`${ cssOutput }: ${ item }`
		];
	});
	return obj;
};

//*____________________ ADD STRINGS 000pc to 100pc ____________________
type T_addFixed0to100pc = (
	shortCode: string,
	cssOutput: string
) => T_entries;

const AddFixed0to100pc: T_addFixed0to100pc = (shortCode, cssOutput) => {
	//* '%' is unavailable to use inside attribute in html. i.e height_20% doesn't work, so we use 'pc'
	const obj = {} as T_entries;
	for (let idx = 0; idx <= 100; idx++) {
		const idxToFixedStr = idx < 10 ? "00"+idx : idx < 100 ? "0"+idx : ""+idx;
		const key = `${ shortCode }_${ idxToFixedStr }pc` as keyof T_entries;
		obj[key] = [
			`${ cssOutput }: ${ idx }%`
		];
	}
	return obj;
};

//*__________ LOOP CREATED STYLES (NO USER CUSTOMISATION AT TYPE TYPE) __________
export const staticStyles: T_entries = {
	...plainStyles,
	...dynamicStyles,
	
	...AddStylesFromList("bg", "background-color", COLOURS),

	//* BORDERS
	...AddStaticStyleInLoop(10, "rem", "border_radius", [ "border-radius" ]),
	...AddStaticStyleInLoop(10, "rem", "border_width", [ "border-width" ]),
	...AddStaticStyleInLoop(10, "rem", "border", [ "border-width" ]), //* 2x ways of using it, // TODO might remove one
	...AddStylesFromList("border", "border-color", COLOURS),
    
	//* PADDING
	...AddStaticStyleInLoop(10, "rem", "p", [ "padding" ]),							// ALL SIDES
	...AddStaticStyleInLoop(10, "rem", "pt", [ "padding-top" ]),					// TOP
	...AddStaticStyleInLoop(10, "rem", "pb", [ "padding-bottom" ]),					// BOTTOM
	...AddStaticStyleInLoop(10, "rem", "pl", [ "padding-left" ]),					// LEFT
	...AddStaticStyleInLoop(10, "rem", "pr", [ "padding-right" ]),					// RIGHT
	...AddStaticStyleInLoop(10, "rem", "px", [ "padding-left", "padding-right" ]),	// LEFT x RIGHT
	...AddStaticStyleInLoop(10, "rem", "py", [ "padding-top", "padding-bottom" ]),	// TOP x BOTTOM

	//* MARGIN
	...AddStaticStyleInLoop(10, "rem", "m", [ "margin" ]), // ALL SIDES
	...AddStaticStyleInLoop(10, "rem", "mt", [ "margin-top" ]), // TOP
	...AddStaticStyleInLoop(10, "rem", "mb", [ "margin-bottom" ]), // BOTTOM
	...AddStaticStyleInLoop(10, "rem", "ml", [ "margin-left" ]), // LEFT
	...AddStaticStyleInLoop(10, "rem", "mr", [ "margin-right" ]), // RIGHT
	...AddStaticStyleInLoop(10, "rem", "mx", [ "margin-left", "margin-right" ]), // LEFT x RIGHT
	...AddStaticStyleInLoop(10, "rem", "my", [ "margin-top", "margin-bottom" ]), // TOP x BOTTOM

	//* HEIGHT x WIDTH
	...AddStaticStyleInLoop(10, "rem", "h", [ "height" ]), //* displays as eg. '1.25rem'
	...AddStaticStyleInLoop(10, "rem", "w", [ "width" ]),
	...AddFixed0to100pc("h", "height"),
	...AddFixed0to100pc("w", "width"),

	//* TEXT
	...AddStylesFromList("text", "color", COLOURS),
	...AddStaticStyleInLoop(20, "rem", "fontsize", [ "font-size" ]),
	...AddStaticStyleInLoop(20, "rem", "lineheight", [ "line-height" ]), // TODO issue setting to 0rem?

	//* GRID
	...AddStaticStyleInLoop(10, "rem", "gap", [ "gap" ], [ "display: grid" ]) //* append display: grid to all incase
};

type A = {
	[key in keyof typeof staticStyles]?: boolean;
};

type B = {
	["css"]?: string;
};

export type TStyleEntries = A & B;
