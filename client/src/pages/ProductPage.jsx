import React from 'react';
import { Heart, Share, Share2 } from 'react-feather';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
	const searchResults = JSON.parse(localStorage.getItem('searchResults'));
	console.log(searchResults);
	const params = useParams();
	const { property_id } = params;
	const property = searchResults.find(
		(item) => item?.property_id == property_id
	);
	const { photo, address } = property;
	return (
		<div className="ProductPage mt-[-2rem] ">
			<div className="Container w-[90%] max-w-[900px] mx-auto">
				<div className="relative bg-gray-100">
					<div>
						<img
							src={photo}
							className="md:h-[75vh] md:max-w-[90%] mx-auto"
							alt=""
						/>
					</div>
					<div className="absolute bottom-0 right-4 translate-y-[80%] p-4 bg-white">
						<div className="flex items-center gap-4 justify-end">
							<div>
								<Heart />
							</div>
							<div>
								<Share2 />
							</div>
						</div>
						<div>
							<div className="font-bold text-[2rem]"></div>
						</div>
					</div>
				</div>
				<div>
					<div className="font-bold text-[1.5rem] md:text-[2.5rem] text-black mt-4">{address}</div>
				</div>
			</div>
		</div>
	);
}
