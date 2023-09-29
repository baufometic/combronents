
export type Replace<T extends string, S extends string, D extends string,
	A extends string = ""> = T extends `${ infer L }${ S }${ infer R }` ?
		Replace<R, S, D, `${ A }${ L }${ D }`> : `${ A }${ T }`;

//export type TFontNames = Lowercase<Replace<fontNameKeys, " ", "_">>;

//! KEEP
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
