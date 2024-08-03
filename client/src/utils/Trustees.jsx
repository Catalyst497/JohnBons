import React from 'react';

export default function Trustees({ trustedBys }) {
	return (
		<div>
			<div className="w-full md:pt-8 ">
				<div className="uppercase py-8 text-center md:text-start">
					Trusted By
				</div>
				<div className="flex flex-wrap w-full justify-center md:justify-between gap-x-8 gap-y-4 md:gap-y-8 px-4 md:px-0">
					{trustedBys.map((truster, i) => {
						return (
							<div key={i} className="w-[40%] flex justify-center md:justify-start">
								<img
									src={truster.img}
									alt={truster.name}
									className=" w-[4rem] md:w-[7rem] h-[1.5rem] md:h-[3rem]"
									loading="lazy"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
