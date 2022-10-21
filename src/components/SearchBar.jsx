import '../styles/searchBar.css';
import { useState } from 'react';
//import { fetchData } from '../utils/api';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
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
			className="overflow-hidden  z-0 rounded-full w-full relative p-2 "
		>
			<div className="relative justify-between  flex items-stretch z-40 overflow-hidden bg-primary rounded-full">
				<select
					className=" bg-bright-1 rounded-full w-28 text-white py-2 z-1  h-full outline-none appearance-none  font-semibold text-center"
					onChange={(evt) => setSearchBy(evt.target.value)}
					value={searchBy}
				>
					<option value="s">By Name</option>
					<option value="i">By Ingredient</option>
				</select>
				<input
					onChange={(evt) => setSearchText(evt.target.value)}
					value={searchText}
					required
					type="text"
					placeholder="enter your search "
					className="rounded-full   bg-primary py-2 text-gray-700 focus:outline-none text-center"
				/>
				<button
					onClick={handelSearch}
					className="bg-bright-1 inline-block w-28 text-white py-2 px-4 rounded-full font-semibold "
				>
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
