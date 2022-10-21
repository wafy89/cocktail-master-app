import React from 'react';
import { useState, useEffect } from 'react';
import DrinkDetails from '../components/DrinkDetails';
import LanguageSwitcher from '../components/LanguageSwitcher';
import PageHeader from '../components/PageHeader';
const drink = {
	id: '12322',
	name: 'Strawberry Margarita',
	category: 'Ordinary Drink',
	drinkType: 'Alcoholic',
	glassType: 'Cocktail glass',
	instructions: {
		en: 'Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.',
		de: 'Cocktailglasrand mit Zitronensaft und Tauchrand in Salz wenden. Schnaps, Tequila, Triple-Sec, Zitronensaft und Erdbeeren mit Eis schütteln, in das salzige Glas sieben und servieren.',
		it: 'Strofinare il bordo del bicchiere da cocktail con succo di limone e immergerlo nel sale. Shakerare grappa, tequila, triple sec, succo di limone e fragole con ghiaccio, filtrare nel bicchiere bordato di sale e servire.',
	},
	thumbnail:
		'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg',
	ingridients: [
		{
			name: 'Strawberry schnapps',
			measure: '1/2 oz ',
			image:
				'https://www.thecocktaildb.com/images/ingredients/Strawberry schnapps.png',
		},
		{
			name: 'Tequila',
			measure: '1 oz ',
			image: 'https://www.thecocktaildb.com/images/ingredients/Tequila.png',
		},
		{
			name: 'Triple sec',
			measure: '1/2 oz ',
			image: 'https://www.thecocktaildb.com/images/ingredients/Triple sec.png',
		},
		{
			name: 'Lemon juice',
			measure: '1 oz ',
			image: 'https://www.thecocktaildb.com/images/ingredients/Lemon juice.png',
		},
		{
			name: 'Strawberries',
			measure: '1 oz ',
			image:
				'https://www.thecocktaildb.com/images/ingredients/Strawberries.png',
		},
		{
			name: 'Salt',
			measure: null,
			image: 'https://www.thecocktaildb.com/images/ingredients/Salt.png',
		},
	],
	videoUrl: null,
};
function Home() {
	return (
		<div className=" ">
			<PageHeader title="HOME" />
			{/* <LanguageSwitcher /> */}
			<DrinkDetails drink={drink} />
		</div>
	);
}

export default Home;
