"use client";

import Image from "next/image";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

function AWSBadge({
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
  return (
    <div className="relative mx-3">
      <div
        className="hexagon"
        style={{ "--border-color": badge.borderColor } as any}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            top: -5,
            zIndex: "20",
          }}
        >
          <div className="flex justify-center text-center -mt-4 text-[20px] px-1 -mb-2">
            <b>{badge.awardTitle || ""}</b> &nbsp;
            {badge.isCertified && (
              <BsFillPatchCheckFill color="orange" className="mt-2" />
            )}
          </div>
          <div className="text-center text-gray-600 text-[15px]">certified</div>

          <div
            className=" font-bold text-[17px] text-center text-gray-700 h-[50px] flex justify-center items-center"
            style={{ lineHeight: "1.2", paddingTop: "4px" }}
          >
            {badge.awardPosition || ""}
          </div>
          <div className="text-center mt-2 text-[13px] text-gray-600">
            {badge.awardField || ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AWSBadge;
