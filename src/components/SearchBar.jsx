import '../styles/searchBar.css';

import React from 'react';
function SearchBar() {
	return (
		<div className="overflow-hidden  z-0 rounded-full relative p-3 flex-1 max-w-prose mx-auto">
			<div className="relative flex z-50 overflow-hidden bg-white rounded-full">
				<select
					className="bg-transparent rounded-full z-1 transform ease-linear duration-200 h-full hover:bg-slate-500/30 hover:shadow-md outline-none absolute text-slate-700  font-semibold -left-28 hover:left-0 mr-1 pr-1"
					onChange={(evt) => this.setState({ searchBy: evt.target.value })}
				>
					<option value="s">By Cocktail Name</option>

					<option value="f">First Letter</option>
					<option value="i">Ingredient</option>
				</select>
				<input
					type="text"
					placeholder="enter your search "
					className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none text-center"
				/>
				<button className="bg-blue-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
					Search
				</button>
			</div>

			<div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
			<div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
			<div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
			<div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
		</div>
	);
}

export default SearchBar;
