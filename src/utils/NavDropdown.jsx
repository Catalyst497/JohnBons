function NavDropdown({ content }) {
	const { main, subtext, list } = content;
	return (<div className="absolute flex top-[100%] inset-x-0 bg-white h-[20rem] px-16 border-t-gray-300 border-b-gray-300 border-t-[1px] border-b-[1px] ">
		<div className="flex">
			<div className="flex flex-col justify-between gap-12 w-[30%] py-12">
				<div className="text-[2rem] font-bold text-black">{main}</div>
				<p>{subtext}</p>
			</div>
			<hr className="border-none bg-gray-300 w-[1px] h-full " />
			<div className="flex justify-between py-12 pl-8">
				<ul>
					{list.map((item, i) => (
						<li key={i} className='navhover my-1'>{item}</li>
					))}
				</ul>
				<div className="flex items-center">
					<img src="" alt="" />
				</div>
			</div>
		</div>
	</div>);
}

export default NavDropdown;
