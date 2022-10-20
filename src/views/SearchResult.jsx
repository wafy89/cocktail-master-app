import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Grid from '../components/Grid';

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
			result
			<Grid drinks={drinkList} />
			{/* <div className="flex justify-around gap-6 w-full flex-wrap">
				{drinkList?.length &&
					drinkList.map((item) => (
						<Card
							key={item.id}
							drink={item}
						/>
					))}
			</div> */}
		</div>
	);
}

export default SearchResult;
