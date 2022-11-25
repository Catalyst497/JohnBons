import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
		<footer className="py-8 border-t-gray-100 border-t-[1px] mt-20">
			<div>
				<div className="flex w-[85%] mx-auto">
					<div>
						<div className="fl-itcn logo- text-[1.5rem] md:text-[2rem] font-bold text-black uppercase">
							<Link to="/">JohnBons</Link>
						</div>
                        <div>
                            <div>Need Support</div>
                            <div>Support@johnbons.com</div>
                        </div>
					</div>
					<div></div>
					<div></div>
				</div>
			</div>
		</footer>
	);
}
