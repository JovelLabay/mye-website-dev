"use client";

import classNames from "classnames";
import React, { useState } from "react";

function IndustryBlock({
  industrySolutions,
}: {
  industrySolutions: {
    headerIndustrySolutons: string;
    solutionItem: {
      backgroundImage: {
        sourceUrl: string;
      };
      items: {
        descriptionItem: string;
      }[];
      titleItems: string;
    }[];
  };
}) {
  const [active, setActive] = useState(-0);

  return (
    <div className="my-8 sm:my-10 md:my-15 lg:my-20">
      <div className=" mx-3 sm:mx-5 md:mx-10 lg:mx-15 text-center mb-3">
        <h1
          className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
          bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
          "
        >
          {industrySolutions.headerIndustrySolutons}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-8 mt-5">
        {industrySolutions.solutionItem.map((solution, index) => (
          <div
            onClick={() => {
              setActive(index);
            }}
            key={index}
            className={classNames("h-[25vh] lg:h-[70vh] col-span-2")}
            style={{
              backgroundImage: `url(${solution.backgroundImage.sourceUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <div id="industry-boxes">
              <h5 className={classNames("font-semibold leading-7 text-white")}>
                {solution.titleItems}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustryBlock;
