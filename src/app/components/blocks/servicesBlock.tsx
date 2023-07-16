"use client";

import React from "react";

function ServicesBlock({
  services,
}: {
  services: {
    header: string;
    description: string;
    item: {
      description: string;
      learnMore: string;
      title: string;
    }[];
  };
}) {
  return (
    <div className="bg-customSemiWhite">
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15 text-center">
          <h1
            className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
          bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
          "
          >
            {services.header}
          </h1>
          <p className="animate mt-3 w-[100%] sm:w-[90%] md:w-[80%] lg:w-[50%] mx-auto text-customViolet">
            {services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {services.item.map((service, index) => (
            <div
              id="services-box"
              key={index}
              className="rounded-lg min-h-[100px] sm:min-h-[150px] md:min-h-[200px] lg:min-h-[350px] p-3 flex flex-col justify-between items-center bg-white text-center gap-4"
            >
              <div className="flex justify-center items-center min-h-0 sm:min-h-[20px] md:min-h-[50px] lg:min-h-[100px]">
                <h5 className="font-semibold leading-7 text-customViolet">
                  {service.title}
                </h5>
              </div>
              <div className="flex justify-start items-start min-h-[100px] sm:min-h-[90px] md:min-h-[120px] lg:min-h-[250px]">
                <p className="">{service.description}</p>
              </div>
              <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesBlock;
