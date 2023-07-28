"use client";

import React from "react";
import Wysiwyg from "../shared/wysiwyg";
import { RWebShare } from "react-web-share";

function DetailedBlogsNewsBlock({
  params,
  blogsNews,
}: {
  params: {
    blogNewsId: string;
  };
  blogsNews: {
    blogsNewsItem: {
      blogTags: string[];
      isFeature: boolean;
      mainBlogNewsContent: string;
    }[];
  };
}) {
  const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

  let id = blogsNews.blogsNewsItem[parseInt(params.blogNewsId)];

  return (
    <>
      <Wysiwyg
        content={id.mainBlogNewsContent}
        className="flex flex-col gap-3"
      />
      <div className="flex flex-wrap my-4">
        {id.blogTags &&
          id.blogTags.map((tag, index) => {
            return (
              <span
                key={index}
                className="mr-2 py-2 px-3 rounded-full bg-customPinkOpacity text-white drop-shadow-lg"
              >
                {tag}
              </span>
            );
          })}
      </div>
      <div className="flex justify-end items-center mb-4">
        <RWebShare
          data={{
            text: "Share this link",
            url: `${websiteDomain}/blogs-news/${params.blogNewsId}`,
            title: "Share this link",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button className="text-blue-500">Share this link</button>
        </RWebShare>
      </div>
    </>
  );
}

export default DetailedBlogsNewsBlock;
