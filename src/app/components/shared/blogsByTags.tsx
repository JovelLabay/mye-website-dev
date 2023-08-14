"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";

function BlogsByTags({
  blogsNewsData2,
  params,
}: {
  blogsNewsData2: {
    node: {
      blogsAndNewsPost: {
        isPostFeatured: boolean | null;
        postBodyContent: string | null;
        postCategory: string[];
        postPublished: string | null;
        postShortDescription: string | null;
        postShortImage: {
          sourceUrl: string | null;
        };
        postTags: string[];
        postTitle: string | null;
      };
      id: string;
      title: string;
      uri: string;
      author: {
        node: {
          userId: string;
          email: string;
          lastName: string;
          firstName: string;
          avatar: {
            url: string;
          };
        };
      };
    };
  }[];
  params: string;
}) {
  const route = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  function paginateArray(
    blogsNewsData2: BlogsNewsData[],
    itemsPerPage: number,
    pageNumber: number,
  ) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogsNewsData2.slice(startIndex, endIndex);
  }

  const paginatedBlogsData = paginateArray(blogsNewsData2, 6, currentPage);

  return (
    <div className="the-container">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <div className="pb-8 sm:pb-10 md:pb-15 lg:pb-20 mt-5">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="animate text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold mt-2">
              Latest Blogs from{" "}
              <span className="text-customViolet">{params}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogsNewsData2 &&
              blogsNewsData2
                .filter((tag) => {
                  return tag.node.blogsAndNewsPost.postTags.includes(params);
                })
                .map((blogItem, index) => (
                  <div
                    className="flex flex-col hover:cursor-pointer"
                    key={index}
                    onClick={() =>
                      route.push(
                        `/blogs-news/${blogItem.node.id.replace(/=/g, "")}`,
                      )
                    }
                  >
                    <div
                      className="col-span-1 mb-3 md:mb-0"
                      style={{
                        minHeight: "300px",
                        backgroundImage: `url(${blogItem.node.blogsAndNewsPost.postShortImage.sourceUrl})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                      }}
                    />
                    <div className="col-span-2 flex flex-col gap-3 items-start">
                      {blogItem.node.blogsAndNewsPost.postCategory && (
                        <p className="font-bold">
                          {blogItem.node.blogsAndNewsPost.postCategory}
                        </p>
                      )}
                      {blogItem.node.blogsAndNewsPost.postTitle && (
                        <h5 className="font-semibold leading-7 text-customViolet truncate w-full">
                          {blogItem.node.blogsAndNewsPost.postTitle}
                        </h5>
                      )}
                      {blogItem.node.blogsAndNewsPost.postShortDescription && (
                        <p className="truncate w-full">
                          {blogItem.node.blogsAndNewsPost.postShortDescription}
                        </p>
                      )}
                      <p className="italic text-sm font-light flex justify-start items-center gap-2 text-customDark">
                        <Image
                          src={blogItem.node.author.node.avatar.url}
                          alt={blogItem.node.author.node.firstName}
                          height={1000}
                          width={1000}
                          className="rounded-full w-[25px] h-[25px]"
                        />
                        {blogItem.node.author.node.firstName}
                        {blogItem.node.author.node.lastName}
                        {" | "}
                        {blogItem.node.blogsAndNewsPost.postPublished}
                      </p>

                      <div className="w-full flex justify-center md:justify-start">
                        <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          {/* PAGINATION */}
          <div className="mt-8 flex justify-center items-center ">
            <div className="flex justify-center items-center gap-3 bg-violet-100 rounded-md">
              <button
                className={classNames(
                  "text-violet-500 py-2 px-3 border-r border-violet-400",
                  currentPage === 1 && "opacity-50",
                )}
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                Prev
              </button>
              <p className="text-violet-500 font-thin text-sm">
                Page No {currentPage}
              </p>
              <button
                className={classNames(
                  "text-violet-500 py-2 px-3 border-l border-violet-400",
                  // currentPage === Math.ceil(blogsNewsData2.length / 6) &&
                  paginatedBlogsData.length < 6 && "opacity-50",
                )}
                disabled={paginatedBlogsData.length < 6}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsByTags;
