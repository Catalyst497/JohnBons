import React, { useContext, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

import { AppContext } from '../Context';

export default function Gallery() {
	const { searchClose } = useContext(AppContext);
	const searchResults = JSON.parse(localStorage.getItem('searchResults'))
	return (
		<div className="w-[90%] mx-auto py-12 bg-gray-100">
			{!searchClose ? <Search /> : ''}
			<div className="md:text-[1.5rem] text-[1.2rem] font-semibold w-[80%] md:w-[90%] mx-auto">
				Displayed <span className="font-bold">{searchResults.length} </span>
				results.
			</div>
			<div className="flex flex-wrap justify-center gap-8 my-[3rem]">
				{searchResults.map((item, i) => {
					const { property_id, address, photo, price_raw, beds, sqft, baths } = item;
					return (
						<div key={i} className={`max-w-[15rem] bg-white shadow-lg pb-4`}>
							<div className="h-[10rem] overflow-hidden">
								<Link to={`/homes/${property_id}`}>
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
