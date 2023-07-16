"use client";

import React from "react";

function WorksBlock({
  myeWorking,
}: {
  myeWorking: {
    headerWorks: string;
    imageWorking: {
      sourceUrl: string;
    };
  };
}) {
  return (
    <div className="the-container my-8 sm:my-10 md:my-15 lg:my-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <div className="text-center mb-3">
          <h1
            className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
          bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
          "
          >
            {myeWorking.headerWorks}
          </h1>
        </div>
        <div
          className="h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh]"
          style={{
            backgroundImage: `url(${myeWorking.imageWorking.sourceUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        ></div>
      </div>
    </div>
  );
}

export default WorksBlock;
