"use client";

import Link from "next/link";
import React from "react";

function MoreBlogsNewsBlock({
  blogsNewsData2,
  actualBlogData,
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
  actualBlogData: {
    id: string;
    blogsAndNewsPost: {
      isPostFeatured: boolean | null;
    };
  };
}) {
  return (
    <>
      <h5 className="font-bold text-customViolet">More Posts</h5>

      <div className="my-4 flex flex-col items-start justify-start gap-3">
        {blogsNewsData2 &&
          blogsNewsData2
            .filter((item) => item.node.id !== actualBlogData.id)
            .map((blogItem, index) => (
              <Link
                className=" text-black no-underline font-thin text-sm"
                href={`/blogs-news/${blogItem.node.id.replace(/=/g, "")}`}
                key={index}
              >
                {blogItem.node.blogsAndNewsPost.postTitle}
              </Link>
            ))}
      </div>
    </>
  );
}

export default MoreBlogsNewsBlock;
