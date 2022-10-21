import React from 'react';

function PageHeader({ title, slot }) {
	return (
		<div className="w-full mb-3 flex justify-between">
			<h1 className="text-white text-3xl bg-bright-2 w-fit -skew-x-12 py-6 px-20 -ml-7">
				{title.toUpperCase()}
			</h1>
			{slot ? slot() : null}
		</div>
	);
}

export default PageHeader;
