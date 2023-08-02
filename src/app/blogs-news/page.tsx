import client from "@/lib/apollo/client";
import Link from "next/link";
import React from "react";
import JoinOurTeamBlock from "../components/blocks/joinOurTeamBlock";
import GET_BLOGS_AND_NEWS from "@/lib/graphql/queryBlogsNews";
import HeaderBlogsNewsBlock from "../components/blocks/headerBlogsNewsBlock";
import BlogsNewsBlock2 from "../components/blocks/blogsNewsBlock2";
import { getBlocksBlogNews, getBlogsNews } from "@/lib/query/query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MYE Cloud | Blogs and News",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

async function Page() {
  const block = await getBlocksBlogNews();
  const blogsNewsData = await getBlogsNews();

  const { headerBlogsAndNews, blogsNews, services } =
    await block?.blogAndNewsPage;

  const blogsNewsData2 = blogsNewsData?.posts?.edges;

  return (
    <>
      {/* BLOCKS */}
      <HeaderBlogsNewsBlock headerBlogsAndNews={headerBlogsAndNews} />
      <BlogsNewsBlock2 blogsNewsData2={blogsNewsData2} />
    </>
  );
}

export default Page;
