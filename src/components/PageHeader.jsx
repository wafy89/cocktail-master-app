import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';

function PageHeader({ title, deleteAction }) {
	return (
		<div className="w-full mb-5 flex justify-between items-start">
			<h1 className="text-white py-4 text-2xl  bg-bright-2  px-20 relative">
				{title.toUpperCase()}
				{deleteAction ? (
					<MdDeleteSweep
						onClick={deleteAction}
						className="absolute top-2 right-2"
					/>
				) : null}
			</h1>
		</div>
	);
}

export default PageHeader;
