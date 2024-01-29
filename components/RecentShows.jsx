import React from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ElectricZoo from "../public/electriczoo.png";
import GrayArea from "../public/grayarea.png";
import ElrowWorld from "../public/IMG_2775.png";

function RecentShows() {
  const recentShows = [
    {
      name: "Electric Zoo",
      image: ElectricZoo,
    },
    {
      name: "Elrow World",
      image: ElrowWorld,
    },
    {
      name: "Gray Area",
      image: GrayArea,
    },
  ];
  return (
    <div className="px-10 md:px-20 pt-40">
      <div className="flex justify-between ">
        <h1 className="clashSemiBold text-white text-[3rem] font-semibold">
          RECENT SHOWS
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
        {recentShows.map((show, i) => (
          <div key={i} className="flex flex-col w-full md:w-[32%] gap-y-2">
            <Image
              src={show.image}
              alt={show.name}
              className="md:flex w-full h-auto"
            />
            <span className="text-white text-[1.5rem]">
              {show.name.toLocaleUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentShows;
