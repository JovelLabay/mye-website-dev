"use client";

import React from "react";
import classNames from "classnames";

function AboutUsBlock({
  aboutUs,
}: {
  aboutUs: {
    mission: {
      missionLabel: string;
      missionDescription: string;
      backgroundColor: string;
      headerColor: string;
      isGradient: boolean;
    };
    vision: {
      visionLabel: string;
      visionDescription: string;
      backgroundColor: string;
      headerColor: string;
      isGradient: boolean;
    };
  };
}) {
  return (
    <div className="mt-8 sm:mt-10 md:mt-15 lg:mt-20 grid grid-cols-1 sm:grid-cols-2">
      {/* MISSION */}
      <div
        className="h-[500px] items-center flex"
        style={{ backgroundColor: "#" + aboutUs.mission.backgroundColor }}
      >
        <div className="ml-20">
          <h1
            className={classNames(
              "animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold inline-block text-transparent bg-clip-text pb-[70px]",
            )}
            {...(aboutUs.mission.isGradient
              ? {
                  style: {
                    background: `linear-gradient(90deg, ${aboutUs.mission.backgroundColor})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }
              : {
                  style: {
                    color: `#${aboutUs.mission.headerColor}`,
                  },
                })}
          >
            {aboutUs.mission.missionLabel}
          </h1>
          <p className="lg:w-[80%]">{aboutUs.mission.missionDescription}</p>
        </div>
      </div>
      {/* VISION */}
      <div
        className="h-[500px] items-center flex"
        style={{ backgroundColor: "#" + aboutUs.vision.backgroundColor || "" }}
      >
        <div className="ml-20">
          <h1
            className={classNames(
              "animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold inline-block text-transparent bg-clip-text pb-[70px]",
            )}
            {...(aboutUs.mission.isGradient
              ? {
                  style: {
                    background: `linear-gradient(90deg, ${
                      aboutUs.vision.backgroundColor || ""
                    })`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }
              : {
                  style: {
                    color: `#${aboutUs.vision.headerColor}`,
                  },
                })}
          >
            {aboutUs.vision.visionLabel}
          </h1>
          <p className="lg:w-[80%]">{aboutUs.vision.visionDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBlock;
