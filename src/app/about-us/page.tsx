import React, { useState } from "react";

import Link from "next/link";

// META DATA
import type { Metadata } from "next";

// LIBRARIES
import client from "@/lib/apollo/client";
import GET_ABOUT_US from "@/lib/graphql/queryAboutUs";

// BLOCKS
import JoinOurTeamBlock from "../components/blocks/joinOurTeamBlock";
import AboutUsBlock from "../components/blocks/aboutUsBlock";
import MyTeamBlock from "../components/blocks/myTeamBlock";

async function getBlocks() {
  const id = process.env.ABOUT_US_PAGE_ID;

  const blocks = await client.query({
    query: GET_ABOUT_US,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    } as any,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data;
}

export const metadata: Metadata = {
  title: "MYE Cloud | About Us",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

async function Page() {
  const block = await getBlocks();

  const { joinOurTeam, aboutUs, team } = await block?.aboutUsPage;

  return (
    <>
      <div className="the-container mt-8 sm:mt-10 lg:mt-15">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="flex gap-2 mb-4">
            <Link href="/" className="no-underline text-black">
              MYE Cloud
            </Link>
            <p>{">"}</p>
            <p>About Us</p>
          </div>
        </div>
      </div>

      {/* BLOCKS */}

      <JoinOurTeamBlock joinOurTeam={joinOurTeam} />
      <div id="mission"></div>
      <div id="vision"></div>
      <AboutUsBlock aboutUs={aboutUs} />
      <div id="ourteam"></div>
      <MyTeamBlock team={team} />
    </>
  );
}

export default Page;
