import { useState } from 'react';
import Icon from '../images/color.svg';
const themes = [
	{
		name: 'theme-first',
		colors: [
			'#1e293b',
			'#e2e8f0',
			'#C5CEAE',
			'#F4EBC3',
			'#99173C',
			'#F0E2A4',
			'#AB526B',
			'#80BCA3',
		],
	},
	{
		name: 'theme-second',
		colors: [
			'#667f64',
			'#929538',
			'#e2da94',
			'#e1d0a1',
			'#ffae92',
			'#fd962d',
			'#edb7b6',
			'#facd00',
		],
	},
	{
		name: 'theme-third',
		colors: [
			'#166534',
			'#bbf7d0',
			'#FEE1C7',
			'#B5A886',
			'#F44174',
			'#FA7E61',
			'#4C1E4F',
			'#044a5c',
		],
	},
];

function Theme({ theme, changeTheme }) {
	return (
		<div
			className=" py-1 w-32 px-3 rounded-md hover:bg-slate-200"
			onClick={() => changeTheme(theme.name)}
		>
			{theme.colors.map((color) => (
				<span
					style={{ backgroundColor: color }}
					key={color}
					className="inline-block items-center mt-1 -ml-1 w-4 h-4 rounded-full "
				></span>
			))}
		</div>
	);
}
export default function ThemeSwitcher({ setTheme }) {
	const [expand, setExpand] = useState(false);
	const changeTheme = (themeName) => {
		setExpand(false);
		setTheme(themeName);
		console.log(themeName);
	};
	return (
		<div className="w-full relative">
			<div className="w-full">
				<img
					onClick={() => setExpand(!expand)}
					className=" block"
					src={Icon}
					alt=""
				/>
			</div>
			{expand && (
				<div className=" bg-white rounded-md  p-2 absolute top-8 right-0">
					{themes.map((theme) => (
						<Theme
							key={theme.name}
							theme={theme}
							changeTheme={changeTheme}
						/>
					))}
				</div>
			)}
		</div>
	);
}
