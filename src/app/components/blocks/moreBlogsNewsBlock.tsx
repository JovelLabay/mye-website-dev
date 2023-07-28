"use client";

import Link from "next/link";
import React from "react";

function MoreBlogsNewsBlock({
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
  return (
    <>
      <h5 className="font-bold text-customViolet">More Posts</h5>

      <div className="my-4 flex flex-col items-start justify-start gap-3">
        {blogsNews.blogsNewsItem
          .filter((item) => !item.isFeature)
          .map((blogItem, index) => (
            <Link
              className=" text-black no-underline font-thin"
              href={`/blogs-news/${index.toString()}-${blogItem.subItemHeader}`}
              key={index}
            >
              {blogItem.subItemHeader}
            </Link>
          ))}
      </div>
    </>
  );
}

export default MoreBlogsNewsBlock;
