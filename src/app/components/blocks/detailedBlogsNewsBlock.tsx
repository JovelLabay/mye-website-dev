"use client";

import React from "react";
import Wysiwyg from "../shared/wysiwyg";
import { RWebShare } from "react-web-share";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

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
      <div className="flex justify-end items-center mb-4 gap-1 text-red-500">
        <a
          className="share-link text-customDark"
          href={`https://www.facebook.com/sharer/sharer.php?u=${websiteDomain}/blogs-news/${params.blogNewsId}`}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook size={30} />
        </a>

        <a
          className="share-link text-customDark"
          href={`https://instagram.com/intent/tweet?url=${websiteDomain}/blogs-news/${params.blogNewsId}`}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram size={30} />
        </a>

        <a
          className="share-link text-customDark"
          href={`https://www.linkedin.com/shareArticle?url=${websiteDomain}/blogs-news/${params.blogNewsId}`}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} />
        </a>
      </div>

      <div>
        <form className="mt-4 w-full mx-auto">
          <label htmlFor="Message" className="mb-2 font-bold">
            Comment
          </label>
          <textarea
            placeholder="Compose your comment here..."
            className="w-full rounded-lg min-h-[200px] p-2 placeholder:text-[#A4A4A4] text-black outline-none bg-gray-100"
          />
          <button
            type="submit"
            id="get-in-touch-send-btn"
            className="mt-3 py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-customViolet text-white font-medium md:font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default DetailedBlogsNewsBlock;
