"use client";

import React from "react";
import { useRouter } from "next/navigation";

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
                  <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
                    Read more
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* REGUALR LIST */}
        <div className="pb-8 sm:pb-10 md:pb-15 lg:pb-20 mt-5">
          <h3 className="animate text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold mb-4">
            Latest Blogs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogsNewsData2
              .filter((item) => !item.node.blogsAndNewsPost.isPostFeatured)
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
                    <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsNewsBlock2;
