/* eslint-disable no-console */
import shebang from "rollup-plugin-preserve-shebang";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve, } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json",);
const NODE_ENV = process.env.NODE_ENV || "development";
console.log(`ENV: ${ NODE_ENV }`,);

const plugins = [
	shebang(),
	replace({
		exclude                : "node_modules/**",
		preventAssignment      : true,
		"process.env.NODE_ENV" : JSON.stringify(NODE_ENV,),
	},),
	json(),
	peerDepsExternal(),
	nodeResolve(),
	commonjs(),
	typescript({
		useTsconfigDeclarationDir: true,
	},),
];

export default [
	{
		input  : "src/index.ts",
		output : [
			{
				file      : packageJson.main,
				format    : "cjs",
				sourcemap : false,
			},
			{
				file      : packageJson.module,
				format    : "esm",
				sourcemap : false,
			},
		],
		plugins: [ ...plugins, ],
	},
];
