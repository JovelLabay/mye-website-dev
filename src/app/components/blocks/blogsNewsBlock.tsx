"use client";

import Image from "next/image";
import React from "react";

function BlogsNewsBlock({
  blogsNews,
}: {
  blogsNews: {
    headerBlogsNews: string;
    blogsNewsItem: {
      itemHeader: string;
      subItemHeader: string;
      itemDescription: string;
      isFeature: boolean;
      itemImage: {
        sourceUrl: string;
      };
    }[];
  };
}) {
  return (
    <div className="bg-customSemiWhite">
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15 text-center">
          <h1
            className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
          bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
          "
          >
            {blogsNews.headerBlogsNews}
          </h1>
        </div>

        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="grid grid-cols-1 lg:grid-cols-7 mt-5 gap-4">
            <div className="hidden lg:block lg:col-span-4">
              {blogsNews.blogsNewsItem
                .filter((item) => item.isFeature)
                .map((blogItem, index) => (
                  <div
                    key={index}
                    className="blogs-news-image-container flex flex-col gap-4 hover:cursor-pointer"
                  >
                    <div
                      className="blogs-news-image"
                      style={{
                        backgroundImage: `url(${blogItem.itemImage.sourceUrl})`,
                      }}
                    />
                    <div>
                      <p className="font-bold">{blogItem.itemHeader}</p>
                      <h5 className="font-semibold leading-7 text-customViolet">
                        {blogItem.subItemHeader}
                      </h5>
                      <p>{blogItem.itemDescription}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-span-3 flex flex-col gap-9 sm:gap-5 lg:gap-3">
              {blogsNews.blogsNewsItem
                .filter((item) => !item.isFeature)
                .map((blogItem, index) => (
                  <div
                    key={index}
                    className="blogs-news-image-container-2 grid grid-cols-3 gap-3 hover:cursor-pointer"
                  >
                    <div
                      className="blogs-news-image-2 col-span-3 lg:col-span-1 h-[200px] sm:h-[250px] md:h-[300px] w-full lg:h-[150px]"
                      style={{
                        backgroundImage: `url(${blogItem.itemImage.sourceUrl})`,
                      }}
                    />
                    <div className="col-span-3 lg:col-span-2">
                      <p className="font-bold hidden lg:block">
                        {blogItem.itemHeader}
                      </p>
                      <h5 className="font-semibold leading-7 text-customViolet">
                        {blogItem.subItemHeader}
                      </h5>
                      <p className="hidden lg:block">
                        {blogItem.itemDescription}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
              Read more blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsNewsBlock;
