import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchData } from '../utils/api';
function SearchResult() {
	const [drinkList, setDrinkList] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	useEffect(() => {
		const searchBy = searchParams.get('searchBy');
		const searchText = searchParams.get('searchText');
		fetchData({ searchBy, searchText }).then((data) => {
			setDrinkList(data);
		});
	}, [searchParams]);
	return (
		<div>
			result
			{drinkList?.length &&
				drinkList.map((item) => <h2 key={item.id}>{item.id}</h2>)}
		</div>
	);
}

export default SearchResult;
