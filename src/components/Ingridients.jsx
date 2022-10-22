import React, { useState } from 'react';

function Ingridients({ ingridients }) {
	const [showImage, setShowImage] = useState('');
	return (
		<ul className="text-start relative w-full py-2 italic text-slate-800">
			{ingridients &&
				ingridients.map((item, i) => (
					<div key={i}>
						<li
							className={`text-base flex rounded-md justify-between items-center h-8`}
						>
							<b className=" w-1/3 flex justify-start">{item.measure}</b>
							<p className=" w-1/3 flex justify-center">{item.name}</p>
							<div className="relative w-1/3 flex justify-end ">
								<svg
									onMouseEnter={() => setShowImage(item.image)}
									onMouseLeave={() => setShowImage('')}
									className="w-8 h-8"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="150"
									height="150"
									viewBox="0 0 50 50"
									fill="#000000;"
								>
									<path d="M 14 4 C 8.486 4 4 8.486 4 14 L 4 36 C 4 41.514 8.486 46 14 46 L 36 46 C 41.514 46 46 41.514 46 36 L 46 14 C 46 8.486 41.514 4 36 4 L 14 4 z M 21.132812 13 L 28.867188 13 C 29.740188 13 30.560719 13.464891 31.011719 14.212891 L 32.845703 17.273438 C 33.114703 17.721438 33.608812 18 34.132812 18 L 39.5 18 C 40.327 18 41 18.673 41 19.5 L 41 35.5 C 41 36.327 40.327 37 39.5 37 L 10.5 37 C 9.673 37 9 36.327 9 35.5 L 9 19.5 C 9 18.673 9.673 18 10.5 18 L 15.867188 18 C 16.390187 18 16.885297 17.721484 17.154297 17.271484 L 18.988281 14.212891 C 19.438281 13.464891 20.259812 13 21.132812 13 z M 12 14 L 14 14 C 14.552 14 15 14.448 15 15 L 15 16 L 11 16 L 11 15 C 11 14.448 11.448 14 12 14 z M 34 19.5 A 1 1 0 0 0 34 21.5 A 1 1 0 0 0 34 19.5 z M 25 20 C 20.864 20 17.5 23.364 17.5 27.5 C 17.5 31.636 20.864 35 25 35 C 29.136 35 32.5 31.636 32.5 27.5 C 32.5 23.364 29.136 20 25 20 z M 25 22 C 28.032 22 30.5 24.468 30.5 27.5 C 30.5 30.532 28.032 33 25 33 C 21.968 33 19.5 30.532 19.5 27.5 C 19.5 24.468 21.968 22 25 22 z"></path>
								</svg>
							</div>
						</li>
						<hr className="w-full h-1 bg-secondary rounded" />
					</div>
				))}
			{showImage && (
				<div className="absolute block w-44 top-0 right-16">
					<img
						src={showImage}
						className=" block w-full top-0"
					/>
				</div>
			)}
		</ul>
	);
}

export default Ingridients;