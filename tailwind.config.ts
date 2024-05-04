import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				"14": "14px",
			},
			width: {
				"780": "780px",
			},
			height: {
				"172": "172px",
			},
		},
	},
	plugins: [],
};
export default config;
