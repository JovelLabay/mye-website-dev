import classNames from "classnames";
import Link from "next/link";
import React from "react";

function MoreServicesBlock({
  showServicesCategoryOnly,
  categoryTitle,
  serviceTitle,
  params,
}: {
  showServicesCategoryOnly: {
    description: string;
    learnMore: string;
    title: string;
    serviceList: {
      service: string;
      serviceMainContent: string;
    }[];
  }[];
  categoryTitle: string;
  serviceTitle: string;
  params: string;
}) {
  return (
    <>
      <h5 className="font-bold text-customViolet">
        More Products under <span className="">{categoryTitle}</span>
      </h5>

      <div className="my-4 flex flex-col items-start justify-start gap-3">
        {showServicesCategoryOnly &&
          showServicesCategoryOnly[0]?.serviceList.map((service, index) => (
            <Link
              className={classNames(
                "text-black no-underline text-sm",
                service.service === serviceTitle ? "font-bold" : "font-thin",
              )}
              href={`/products-services/${categoryTitle}|${service.service}`}
              key={index}
            >
              {service.service}
            </Link>
          ))}
      </div>
    </>
  );
}

export default MoreServicesBlock;
