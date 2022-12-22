import React from 'react';
import { Heart, Share, Share2 } from 'react-feather';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
	const searchResults = JSON.parse(localStorage.getItem('searchResults'));
	const params = useParams();
	const { property_id } = params;
	const property = searchResults.find(
		(item) => item?.property_id == property_id
	);
	const { photo } = property;
	return (
		<div className="ProductPage">
			<div className="Container w-[90%] max-w-[900px] mx-auto">
				<div className="relative bg-gray-100">
					<div>
						<img src={photo} className="md:w-[85%] w-full mx-auto" alt="" />
					</div>
					<div className="absolute bottom-0 right-4 translate-y-[90%] bg-white">
						<div>
							<div><Heart /></div>
							<div><Share2 /></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
