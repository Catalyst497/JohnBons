import React, {useContext} from 'react'
import { AppContext } from '../Context';
export default function SearchPrompt() {
	const {setSearchOpen } = useContext(AppContext);
  return (
		<div className="mt-12 p-12 pb-20 flex bg-gray-100">
			<div className="flex flex-col justify-center gap-6 flex-1">
				<div className="text-[2rem] md:text-[2.5rem] text-black">
					Search for homes in your neighborhood
				</div>{' '}
				<div className='text-center md:text-start'>
					<button
						className="py-2 px-4 rounded-2 bg-white text-black font-semibold"
						type="button"
                        onClick={() => setSearchOpen(true)}
					>
						Search Homes
					</button>
				</div>
			</div>
			<div className="hidden md:block mt-[-7rem] flex-1">
				<img src="./img/search-home.webp" alt="search-home" />
			</div>
		</div>
	);
}
