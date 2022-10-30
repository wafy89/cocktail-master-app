import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isInFavorite } from '../utils/helper';
import { Store } from '../utils/store';
import LanguageSwitcher from './LanguageSwitcher';
import Ingridients from './Ingridients';
import { BsYoutube } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

function DrinkDetails({ drink }) {
	const { favoriteList, toggleFavorite } = React.useContext(Store);
	const [lang, setLang] = useState('en');
	const navigate = useNavigate();
	return (
		<div className="m-4 mt-20 pb-10">
			<div className=" w-full mx-auto  rounded-md bg-primary shadow-lg flex flex-col justify-between ">
				<div className="px-4 leading-none ">
					<div className="flex justify-start flex-col md:justify-between md:flex-row md:flex-nowrap gap-4 ">
						<div
							alt="pic"
							className="w-full md:w-1/2 bg-auto h-fit overflow-hidden bg-no-repeat bg-center  rounded-md shadow-2xl  transform -translate-y-16 border-4 border-bright-1"
						>
							<img
								src={drink.thumbnail}
								alt=""
								className="block w-full"
							/>
						</div>
						<div className="w-full md:w-1/2 flex flex-col ">
							<div className="flex-col flex items-start text-slate-800">
								<p className="pt-4 text-2xl font-bold">{drink.name}</p>
								<hr
									className="hr-text"
									data-content=""
								/>
								<div className="text-md flex justify-between my-2">
									<span className="font-bold">
										ID: {drink.id} | {drink.drinkType}
									</span>
									<span className="font-bold"></span>
								</div>

								{drink.category && (
									<p className="flex text-md my-2">
										{drink.category}
										<span className="font-bold px-2">|</span>
										{drink.glassType}
									</p>
								)}
							</div>
							<Ingridients ingridients={drink.ingridients} />
							<div className="my-8">
								<div className="w-full flex justify-between">
									<span className="font-bold">Instructions</span>
									<LanguageSwitcher
										lang={lang}
										setLang={setLang}
										languages={Object.keys(drink.instructions)}
									/>
								</div>
								<p className="mt-4 text-sm text-left">
									{drink.instructions[lang]}
								</p>
							</div>
							<div className="flex justify-between items-center mb-8 w-full">
								<AiFillHeart
									onClick={() => toggleFavorite(drink)}
									fontSize={48}
									className={
										isInFavorite(favoriteList, drink.id)
											? '  text-red-600 '
											: '  text-slate-600 '
									}
								/>
								{drink.videoUrl && (
									<a
										href={drink.videoUrl}
										target="_blank"
										rel="noreferrer"
									>
										<BsYoutube
											size={48}
											className="text-slate-600 hover:text-red-600"
										/>
									</a>
								)}
								<div className="text-xs">
									<button
										type="button"
										className="border border-slate-800 text-slate-800 rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:bg-slate-400 focus:outline-none focus:shadow-outline"
										onClick={() => navigate(-1)}
									>
										BACK
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DrinkDetails;
