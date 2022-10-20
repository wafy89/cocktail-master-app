import '../styles/searchBar.css';
import { useState } from 'react';
//import { fetchData } from '../utils/api';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
	let navigate = useNavigate();

	const [searchBy, setSearchBy] = useState('s');
	const [searchText, setSearchText] = useState('');
	const handelSearch = async () => {
		if (!searchText) return;
		navigate({
			pathname: '/result',
			search: `?searchBy=${searchBy}&searchText=${searchText}`,
		});
		setSearchText('');
	};
	return (
		<div
			onKeyUp={(e) => {
				if (e.keyCode === 13) {
					handelSearch();
				}
			}}
			className="overflow-hidden  z-0 rounded-full w-full relative p-2 flex-grow-1 max-w-xl mx-auto"
		>
			<div className="relative flex z-40 overflow-hidden bg-primary rounded-full">
				<select
					className="bg-transparent rounded-full z-1 transform ease-linear duration-200 h-full hover:bg-slate-500/30 hover:shadow-md outline-none  text-slate-700  font-semibold absolute -left-28 hover:left-0 lg:left-0 xl:left-0 mr-1 pr-1"
					onChange={(evt) => setSearchBy(evt.target.value)}
					value={searchBy}
				>
					<option value="s">By Cocktail Name</option>
					<option value="i">By Ingredient</option>
				</select>
				<input
					onChange={(evt) => setSearchText(evt.target.value)}
					value={searchText}
					required
					type="text"
					placeholder="enter your search "
					className="rounded-full flex-1 px-6  bg-primary py-4 text-gray-700 focus:outline-none text-center"
				/>
				<button
					onClick={handelSearch}
					className="bg-bright-1 text-white z-50 transform ease-linear duration-200 rounded-full font-semibold px-8 py-4  absolute -right-10 hover:right-0 lg:right-0 xl:right-0"
				>
					<span></span>
					Search
				</button>
			</div>

			<div className="glow glow-1 z-1 bg-bright-1 absolute"></div>
			<div className="glow glow-2 z-2 bg-bright-2 absolute"></div>
			<div className="glow glow-3 z-3 bg-bright-3 absolute"></div>
			<div className="glow glow-4 z-4 bg-bright-4 absolute"></div>
		</div>
	);
}

export default SearchBar;
