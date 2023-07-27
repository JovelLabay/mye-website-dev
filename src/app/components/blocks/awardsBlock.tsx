"use client";

import Image from "next/image";
import React from "react";
import AWSBadge from "../badges/awsBlock";
import AlibabaBadge from "../badges/alibabaBlock";

function Awards({
  awards,
}: {
  awards: {
    headerAwards: string;
    descriptionAwards: string;
    items: {
      title: string;
      description: string;
    }[];
    subHeader: string;
    awardItem: {
      sourceUrl: string;
    };
    awardItems: {
      awardField: string;
      awardPosition: string;
      awardTitle: string;
      borderColor: string;
      isCertified: boolean;
      hasColor: boolean;
    }[];
  };
}) {
  console.log(awards.awardItems);
  return (
    <div className="the-container mt-8 sm:mt-10 md:mt-15 lg:mt-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <h1 className="animate text-center text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-customViolet font-bold">
          {awards.headerAwards}
        </h1>
        <p className="animate text-center mt-3">{awards.descriptionAwards}</p>
      </div>

      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-5 md:gap-8 lg:gap-10 content-center mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        {awards.items.map((award, index) => (
          <div
            key={index}
            className="flex justify-start items-center flex-col text-center"
          >
            <h3 className="animate my-3 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold text-customViolet">
              {award.title}
            </h3>
            <p className="animate">{award.description}</p>
          </div>
        ))}
      </div>

      <div className="pt-10 mx-3 sm:mx-5 md:mx-10 lg:mx-15 text-center">
        <h3 className="animate text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold text-customViolet">
          {awards.subHeader}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center items-center mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        {awards.awardItems.map((badge, idx) => (
          <div
            key={idx}
            className="w-1/2 lg:w-1/5 p-1 mt-10 flex justify-center items-center"
          >
            {badge.awardTitle === "aws" && <AWSBadge badge={badge} />}
            {badge.awardTitle === "Alibaba Cloud" && (
              <AlibabaBadge badge={badge} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;
