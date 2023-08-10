"use client";

import React from "react";
import { useRouter } from "next/navigation";

function AboutBlock({
  about,
}: {
  about: {
    headerAbout: string;
    descriptionOne: string;
    descriptionTwo: string;
    bigImage: {
      sourceUrl: string;
    };
  };
}) {
  const router = useRouter();
  return (
    // <div className="mt-8 sm:mt-10 md:mt-15 lg:mt-20">
    <div className="">
      <div id="about-container">
        <div className="the-container z-20">
          <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15 text-center mb-3">
            <h1
              className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
            bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
            "
            >
              {about.headerAbout}
            </h1>
            <p className="py-4 sm:py-8 md:py-12 lg:py-20 w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
              {about.descriptionOne}
            </p>
            <p className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
              {about.descriptionTwo}
            </p>
          </div>
          <div className="w-full flex justify-center mt-10">
            <button
              onClick={() => {
                router.push("/about-us");
              }}
              className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold
                hover:bg-gradient-to-r hover:from-customPink hover:to-customPink z-20"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="image-container">
        <div
          className="about-img"
          style={{
            backgroundImage: `url(${about.bigImage.sourceUrl})`,
          }}
        />
      </div>
    </div>
  );
}

export default AboutBlock;
