import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkByID } from '../utils/api';
import DrinkDetails from '../components/DrinkDetails';
function Details() {
	const [drink, setDrink] = useState();
	const { id } = useParams();
	useEffect(() => {
		getDrinkByID(id).then((data) => {
			setDrink(data);
		});
	}, [id]);

	return drink && <DrinkDetails drink={drink} />;
}

export default Details;
