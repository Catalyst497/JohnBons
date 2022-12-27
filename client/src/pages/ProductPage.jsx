import React, {useContext} from 'react';
import { AppContext } from '../Context';
import { Heart, Share2} from 'react-feather';
import {BsDot} from 'react-icons/bs'
import { useParams } from 'react-router-dom';

export default function ProductPage() {
	const { isDesktop } = useContext(AppContext);
	const searchResults = JSON.parse(localStorage.getItem('searchResults'));
	console.log(searchResults);
	const params = useParams();
	const { property_id } = params;
	const property = searchResults.find(
		(item) => item?.property_id == property_id
	);
	const { photo, address, price, beds, sqft, baths } = property;
	return (
		<div className="ProductPage mt-[-2rem] ">
			<div className="Container w-[90%] max-w-[900px] mx-auto">
				<div className="relative bg-gray-100">
					<div>
						<img
							src={photo}
							className="h-[40vh] md:h-[75vh] md:max-w-[90%] mx-auto"
							alt=""
						/>
					</div>
					{isDesktop && <div className="absolute bottom-0 right-4 translate-y-[80%] p-6 bg-white w-[20rem] shadow-lg rounded-[.25rem]">
						<div className="flex items-center gap-4 justify-end">
							<div>
								<Heart />
							</div>
							<div>
								<Share2 />
							</div>
						</div>
						<div className="pt-2">
							<div>Home Price</div>
							<div className="text-[2rem] font-bold text-black">{price}</div>
						</div>
							<button className="bg-primary-green py-2 w-[100%] text-center mx-auto text-white rounded-[0.3rem]">
								Checkout your order
							</button>
					</div>}
				</div>
				<div className='mx-2 '>
					{!isDesktop && <div className='flex justify-between text-start text-black my-8'>
						<div><div className='font-bold text-[1.2rem]'>{price}</div><div>home price</div></div>
						<div><div className='font-bold text-[1.2rem]'>{beds}</div><div>beds</div></div>
						<div><div className='font-bold text-[1.2rem]'>{baths}</div><div>baths</div></div>
						<div><div className='font-bold text-[1.2rem] flex-1'>{sqft}</div><div>sq ft</div></div>
						</div>}
					{!isDesktop && <hr className='w-[80%] mx-auto'/>}
					<div className="md:max-w-[570px]">
						<div className="md:font-bold text-[1.2rem] md:text-[2.5rem] text-black mt-4">
							{address}
						</div>
						{isDesktop && <div className="flex items-center font-semibold text-[0.8rem] md:text-[1.5rem] text-black mt-4 md:max-w-[75%]">
							{beds} beds <BsDot className="rounded-full" /> {sqft}
							<BsDot className="rounded-full" /> {baths} baths
						</div>}
					</div>
					{!isDesktop && <><hr className='w-[80%] mx-auto my-8'/>
					<div className='flex my-6 justify-evenly'>
						<div className='flex item-center gap-4'><Heart /> <div>Save</div></div>
						<div className='flex item-center gap-4'><Share2 /> <div>Share</div></div>
					</div></>}
				</div>
			</div>
		</div>
	);
}
