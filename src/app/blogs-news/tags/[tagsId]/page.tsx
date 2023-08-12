import client from "@/lib/apollo/client";
import Link from "next/link";
import React from "react";
import GET_BLOGS_AND_NEWS from "@/lib/graphql/queryBlogsNews";
import HeaderBlogsNewsBlock from "@/blocksheaderBlogsNewsBlock";
import BlogsNewsBlock2 from "@/blocksblogsNewsBlock2";
import { getBlocksBlogNews, getBlogsNews } from "@/lib/query/query";
import { Metadata } from "next";
import BlogsByTags from "@/app/components/shared/blogsByTags";

export const metadata: Metadata = {
  title: "MYE Cloud | Blogs and News - Tags",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

async function Page({ params }: { params: { tagsId: string } }) {
  const block = await getBlocksBlogNews();
  const blogsNewsData = await getBlogsNews();

  const { headerBlogsAndNews } = await block?.blogAndNewsPage;

  const blogsNewsData2 = blogsNewsData?.posts?.edges;

  return (
    <>
      <HeaderBlogsNewsBlock
        headerBlogsAndNews={headerBlogsAndNews}
        params={params.tagsId}
      />
      <BlogsByTags blogsNewsData2={blogsNewsData2} params={params.tagsId} />
    </>
  );
}

export default Page;
