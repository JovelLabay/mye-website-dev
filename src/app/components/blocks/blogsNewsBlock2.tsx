"use client";

import React from "react";

function BlogsNewsBlock2({
  blogsNews,
}: {
  blogsNews: {
    isFeature: boolean;
    itemDescription: string;
    itemHeader: string;
    subItemHeader: string;
    itemImage: {
      sourceUrl: string;
    };
  }[];
}) {
  console.log(blogsNews);
  return (
    <div className="the-container mt-8 sm:mt-10 md:mt-15 lg:mt-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        {/* IS FEATURE */}
        <div>
          <h3 className="animate text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold mb-4">
            sdfsdf
          </h3>

          {}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1">sdfsdf</div>
            <div className="col-span-2">sdfsdf</div>
          </div>
        </div>

        {/* REGUALR LIST */}
      </div>
    </div>
  );
}

export default BlogsNewsBlock2;
