import client from "@/lib/apollo/client";
import Link from "next/link";
import React from "react";
import JoinOurTeamBlock from "../components/blocks/joinOurTeamBlock";
import GET_BLOGS_AND_NEWS from "@/lib/graphql/queryBlogsNews";
import HeaderBlogsNewsBlock from "../components/blocks/headerBlogsNewsBlock";
import BlogsNewsBlock2 from "../components/blocks/blogsNewsBlock2";

async function getBlocks() {
  const id = process.env.BLOGS_AND_NEWS_PAGE_ID;

  const blocks = await client.query({
    query: GET_BLOGS_AND_NEWS,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data;
}

async function Page() {
  const block = await getBlocks();

  const { headerBlogsAndNews, blogsNews, services } =
    await block?.blogAndNewsPage;

  return (
    <>
      {/* BLOCKS */}
      <HeaderBlogsNewsBlock headerBlogsAndNews={headerBlogsAndNews} />
      <BlogsNewsBlock2 blogsNews={blogsNews} />
    </>
  );
}

export default Page;
