/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				primary: 'var(--bg-primary)',
				secondary: 'var(--bg-secondary)',
				'bright-1': 'var(--bg-bright-1)',
				'bright-2': 'var(--bg-bright-2)',
				'bright-3': 'var(--bg-bright-3)',
				'bright-4': 'var(--bg-bright-4)',

				...colors,
			},
			textColor: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				...colors,
			},
			backgroundColor: {
				primary: 'var(--bg-primary)',
				secondary: 'var(--bg-secondary)',
				'bright-1': 'var(--bg-bright-1)',
				'bright-2': 'var(--bg-bright-2)',
				'bright-3': 'var(--bg-bright-3)',
				'bright-4': 'var(--bg-bright-4)',
				...colors,
			},
			borderColor: {
				'bright-1': 'var(--border-bright-1)',
				...colors,
			},
		},
	},
	plugins: [],
};
