import classNames from "classnames";
import Link from "next/link";
import React from "react";

function MoreProductsBlock({
  showProductCategoryOnly,
  categoryTitle,
  productTitle,
  params,
}: {
  showProductCategoryOnly: {
    title: string;
    productServiceItem: {
      description: string;
      label: string;
      iconImage: {
        sourceUrl: string;
      };
      productsMainContent: string;
    }[];
  }[];
  categoryTitle: string;
  productTitle: string;
  params: string;
}) {
  return (
    <>
      <h5 className="font-bold text-customViolet">
        More Products under <span className="">{categoryTitle}</span>
      </h5>

      <div className="my-4 flex flex-col items-start justify-start gap-3">
        {showProductCategoryOnly &&
          showProductCategoryOnly[0]?.productServiceItem.map(
            (product, index) => (
              <Link
                className={classNames(
                  "text-black no-underline text-sm",
                  product.label === productTitle ? "font-bold" : "font-thin",
                )}
                href={`/products-services/${categoryTitle}|${product.label}`}
                key={index}
              >
                {product.label}
              </Link>
            ),
          )}
      </div>
    </>
  );
}

export default MoreProductsBlock;
