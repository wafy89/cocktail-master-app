import React from 'react';
import Card from './Card';

function Grid({ drinks }) {
	return (
		<div className="flex justify-around gap-6 w-full flex-wrap">
			{drinks?.length
				? drinks.map((item) => (
						<Card
							key={item.id}
							drink={item}
						/>
				  ))
				: null}
		</div>
	);
}

export default Grid;
