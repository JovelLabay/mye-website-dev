"use client";

import React, { useRef } from "react";
import Image from "next/image";

function MyTeamBlock({
  team,
}: {
  team: {
    teamHeader: string;
    team: {
      teamTitle: string;
      teamDetails: {
        experience: string;
        name: string;
        position: string;
        image: {
          sourceUrl: string;
        };
      }[];
    }[];
  };
}) {
  return (
    <>
      <div className="mt-20">
        <div className="text-center">
          <h1
            className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
          bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
          "
          >
            {team.teamHeader}
          </h1>
        </div>

        <div className="flex flex-col px-2 py-10 the-container">
          {team &&
            team.team.map((teamDetail, index) => (
              <div key={index} className="my-10">
                {/* <div className="mb-3 ml-10">
                  <h5 className="font-bold leading-7 text-[18px] text-customViolet  md:text-[25px] sm:text-[20px] lg:text-[28px]">
                    {teamDetail.teamTitle}
                  </h5>
                </div> */}
                <hr
                  style={{
                    border: "none",
                    borderTop: "5px solid black",
                  }}
                />

                <div className="flex justify-center items-center">
                  <div className=" flex justify-center items-center w-[90%]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 lg:w-full">
                      {teamDetail.teamDetails &&
                        teamDetail.teamDetails.map((team, index) => {
                          return (
                            <div key={index}>
                              <div className="flex flex-col justify-start min-h-0 sm:min-h-[20px] md:min-h-[50px] lg:min-h-[100px] w-full  gap-2 pb-10">
                                {/* <Image
                                  src={team.image.sourceUrl}
                                  alt={team.name}
                                  width={1000}
                                  height={1000}
                                  className="w-full h-full"
                                /> */}
                                <div className="font-semibold leading-7 flex justify-start pt-4">
                                  {team.name}
                                </div>

                                <div className="flex justify-start">
                                  {team.position}
                                </div>
                                <div className="flex flex-col">
                                  {team.experience
                                    .split(":")
                                    .map((part, index, array) => (
                                      <div
                                        key={index}
                                        className="flex justify-start"
                                      >
                                        {index < array.length - 1
                                          ? `${part.trim()}:`
                                          : part.trim()}
                                      </div>
                                    ))}
                                </div>
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

export default MyTeamBlock;
