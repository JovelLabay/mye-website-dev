"use client";

import React, { useState } from "react";
import Wysiwyg from "../shared/wysiwyg";
import { RWebShare } from "react-web-share";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { MdOutlineAccountCircle } from "react-icons/md";

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
          postPublished: string;
        };
        author: {
          node: {
            firstName: string;
            lastName: string;
            userId: number;
          };
        };
      };
    };
  };
}) {
  const router = useRouter();

  const [commentPlaceholder, setCommentPlaceholder] = useState("");
  const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

  return (
    <>
      <Wysiwyg
        content={blogsNews.data.post.blogsAndNewsPost.postBodyContent}
        className="flex flex-col gap-3"
      />
      <p className="italic text-sm font-light flex justify-start items-center gap-2 text-customDark pt-3">
        <MdOutlineAccountCircle size={25} />
        {blogsNews.data.post.author.node.firstName}
        {blogsNews.data.post.author.node.lastName}
        {" | "}
        {blogsNews.data.post.blogsAndNewsPost.postPublished}
      </p>
      <div className="flex flex-wrap my-4">
        {blogsNews.data.post.blogsAndNewsPost.postTags?.map((tag, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                router.push(`/blogs-news/tags/${tag}`);
              }}
              className="mb-3 mr-2 py-2 px-3 rounded-full bg-customPinkOpacity text-white drop-shadow-lg"
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
        <form
          className="mt-4 w-full mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(commentPlaceholder);
          }}
        >
          <label htmlFor="Message" className="mb-2 font-bold">
            Comment
          </label>
          <textarea
            name="Message"
            value={commentPlaceholder}
            onChange={(e) => setCommentPlaceholder(e.target.value)}
            placeholder="Compose your comment here..."
            className="w-full rounded-lg min-h-[200px] p-2 placeholder:text-[#A4A4A4] text-black outline-none bg-gray-100"
          />
          <button
            disabled={commentPlaceholder === ""}
            type="submit"
            id="get-in-touch-send-btn"
            className={classNames(
              "mt-3 py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-customViolet text-white font-medium md:font-semibold",
              {
                "opacity-50 hover:cursor-not-allowed":
                  commentPlaceholder === "",
              },
            )}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default DetailedBlogsNewsBlock;
