import React from 'react';
import PageHeader from '../components/PageHeader';
import Hero from '../images/hero.png';

function Home() {
	return (
		<div className=" relative overflow-hidden">
			<PageHeader title="HOME" />
			<div className="flex justify-center ">
				<main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
					<div className="sm:text-center lg:text-left z-20">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							<span className="block xl:inline text-bright-4">Welcome to </span>{' '}
							<span className="block text-bright-2 xl:inline">
								COCKTAIL MASTER
							</span>
						</h1>
						<p className="mt-3  text-bright-4 text-xl sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
							Here you deffenitly can enjoy your party making best drinks.
						</p>
						<div className="block text-4xl text-primary xl:inline">How?</div>
						<ol className="mt-3 text-base text-slate-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
							<li>1- Search for a Drink by name or by Ingridient</li>
							<li>2- Click Details Button on one of the Results</li>
							<li>
								3- Read the Ingridient and Instructions with different Languages
							</li>
							<li>
								4- and if you like it click on Heart to save it to{' '}
								<span className="text-bright-2 font-bold">Favorites</span>{' '}
							</li>
						</ol>
					</div>
				</main>
				<div className=" w-full max-h-screen md:w-1/2">
					<img
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
						src={Hero}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
