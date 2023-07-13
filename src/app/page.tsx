import React, { useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import client from "@/lib/apollo/client";
import { GetHomePage } from "@/lib/graphql/query";
import Carousel from "@/blockscarouselBlock";
import Awards from "@/blocksawardsBlock";
import ProductsServices from "@/blocksproductsServicesBlock";

async function getBlocks() {
  const blocks = await client.query({
    query: GetHomePage,
  });

  await client.cache.reset();

  return blocks.data;
}

export default async function Home({ params }: { params: { slug: string } }) {
  const block = await getBlocks();

  const { carousel, awards, productsServices } = block?.nodeByUri;

  return (
    <div>
      <head>
        <title>MYE | Home</title>
      </head>

      <Carousel carouselItem={carousel.carouselItem} />
      <Awards awards={awards} />
      <ProductsServices productsServices={productsServices} />
    </div>
  );
}
