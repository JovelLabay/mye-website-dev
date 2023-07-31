"use client";

import React, { useRef } from "react";

import Image from "next/image";

function RolesBlock({
  roles,
}: {
  roles: {
    roles: {
      title: string;
      roleDescription: string;
      requirements: {
        requirement: string;
      }[];
      responsibilities: {
        responsibility: string;
      }[];
    }[];
  };
}) {
  const contentRefs = useRef<any>([]);

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
    <div className="text-white mt-8 sm:mt-10 md:mt-15 lg:mt-20 bg-[#F1F6FA]">
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-3 relative">
            {/* BUTTONS */}
            <div className="custom-sticky flex flex-col items-start gap-4 text-[#2D2D2D] md:sticky mb-4 bg-[#F1F6FA]">
              {roles?.roles?.map((item: any, index: any) => (
                <button
                  key={index}
                  className="font-bold text-left"
                  onClick={() => scrollToDetailedDescription(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* CONTENTS */}
            <div className="md:col-span-2 text-[#2D2D2D] flex flex-col gap-3">
              {roles.roles?.map((item: any, index: any) => (
                <div
                  key={index}
                  ref={(element) => (contentRefs.current[index] = element)}
                >
                  <h5 className="font-bold">{item.title}</h5>
                  <p className="text-[15px] mb-3">{item.roleDescription}</p>
                  <div className="border-1 border-white px-3 py-4 gap-4 grid grid-cols-1 md:grid-cols-2 text-[15px]">
                    <div>
                      <h5 className="font-bold mb-3">Responsibilities</h5>
                      <ul>
                        {item &&
                          item.responsibilities.map(
                            (responsibility: any, index2: any) => (
                              <li key={index2} style={{ listStyle: "disc" }}>
                                {responsibility.responsibility}
                              </li>
                            ),
                          )}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-3">Requirements</h5>
                      <ul>
                        {item &&
                          item.requirements.map(
                            (requirement: any, index2: any) => (
                              <li key={index2} style={{ listStyle: "disc" }}>
                                {requirement.requirement}
                              </li>
                            ),
                          )}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold
                hover:bg-gradient-to-r hover:from-customPink hover:to-customPink"
                    >
                      Apply
                    </button>
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

export default RolesBlock;
