import React from 'react';
import { Store } from '../utils/store';
import { isInFavorite } from '../utils/helper';
import { useNavigate } from 'react-router-dom';

function Card({ drink }) {
	const navigate = useNavigate();
	const { favoriteList, toggleFavorite } = React.useContext(Store);
	return (
		<div className="m-4">
			<div className=" w-96 h-[28rem] mx-auto rounded-md bg-primary shadow-lg flex flex-col justify-between">
				<div className="px-4 leading-none ">
					<div className="flex justify-start gap-4 ">
						<div
							alt="pic"
							className="w-2/3  bg-auto overflow-hidden bg-no-repeat bg-center  rounded-md shadow-2xl  transform -translate-y-4 border-4 border-bright-1"
						>
							<img
								src={drink.thumbnail}
								alt=""
								className="block w-min"
							/>
						</div>
						<ul className="text-start py-2 italic text-slate-800">
							{drink.ingridients &&
								drink.ingridients.map((item, i) => (
									<li
										key={i}
										className="text-base"
									>
										{item.name}
									</li>
								))}
						</ul>
					</div>

					<div className="flex-col text-slate-800">
						<p className="pt-4 text-2xl font-bold">{drink.name}</p>
						<hr
							className="hr-text"
							data-content=""
						/>
						<div className="text-md flex justify-between  px-4 my-2">
							<span className="font-bold">
								ID: {drink.id} | {drink.drinkType}
							</span>
							<span className="font-bold"></span>
						</div>

						{drink.category && (
							<p className="flex text-md px-4 my-2">
								{drink.category}
								<span className="font-bold px-2">|</span>
								{drink.glassType}
							</p>
						)}
					</div>
				</div>
				<div className="flex justify-between items-center px-4 mb-4  w-full">
					<svg
						onClick={() => toggleFavorite(drink)}
						className={`${
							isInFavorite(favoriteList, drink.id)
								? '  text-red-500 '
								: '  text-gray-400 '
						} h-12  p-2 svg-inline--fa fa-heart fa-w-16 fa-9x`}
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="heart"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
						></path>
					</svg>
					<div className="text-xs">
						<button
							type="button"
							className="border border-slate-800 text-slate-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-400 focus:outline-none focus:shadow-outline"
							onClick={() => navigate(`/details/${drink.id}`)}
						>
							DETAILS
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
