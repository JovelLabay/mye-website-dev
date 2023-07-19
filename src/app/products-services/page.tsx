import React from "react";

// META DATA
import type { Metadata } from "next";

// LIBRARIES
import client from "@/lib/apollo/client";
import { GetHomePage } from "@/lib/graphql/query";

export const metadata: Metadata = {
  title: "MYE Cloud | Products & Services",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

async function getBlocks() {
  const blocks = await client.query({
    query: GetHomePage,
  });

  await client.cache.reset();

  return blocks.data;
}

async function Page({ params }: { params: { slug: string } }) {
  const block = await getBlocks();

  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}

export default Page;
