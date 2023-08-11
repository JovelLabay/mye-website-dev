"use client";

import React, { useState } from "react";
import Wysiwyg from "../shared/wysiwyg";
import { RWebShare } from "react-web-share";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import classNames from "classnames";

function DetailedProducts({
  productData,
  params,
  connector,
}: {
  productData: string;
  params: string;
  connector: string;
}) {
  const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

  return (
    <>
      <Wysiwyg content={productData} className="flex flex-col gap-3" />
      <div className="flex justify-end items-center mb-4">
        <RWebShare
          data={{
            text: "Share this link",
            url: `${websiteDomain}/products-services/${connector}/${params}`,
            title: "Share this link",
          }}
        >
          <button className="text-white gap-2 flex justify-center items-center py-2 px-3 rounded-full bg-customDark hover:drop-shadow-xl drop-shadow-lg">
            <BiShare />
            Share
          </button>
        </RWebShare>
      </div>
    </>
  );
}

export default DetailedProducts;
