import React from 'react';

export default function Trustees({ trustedBys }) {
	return (
		<div>
			<div className="w-full md:pt-8">
				<div className="uppercase py-8 text-center md:text-start">
					Trusted By
				</div>
				<div className="flex flex-wrap w-full justify-between gap-8 px-4 md:px-0">
					{trustedBys.map((truster, i) => {
						return (
							<img
								src={truster.img}
								alt={truster.name}
								className=" w-[7rem] h-[3rem]"
								loading="lazy"
								key={i}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
