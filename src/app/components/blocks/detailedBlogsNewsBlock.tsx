"use client";

import React from "react";
import Wysiwyg from "../shared/wysiwyg";
import { RWebShare } from "react-web-share";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";

function DetailedBlogsNewsBlock({
  params,
  blogsNews,
}: {
  params: {
    blogNewsId: string;
  };
  blogsNews: {
    data: {
      post: {
        blogsAndNewsPost: {
          postBodyContent: string;
          postTags: string[];
        };
      };
    };
  };
}) {
  const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

  return (
    <>
      <Wysiwyg
        content={blogsNews.data.post.blogsAndNewsPost.postBodyContent}
        className="flex flex-col gap-3"
      />
      <div className="flex flex-wrap my-4">
        {blogsNews.data.post.blogsAndNewsPost.postTags.map((tag, index) => {
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
        >
          <button className="text-white gap-2 flex justify-center items-center py-2 px-3 rounded-full bg-customDark hover:drop-shadow-xl drop-shadow-lg">
            <BiShare />
            Share
          </button>
        </RWebShare>
      </div>

      <div className="mb-4 lg:mb-0">
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
