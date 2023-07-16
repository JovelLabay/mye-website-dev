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

        <div className="grid grid-cols-1 lg:grid-cols-5 mt-5 gap-4">
          <div className="hidden lg:block lg:col-span-3">
            {blogsNews.blogsNewsItem
              .filter((item) => item.isFeature)
              .map((blogItem, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <Image
                    id="blogs-news-image"
                    alt="Image background"
                    src={blogItem.itemImage.sourceUrl}
                    className="rounded-lg w-[150px] h-[150px] lg:h-auto lg:w-full shadow-lg"
                    width={100}
                    height={150}
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

          <div className="col-span-2 flex flex-col gap-4">
            {blogsNews.blogsNewsItem
              .filter((item) => !item.isFeature)
              .map((blogItem, index) => (
                <div
                  key={index}
                  className="flex justify-center items-start gap-3"
                >
                  <Image
                    id="blogs-news-image"
                    alt="Image background"
                    src={blogItem.itemImage.sourceUrl}
                    className="rounded-lg mt-4 shadow-lg"
                    width={150}
                    height={150}
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
        </div>
      </div>
    </div>
  );
}

export default BlogsNewsBlock;
