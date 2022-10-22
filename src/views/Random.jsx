import React from 'react';
import Grid from '../components/Grid';
import PageHeader from '../components/PageHeader';
function Random({ drinks, setRandoms }) {
	const HeaderSlot = () => {
		return (
			<button
				onClick={() => setRandoms([])}
				className="bg-red-600 hover:bg-red-400 font-medium  -skew-x-12 pr-8  max-h-fit text-white p-2  ml-2 -mr-4"
			>
				CLEAR RANDOMS
			</button>
		);
	};
	return (
		<div>
			<PageHeader
				title={'Randoms'}
				slot={HeaderSlot}
			/>
			<Grid drinks={drinks} />
		</div>
	);
}

export default Random;
