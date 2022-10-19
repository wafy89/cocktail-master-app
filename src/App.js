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

function App() {
	const [favorite, setFavorite] = useState([]);
	useEffect(() => {
		setFavorite(getFavoritesFromLocalstorage());
		return () => {
			saveFavoritesToLocalstorage(favorite);
		};
	}, []);

	return (
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
	);
}

export default App;
