import React from "react";

// META DATA
import type { Metadata } from "next";

// LIBRARIES
import client from "@/lib/apollo/client";
import GET_PRODUCT_SERVICE from "@/lib/graphql/queryProductsServices";

// BLOCKS
import JoinOurTeamBlock from "../components/blocks/joinOurTeamBlock";

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

async function Page({ params }: { params: { slug: string } }) {
  const block = await getBlocks();

  const { joinOurTeam } = await block?.productServicesPage;

  return (
    <div>
      <JoinOurTeamBlock joinOurTeam={joinOurTeam} />
    </div>
  );
}

export default Page;
