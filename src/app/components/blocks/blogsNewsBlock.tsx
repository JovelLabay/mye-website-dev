"use client";

import React from "react";
import { useRouter } from "next/navigation";

function BlogsNewsBlock({
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

  const latesOnlyForNonFeatured = blogsNewsData2
    .filter((item) => !item.node.blogsAndNewsPost.isPostFeatured)
    .filter((_, index) => index < 3);

  return (
    <div className="bg-customSemiWhite">
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15 text-center">
          <h1
            className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold
          bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink inline-block text-transparent bg-clip-text
          "
          >
            {"Blogs & News"}
          </h1>
        </div>

        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="grid grid-cols-1 lg:grid-cols-7 mt-5 lg:gap-5">
            <div className="col-span7 lg:col-span-4">
              {blogsNewsData2
                .filter((item) => item.node.blogsAndNewsPost.isPostFeatured)
                .filter((_, index) => index === 0)
                .map((blogItem, index) => (
                  <div
                    key={index}
                    className="blogs-news-image-container flex flex-col gap-4 hover:cursor-pointer"
                    onClick={() =>
                      route.push(
                        `/blogs-news/${blogItem.node.id.replace(/=/g, "")}`,
                      )
                    }
                  >
                    <div
                      className="blogs-news-image"
                      style={{
                        backgroundImage: `url(${blogItem.node.blogsAndNewsPost.postShortImage?.sourceUrl})`,
                      }}
                    />
                    <div className="mb-4">
                      <p className="font-bold hidden lg:block">
                        {blogItem.node.blogsAndNewsPost.postCategory}
                      </p>
                      <h5 className="font-semibold leading-7 text-customViolet">
                        {blogItem.node.blogsAndNewsPost.postTitle}
                      </h5>
                      <p className="hidden lg:block">
                        {blogItem.node.blogsAndNewsPost.postShortDescription}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-span-3 flex flex-col gap-9 sm:gap-5 lg:gap-3 ">
              {latesOnlyForNonFeatured.map((blogItem, index) => (
                <div
                  key={index}
                  className="blogs-news-image-container-2 grid grid-cols-3 gap-3 hover:cursor-pointer"
                  onClick={() =>
                    route.push(
                      `/blogs-news/${blogItem.node.id.replace(/=/g, "")}`,
                    )
                  }
                >
                  <div
                    className="blogs-news-image-2 col-span-3 lg:col-span-1 h-[200px] sm:h-[250px] md:h-[300px] w-full lg:h-[150px]"
                    style={{
                      backgroundImage: `url(${blogItem.node.blogsAndNewsPost.postShortImage?.sourceUrl})`,
                    }}
                  />
                  <div className="col-span-3 lg:col-span-2">
                    <p className="font-bold hidden lg:block">
                      {blogItem.node.blogsAndNewsPost.postCategory}
                    </p>
                    <h5 className="font-semibold leading-7 text-customViolet">
                      {blogItem.node.blogsAndNewsPost.postTitle}
                    </h5>
                    <p className="hidden lg:block text-ellipsis overflow-hidden h-[100px]">
                      {blogItem.node.blogsAndNewsPost.postShortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold hover:bg-gradient-to-r hover:from-customPink hover:to-customPink"
              onClick={() => {
                route.push("/blogs-news");
              }}
            >
              Read more blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsNewsBlock;
