import React from 'react';
import Image from 'next/image';
import ElectricZoo from '../public/electriczoo.png';

function Merchandise() {
	const merch = [
		{
			name: 'Luna mar at knockdown centre',
			price: 10,
			image: ElectricZoo,
		},
		{ name: 'Luna mar at knockdown centre', price: 10, image: ElectricZoo },
		{ name: 'Luna mar at knockdown centre', price: 10, image: ElectricZoo },
	];
	return (
		<div className="px-10 md:px-20 pt-40" id="merch">
			<div className="flex justify-between ">
				<h1 className="clashSemiBold text-white text-[3rem] font-semibold">
					MERCHANDISE
				</h1>
				{/* <div className='flex gap-x-4'>
					<button className='border-2 border-white h-10 w-10 flex justify-center items-center rounded-md'>
						<AiOutlineArrowLeft color='white' size={20} />
					</button>
					<button className='border-2 border-white  h-10 w-10 flex justify-center items-center  rounded-md'>
						<AiOutlineArrowRight color='white' size={20} />
					</button>
				</div> */}
			</div>
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-10 w-full pt-10">
				{merch.map((merch, i) => (
					<div key={i} className="flex flex-col w-full md:w-[32%]  bg-white">
						<Image
							src={merch.image}
							alt={merch.name}
							className="md:flex w-full h-auto"
						/>
						<span className="text-black text-[1.5rem] mt-2 clashSemiBold px-5">
							{merch.name.toLocaleUpperCase()}
						</span>
						<span className="text-black text-[1.5rem] my-2  px-5">
							${merch.price.toFixed(2)}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default Merchandise;
