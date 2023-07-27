import client from "@/lib/apollo/client";
import GET_BLOGS_AND_NEWS from "@/lib/graphql/queryBlogsNews";
import React from "react";

export async function generateStaticParams() {
  const id = process.env.BLOGS_AND_NEWS_PAGE_ID;

  const blocks = await client.query({
    query: GET_BLOGS_AND_NEWS,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data?.blogAndNewsPage.blogsNews.blogsNewsItem.map(
    (blogItem: any, index: number) => ({
      blogNewsId: "lala" + index,
    }),
  );
}

async function Page({ params }: { params: { blogNewsId: string } }) {
  return (
    <div>
      <h1>{params.blogNewsId}</h1>
    </div>
  );
}

export default Page;
