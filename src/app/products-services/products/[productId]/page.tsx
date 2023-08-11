import DetailedProducts from "@/app/components/blocks/detailedProducts";
import MoreProductsBlock from "@/app/components/blocks/moreProductsBlock";
import { getBlocksProductsServices } from "@/lib/query/query";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "MYE Cloud",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

export default async function page({
  params,
}: {
  params: { productId: string };
}) {
  const block = await getBlocksProductsServices();

  const { products }: { products: ProductsList } =
    await block?.productServicesPage;
  const category_ProductName = params.productId
    .replace(/%20/g, " ")
    .split("%7C");

  const showProductCategoryOnly = products.productsAndServices.filter(
    (item) => item.title === category_ProductName[0],
  );

  const showProductOnly = showProductCategoryOnly[0]?.productServiceItem.filter(
    (label) => label.label === category_ProductName[1],
  );

  const actualBlogData = showProductOnly[0];

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
                {showProductCategoryOnly[0].title}
              </Link>
              <p className="text-customViolet">{">"}</p>
              <p className="opacity-50">{actualBlogData.label}</p>
            </div>

            <div className="mb-5">
              <h1 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-customViolet font-bold">
                {showProductCategoryOnly[0].title}
              </h1>
              <p>{actualBlogData.label}</p>
            </div>
            <DetailedProducts
              productData={actualBlogData.productsMainContent}
              params={params.productId}
              connector="products"
            />
          </div>

          {/* MORE PRODUCTS */}
          <div className="custom-sticky col-span-1 min-h-[30vh] md:min-h-[82vh] md:sticky mb-4 rounded-md bg-[#F1F6FA] p-3">
            <MoreProductsBlock
              showProductCategoryOnly={showProductCategoryOnly}
              categoryTitle={showProductCategoryOnly[0].title}
              productTitle={actualBlogData.label}
              params={params.productId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
