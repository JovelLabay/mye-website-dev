import React, { useEffect } from "react";

// LIBRARIES
import client from "@/lib/apollo/client";
import { GetAllPages } from "@/lib/graphql/query";

export async function generateStaticParams() {
  const pages = await client.query({
    query: GetAllPages,
  });

  await client.cache.reset();

  return pages.data.pages.nodes.map((page: { slug: string }) => ({
    params: {
      slug: page.slug,
    },
  }));
}

function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>sdfsdfsdfsdf</h1>
    </div>
  );
}

export default Page;
