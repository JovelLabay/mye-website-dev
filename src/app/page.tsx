import React from "react";

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

async function getBlocks() {
  const blocks = await client.query({
    query: GetHomePage,
  });

  await client.cache.reset();

  return blocks.data;
}

export default async function Home() {
  const block = await getBlocks();

  const {
    carousel: { carouselItem },
    awards,
    products,
    services,
    myeWorking,
    industrySolutions,
    about,
    blogsNews,
  } = block?.nodeByUri;

  return (
    <div>
      <Carousel carouselItem={carouselItem} />
      <Awards awards={awards} />
      <Products products={products} />
      <Services services={services} />
      <Works myeWorking={myeWorking} />
      <Industry industrySolutions={industrySolutions} />
      <About about={about} />
      <BlogsNews blogsNews={blogsNews} />
    </div>
  );
}
