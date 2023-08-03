"use client";

import classNames from "classnames";
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
          blogsNewsData2.map((blogItem, index) => (
            <Link
              className={classNames(
                "text-black no-underline text-sm",
                blogItem.node.id === actualBlogData.id
                  ? "font-bold"
                  : "font-thin ",
              )}
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
