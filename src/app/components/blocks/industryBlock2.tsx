"use client";

import React, { useRef, useState } from "react";

import Image from "next/image";
import classNames from "classnames";

function IndustryBlock2({
  industryItems,
}: {
  industryItems: {
    titleItems: string;
    items: {
      descriptionItem: string;
    }[];
  }[];
}) {
  const contentRefs = useRef<any>([]);
  const [indexItem, setIndex] = useState(-0);

  const scrollToDetailedDescription = (index: number) => {
    if (contentRefs.current[index]) {
      const offset = 600;

      const targetOffset = contentRefs.current[index].offsetTop + offset;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-white bg-[#F1F6FA]">
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-3 relative">
            {/* BUTTONS */}
            <div className="custom-sticky flex flex-col items-start text-[#2D2D2D] md:sticky mb-4 bg-[#F1F6FA]">
              {industryItems.map((item, index) => (
                <button
                  key={index}
                  className={classNames(
                    "font-bold text-left py-2 pl-2",
                    indexItem === index
                      ? "border-l-4 border-customViolet"
                      : "border-l-4 ",
                  )}
                  onClick={() => {
                    scrollToDetailedDescription(index);
                    setIndex(index);
                  }}
                >
                  {item.titleItems}
                </button>
              ))}
            </div>

            {/* CONTENTS */}
            <div className="md:col-span-2 text-[#2D2D2D] flex flex-col gap-3">
              {industryItems.map((item, index) => (
                <div
                  key={index}
                  ref={(element) => (contentRefs.current[index] = element)}
                >
                  <h5 className="font-bold mb-3">{item.titleItems}</h5>

                  <div className="border-1 border-white px-3 py-4 gap-4 grid grid-cols-1 md:grid-cols-2">
                    {item.items &&
                      item.items.map((item, index3) => (
                        <p key={index3}>{item.descriptionItem}</p>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryBlock2;
