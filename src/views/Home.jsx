import React from 'react';
import Details from './Details';
import { useState, useEffect } from 'react';
import { cleanupDrinkData } from '../utils/helper';

const drinks = [
	{
		idDrink: '12736',
		strDrink: 'Drinking Chocolate',
		strDrinkAlternate: null,
		strTags: null,
		strVideo: null,
		strCategory: 'Cocoa',
		strIBA: null,
		strAlcoholic: 'Non alcoholic',
		strGlass: 'Coffee mug',
		strInstructions:
			"Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.",
		strInstructionsES: null,
		strInstructionsDE:
			'Sahne und Milch mit Zimt und Vanilleschote sehr langsam für 15-20 Minuten erhitzen. (Wenn Sie keine Schoten haben, geben Sie nach dem Erhitzen 1-2 Teelöffel Vanillearoma dazu). Bohnen und Zimt entfernen. Fügen Sie die Schokolade hinzu. Mischen, bis sie vollständig geschmolzen sind. Mit sehr dicker, frischer Schlagsahne servieren. Für 1-2 Personen. Für eine reichhaltigere Schokolade verwenden Sie 4 oz Milch, 4 oz Sahne, 4 oz Schokolade. In einer Kaffeetasse servieren.',
		strInstructionsFR: null,
		strInstructionsIT:
			'Riscaldare la panna e il latte con la cannella e il baccello di vaniglia molto lentamente per 15-20 minuti.\r\n(Se non hai i baccelli, aggiungi 1-2 cucchiaini di aroma di vaniglia dopo il riscaldamento).\r\nRimuovere i fagioli e la cannella.\r\nAggiungi il cioccolato.\r\nMescolare fino a completo scioglimento.\r\nServire con panna montata fresca e molto densa.\r\nPer 1-2 persone.\r\nPer un cioccolato più ricco, usa 120 ml di latte, 120 ml di panna e 100 ml di cioccolato.\r\nServire in una tazza da caffè.',
		'strInstructionsZH-HANS': null,
		'strInstructionsZH-HANT': null,
		strDrinkThumb:
			'https://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg',
		strIngredient1: 'Heavy cream',
		strIngredient2: 'Milk',
		strIngredient3: 'Cinnamon',
		strIngredient4: 'Vanilla',
		strIngredient5: 'Chocolate',
		strIngredient6: 'Whipped cream',
		strIngredient7: null,
		strIngredient8: null,
		strIngredient9: null,
		strIngredient10: null,
		strIngredient11: null,
		strIngredient12: null,
		strIngredient13: null,
		strIngredient14: null,
		strIngredient15: null,
		strMeasure1: '2 oz ',
		strMeasure2: '6-8 oz ',
		strMeasure3: '1 stick ',
		strMeasure4: '1 ',
		strMeasure5: '2 oz finely chopped dark ',
		strMeasure6: 'Fresh ',
		strMeasure7: null,
		strMeasure8: null,
		strMeasure9: null,
		strMeasure10: null,
		strMeasure11: null,
		strMeasure12: null,
		strMeasure13: null,
		strMeasure14: null,
		strMeasure15: null,
		strImageSource: null,
		strImageAttribution: null,
		strCreativeCommonsConfirmed: 'No',
		dateModified: '2017-02-20 15:06:13',
	},
];
function Home() {
	const [drink, setDrink] = useState({});
	useEffect(() => {
		// const drink = cleanupDrinkData(drinks[0]);
		setDrink(drink);
	}, []);

	return (
		<div>
			<h2>HOME</h2>
			{/* <Details drink={drink} /> */}
		</div>
	);
}

export default Home;
