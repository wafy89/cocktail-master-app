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
	let drinks = JSON.parse(window.localStorage.getItem('favoriteDrinks'));

	const [favorite, setFavorite] = useState(drinks);

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
		window.localStorage.setItem('favoriteDrinks', drinks);
	};

	useEffect(() => {
		return function () {
			console.log('done');
			saveToStorage();
		};
	}, []);

	return (
		<Store.Provider value={{ favoriteList: favorite, toggleFavorite }}>
			<div className="App bg-green-100/30">
				<Navbar favoritesLength={favorite.length} />
				<div className="min-h-screen  pt-2">
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
