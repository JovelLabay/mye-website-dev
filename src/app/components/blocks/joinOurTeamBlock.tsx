"use client";

import classNames from "classnames";
import Image from "next/image";
import React from "react";

function JoinOurTeamBlock({
  joinOurTeam,
}: {
  joinOurTeam: {
    headerJoinOurTeam: {
      headerLabel: string;
      headerColor: string;
      isGradient: boolean;
    };
    joinOurTeamDescriptionOne: string;
    joinOurTeamDescriptionTwo: string;
    joinOurTeamBigImage: {
      sourceUrl: string;
    };
    joinOurTeamMoreLink: {
      buttonLabel: string;
      buttonLink: {
        title: string;
        url: string;
      };
    };
    joinOurTeamHasMarginTop: boolean;
    joinOurTeamHasMarginBottom: boolean;
  };
}) {
  return (
    <div
      className={classNames(
        "the-container",
        joinOurTeam.joinOurTeamHasMarginTop &&
          "mt-8 sm:mt-10 md:mt-15 lg:mt-20",
        joinOurTeam.joinOurTeamHasMarginBottom &&
          "mb-8 sm:mb-10 md:mb-15 lg:mb-20",
      )}
    >
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-start gap-2">
            <h1
              className={classNames(
                "animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold inline-block text-transparent bg-clip-text pb-[70px]",
              )}
              {...(joinOurTeam.headerJoinOurTeam.isGradient
                ? {
                    style: {
                      background: `linear-gradient(90deg, ${joinOurTeam.headerJoinOurTeam.headerColor})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  }
                : {
                    style: {
                      color: `#${joinOurTeam.headerJoinOurTeam.headerColor}`,
                    },
                  })}
            >
              {joinOurTeam.headerJoinOurTeam.headerLabel}
            </h1>
            <p className="lg:w-[80%]">
              {joinOurTeam.joinOurTeamDescriptionOne}
            </p>
            {joinOurTeam.joinOurTeamDescriptionTwo && (
              <p className="lg:w-[80%]">
                {joinOurTeam.joinOurTeamDescriptionTwo}
              </p>
            )}
            <a href={`${window.location.pathname}#jobs`}>
              <button className="mt-3 py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
                {joinOurTeam.joinOurTeamMoreLink.buttonLabel}
              </button>
            </a>
          </div>
          <div>
            <Image
              className="mx-auto w-full h-full object-fill object-center"
              alt="Join Our Team"
              src={joinOurTeam.joinOurTeamBigImage.sourceUrl}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinOurTeamBlock;
