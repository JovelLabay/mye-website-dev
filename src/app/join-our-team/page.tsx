import React from "react";

import Link from "next/link";

// META DATA
import type { Metadata } from "next";

// LIBRARIES
import client from "@/lib/apollo/client";
import GET_JOIN_TEAM from "@/lib/graphql/queryJoinTeam";

// BLOCKS
import JoinOurTeamBlock from "../components/blocks/joinOurTeamBlock";
import GetInTouchForm from "../components/forms/getInTouchForm";
import RolesBlock from "../components/blocks/rolesBlock";

export const metadata: Metadata = {
  title: "MYE Cloud | Join Our Team",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

async function getBlocks() {
  const id = process.env.JOIN_OUR_TEAM_PAGE_ID;

  const blocks = await client.query({
    query: GET_JOIN_TEAM,
    variables: { id },
  });

  await client.cache.reset();

  return blocks.data;
}

async function Page() {
  const block = await getBlocks();

  const { joinOurTeam, roles, getInTouch } = await block?.joinOurTeamPage;

  return (
    <>
      <div className="the-container mt-8 sm:mt-10 lg:mt-15">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="flex gap-2 mb-4">
            <Link href="/" className="no-underline text-black">
              MYE Cloud
            </Link>
            <p>{">"}</p>
            <p>Join Our Team</p>
          </div>
        </div>
      </div>

      {/* BLOCKS */}
      <JoinOurTeamBlock joinOurTeam={joinOurTeam} />
      <RolesBlock roles={roles} />
      <GetInTouchForm getInTouch={getInTouch} />
    </>
  );
}

export default Page;
