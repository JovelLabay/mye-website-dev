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
  const [active, setActive] = useState<null | number>(null);

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
            className={classNames(
              "h-[35vh] lg:h-[70vh]",
              active === null
                ? "lg:col-span-2"
                : active === index
                ? "h-[60vh] lg:col-span-5"
                : "lg:col-span-1",
            )}
            style={{
              backgroundImage: `url(${
                solution.backgroundImage?.sourceUrl || ""
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <div id="industry-boxes">
              <h5
                className={classNames(
                  "font-semibold leading-7 text-white w-full text-center",
                  active === null
                    ? ""
                    : active === index
                    ? ""
                    : "lg:mb-20 lg:rotate-[-90deg]",
                )}
              >
                {solution.titleItems}
              </h5>
              {active === index && (
                <ul className="text-white p-0">
                  {solution.items?.map((theItem, index) => (
                    <li key={index}>{theItem?.descriptionItem}</li>
                  ))}
                </ul>
              )}

              {active === null && (
                <ul className="text-white p-0 mt-3">
                  {solution.items?.map((theItem, index) => (
                    <li key={index} className="hidden" id="hover-items">
                      {theItem?.descriptionItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustryBlock;
