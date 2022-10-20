import React from 'react';

function PageHeader({ title }) {
	return (
		<div className="w-full mb-3 ">
			<h1 className="text-white text-3xl bg-bright-2 w-fit -skew-x-12 py-6 px-20 -ml-7">
				{title}
			</h1>
		</div>
	);
}

export default PageHeader;
