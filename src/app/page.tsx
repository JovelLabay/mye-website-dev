import React from "react";

// META DATA
import type { Metadata } from "next";

// QUERY
import client from "@/lib/apollo/client";
import { GetHomePage } from "@/lib/graphql/query";

// BLOCKS
import Carousel from "@/blockscarouselBlock";
import Awards from "@/blocksawardsBlock";
import Products from "@/app/components/blocks/productsBlock";
import Services from "./components/blocks/servicesBlock";
import Works from "./components/blocks/worksBlock";
import Industry from "./components/blocks/industryBlock";
import About from "./components/blocks/aboutBlock";
import BlogsNews from "./components/blocks/blogsNewsBlock";
import JoinOurTeam from "./components/blocks/joinOurTeamBlock";

// FORM
import GetInTouchForm from "./components/forms/getInTouchForm";
import { getBlocks, getBlogsNews } from "@/lib/query/query";

export const metadata: Metadata = {
  title: "MYE Cloud | Home",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

export default async function Home() {
  const block = await getBlocks();
  const blogsNewsData = await getBlogsNews();

  const {
    carousel: { carouselItem },
    awards,
    products,
    services,
    myeWorking,
    industrySolutions,
    about,
    joinOurTeam,
    getInTouch,
  } = block?.nodeByUri;

  const blogsNewsData2 = blogsNewsData?.posts?.edges;

  return (
    <div>
      <Carousel carouselItem={carouselItem} />
      <Awards awards={awards} />
      <Products products={products} />
      <Services services={services} />
      <Works myeWorking={myeWorking} />
      <Industry industrySolutions={industrySolutions} />
      <About about={about} />
      <BlogsNews blogsNewsData2={blogsNewsData2} />
      <JoinOurTeam joinOurTeam={joinOurTeam} />

      {/* FORM */}
      <GetInTouchForm getInTouch={getInTouch} />
    </div>
  );
}
