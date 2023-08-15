"use client";

import React, { useState } from "react";
import Wysiwyg from "../shared/wysiwyg";
import { RWebShare } from "react-web-share";

import { BiShare } from "react-icons/bi";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { MdOutlineAccountCircle } from "react-icons/md";
import createComment from "@/lib/graphql/createComment";
import { Dialog } from "@headlessui/react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";

const axios = require("axios");

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
            description: string;
            avatar: {
              url: string;
            };
          };
        };
      };
    };
  };
}) {
  const router = useRouter();

  const [state, setState] = useState({
    isUploading: false,
    status: false,
    modal: false,
  });

  const [commentPlaceholder, setCommentPlaceholder] = useState("");
  const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

  return (
    <>
      <Wysiwyg
        content={blogsNews.data.post.blogsAndNewsPost.postBodyContent}
        className="flex flex-col gap-3"
      />

      <div className="flex flex-wrap my-4">
        {blogsNews.data.post.blogsAndNewsPost.postTags?.map((tag, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                router.push(`/blogs-news/tags/${tag}`);
              }}
              className="mb-3 mr-2 py-2 px-3 rounded-full bg-customPinkOpacity text-white drop-shadow-lg cursor-pointer hover:drop-shadow-xl"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <p className="text-sm font-light flex justify-start gap-2 text-customDark bg-gray-100 pt-3 flex-col p-3">
        <Image
          src={blogsNews.data.post.author.node.avatar?.url}
          alt={blogsNews.data.post.author.node.firstName}
          height={1000}
          width={1000}
          className="rounded-full w-[50px] h-[50px]"
        />
        <h1 className="text-[16px] sm:text-[19px] md:text-[24px] lg:text-[26px] text-customViolet font-bold">
          {blogsNews.data.post.author.node.firstName}{" "}
          {blogsNews.data.post.author.node.lastName}
        </h1>

        {blogsNews.data.post.author.node.description}
      </p>
      <div className="flex justify-end items-center my-4">
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
            postComment(commentPlaceholder);
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
            {state.isUploading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* MODAL */}
      <Dialog
        open={state.modal}
        onClose={() => setState((prev) => ({ ...prev, modal: false }))}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded bg-white p-4">
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-center flex justify-center items-center gap-3 my-3 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold text-customViolet">
                {state.status
                  ? "Your comment has been posted!"
                  : "Comment failed to upload"}
              </h3>

              <p>Your comment is subject for approval.</p>

              <button
                onClick={() => setState((prev) => ({ ...prev, modal: false }))}
                type="button"
                className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );

  async function postComment(content: string) {
    setState((prev) => ({ ...prev, isUploading: true }));
    let data = JSON.stringify({
      query: createComment,
      variables: {
        commentOn: 573,
        content: content,
        author: "Guest User",
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.NEXT_PUBLIC_WP_GRAPHQL_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const commentedData = await axios.request(config);

      setState((prev) => ({
        ...prev,
        isUploading: false,
        modal: true,
        status: true,
      }));
      setCommentPlaceholder("");
      console.log(JSON.stringify(commentedData.data));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isUploading: false,
        modal: true,
        status: false,
      }));
      console.log(error);
    }
  }
}

export default DetailedBlogsNewsBlock;
