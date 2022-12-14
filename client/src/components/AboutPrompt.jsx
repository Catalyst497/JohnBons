import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../Context';

export default function AboutPrompt() {
	const { gsap, isDesktop } = useContext(AppContext);
	const promptItem = useRef([]);
	useEffect(() => {
		const timeline = gsap.timeline({
			defaults: { duration: 0.5 },
			scrollTrigger: {
				trigger: promptItem.current[0],
			},
		});
		timeline.from(promptItem.current, {
			opacity: 0,
			translateY: isDesktop ? '-100%' : 0,
			stagger: 0.3,
		});
	}, []);
	return (
		<section className="AboutPrompt">
			<div className="bg-gray-100 p-4 md:p-12 text-black">
				<div className="section-title text-[1.8rem] md:text-[3rem] pb-[2rem] md:pb-20 font-bold text-center pt-6 ">
					Get on the path to home ownership
				</div>
				<div
					ref={(el) => (promptItem.current[0] = el)}
					className="flex flex-wrap justify-between items-start"
				>
					<div className="text-center md:max-w-[28%] flex flex-col items-center">
						<div className="relative">
							<div className="relative z-10 w-full h-[10rem] md:w-[20rem] md:h-[20rem] overflow-hidden flex justify-center items-center">
								<img
									src="./img/undraw_certification.svg"
									className="max-h-full w-[7rem] md:w-auto"
									alt=""
								/>
							</div>
						</div>
						<div>
							<div className="text-[1.4rem] md:text-[1.8rem] font-semibold py-6">
								Apply in minutes
							</div>
							<div>
								Get prequalified for a home-shopping budget. It’s free, there’s
								no commitment, and it doesn’t impact your credit score.
							</div>
						</div>
					</div>
					<div
						ref={(el) => (promptItem.current[1] = el)}
						className="text-center md:max-w-[28%] flex flex-col items-center"
					>
						<div className="relative ">
							<div className="relative z-10 w-full h-[10rem] md:w-[20rem] md:h-[20rem] overflow-hidden flex justify-center items-center">
								<img
									src="./img/undraw_around_the_world.svg"
									className="max-h-full w-[7rem] md:w-auto"
									alt=""
								/>
							</div>
						</div>
						<div>
							<div className="text-[1.4rem] md:text-[1.8rem] font-semibold py-6">
								Find your dream home
							</div>
							<div>
								With your budget in hand, go shopping for your new home (with a
								Divvy agent or your own). Divvy buys it with an all-cash offer,
								and the keys are yours.
							</div>
						</div>
					</div>
					<div
						ref={(el) => (promptItem.current[2] = el)}
						className="text-center md:max-w-[28%] flex flex-col items-center"
					>
						<div className="relative ">
							<div className="relative z-10 w-full h-[10rem] md:w-[20rem] md:h-[20rem] overflow-hidden flex justify-center items-center">
								<img
									src="./img/undraw_login.svg"
									className="max-h-full w-[7rem] md:w-auto"
									alt=""
								/>
							</div>
						</div>
						<div>
							<div className="text-[1.4rem] md:text-[1.8rem] font-semibold py-6">
								Move in and make it yours.
							</div>
							<div>
								Rent your new home from Divvy while you get ready to own it,
								with built-in savings for your down payment each month.
							</div>
						</div>
					</div>
				</div>
				<div className="text-center py-6">
					<button
						type="button"
						className="py-2 px-4 rounded-[0.5rem] bg-primary-green text-white font-semibold"
					>
						How JohnBons Works
					</button>
				</div>
			</div>
		</section>
	);
}
