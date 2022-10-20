import { useContext } from 'react';
import Grid from '../components/Grid';
import PageHeader from '../components/PageHeader';
import { Store } from '../utils/store';

function Favorite() {
	const { favoriteList } = useContext(Store);
	return (
		<div>
			<PageHeader title="Favorites" />
			<Grid drinks={favoriteList} />
		</div>
	);
}

export default Favorite;
