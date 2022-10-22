import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { FaCocktail } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

function Navigation({ getRandom, favoritesLength, setTheme }) {
	let navigate = useNavigate();

	const handelRandom = async () => {
		await getRandom();
		navigate({
			pathname: '/randoms',
		});
	};
	return (
		<ul className=" overflow-hidden flex w-full items-end justify-between gap-8 flex-nowrap md:ml-8">
			<li className="">
				<Link to={`/`}>
					<FaCocktail
						fontSize={48}
						className="text-slate-600 mb-1"
					/>
				</Link>
			</li>
			<li className=" relative ">
				<Link to={`/favorite`}>
					<div className="absolute -right-2 top-0 z-10 bg-pink-400/80 text-xs font-bold px-1 py-0.5 rounded-sm">
						{favoritesLength}
					</div>
					<AiFillHeart
						fontSize={48}
						className="text-slate-600"
					/>
				</Link>
			</li>
			<li className="">
				<div
					className=" cursor-pointer"
					onClick={() => handelRandom()}
				>
					<GiPerspectiveDiceSixFacesRandom
						fontSize={48}
						className="text-slate-600"
					/>
				</div>
			</li>
			<li className=" cursor-pointer w-10 relative  mb-1 ">
				<ThemeSwitcher setTheme={setTheme} />
			</li>
		</ul>
	);
}

export default Navigation;
