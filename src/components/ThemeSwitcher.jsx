import { useState } from 'react';
import Icon from '../images/color.svg';
const themes = [
	{
		name: 'theme-first',
		colors: [
			'#151614',
			'#F7F7F7',
			'#EFEFEF',
			'#646E78',
			'#685F74',
			'#3C383E',
			'#AEB3B8',
			'#685F74',
		],
	},
	{
		name: 'theme-second',
		colors: [
			'#7d8ab6',
			'#5792c9ec',
			'#d6d196',
			'#7d8ab6',
			'#aab8b9',
			'#c6dbe4',
			'#9b5427',
			'#facd00',
		],
	},
	{
		name: 'theme-third',
		colors: [
			'#ee96af',
			'#fa6194',
			'#dba9df',
			'#B5A886',
			'#F44174',
			'#ee96af',
			'#FEE1C7',
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
			{theme.colors.map((color, i) => (
				<span
					style={{ backgroundColor: color }}
					key={i}
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
				<div className=" bg-white rounded-md z-50 p-2 absolute top-8 right-0">
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
