"use client";

import React, { useRef } from "react";

function ServicesInfoBlock({
  services,
}: {
  services: {
    servicesBackgroundColor: string;
    hasMarginTop: boolean;
    hasMarginBottom: boolean;
    header: string;
    description: string;
    item: {
      description: string;
      learnMore: string;
      title: string;
      serviceList: {
        service: string;
        serviceMainContent: string;
      }[];
    }[];
  };
}) {
  return (
    <>
      <div className="bg-[#F1F6FA]">
        <div className="flex flex-col px-2 py-10 the-container">
          {services &&
            services.item.map((service, index) => (
              <div key={index} className="my-10">
                <div className="mb-3 ml-10">
                  <h5 className="font-bold leading-7 text-customViolet text-[25px] md:text-3xl sm:text-[28px] lg:text-4xl">
                    {service.title}
                  </h5>
                </div>
                <div className="flex justify-start items-start mx-10">
                  <p className="">{service.description}</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className=" flex justify-center items-center w-[90%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:w-full">
                      {service.serviceList &&
                        service.serviceList.map((desc, index) => {
                          return (
                            <div
                              id="services-box"
                              key={index}
                              className="rounded-lg h-auto p-4 flex justify-center items-center bg-white text-center gap-4 w-[300px]"
                            >
                              <div className="flex justify-center items-center min-h-0 sm:min-h-[20px] md:min-h-[50px] lg:min-h-[100px] w-full ">
                                <h5 className="font-semibold leading-7">
                                  {desc.service}
                                </h5>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ServicesInfoBlock;
