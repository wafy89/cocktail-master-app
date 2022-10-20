const getIngridients = (drink) => {
	let ingridientsArray = [];
	for (let index = 1; index < 11; index++) {
		const ingridientKey = `strIngredient${index}`;
		const measureKey = `strMeasure${index}`;
		if (!drink[ingridientKey]) break;
		ingridientsArray.push({
			name: drink[ingridientKey],
			measure: drink[measureKey],
			image: `https://www.thecocktaildb.com/images/ingredients/${drink[ingridientKey]}.png`,
		});
	}
	return ingridientsArray;
};
const getInstructions = (drink) => {
	let instructions = {};
	if (drink.strInstructions) instructions.en = drink.strInstructions;
	if (drink.strInstructionsES) instructions.es = drink.strInstructionsES;
	if (drink.strInstructionsDE) instructions.de = drink.strInstructionsDE;
	if (drink.strInstructionsFR) instructions.fr = drink.strInstructionsFR;
	if (drink.strInstructionsIT) instructions.it = drink.strInstructionsIT;

	return instructions;
};

export const cleanupDrinkData = (drinkList) =>
	drinkList.map((drink) => ({
		id: drink.idDrink,
		name: drink.strDrink,
		category: drink.strCategory,
		drinkType: drink.strAlcoholic,
		glassType: drink.strGlass,
		instructions: getInstructions(drink),
		thumbnail: drink.strDrinkThumb,
		ingridients: getIngridients(drink),
		videoUrl: drink.strVideo,
	}));

export const saveFavoritesToLocalstorage = (drinks) => {
	console.log('saveLockal');
	const value = JSON.stringify(drinks);
	console.log({ value });
	localStorage.setItem('favoriteDrinks', value);
};

export const getFavoritesFromLocalstorage = () => {
	const favorits = JSON.parse(localStorage.getItem('favoriteDrinks'));
	console.log({ getFav: favorits });
	return favorits.length ? favorits : [];
};
export const isInFavorite = (array = [], id) => {
	if (!array) {
		return false;
	} else {
		return array.some((drink) => drink.id === id);
	}
};
