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
import GetInTouchForm from "../components/forms/getInTouchForm";
import ServicesInfoBlock from "../components/blocks/servicesInfoBlock";
import { getBlocksProductsServices } from "@/lib/query/query";
import Tabs from "../components/shared/tabs";
import IndustryBlock2 from "../components/blocks/industryBlock2";

export const metadata: Metadata = {
  title: "MYE Cloud | Products & Services",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

async function Page() {
  const block = await getBlocksProductsServices();

  const { joinOurTeam, products, industrySolutions, services, getInTouch } =
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
            <p className="opacity-50">Products and Services</p>
          </div>
        </div>
      </div>

      {/* BLOCKS */}
      <JoinOurTeamBlock joinOurTeam={joinOurTeam} />
      <Tabs
        component={[
          { title: "Products", node: <ProductsBlock2 products={products} /> },
          {
            title: "Solutions",
            node: (
              <IndustryBlock2 industryItems={industrySolutions.solutionItem} />
            ),
          },
          {
            title: "Services",
            node: <ServicesInfoBlock services={services} />,
          },
        ]}
      />
      <GetInTouchForm getInTouch={getInTouch} />
    </>
  );
}

export default Page;
