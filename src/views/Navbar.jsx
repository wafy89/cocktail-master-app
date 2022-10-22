import React from 'react';

import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';
function Navbar({ favoritesLength, setTheme, getRandom }) {
	return (
		<div className="shadow-xl w-full  bg-primary py-2  fixed top-0 right-0  z-50 flex items-center justify-start md:gap-10 flex-col md:flex-row">
			<div className="">
				<Navigation
					favoritesLength={favoritesLength}
					setTheme={setTheme}
					getRandom={getRandom}
				/>
			</div>

			<div className="  mx-auto w-full max-w-lg  ">
				<SearchBar
					favoritesLength={favoritesLength}
					setTheme={setTheme}
				/>
			</div>
		</div>
	);
}
export default Navbar;
