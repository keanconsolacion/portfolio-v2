/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'mono': ['"Space Mono"', 'monospace'] // Ensure fonts with spaces have " " surrounding it.
    },
		extend: {
			colors: {
				primary: "#6EFF6B",
				accent: "#D9D9D9",
				secondary: "#EEEEEE",
				secondary2: "#ACACAC",
				bgColor: "#00151C",
				links: "#25298C",
				udemy: "#FF7A7A",
			},
			dropShadow:{
				'image': '12px 12px 0px rgba(0, 0, 0, 0.25)'
			}
		},
	},
	plugins: [],
};
