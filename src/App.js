//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favorite from './views/Favorite';
import SearchResult from './views/SearchResult';
import Home from './views/Home';
import Navbar from './views/Navbar';
import Details from './views/Details';
import Random from './views/Random';
import { useEffect, useState } from 'react';
import { getRandomCocktail } from './utils/api';
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
		window.localStorage.setItem('favoriteDrinks', drinks);
	};
	// save to lockal Storage with every change on favorites
	useEffect(() => {
		saveToStorage();
	}, [favorite]);

	//App theme
	const [theme, setTheme] = useState('theme-first');

	// Randoms
	const [randoms, setRandoms] = useState([]);
	const getRandom = async () => {
		const RandomCocktail = await getRandomCocktail();
		setRandoms([RandomCocktail, ...randoms]);
	};
	return (
		<Store.Provider value={{ favoriteList: favorite, toggleFavorite }}>
			<div className={`${theme} App bg-secondary w-full`}>
				<Navbar
					setTheme={setTheme}
					favoritesLength={favorite.length}
					getRandom={getRandom}
				/>
				<div className="min-h-screen  pt-40 md:pt-24">
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/details/:id"
							element={<Details />}
						/>
						<Route
							path="favorite"
							element={<Favorite drinks={favorite} />}
						/>
						<Route
							path="randoms"
							element={
								<Random
									drinks={randoms}
									setRandoms={setRandoms}
								/>
							}
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
