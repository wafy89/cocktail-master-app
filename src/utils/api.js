import { cleanupDrinkData } from './helper';
import axios from 'axios';

export async function getRandomCocktail() {
	const response = await axios.get(
		`https://www.thecocktaildb.com/api/json/v1/1/random.php`
	);
	const res = response.data;
	const data = cleanupDrinkData(res.drinks);
	return data[0];
}

export async function getDrinkByID(id) {
	const resp = await axios.get(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
	);
	const res = resp.data;
	const data = cleanupDrinkData(res.drinks);
	return data[0];
}

export function clearFavorites() {
	localStorage.removeItem('favoriteDrinks');
	this.setState({ favorites: [] });
}

export async function fetchData({ searchBy, searchText }) {
	const baseUrls = {
		i: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
		s: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
	};
	const uri = `?${searchBy}=${searchText}`;
	let data;
	axios.defaults.baseURL = baseUrls[searchBy];
	const resp = await axios.get(uri);
	const res = resp.data;
	data = cleanupDrinkData(res.drinks);
	return data;
}
