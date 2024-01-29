import React from "react";
import { BsSpotify, BsTwitter, BsInstagram } from "react-icons/bs";
import { GrSoundcloud, GrFacebook, GrClose } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-[500px] p-10 md:p-20">
      <h1 className="clashSemiBold text-white text-2xl">GET UPDATES</h1>
      <div className="flex flex-col md:flex-row justify-between text-white mt-10 gap-y-10">
        <div className="flex flex-col gap-y-2">
          <span>STAY UP TO DATE</span>
          <div className="bg-white p-2 flex justify-between ">
            <input
              type="text"
              placeholder="Email"
              className=" bg-transparent outline-none border-none"
            />
            <button className="border-orange-600 border-2 p-2">
              <AiOutlineArrowRight color="black" size={15} />
            </button>
          </div>
          <span className="text-sm">
            Dont worry, we will not sell your data
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span>FOLLOW DJ LUNAMAR</span>
          <div className="gap-x-2 flex-row  lg:flex flex">
            <div className="bg-[#1ed760] border-4 border-white p-2 rounded-sm">
              <BsSpotify color="white" size={24} />
            </div>
            <a href="https://soundcloud.com/luna_marr">
              <div className="bg-[#ff5500] border-4 border-white p-2 rounded-sm">
                <GrSoundcloud color="white" size={24} />
              </div>
            </a>

            <div className="bg-[#1da1f2] border-4 border-white p-2 rounded-sm">
              <BsTwitter color="white" size={24} />
            </div>
            <div className="bg-white border-4 border-white  rounded-sm flex justify-center items-center">
              <GrFacebook color="#1877f2" size={40} />
            </div>
            <a href="https://www.instagram.com/djlunamar/">
              <div className="bg-white border-4 border-white  rounded-sm flex justify-center items-center">
                <BsInstagram color="black" size={38} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white mt-20 md:mt-32">
        <div>
          <span>&copy;Copyright {currentYear} Luna Mar</span>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
