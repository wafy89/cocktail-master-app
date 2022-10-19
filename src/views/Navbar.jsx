import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
function Navbar() {
	const [navbar, setNavbar] = useState(false);
	return (
		<div className=" w-full bg-lime-100 p-2 flex items-center justify-between">
			<SearchBar />
			<div>
				<ul className=" items-center justify-end">
					<li className="mx-4 md:m0 md:mb-2  relative md:inline-block">
						<Link to={`/`}>
							<img
								className="h-11  sm:h-14 lg:h-20 p-2 hover:bg-yellow-100 hover:ring-2 ring-white rounded-full svg-inline--fa fa-heart fa-w-16 fa-9x"
								src={Logo}
								alt=""
							/>
						</Link>
					</li>
					<li className="mx-4 md:m0 md:mb-2  relative md:inline-block">
						<Link to={`/favorite`}>
							<div className="absolute right-0   md:right-0 z-10 bg-pink-400/80 text-xs font-bold px-1 py-0.5 rounded-sm">
								3
							</div>
							<svg
								className="h-9  sm:h-12 lg:h-16 p-2 text-gray-500 hover:text-pink-600 svg-inline--fa fa-heart fa-w-16 fa-9x"
								aria-hidden="true"
								focusable="false"
								data-prefix="far"
								data-icon="heart"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
								></path>
							</svg>
						</Link>
					</li>
					<li className="mx-4 md:m0 md:mb-2  relative md:inline-block">
						<a
							className=""
							href=""
						>
							<svg
								className="h-9  sm:h-12 lg:h-16    p-2 text-gray-500 hover:text-blue-400 svg-inline--fa fa-heart fa-w-16 fa-9x"
								aria-hidden="true"
								focusable="false"
								data-prefix="far"
								data-icon="random"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
							>
								<path
									fill="currentColor"
									d="M255.76 44.764c-6.176 0-12.353 1.384-17.137 4.152L85.87 137.276c-9.57 5.536-9.57 14.29 0 19.826l152.753 88.36c9.57 5.536 24.703 5.536 34.272 0l152.753-88.36c9.57-5.535 9.57-14.29 0-19.825l-152.753-88.36c-4.785-2.77-10.96-4.153-17.135-4.153zm-.824 53.11c9.013.097 17.117 2.162 24.31 6.192 4.92 2.758 8.143 5.903 9.666 9.438 1.473 3.507 1.56 8.13.26 13.865l-1.6 5.706c-1.06 4.083-1.28 7.02-.66 8.81.57 1.764 1.983 3.278 4.242 4.544l3.39 1.898-33.235 18.62-3.693-2.067c-4.118-2.306-6.744-4.912-7.883-7.82-1.188-2.935-.99-7.603.594-14.005l1.524-5.748c.887-3.423.973-6.23.26-8.418-.653-2.224-2.134-3.983-4.444-5.277-3.515-1.97-7.726-2.676-12.63-2.123-4.956.526-10.072 2.268-15.35 5.225-4.972 2.785-9.487 6.272-13.55 10.46-4.112 4.162-7.64 8.924-10.587 14.288L171.9 138.21c5.318-5.34 10.543-10.01 15.676-14.013 5.134-4 10.554-7.6 16.262-10.8 14.976-8.39 28.903-13.38 41.78-14.967 3.208-.404 6.315-.59 9.32-.557zm50.757 56.7l26.815 15.024-33.235 18.62-26.816-15.023 33.236-18.62zM75.67 173.84c-5.753-.155-9.664 4.336-9.664 12.28v157.696c0 11.052 7.57 24.163 17.14 29.69l146.93 84.848c9.57 5.526 17.14 1.156 17.14-9.895V290.76c0-11.052-7.57-24.16-17.14-29.688l-146.93-84.847c-2.69-1.555-5.225-2.327-7.476-2.387zm360.773.002c-2.25.06-4.783.83-7.474 2.385l-146.935 84.847c-9.57 5.527-17.14 18.638-17.14 29.69v157.7c0 11.05 7.57 15.418 17.14 9.89L428.97 373.51c9.57-5.527 17.137-18.636 17.137-29.688v-157.7c0-7.942-3.91-12.432-9.664-12.278zm-321.545 63.752c6.553 1.366 12.538 3.038 17.954 5.013 5.415 1.976 10.643 4.417 15.68 7.325 13.213 7.63 23.286 16.324 30.218 26.082 6.932 9.7 10.398 20.046 10.398 31.04 0 5.64-1.055 10.094-3.168 13.364-2.112 3.212-5.714 5.91-10.804 8.094l-5.2 1.92c-3.682 1.442-6.093 2.928-7.23 4.46-1.137 1.472-1.705 3.502-1.705 6.092v3.885l-29.325-16.933v-4.23c0-4.72.892-8.376 2.68-10.97 1.787-2.652 5.552-5.14 11.292-7.467l5.2-2.006c3.087-1.21 5.334-2.732 6.742-4.567 1.46-1.803 2.192-4.028 2.192-6.676 0-4.027-1.3-7.915-3.9-11.66-2.6-3.804-6.227-7.05-10.885-9.74-4.387-2.532-9.126-4.29-14.217-5.272-5.09-1.04-10.398-1.254-15.922-.645v-27.11zm269.54 8.607c1.522 0 2.932.165 4.232.493 6.932 1.696 10.398 8.04 10.398 19.034 0 5.64-1.056 11.314-3.168 17.023-2.112 5.65-5.714 12.507-10.804 20.568l-5.2 7.924c-3.682 5.695-6.093 9.963-7.23 12.807-1.137 2.785-1.705 5.473-1.705 8.063v3.885l-29.325 16.932v-4.23c0-4.72.894-9.41 2.68-14.067 1.79-4.715 5.552-11.55 11.292-20.504l5.2-8.01c3.087-4.776 5.334-8.894 6.742-12.354 1.46-3.492 2.192-6.562 2.192-9.21 0-4.028-1.3-6.414-3.898-7.158-2.6-.8-6.23.142-10.887 2.83-4.387 2.533-9.124 6.25-14.215 11.145-5.09 4.84-10.398 10.752-15.922 17.74v-27.11c6.553-6.2 12.536-11.44 17.95-15.718 5.417-4.278 10.645-7.87 15.68-10.777 10.738-6.2 19.4-9.302 25.99-9.307zm-252.723 94.515l29.326 16.93v30.736l-29.325-16.93v-30.735zm239.246 8.06v30.735l-29.325 16.93v-30.733l29.326-16.932z"
								></path>
							</svg>
						</a>
					</li>
				</ul>
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
