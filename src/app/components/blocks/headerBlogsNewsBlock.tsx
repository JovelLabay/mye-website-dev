"use client";

import classNames from "classnames";
import Link from "next/link";
import React from "react";

function HeaderBlogsNewsBlock({
  headerBlogsAndNews,
}: {
  headerBlogsAndNews: {
    has_magrin_top: boolean;
    headerBlogsAndNewsTitle: string;
    headerBlogsAndNewsDescription: string;
    backgroundImage: {
      sourceUrl: string;
    };
  };
}) {
  return (
    <div
      className={classNames(
        "text-white",
        headerBlogsAndNews.has_magrin_top && "mt-8 sm:mt-10 md:mt-15 lg:mt-20",
      )}
      style={{
        backgroundImage: `url(${headerBlogsAndNews.backgroundImage.sourceUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="flex gap-2 mb-4 text-white">
            <Link href="/" className="no-underline text-white">
              MYE Cloud
            </Link>
            <p>{">"}</p>
            <p>Blogs and News</p>
          </div>

          <h1 className="animate text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold">
            {headerBlogsAndNews.headerBlogsAndNewsTitle}
          </h1>

          <p className="mt-8 sm:mt-10 md:mt-15 lg:mt-20">
            {headerBlogsAndNews.headerBlogsAndNewsDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderBlogsNewsBlock;
