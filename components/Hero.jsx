import heroImg from "../public/BG.png";
import bookMeBanner from "../public/book-me-banner.png";
import { FiArrowDown } from "react-icons/fi";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-[50vh] lg:min-h-[100vh]"
      style={{
        backgroundImage: `url(${heroImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="flex  pt-28 flex-col items-center">
        <h1 className="lg:text-[10rem] text-[3.5rem] md:text-[5rem] text-white">
          DJLUNA MAR
        </h1>
        <span className="lg:text-[3.5rem] text-[1.5rem] md:text-[2.5rem] clashLight text-white">
          🌙The Soul of a Butterfly🦋
        </span>

        <Image
          src={bookMeBanner}
          alt="DjLuna Mar Book me"
          height={100}
          width={100}
          className="flex md:hidden pt-12 "
        />
        {/* <Image
					src={bookMeBanner}
					alt="DjLuna Mar Book me"
					className="lg:h-50 lg:w-50 md:h-25 md:w-25 pt-20 hidden md:flex"
				/> */}
        <div className=" pt-3 pb-12 px-4 flex justify-center border-4 border-white mt-20 rounded-xl">
          <FiArrowDown size={30} color="white" className="scroll-down-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
