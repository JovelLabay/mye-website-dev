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
    workingItem: {
      title: string;
      worksDescription: {
        workingDescription: string;
      }[];
    }[];
  };
}) {
  return (
    <div className="the-container my-8 sm:my-10 md:my-15 lg:my-20 hidden lg:block">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <div className="text-center mb-3">
          <h1
            className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
          bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
          "
          >
            {myeWorking.headerWorks}
          </h1>
          {/* DOT 1 */}
          <div className="dot-1-container">
            <div className="dot-1"></div>
            <div className="dot-1-round"></div>
            <div className="dot-1-line"></div>

            <div className="popup-content1">
              <h2>Security</h2>
              <ul>
                <li>Native Security capabilities including firewalls</li>
                <li>WAF</li>
                <li>Encryption</li>
              </ul>
            </div>
          </div>
          {/* DOT 2 */}
          <div className="dot-2-container">
            <div className="dot-2"></div>
            <div className="dot-2-round"></div>
            <div className="dot-2-line"></div>

            <div className="popup-content2">
              <h2>Compute</h2>
              <ul>
                <li>
                  Powered by latest intel (TM) generation processors for maximum
                  performance
                </li>
              </ul>
            </div>
          </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:hidden gap-3 mt-5 lg:mt-0 text-white">
          {myeWorking.workingItem.map((workItem, index) => (
            <div key={index} className="bg-customMainBlue p-4 rounded-lg">
              <h5 className="font-semibold leading-7">{workItem.title}</h5>
              <ul>
                {workItem.worksDescription.map((workDescription, index2) => (
                  <li key={index2} className="list-disc">
                    {workDescription.workingDescription}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorksBlock;
