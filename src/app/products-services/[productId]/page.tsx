import Link from "next/link";
import React from "react";

export default async function page({
  params,
}: {
  params: { productId: string };
}) {
  console.log(params.productId);

  return (
    <div className=" the-container mt-8 sm:mt-10 md:mt-15 lg:mt-20">
      <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 relative">
          {/* PRODUCTS  DETAILS */}
          <div className="col-span-2">
            <div className="flex gap-2 mb-4 font-thin text-xs  md:text-sm">
              <Link href="/" className="no-underline text-black">
                MYE Cloud
              </Link>
              <p className="text-customViolet">{">"}</p>
              <Link
                href="/products-services"
                className="no-underline text-black"
              >
                Products
              </Link>
              <p className="text-customViolet">{">"}</p>
              <p className="opacity-50">sdfsdfsdf</p>
            </div>

            <div className="mb-5">
              <h1 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-customViolet font-bold">
                sdfsdf
              </h1>
              <p>dfsdfsdf</p>
            </div>
            {/* <DetailedBlogsNewsBlock
              params={params}
              blogsNews={actualBlogData}
            /> */}
          </div>

          {/* MORE PRODUCTS */}
          <div className="custom-sticky col-span-1 min-h-[82vh] md:sticky mb-4 rounded-md bg-[#F1F6FA] p-3">
            {/* <MoreBlogsNewsBlock
              blogsNewsData2={blogsNewsData.posts.edges}
              actualBlogData={actualBlogData.data.post}
            /> */}
            {/* <MoreBlogNewsTopicsBlock
              blogsNewsData2={blogsNewsData.posts.edges}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
