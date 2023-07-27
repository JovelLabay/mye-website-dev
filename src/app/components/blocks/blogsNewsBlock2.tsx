"use client";

import React from "react";

function BlogsNewsBlock2({
  blogsNews,
}: {
  blogsNews: {
    blogsNewsItem: {
      isFeature: boolean;
      itemDescription: string;
      itemHeader: string;
      subItemHeader: string;
      datePublished: string;
      blogTags: string[];
      itemImage: {
        sourceUrl: string;
      };
    }[];
  };
}) {
  console.log(blogsNews);

  return (
    <div className="the-container mt-8 sm:mt-10 md:mt-15 lg:mt-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        {/* IS FEATURE */}
        <div>
          <h3 className="animate text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold mb-4">
            Editor’s Pick
          </h3>

          {blogsNews.blogsNewsItem
            .filter((item) => item.isFeature)
            .map((blogItem, index) => (
              <div
                className="grid grid-cols-1 md:grid-cols-3 md:gap-5"
                key={index}
              >
                <div
                  className="col-span-1 mb-3 md:mb-0"
                  style={{
                    minHeight: "300px",
                    backgroundImage: `url(${blogItem.itemImage.sourceUrl})`,
                    borderRadius: "15px",
                  }}
                />
                <div className="col-span-2 flex flex-col gap-3 items-start">
                  {blogItem.itemHeader && (
                    <p className="font-bold">{blogItem.itemHeader}</p>
                  )}
                  {blogItem.subItemHeader && (
                    <h5 className="font-semibold leading-7 text-customViolet">
                      {blogItem.subItemHeader}
                    </h5>
                  )}
                  {blogItem.itemDescription && (
                    <p>{blogItem.itemDescription}</p>
                  )}
                  <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
                    Read more blogs
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* REGUALR LIST */}
        <div className="mt-8 sm:mt-10 md:mt-15 lg:mt-20">
          <h3 className="animate text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold mb-4">
            Latest Blogs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogsNews.blogsNewsItem
              .filter((item) => !item.isFeature)
              .map((blogItem, index) => (
                <div className="flex flex-col" key={index}>
                  <div
                    className="col-span-1 mb-3 md:mb-0"
                    style={{
                      minHeight: "300px",
                      backgroundImage: `url(${blogItem.itemImage.sourceUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="col-span-2 flex flex-col gap-3 items-start">
                    {blogItem.itemHeader && (
                      <p className="font-bold">{blogItem.itemHeader}</p>
                    )}
                    {blogItem.subItemHeader && (
                      <h5 className="font-semibold leading-7 text-customViolet">
                        {blogItem.subItemHeader}
                      </h5>
                    )}
                    {blogItem.itemDescription && (
                      <p>{blogItem.itemDescription}</p>
                    )}
                    <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
                      Read more blogs
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsNewsBlock2;
