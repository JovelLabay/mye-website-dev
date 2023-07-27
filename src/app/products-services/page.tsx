import React from "react";

import Link from "next/link";

// META DATA
import type { Metadata } from "next";

// LIBRARIES
import client from "@/lib/apollo/client";
import GET_PRODUCT_SERVICE from "@/lib/graphql/queryProductsServices";

// BLOCKS
import JoinOurTeamBlock from "../components/blocks/joinOurTeamBlock";
import ProductsBlock2 from "../components/blocks/productsBlock2";
import ServicesBlock from "../components/blocks/servicesBlock";
import GetInTouchForm from "../components/forms/getInTouchForm";

export const metadata: Metadata = {
  title: "MYE Cloud | Products & Services",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

async function getBlocks() {
  const id = process.env.PRODUCT_SERVICE_PAGE_ID;

  const blocks = await client.query({
    query: GET_PRODUCT_SERVICE,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data;
}

async function Page() {
  const block = await getBlocks();

  const { joinOurTeam, products, services, getInTouch } =
    await block?.productServicesPage;

  return (
    <>
      <div className="the-container mt-8 sm:mt-10 lg:mt-15">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="flex gap-2 mb-4">
            <Link href="/" className="no-underline text-black">
              MYE Cloud
            </Link>
            <p>{">"}</p>
            <p>Products</p>
          </div>
        </div>
      </div>

      {/* BLOCKS */}
      <JoinOurTeamBlock joinOurTeam={joinOurTeam} />
      <ProductsBlock2 products={products} />
      <ServicesBlock services={services} />
      <GetInTouchForm getInTouch={getInTouch} />
    </>
  );
}

export default Page;
