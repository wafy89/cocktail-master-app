//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favorite from './views/Favorite';
import SearchResult from './views/SearchResult';
import Home from './views/Home';
import Navbar from './views/Navbar';
import Details from './views/Details';
import { useEffect, useState } from 'react';
import {
	getFavoritesFromLocalstorage,
	saveFavoritesToLocalstorage,
} from './utils/helper';
import { Store } from './utils/store';
function App() {
	//initialize favorite state with local Storage value
	const initialFavorites = () =>
		JSON.parse(window.localStorage.getItem('favoriteDrinks')) || [];
	const [favorite, setFavorite] = useState(initialFavorites);

	const toggleFavorite = (drink) => {
		if (favorite.some((item) => item.id === drink.id)) {
			const newDrinks = favorite.filter((item) => item.id !== drink.id);
			setFavorite(newDrinks);
		} else {
			setFavorite([...favorite, drink]);
		}
	};

	const saveToStorage = () => {
		const drinks = JSON.stringify(favorite);
		console.log('saveToStorage', drinks);
		window.localStorage.setItem('favoriteDrinks', drinks);
	};
	// save to lockal Storage with every change on favorites
	useEffect(() => {
		saveToStorage();
	}, [favorite]);

	//App theme
	const [theme, setTheme] = useState('theme-first');

	return (
		<Store.Provider value={{ favoriteList: favorite, toggleFavorite }}>
			<div className={`${theme} 'App bg-secondary`}>
				<Navbar
					setTheme={setTheme}
					favoritesLength={favorite.length}
				/>
				<div className="min-h-screen  pt-44 md:pt-28">
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/details"
							element={<Details />}
						/>
						<Route
							path="favorite"
							element={<Favorite drinks={favorite} />}
						/>
						<Route
							path="result"
							element={<SearchResult />}
						/>
					</Routes>
				</div>
			</div>
		</Store.Provider>
	);
}

export default App;
