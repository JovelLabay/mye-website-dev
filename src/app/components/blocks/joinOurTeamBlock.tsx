"use client";

import Image from "next/image";
import React from "react";

function JoinOurTeamBlock({
  joinOurTeam,
}: {
  joinOurTeam: {
    headerJoinOurTeam: string;
    joinOurTeamDescriptionOne: string;
    joinOurTeamDescriptionTwo: string;
    joinOurTeamBigImage: {
      sourceUrl: string;
    };
  };
}) {
  return (
    <div className="the-container mt-8 sm:mt-10 md:mt-15 lg:mt-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-start gap-2">
            <h1
              className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
          bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
          "
            >
              {joinOurTeam.headerJoinOurTeam}
            </h1>
            <p className="lg:w-[80%]">
              {joinOurTeam.joinOurTeamDescriptionOne}
            </p>
            <p className="lg:w-[80%]">
              {joinOurTeam.joinOurTeamDescriptionTwo}
            </p>
            <button className="mt-3 py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
              View Openings
            </button>
          </div>
          <div>
            <Image
              className="mx-auto lg:mx-0 w-[70%] lg:w-full h-full object-cover object-center"
              alt="Join Our Team"
              src={joinOurTeam.joinOurTeamBigImage.sourceUrl}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinOurTeamBlock;
