'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { BsSpotify, BsTwitter, BsInstagram } from 'react-icons/bs';
import { GrSoundcloud, GrFacebook, GrClose } from 'react-icons/gr';
import { RiMenu4Fill } from 'react-icons/ri';

function Nav() {
	const [mobileNav, setMobileNav] = useState(false);

	const handleMobileNav = () => {
		setMobileNav(!mobileNav);
	};

	return (
		<div className="w-full bg-black flex justify-between h-24 px-20 items-center">
			<div className="">
				<span className=" text-white font-bold text-2xl">DJLUNA MAR</span>
			</div>
			<div className="text-white  gap-x-6 text-xl hidden lg:flex">
				<Link href="#home">HOME</Link>
				<Link href="#about">ABOUT</Link>
				<Link href="#events">EVENTS</Link>
				<Link href="#music">MUSIC</Link>
				<Link href="#merch">MERCH</Link>
			</div>
			<div className="gap-x-2 flex-row  lg:flex hidden md-flex ">
				<div className="bg-black border-4 border-white p-2 rounded-sm">
					<BsSpotify color="white" size={24} />
				</div>
				<div className="bg-black border-4 border-white p-2 rounded-sm">
					<GrSoundcloud color="white" size={24} />
				</div>
				<div className="bg-black border-4 border-white p-2 rounded-sm">
					<BsTwitter color="white" size={24} />
				</div>
				<div className="bg-white border-4 border-white  rounded-sm flex justify-center items-center">
					<GrFacebook color="black" size={40} />
				</div>
				<div className="bg-white border-4 border-white  rounded-sm flex justify-center items-center">
					<BsInstagram color="black" size={38} />
				</div>
			</div>

			{/* Mobile View */}
			<button className="flex lg:hidden" onClick={handleMobileNav}>
				<RiMenu4Fill color="white" size={34} />
			</button>
			{/* <div
				className={`w-[340px] absolute z-10 
				} h-[100vh] bg-black flex justify-start items-start lg:hidden`}
			>
				<span className='text-white'> X</span>
				<button onClick={handleMobileNav} className='z-10'>
					<GrClose color='white' size={24} />
				</button>
			</div> */}
		</div>
	);
}

export default Nav;
