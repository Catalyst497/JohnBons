import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

import { AppContext } from '../Context';

export default function Gallery() {
	const { searchClose, searchResults } = useContext(AppContext);
	return (
		<div className="w-[90%] mx-auto py-12 bg-gray-100">
			{!searchClose ? <Search /> : ''}
			<div className="flex flex-wrap justify-center gap-8 my-[3rem]">
				{searchResults.map((item, i) => {
					const { address, photo, price_raw, beds, sqft, baths } = item;
					return (
						<div key={i} className="max-w-[15rem] bg-white shadow-lg pb-4">
							<div className="h-[10rem] overflow-hidden">
								<Link to="">
									<img
										src={photo}
										alt=""
										loading="lazy"
										className="w-full max-w-auto max-w-auto hover:scale-[1.1] transition-[transform] duration-[500ms]"
									/>
								</Link>
							</div>
							<div className="p-1">
								<div className="py-2">
									<div>Valued at</div>{' '}
									<div className="text-[1.5rem] text-black font-semibold">
										${price_raw}
									</div>
								</div>
								<div>{address}</div>
								<div className="py-2 flex items-center gap-2 text-[0.7rem] md:text-[0.8rem]">
									{beds} beds <hr className="w-[1px] round" /> {sqft}{' '}
									<hr className="w-[1px] round" /> {baths} baths
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
