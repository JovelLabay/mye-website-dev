"use client";

import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

function AlibabaBadge({
  badge,
}: {
  badge: {
    awardField: string;
    awardPosition: string;
    awardTitle: string;
    borderColor: string;
    isCertified: boolean;
    hasColor: boolean;
  };
}) {
  function starCount() {
    if (badge.awardField === "Associate") {
      return 1;
    } else if (badge.awardField === "Professional") {
      return 2;
    } else if (badge.awardField === "Expert") {
      return 3;
    } else {
      return 0;
    }
  }

  function fieldColor() {
    if (badge.awardField === "Associate") {
      return "#18ccc4";
    } else if (badge.awardField === "Professional") {
      return "#049c99";
    } else if (badge.awardField === "Expert") {
      return "#187474";
    } else {
      return "#FFFFFF";
    }
  }

  const stars = starCount();
  const colorField = fieldColor();

  return (
    <div className="relative mx-3">
      <div
        className="hexagon"
        style={
          {
            "--border-color": badge.borderColor,
            "--field-color": colorField,
          } as any
        }
      >
        <div
          className="flex items-center flex-col"
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            top: -5,
            zIndex: "20",
          }}
        >
          <div className="w-full flex justify-center -mt-4">
            {Array.from({ length: stars }).map((_, idx) => (
              <AiFillStar key={idx} className="h-[10px] mx-[-2px]" />
            ))}
          </div>
          <div className="flex justify-center text-center text-[13px] px-1 -mb-2 mt-1">
            <b>{badge.awardTitle || ""}</b> &nbsp;
          </div>
          <div className="text-center text-gray-400 text-[11px] mt-2 font-bold">
            CERTIFIED
          </div>
          <div className="text-center mt-2 text-[13px] text-white font-bold bg-[#333b3e] py-1 w-full">
            {badge.awardField.toUpperCase() || ""}
          </div>

          <div
            className="text-[10px] text-center text-gray-200 h-[50px] flex justify-center items-center w-[70%] -mt-1"
            style={{ lineHeight: "1.2", paddingTop: "4px" }}
          >
            {badge.awardPosition.toUpperCase() || ""}
          </div>
        </div>
      </div>
      <div
        className="absolute h-[24px] w-[150px] mt-[-35%]"
        style={{ zIndex: "-20", backgroundColor: colorField }}
      ></div>
    </div>
  );
}

export default AlibabaBadge;
