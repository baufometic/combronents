# Combronents
_Rapidly_ style components with full intellisense and type support.<br/>

- Forget memorising long lists of CSS shortcodes
- Remix new styles just by typing them
- Add Google fonts to a component using only the font name
- SSR capable with frameworks like Next
<br /><br />

## Preview
![App Screenshot](https://user-images.githubusercontent.com/48098170/166976829-cf86cb05-e2c3-455b-b76f-4e7429a24180.png)

## *Coming shortly*:
- Describe your style in a sentence, and it'll turn it into CSS
- Remix Run template

<br/>

## Installation
```bash
  npm i @techandtribal/combronents
```

## Usage
1. Import the Div, H1 etc. components
2. Pass in your desired styles, use intellisense for suggestions

```typescript
import { Div, H1, Section } from "combronents";

const GridWithTitle = () => (
	<Div
		gap_2 gridfixed_2x4
		h_full w_90pc>

		<H1
			font_orbitron fontsize_2
			mt_3 p_2 bg_grey>

			Web 3 is For Our Kids
		</H1>
	</Div>
)

// This feature is experimental and being tested
const WithGoogleFonts = () => (
	<Div font_orbitron>
		Thats it. Simple.
	</Div>
)

const StyledChildren = () => (
	<Div children_center>
		<Section border_blue color_fuchsia>
			{ "I'm a centered child" }
		</Section>
	</Div>
)
```
___

<br />

# Static vs Dynamic Key Codes
Static key codes generate fixed styles. For example:
```javascript
<Div
	h_full
	border_solid
/>
```

Dynamic key codes on the other hand, allow you to customise certain key codes. For example:

```javascript
<Div
	gridfixed_2x4
	child_3_bring_to_top
/>
```
<br/>

## List of Static Key Codes
<br/>

### Sizing
| Key | Means |
--- | ---|
| h_full			|	`height: 100%;`
| h_half			|	`height: 50%;`
| w_full			|	`width: 100%;`
| w_half			|	`width: 50%;`
| overflow_hidden	|	`overflow: hidden;`
<br/>

### Border
| Key | Means |
--- | ---|
| border		|	`border-style: solid; border-width: 1px;`
| border_dashed	|	`border-style: dashed;`
| border_dotted	|	`border-style: dotted;`
| border_solid	|	`border-style: solid;`
<br/>

### Alignment
| Key | Means |
--- | ---|
| ac_center		|	`align-content: center;`
| ac_start		|	`align-content: flex-start;`
| ac_end		|	`align-content: flex-end;`
| ac_between	|	`align-content: space-between;`
| ac_around		|	`align-content: space-around;`
| ac_evenly		|	`align-content: space-evenly;`
| ai_start		|	`align-items: flex-start;`
| ai_end		|	`align-items: flex-end;`
| ai_center		|	`align-items: center;`
| ai_baseline	|	`align-items: baseline;`
| ai_stretch	|	`align-items: stretch;`
| jc_start		|	`justify-content: flex-start;`
| jc_end		|	`justify-content: flex-end;`
| jc_center		|	`justify-content: center;`
| jc_between	|	`justify-content: space-between;`
| jc_around		|	`justify-content: space-around;`
| jc_evenly		|	`justify-content: space-evenly;`
| ji_start		|	`justify-items: start;`
| ji_end		|	`justify-items: end;`
| ji_center		|	`justify-items: center;`
| ji_stretch	|	`justify-items: stretch;`
<br/>

### Display
| Key | Means |
--- | ---|
| display_block | `display: block;`
<br/>

### Positioning
| Key | Means |
--- | ---|
| bring_to_top	|	`z-index: 99999999;`
| pos_absolute	|	`position: absolute;`
| pos_relative	|	`position: relative;`
| top_left		| 	`position: absolute; left: 0; top: 0;`
| top_center	| 	`position: absolute; left: 50%; top: 0; transform: translateX(-50%);`
| top_right		| 	`position: absolute; right: 0; top: 0;`
| middle_right	| 	`position: absolute; right: 0; top: 50%; transform: translateY(-50%);`
| bottom_right	| 	`position: absolute; bottom: 0; right: 0;`
| bottom_center	| 	`position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);`
| bottom_left	| 	`position: absolute; bottom: 0; left: 0;`
| middle_left	| 	`position: absolute; left: 0; top: 50%; transform: translateY(-50%);`
<br/>

### Flex
| Key | Means |
--- | ---|
| flex        | `display: flex;`
| flex_center | `align-items: center; display: flex; justify-content: center;`
| flex_column | `display: flex; flex-direction: column;`
| flex_row    | `display: flex; flex-direction: row;`
<br/>

### Grid
| Key | Means |
--- | ---|
| grid             | `display: grid;`
| grid_auto_column | `display: grid; grid-auto-flow: column; grid-auto-columns: 1fr;`
| grid_auto_row    | `display: grid; grid-auto-flow: row; grid-auto-rows: 1fr;`
<br/>

### Fonts and Text
| Key | Means |
--- | ---|
| font_weight_medium	|	`font-weight: 500;`
| font_weight_bold		|	`font-weight: 700;`
| text_sm				|	`font-size: 0.875rem;", "line-height: 1.25rem;`
| text_md				|	`font-size: 1rem;", "line-height: 2rem;`
| text_lg				|	`font-size: 1.5rem;", "line-height: 3rem;`
| text_center			|	`text-align: center;`
| truncate				|	`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`
<br/>

### Animation
| Key | Means |
--- | ---|
| preserve_3d	| `transform-style: preserve-3d;`
| duration_150 	| `transition-duration: 150ms;`
| ease_in_out  	| `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`
| transition   	| `transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;`
<br/>

### Cursor (_more to come_)
| Key | Means |
--- | ---|
| cursor_pointer | `cursor: pointer;`
<br/>

### Focus
| Key | Means |
--- | ---|
| focus_outline_none | `&:focus { outline: none; }`
| focus_bg_gray_200  | `&:focus { background-color: #E5E7EB; }`

### Useful Tools
| Key | Means |
--- | ---|
| hidescrollbars | `scrollbar-width: none; // Firefox`<br/>  `&::-webkit-scrollbar { display: none; } // Chrome, Safari & Opera`<br/>  `-ms-overflow-style: none; // IE and Edge`<br/>

### Custom Effects
| Key | Means |
--- | ---|
| shadow			| `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);`
| flux				| `color: #426DFB; font-family: 'Orbitron', sans-serif; text-shadow: 0 0 5vw rgb(77, 77, 78);`
| reflection_left	| `-webkit-box-reflect: left 1px linear-gradient(transparent, #0005);`
| reflection_right	| `-webkit-box-reflect: right 1px linear-gradient(transparent, #0005);`
<br/>

## 🚀 About Me
I'm Pete Savva, a day trader and developer at [Tech & Tribal](https://techandtribal.com), and father to my newborn son Maximus.

<br/>
[GitHub](https://www.github.com/baufometic)<br/>
![GitHub followers](https://img.shields.io/github/followers/baufometic?style=social)

[Twitter](https://twitter.com/techandtribal)<br/>
![Twitter Follow](https://img.shields.io/twitter/follow/techandtribal?style=social)

<br/>

## Support
If you have any questions or feedback, please feel free to post on the [GitHub Repo](https://www.github.com/baufometic/combronents)<br/>
_Your feedback is greatly appreciated._