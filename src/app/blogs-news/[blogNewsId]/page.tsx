import DetailedBlogsNewsBlock from "@/app/components/blocks/detailedBlogsNewsBlock";
import MoreBlogNewsTopicsBlock from "@/app/components/blocks/moreBlogNewsTopicsBlock";
import MoreBlogsNewsBlock from "@/app/components/blocks/moreBlogsNewsBlock";
import client from "@/lib/apollo/client";
import GET_BLOGS_AND_NEWS from "@/lib/graphql/queryBlogsNews";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const id = process.env.BLOGS_AND_NEWS_PAGE_ID;

  const blocks = await client.query({
    query: GET_BLOGS_AND_NEWS,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data?.blogAndNewsPage.blogsNews.blogsNewsItem.map(
    (
      blogItem: {
        itemHeader: string;
        subItemHeader: string;
      },
      index: number,
    ) => ({
      blogNewsId: `${index.toString()}`,
    }),
  );
}

async function getBlocks() {
  const id = process.env.BLOGS_AND_NEWS_PAGE_ID;

  const blocks = await client.query({
    query: GET_BLOGS_AND_NEWS,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data;
}

async function Page({ params }: { params: { blogNewsId: string } }) {
  const block = await getBlocks();

  const { headerBlogsAndNews, blogsNews, services } =
    await block?.blogAndNewsPage;

  return (
    <div className=" the-container mt-8 sm:mt-10 md:mt-15 lg:mt-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 relative">
          {/* BLOGS DETAILS */}
          <div className="col-span-2">
            <div className="flex gap-2 mb-4">
              <Link href="/blogs-news" className="no-underline text-black">
                MYE Cloud
              </Link>
              <p>{">"}</p>
              <p>Blogs and News</p>
            </div>
            <DetailedBlogsNewsBlock params={params} blogsNews={blogsNews} />
          </div>

          {/* MORE BLOGS */}
          <div className="custom-sticky col-span-1 min-h-[82vh] md:sticky mb-4 rounded-md bg-[#F1F6FA] p-3">
            <MoreBlogsNewsBlock blogsNews={blogsNews} />
            <MoreBlogNewsTopicsBlock blogsNews={blogsNews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
