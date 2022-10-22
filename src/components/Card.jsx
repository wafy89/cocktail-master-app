import React from 'react';
import { Store } from '../utils/store';
import { isInFavorite } from '../utils/helper';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

function Card({ drink }) {
	const navigate = useNavigate();
	const { favoriteList, toggleFavorite } = React.useContext(Store);
	return (
		<div className=" mx-4 sm:w-96 md:w-96 lg:w-96 xl:w-96  2xl:w-96 w-full  rounded-md bg-primary shadow-lg flex flex-col justify-between ">
			<div className="px-4">
				<div className="flex justify-start items-start gap-4 flex-nowrap">
					<div
						alt="pic"
						className="w-3/5 aspect-square  bg-auto overflow-hidden bg-no-repeat bg-center  rounded-md shadow-2xl  transform -translate-y-4 border-4 border-bright-1"
					>
						<img
							src={drink.thumbnail}
							alt=""
							className="block w-ful"
						/>
					</div>
					<div className="text-start py-2 italic text-slate-800 max-w-[30%]">
						{drink.ingridients &&
							drink.ingridients.map((item, i) => (
								<div
									key={i}
									className="text-base text-clip"
								>
									{item.name}
								</div>
							))}
					</div>
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
				<AiFillHeart
					onClick={() => toggleFavorite(drink)}
					fontSize={48}
					className={
						isInFavorite(favoriteList, drink.id)
							? '  text-red-600 '
							: '  text-slate-600 '
					}
				/>

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
	);
}
export default Card;