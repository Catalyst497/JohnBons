/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			nunito: 'Nunito Sans, sans-serif',
			lobster: 'Lobster Two, cursive',
			'open-sans': 'Open Sans, sans-serif',
			'DM-serif': 'DM Serif Display, serif',
		},
		extend: {
			colors: {
				'text-gray': '#636769',
				'primary-color': '#ff6584',
				'primary-green': '#167f74',
				'primary-brown': '#7f1620',
			},
		},
	},
	plugins: [],
};
