import React from 'react';

import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';
function Navbar({ favoritesLength, setTheme, getRandom }) {
	return (
		<div className="  w-full bg-primary p-2 fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 flex-col md:flex-row">
			<div className="">
				<Navigation
					favoritesLength={favoritesLength}
					setTheme={setTheme}
					getRandom={getRandom}
				/>
			</div>

			<div className="  mx-auto w-full max-w-xl">
				<SearchBar
					favoritesLength={favoritesLength}
					setTheme={setTheme}
				/>
			</div>
		</div>
	);
}
export default Navbar;

{
	/* // 		<div>
		// 			<div
		// 				classNameName={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
		// 					navbar ? 'block' : 'hidden'
		// 				}`}
		// 			>
		// 				<ul classNameName="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
		// 					<li classNameName="text-white hover:text-indigo-200">
		// 						<Link to={`/`}> Home</Link>
		// 					</li>
		// 					<li classNameName="text-white hover:text-indigo-200">
		// 						<Link to={`results`}>SearchResult</Link>
		// 					</li>
		// 					<li classNameName="text-white hover:text-indigo-200">
		// 						<Link to={`/favorite`}>Favorites</Link>
		// 					</li>
		// 					<li classNameName="text-white hover:text-indigo-200">
		// 						<Link to={`/random`}>random</Link>
		// 					</li>
		// 				</ul>

		// 				<SearchBar />
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>

		// <ul>
		// 	<li>
		// 		<Link to={`/`}> Home</Link>
		// 	</li>
		// 	<li>
		// 		<Link to={`results`}>SearchResult</Link>
		// 	</li>
		// 	<li>
		// 		<Link to={`/favorite`}>Favorites</Link>
		// 	</li>
		// </ul> */
}
