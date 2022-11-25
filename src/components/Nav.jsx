import { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context';
import {
	FaAngleDown,
	FaAngleRight,
	FaAngleUp,
	FaArrowLeft,
} from 'react-icons/fa';
import {
	Search,
	ArrowDown,
	Menu,
	X,
	Twitter,
	Facebook,
	Youtube,
} from 'react-feather';

//Components
import NavDropdown from '../utils/NavDropdown';

export default function Nav() {
	// Variables
	let aboutObj = {
		main: 'About Us',
		subtext:
			'We develop and invest in high-quality real estate properties, projects and companies that are shaping the urban fabric in dynamic cities around the world',
		list: ['Who We Are', 'Governance', 'Our Commitment'],
	};
	let newsObj = {
		main: 'News',
		subtext:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti ea perferendis dolore consequuntur doloremamet doloribus, minima adipisci itaque.',
		list: ['Latest News', 'Blog', 'Newsletter', 'Podcast', 'Activity Report'],
	};

	const {
		isDesktop,
		setIsDesktop,
		setSearchOpen,
		setKeyword,
		setSearchResults,
		setBeds,
	} = useContext(AppContext);
	const [navOpen, setNavOpen] = useState(false);
	const [dropOpen, setDropOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(true);

	const nav = useRef();

	return (
		<nav
			ref={nav}
			className="fixed z-[60] top-0 inset-x-0 fl-itcn bg-white justify-between px-4 md:px-12 py-4 text-[1rem] shadow-sm"
		>
			<div className="fl-itcn text-center logo- text-[2rem] md:text-[2.5rem] font-bold text-black uppercase">
				<Link to="/">JohnBons</Link>
			</div>
			{/* Desktop Side Menu */}
			{isDesktop ? (
				<div className="fl-itcn flex-1 justify-end gap-6 ">
					<div className="fl-itcn font-semibold gap-6">
						<div
							className={`flex gap-4 items-center relative `}
							onClick={(e) => {
								setActiveDropdown(true);
								setDropOpen(!dropOpen);
							}}
						>
							<div className="navhover">About us</div>
							{dropOpen && activeDropdown ? (
								<FaAngleUp className="z-10" />
							) : (
								<FaAngleDown className="z-10" />
							)}
						</div>
						<div>
							<a href="" className="">
								Contact us
							</a>{' '}
						</div>
						<div className="navhover">Portfolio</div>
						<div
							className="flex gap-4 items-center"
							onClick={() => {
								setActiveDropdown(false);
								setDropOpen(!dropOpen);
							}}
						>
							<div className="navhover">News</div>
							{dropOpen && !activeDropdown ? <FaAngleUp /> : <FaAngleDown />}
						</div>
						<div className="navhover">Careers</div>
					</div>
					<div className="font-light">English</div>
					<div>
						<div className="h-10 w-10 grid place-items-center bg-primary-brown rounded-full text-white">
							<Search
								onClick={() => {
									setKeyword(null);
									setSearchResults([]);
									setBeds('1');
									setSearchOpen(true);
								}}
							/>
						</div>
					</div>
				</div>
			) : (
				<Menu onClick={() => setNavOpen(true)} />
			)}

			{/* Mobile Side Menu */}
			<div
				className={`bg-white z-[70] absolute top-0 inset-x-0 h-screen p-8 overflow-hidden ${
					navOpen ? 'scale-y-100' : 'scale-y-0'
				} transition-[transform]`}
			>
				<div className="flex justify-end">
					<X onClick={() => setNavOpen(false)} />
				</div>
				<div className="font-semibold gap-6">
					<div
						className={`dropdown-with-arrow`}
						onClick={() => setDropOpen(true)}
					>
						<div>About Us</div> <FaAngleRight />
					</div>
					<div className="py-4">
						<a href="">Contact us</a>{' '}
					</div>
					<div className="py-4">Portfolio</div>
					<div
						className="dropdown-with-arrow"
						onClick={() => setDropOpen(true)}
					>
						<div>News</div> <FaAngleRight />
					</div>
					<div className="py-4">Careers</div>
				</div>
				<div className="font-light">English</div>
				<div className="absolute inset-x-8 bottom-8 flex items-center justify-between">
					<div className="socials- flex gap-6">
						<Twitter /> <Facebook /> <Youtube />
					</div>
					<div className="h-10 w-10 grid place-items-center bg-black rounded-full text-white hover:opacity-[.7] transition-[opacity]">
						<Search
							onClick={() => {
								setKeyword(null);
								setSearchResults([]);
								setBeds('1');
								setSearchOpen(true);
							}}
						/>
					</div>
				</div>
			</div>
			{/* Desktop Dropdown */}
			{dropOpen && isDesktop && (
				<NavDropdown content={activeDropdown ? aboutObj : newsObj} />
			)}

			{/* Mobile Dropdown */}
			{!isDesktop && (
				<div
					className={`absolute bg-white inset-x-0 top-0 h-screen w-screen px-10 py-12 z-[80]  transition-[transform] ${
						dropOpen ? 'translate-x-0' : 'translate-x-[100%]'
					}`}
				>
					<div
						className="absolute left-4 top-8"
						onClick={() => setDropOpen(false)}
					>
						<FaArrowLeft />
					</div>
					<ul className="text-[1rem] pt-12">
						<li className="py-2">Who We are</li>
						<li className="py-2">Governance</li>
						<li className="py-2 flex items-center gap-2">
							Commitment <FaAngleRight />
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
