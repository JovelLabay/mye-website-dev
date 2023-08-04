"use client";

import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineCheck } from "react-icons/ai";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames";

function BlogsNewsBlock2({
  blogsNewsData2,
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
        postTitle: string | null;
      };
      id: string;
      title: string;
      uri: string;
    };
  }[];
}) {
  const route = useRouter();

  const [selected, setSelected] = useState("All Category");

  return (
    <div className="the-container pt-8 sm:pt-10 md:pt-15 lg:pt-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        {/* IS FEATURE */}
        <div>
          <h3 className="animate text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold mb-4">
            Editor’s Pick
          </h3>

          {blogsNewsData2
            .filter((item) => item.node.blogsAndNewsPost.isPostFeatured)
            .map((blogItem, index) => (
              <div
                className="grid grid-cols-1 md:grid-cols-3 md:gap-5 hover:cursor-pointer"
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
                    backgroundSize: "fill",
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
                    <h5 className="font-semibold leading-7 text-customViolet">
                      {blogItem.node.blogsAndNewsPost.postTitle}
                    </h5>
                  )}
                  {blogItem.node.blogsAndNewsPost.postShortDescription && (
                    <p className="text-ellipsis overflow-hidden h-[100px]">
                      {blogItem.node.blogsAndNewsPost.postShortDescription}
                    </p>
                  )}

                  <div className="w-full flex justify-center md:justify-start">
                    <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* REGUALR LIST */}
        <div className="pb-8 sm:pb-10 md:pb-15 lg:pb-20 mt-5">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="animate text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold mt-2">
              Latest Blogs
            </h3>

            <Listbox value={selected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative min-w-[170px] rounded-lg bg-gray-200 py-2 pl-3 pr-10 text-left">
                  <span className="block truncate">{selected}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <BsChevronDown
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm p-2">
                    {[
                      {
                        node: {
                          blogsAndNewsPost: { postCategory: "All Category" },
                        },
                      },
                      ...blogsNewsData2,
                    ]
                      .filter(
                        (item, index, self) =>
                          index ===
                          self.findIndex(
                            (t) =>
                              t.node.blogsAndNewsPost.postCategory ===
                              item.node.blogsAndNewsPost.postCategory,
                          ),
                      )
                      .map((person: any, personIdx) => (
                        <Listbox.Option
                          onClick={() =>
                            setSelected(
                              person.node.blogsAndNewsPost.postCategory,
                            )
                          }
                          key={personIdx}
                          value={person}
                          className={classNames(
                            "py-2 p-2 my-1 hover:cursor-pointer",
                            person.node.blogsAndNewsPost.postCategory ===
                              selected
                              ? "bg-gray-200 text-dark rounded-md"
                              : "",
                          )}
                        >
                          {person.node.blogsAndNewsPost.postCategory}
                        </Listbox.Option>
                      ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogsNewsData2 &&
              blogsNewsData2
                // .filter((item) => !item.node.blogsAndNewsPost.isPostFeatured)
                .filter((item: any) => {
                  if (selected === "All Category") {
                    return item;
                  } else if (
                    item.node.blogsAndNewsPost.postCategory === selected
                  ) {
                    return item;
                  }
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
                        <h5 className="font-semibold leading-7 text-customViolet">
                          {blogItem.node.blogsAndNewsPost.postTitle}
                        </h5>
                      )}
                      {blogItem.node.blogsAndNewsPost.postShortDescription && (
                        <p className="text-ellipsis overflow-hidden h-[100px]">
                          {blogItem.node.blogsAndNewsPost.postShortDescription}
                        </p>
                      )}

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
          {/* <div className="mt-4 flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 ">
              <button>Next</button>
              <p>dfs</p>
              <button>Prev</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BlogsNewsBlock2;
