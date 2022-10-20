/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
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
