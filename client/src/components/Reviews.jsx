import React from 'react';
import {Star} from 'react-feather'
// Import Swiper and its styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Components
import SwiperItems from '../utils/SwiperItems';

export default function Reviews() {
	const swiperChildren = [
		{
			name: 'Waseem A.',
			address: 'Fort Lauderdale, FL',
			words:
				'Even on the conservative side, apartment buildings expect a three-month minimum (lease)... If they do offer month-to-month, it’s often as much as twice the rental price, and it’s incredibly annoying to furnish a place if you’re only going to live there for a month.',
		},
		{
			name: 'Daniel O.',
			address: 'Nashville, TN',
			words:
				'The biggest perk is the flexibility, the fact that if I want to live anywhere from Nashville to Seattle, Austin to New York City, I have a way to do it. Landing makes the world accessible in a way that it wasn’t before.',
		},
		{
			name: 'Michael H.',
			address: 'Tampa, FL',
			words:
				'Landing’s apartments have everything under the sun. When we arrived, we brought things that we thought Landing wouldn’t know we needed. But they had it –&nbsp;so now we have two of everything',
		},
		{
			name: 'Daniel O.',
			address: 'Nashville, TN',
			words:
				'The biggest perk is the flexibility, the fact that if I want to live anywhere from Nashville to Seattle, Austin to New York City, I have a way to do it. Landing makes the world accessible in a way that it wasn’t before.',
		},
		{
			name: 'Michael H.',
			address: 'Tampa, FL',
			words:
				'Landing’s apartments have everything under the sun. When we arrived, we brought things that we thought Landing wouldn’t know we needed. But they had it –&nbsp;so now we have two of everything',
		},
		{
			name: 'Waseem A.',
			address: 'Fort Lauderdale, FL',
			words:
				'Even on the conservative side, apartment buildings expect a three-month minimum (lease)... If they do offer month-to-month, it’s often as much as twice the rental price, and it’s incredibly annoying to furnish a place if you’re only going to live there for a month.',
		},
	];
	return (
		<section className='py-8 bg-white text-black'>
            <div className="section-title- font-semibold text-[1.5rem] md:text-[3rem] text-black text-center py-2">What are the people saying?</div>
			<Swiper
				slidesPerView={'auto'}
				spaceBetween={30}
				grabCursor={true}
				className="mySwiper h-auto m-4 md:m-12"
			>
				{swiperChildren.map((child, i) => (
					<SwiperSlide className="w-[15rem] md:w-[25rem] h-[20rem] border-gray-200 border-[1px] rounded-[1rem] p-8" key={i}>
						<div className="flex text-[#08786c] py-4">
							<Star size={16} />
							<Star size={16} />
							<Star size={16} />
							<Star size={16} />
							<Star size={16} />
						</div>
                        <div>

						<div className='text-[1rem] text-primary-brown font-bold'>{child.name}</div>
						<div>{child.address}</div>
                        </div>
						<div className='text-black py-4'>{child.words}</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
