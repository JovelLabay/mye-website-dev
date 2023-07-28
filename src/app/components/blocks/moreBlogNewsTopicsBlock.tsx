"use client";

import Link from "next/link";
import React from "react";

function MoreBlogNewsTopicsBlock({
  blogsNews,
}: {
  blogsNews: {
    blogsNewsItem: {
      mainBlogNewsContent: any;
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
  return (
    <div className="pt-3">
      <h5 className="font-bold text-customViolet">Browse by Topic</h5>

      <div className="my-4 flex flex-col items-start justify-start gap-3">
        {blogsNews.blogsNewsItem
          .filter((item) => !item.isFeature)
          .map((blogItem, index) => (
            <Link
              className=" text-black no-underline font-thin"
              href={`/blogs-news/${index.toString()}`}
              key={index}
            >
              {blogItem.itemHeader}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default MoreBlogNewsTopicsBlock;
