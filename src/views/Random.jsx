import React from 'react';
import Grid from '../components/Grid';
import PageHeader from '../components/PageHeader';
function Random({ drinks, setRandoms }) {
	const deleteAction = () => {
		setRandoms([]);
	};
	return (
		<div>
			<PageHeader
				title={'Randoms'}
				deleteAction={deleteAction}
			/>
			<Grid drinks={drinks} />
		</div>
	);
}

export default Random;
