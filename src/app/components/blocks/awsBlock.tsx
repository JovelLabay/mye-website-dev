"use client";

import Image from "next/image";
import React from "react";

function AWSBadge({
  badge,
}: {
  badge: {
    awardField: string;
    awardPosition: string;
    awardTitle: string;
    borderColor: string;
    hasColor: boolean;
  };
}) {
  console.log(badge);
  return (
    <div className="bg-red-500 w-[150px] h-[120px] relative">
      <div className="hexagon z-0"></div>
      <div
        style={{
          backgroundColor: "green",
          position: "absolute",
          width: "100%",
          left: 0,
          padding: "0px 5px",
        }}
      >
        <div>{badge.awardField}</div>
      </div>
    </div>
  );
}

export default AWSBadge;
