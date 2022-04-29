import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='w-full h-[90px] bg-black'>
			<div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
				<div>
					<h1 className='text-[#00d8ff]'>DEFI</h1>
				</div>
				<div className='hidden md:flex'>
					<ul className='flex text-white items-center'>
						<li>Platform</li>
						<li>Develop</li>
						<li>Community</li>
						<li>About</li>
						<button className='ml-4'>Use Defi</button>
					</ul>
				</div>

				<div onClick={handleNav} className='block md:hidden'>
					{nav ? (
						<AiOutlineClose size={38} className='text-white' />
					) : (
						<AiOutlineMenu size={38} className='text-white' />
					)}
				</div>

				{/* Mobile menu */}
				<div
					className={
						nav
							? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
							: "absolute left-[-100%]"
					}
				>
					<ul>
						<li className='text-2xl'>Platform</li>
						<li className='text-2xl'>Develop</li>
						<li className='text-2xl'>Community</li>
						<li className='text-2xl'>About</li>
						<button className='m-8 p-8'>Use Defi</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBar;