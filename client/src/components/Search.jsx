import React, { useContext } from 'react';

import { X, Search } from 'react-feather';
import {Circles, TailSpin} from 'react-loader-spinner';
import { AppContext } from '../Context';

export default function SearchComp() {
	const { setKeyword, setResponse, getProperties, setSearchOpen, searchRef, setBeds, searchActive, searchCompleted } =
		useContext(AppContext);
	return (
		<div
			ref={searchRef}
			className="fixed inset-0 h-screen w-screen bg-white z-[200] text-black flex justify-center items-center transition-[opacity] duration-[500ms]"
		>
			<div className="absolute top-8 right-8 rounded-full grid place-items-center h-12 w-12 bg-white text-black">
				<X className="" onClick={() => setSearchOpen(false)} />
			</div>
			<main className="w-[60%] text-center">
				<div className="text-[1.5rem] font-semibold text-center">
					Search through different real estate houses
				</div>

				<div className="flex flex-col items-center md:flex-row mt-12 px-8 justify-between text-start">
					<div className="flex flex-col items-center">
						<div>Enter Location</div>
						<div className="flex gap-6 text-black bg-white rounded-[0.5rem] px-4 py-2">
							<Search className="text-black" />
							<input
								type="text "
								onChange={(e) => {
									setKeyword(e.target.value);
									setResponse(null);
								}}
								placeholder="Keyword, City, and stuff..."
								className="focus:shadow-sm"
							/>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div>Minimum Number of beds</div>
						<div className="flex gap-6 text-black bg-white rounded-[0.5rem] px-4 py-2">
							<input
								type="number "
								onChange={(e) => {
									setBeds(`${e.target.value}`);
								}}
								placeholder="1"
								className="focus:shadow-sm"
							/>
						</div>
					</div>
				</div>
				<div className="text-center py-10">
					<button
						type="button"
						onClick={getProperties}
						className={`${
							searchActive ? 'flex justify-between items-center gap-8' : ''
						} py-2 px-4 mx-auto rounded-[0.5rem] bg-white text-black shadow-sm hover:shadow-lg transition-[box-shadow] font-semibold w-[50%]`}
					>
						<div className="text-center">Search</div>
						{(searchActive && !searchCompleted.current) && <TailSpin color="black" height="32" width="32" />}
					</button>
				</div>
			</main>
		</div>
	);
}
