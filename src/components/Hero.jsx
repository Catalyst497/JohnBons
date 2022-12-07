import { useContext } from 'react';
import { AppContext } from '../Context';

// Util Components
import Trustees from '../utils/Trustees';

export default function Hero() {
	const { isDesktop, setIsDesktop } = useContext(AppContext);
	const trustedBys = [
		{
			name: 'audiophile',
			img: './img/client-audiophile.svg',
		},
		{
			name: 'databiz',
			img: './img/client-databiz.svg',
		},
		{
			name: 'maker',
			img: './img/client-maker.svg'
		},
		{
			name: 'meet',
			img: './img/client-meet.svg'
		}
	];
	return (
		<div className="hero- flex items-start justify-center flex-col relative px-4 md:px-12 md:overflow-hidden h-auto md:h-[140vh] mb-8">
			<div className="flex flex-col md:flex-row item-stretch md:h-full">
				<div className="md:w-[50%]">
					<div className=" flex flex-col justify-start md:pt-20">
						<h1 className="font-DM-serif text-[2.5rem] md:text-[4rem] text-primary-brown leading-tight">
							Providing certainty on the journey to homeownership
						</h1>
						<p className="py-10">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
							temporibus quos eius itaque? Necessitatibus aliquam blanditiis
							asperiores id vel quia.
						</p>
						<div className="flex items-center gap-6">
							<button className="rounded-[0.5rem] px-8 py-4 text-white bg-primary-brown">
								Sign Up
							</button>
							<div className="underline">Learn More</div>
						</div>
					</div>
					{isDesktop && <Trustees trustedBys={trustedBys} />}
				</div>
				<div className="md:w-[50%] relative">
					<div className="md:absolute top-[5rem] left-[-5rem] md:w-[150%] ">
						<img
							src="./img/undraw_house_searching.svg"
							alt="estate-hero"
							className="w-full"
						/>
					</div>
				</div>
			</div>
				{!isDesktop && <Trustees trustedBys={trustedBys} />}
		</div>
	);
}
