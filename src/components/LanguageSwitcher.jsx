import React, { useState } from 'react';
import DEFlag from '../images/deFlag.png';
import ENFlag from '../images/enFlag.png';
import FRFlag from '../images/frFlag.png';
import ITFlag from '../images/itFlag.png';
import ESFlag from '../images/esFlag.png';

const flages = {
	de: DEFlag,
	en: ENFlag,
	fr: FRFlag,
	it: ITFlag,
	es: ESFlag,
};

function LanguageSwitcher({ lang, setLang, languages }) {
	const [expand, setExpand] = useState(false);
	const changelang = (lang) => {
		setExpand(false);
		setLang(lang);
	};
	return (
		<div className="w-8 relative">
			<div className="w-full">
				<img
					onClick={() => setExpand(!expand)}
					className=" rounded-md block"
					src={flages[lang]}
					alt=""
				/>
			</div>
			{expand && (
				<div className=" flex bg-white rounded-md z-50  absolute -bottom-1 right-10">
					{languages.map((lang) => (
						<div
							key={lang}
							onClick={() => changelang(lang)}
							className="p-2 w-10  rounded-md hover:bg-slate-200"
						>
							<img
								className="w-10"
								src={flages[lang]}
								alt=""
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default LanguageSwitcher;
