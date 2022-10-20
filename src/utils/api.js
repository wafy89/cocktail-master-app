import { cleanupDrinkData } from './helper';
import { accessSearchResultState } from './store';
import axios from 'axios';

export async function getRandomCocktail() {
	try {
		let data;

		const response = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/random.php`
		);
		data = await response.json();

		return cleanupDrinkData(data)[0];
	} catch (err) {
		console.log('err', err);
	}
}

export async function getDataByID(id) {
	try {
		const response = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		const data = await response.json();

		return cleanupDrinkData(data)[0];
	} catch (err) {
		console.log('err', err);
	}
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

	// await fetch(url)
	// 	.then(async (res) => {
	// 		const data = await res.json();
	// 		console.log(data.data);
	// 		// const response = await res.json();
	// 		// console.log({ response });
	// 		// data = cleanupDrinkData(response);
	// 	})
	// 	.catch((e) => console.log({ e }));
	return data;
}
