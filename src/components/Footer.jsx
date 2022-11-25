import React from 'react';
import { Link } from 'react-router-dom';
import {Facebook, Twitter, Instagram, Youtube} from 'react-feather'

export default function Footer() {
	return (
		<footer className="py-8 border-t-gray-100 border-t-[1px] mt-20 text-black">
			<div>
				<div className="flex md:flex-row flex-col gap-12 w-[85%] mx-auto">
					<div>
						<div className="fl-itcn logo- text-[1.5rem] md:text-[2rem] font-bold text-black uppercase">
							<Link to="/">JohnBons</Link>
						</div>
						<div className='pt-12'>
							<div>Need Support?</div>
							<div className='text-primary-brown font-semibold'>Support@johnbons.com</div>
						</div>
					</div>
					<div>
						<div className="py-4 font-semibold">Our Markets</div>
						<ul className="flex gap-12">
							<div>
								<li className="flex-1 py-2">Atlanta</li>
								<li className="flex-1 py-2">Cincinnati</li>
								<li className="flex-1 py-2">Cleveland / Northeast Ohio</li>
								<li className="flex-1 py-2">Dallas / Fort Worth</li>
								<li className="flex-1 py-2">
									Denver / CO Springs / Northern CO
								</li>
								<li className="flex-1 py-2">Fort Lauderdale</li>
								<li className="flex-1 py-2">Fort Myers</li>
								<li className="flex-1 py-2">Houston</li>
								<li className="flex-1 py-2">Jacksonville</li>
							</div>
							<div>
								<li className="flex-1 py-2">Macon</li>
								<li className="flex-1 py-2">Memphis</li>
								<li className="flex-1 py-2">Miami</li>
								<li className="flex-1 py-2">Minneapolis</li>
								<li className="flex-1 py-2">Orlando</li>
								<li className="flex-1 py-2">Phoenix</li>
								<li className="flex-1 py-2">Pueblo</li>
								<li className="flex-1 py-2">San Antonio</li>
							</div>
						</ul>
					</div>
					<div>
						<div className="py-4 font-semibold">Resources</div>
						<ul className="">
							<li className="flex-1 py-2">Partnership inquiries</li>
							<li className="flex-1 py-2">Media Inquires</li>
							<li className="flex-1 py-2">Search Homes</li>
							<li className="flex-1 py-2">Blog</li>
							<li className="flex-1 py-2">Careers</li>
							<li className="flex-1 py-2">About Us</li>
							<li className="flex-1 py-2">Customer Help Center</li>
							<li className="flex-1 py-2">Agents</li>
							<li className="flex-1 py-2">Agent Help Center</li>
						</ul>
					</div>
					<div>
						<div className="py-4 font-semibold">Connect</div>
						<ul className="">
							<li className="flex-1 py-2 flex items-center gap-4">
								<div className='w-12 h-12 grid place-items-center rounded-full bg-black' size={16}>
									<Facebook className='text-white'/>
								</div>
								<div className='font-bold'>Facebook</div>
							</li>
							<li className="flex-1 py-2 flex items-center gap-4">
								<div className='w-12 h-12 grid place-items-center rounded-full bg-black' size={16}>
									<Twitter className='text-white'/>
								</div>
								<div className='font-bold'>Twitter</div>
							</li>
							<li className="flex-1 py-2 flex items-center gap-4">
								<div className='w-12 h-12 grid place-items-center rounded-full bg-black' size={16}>
									<Instagram className='text-white'/>
								</div>
								<div className='font-bold'>Instagram</div>
							</li>
							<li className="flex-1 py-2 flex items-center gap-4">
								<div className='w-12 h-12 grid place-items-center rounded-full bg-black' size={16}>
									<Youtube className='text-white'/>
								</div>
								<div className='font-bold'>Youtube</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
