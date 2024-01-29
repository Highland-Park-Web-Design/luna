import React from "react";
import aboutImg from "../public/about-image.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="pt-20" id="about">
      <h1 className="text-[3rem] clashSemiBold text-white pb-8 px-10 md:px-20 font-semibold">
        MY BIO
      </h1>
      <div className="flex flex-col lg:flex-row gap-y-10  justify-between p-4 px-10 md:px-20 text-white">
        <div className="flex lg:w-[50%]">
          <Image
            src={aboutImg}
            alt="About DJ Luna Mar"
            className="lg:h-[650px] lg:w-auto w-full h-auto"
          />
        </div>
        <div className="flex flex-col px-4 lg:w-[50%] text-[1.5rem] gap-y-10 text-justify leading-tight">
          <h2 className="clashSemiBold text-[2rem]">ABOUT ME</h2>
          <p className="mt-4">
            Introducing DJ Luna Mar, Luna Mar has made her mark in the New York
            house scene, creating waves as a regular at clubs throughout New
            York City. She combines a distinctive blend of Latin American
            heritage with an unwavering passion for house music.
          </p>
          <p className="mt-4 ">
            She has performed at some of the most renowned electronic music
            venues in New York, ranging from explosive sets at Elrow & Electric
            Zoo to mesmerizing appearances at Superior Ingredients. Every blend
            and melody she weaves reflects her commitment to her trade. An
            authority on electronic music, particularly house music. Her
            audience is taken on an exhilarating journey through her knack for
            rhythm and ability to create compelling soundscapes, where each song
            tells a story and gets everyone moving. She has established herself
            as a rising star thanks to her residency at Grey Area, which is a
            testament to her talent and commitment to the electronic music
            field.
          </p>

          <button className="flex justify-center items-center px-2 py-4 bg-white border-2 border-white rounded-4 font-clash-display  md:text-[2rem] leading-29 text-red-600  ">
            <span className="clashSemiBold">DOWNLOAD FULL BIO</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
