import DetailedProducts from "@/app/components/blocks/detailedProducts";
import MoreProductsBlock from "@/app/components/blocks/moreProductsBlock";
import MoreServicesBlock from "@/app/components/blocks/moreServicesBlock";
import { GlobalContext } from "@/lib/contexts/context";
import { getBlocksProductsServices } from "@/lib/query/query";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MYE Cloud",
  description: "MYE Cloud is a cloud built by Filipinos, for Filipinos.",
};

export default async function page({
  params,
}: {
  params: { servicesId: string };
}) {
  const block = await getBlocksProductsServices();

  const decodedServicesId = decodeURIComponent(params.servicesId);

  const { services }: { services: ServicesList } =
    await block?.productServicesPage;
  const service_serviceName = decodedServicesId
    .replace(/%20/g, " ")
    .replace(/%26/g, "&")
    .split("|");

  const showServiceCategoryOnly = services.item.filter(
    (item) => item.title === service_serviceName[0],
  );

  const showServicesOnly = showServiceCategoryOnly[0]?.serviceList.filter(
    (label) => label.service === service_serviceName[1],
  );

  const actualBlogData = showServicesOnly[0];

  return actualBlogData === undefined ? (
    <div className="h-screen flex justify-center items-center">
      <h1>Not Found</h1>
    </div>
  ) : (
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
                {showServiceCategoryOnly[0].title}
              </Link>
              <p className="text-customViolet">{">"}</p>
              <p className="opacity-50">{actualBlogData.service}</p>
            </div>

            <div className="mb-5">
              <h1 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-customViolet font-bold">
                {showServicesOnly[0].service}
              </h1>
              <p>{actualBlogData.service}</p>
            </div>
            <DetailedProducts
              productData={actualBlogData.serviceMainContent}
              params={params.servicesId}
              connector="services"
            />
          </div>

          {/* MORE PRODUCTS */}
          <div className="custom-sticky col-span-1 min-h-[30vh] md:min-h-[82vh] md:sticky mb-4 rounded-md bg-[#F1F6FA] p-3">
            <MoreServicesBlock
              showServicesCategoryOnly={showServiceCategoryOnly}
              categoryTitle={showServiceCategoryOnly[0].title}
              serviceTitle={actualBlogData.service}
              params={params.servicesId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
