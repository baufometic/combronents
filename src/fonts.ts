/* eslint-disable no-console */
import { FONT_DATA_RAW, FONT_STRINGS_ARRAY } from "./fontData";

export type Replace<T extends string, S extends string, D extends string,
	A extends string = ""> = T extends `${ infer L }${ S }${ infer R }` ?
		Replace<R, S, D, `${ A }${ L }${ D }`> : `${ A }${ T }`;

//export type TFontNames = Lowercase<Replace<fontNameKeys, " ", "_">>;

export const FONTS = (Object.keys(FONT_DATA_RAW) as (keyof typeof FONT_DATA_RAW)[]).map(fontName => ({
	originalName  : fontName,
	formattedName : fontName.replaceAll(" ", "_").toLowerCase(),
	styles        : FONT_DATA_RAW[fontName].styles,
	weights       : FONT_DATA_RAW[fontName].weights
}));

export const GetOriginalFontName = (formattedName: string) => {
	const match = FONTS.find(obj => formattedName === obj.formattedName);
	if (!match) {
		throw new Error(`Unable to match font [combronents/fonts.ts] ${ formattedName }`);
	}
	return match?.originalName;
};

//* USED TO GENERATE STRINGS FROM Font Data file
// const JoinFontsAndPrint = () => {
// 	const arr = [] as string[];
// 	let key: keyof typeof FONT_DATA;
// 	for (key in FONT_DATA) {
// 		FONT_DATA[key].weights.map(weight => {
// 			const str = `${ key }_${ weight }`.replaceAll(" ", "_").toLowerCase();
// 			arr.push(str);
// 		});
// 	}
// 	console.log(arr);
// };

export type FONT_STRINGS = typeof FONT_STRINGS_ARRAY[number];
