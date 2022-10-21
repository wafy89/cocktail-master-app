import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Grid from '../components/Grid';
import PageHeader from '../components/PageHeader';

import { fetchData } from '../utils/api';
function SearchResult() {
	const [drinkList, setDrinkList] = useState([]);
	const [searchParams] = useSearchParams();
	useEffect(() => {
		const searchBy = searchParams.get('searchBy');
		const searchText = searchParams.get('searchText');
		fetchData({ searchBy, searchText }).then((data) => {
			setDrinkList(data);
		});
	}, [searchParams]);
	return (
		<div>
			<PageHeader title={'Search Result'} />
			<Grid drinks={drinkList} />
		</div>
	);
}

export default SearchResult;
