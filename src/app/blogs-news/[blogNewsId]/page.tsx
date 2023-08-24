import React from "react";
import Link from "next/link";
import client from "@/lib/apollo/client";
import { Metadata } from "next";

import DetailedBlogsNewsBlock from "@/app/components/blocks/detailedBlogsNewsBlock";
import MoreBlogsNewsBlock from "@/app/components/blocks/moreBlogsNewsBlock";

import GET_BLOG_NEWS_BY_ID from "@/lib/graphql/queryGetBlogNewsById";

import { getBlogsNews } from "@/lib/query/query";
import { GetAllBlogsAndNews } from "@/lib/graphql/query";

export async function generateStaticParams() {
  const getAllBlogsNews = await client.query({
    query: GetAllBlogsAndNews,
  });

  await client.cache.reset();

  return getAllBlogsNews.data.posts.edges.map(
    (blogNews: {
      node: {
        id: string;
      };
    }) => ({
      blogNewsId: blogNews.node.id.replace(/=/g, ""),
    }),
  );
}

async function getBlocks(id: string) {
  try {
    const actualData = await client.query({
      query: GET_BLOG_NEWS_BY_ID,
      context: {
        fetchOptions: {
          next: { revalidate: 0 },
        },
      } as any,
      variables: { id },
    });

    await client.cache.reset();

    return actualData;
  } catch (error) {
    console.log(error);
  }

  return null;
}

export const metadata: Metadata = {
  title: "MYE Cloud",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

async function Page({ params }: { params: { blogNewsId: string } }) {
  let actualBlogData = null;
  let hasData = true;
  const blogsNewsData = await getBlogsNews();

  try {
    actualBlogData = await getBlocks(`${params.blogNewsId}=`);
  } catch (error: any) {
    return null;
  }

  if (actualBlogData === null || actualBlogData.data.post === null) {
    hasData = false;
  }

  return hasData ? (
    <div className=" the-container mt-8 sm:mt-10 md:mt-15 lg:mt-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 relative">
          {/* BLOGS DETAILS */}
          <div className="col-span-2">
            <div className="flex gap-2 mb-4 font-thin text-xs  md:text-sm">
              <Link href="/" className="no-underline text-black">
                MYE Cloud
              </Link>
              <p className="text-customViolet">{">"}</p>
              <Link href="/blogs-news" className="no-underline text-black">
                Blogs and News
              </Link>
              <p className="text-customViolet">{">"}</p>
              <p className="opacity-50">
                {actualBlogData!.data.post.blogsAndNewsPost.postTitle}
              </p>
            </div>

            <div className="mb-5">
              <h1 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-customViolet font-bold">
                {actualBlogData!.data.post.blogsAndNewsPost.postTitle}
              </h1>
              <p className="italic text-sm font-light flex justify-start items-center gap-2 text-customDark py-1">
                {"by "} {actualBlogData!.data.post.author.node.firstName}{" "}
                {actualBlogData!.data.post.author.node.lastName}
              </p>
              <p>{actualBlogData!.data.post.blogsAndNewsPost.postPublished}</p>
            </div>
            <DetailedBlogsNewsBlock
              params={params}
              blogsNews={actualBlogData!}
            />
          </div>

          {/* MORE BLOGS */}
          <div className="custom-sticky col-span-1 min-h-[82vh] md:sticky mb-4 rounded-md bg-[#F1F6FA] p-3">
            <MoreBlogsNewsBlock
              blogsNewsData2={blogsNewsData.posts.edges}
              actualBlogData={actualBlogData!.data.post}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <h1>Not Found</h1>
    </div>
  );
}

export default Page;

/**
 * 
 * async function getNews() {
  const getAllBlogsNews = await client.query({
    query: GetAllBlogsAndNews,
  });

  await client.cache.reset();

  return getAllBlogsNews.data.posts.edges.map(
    (blogNews: {
      node: {
        id: string;
      };
    }) => ({
      blogNewsId: blogNews.node.id.replace(/=/g, ""),
    }),
  );
}
 * 
 */
