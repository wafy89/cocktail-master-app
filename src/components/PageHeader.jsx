import React from 'react';

function PageHeader({ title, slot }) {
	return (
		<div className="w-full overflow-hidden mb-3 flex justify-between items-start">
			<h1 className="text-white py-4 text-2xl  bg-bright-2 w-fit -skew-x-12  px-20 -ml-7 flex-shrink">
				{title.toUpperCase()}
			</h1>
			{slot ? slot() : null}
		</div>
	);
}

export default PageHeader;
