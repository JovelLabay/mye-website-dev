"use client";

import React, { useRef } from "react";

import Image from "next/image";

function ProductsBlock2({
  products,
}: {
  products: {
    productsAndServices: {
      title: string;
      productServiceItem: {
        description: string;
        label: string;
        iconImage: {
          sourceUrl: string;
        };
      }[];
    }[];
  };
}) {
  const contentRefs = useRef<any>([]);

  return (
    <div className="text-white mt-8 sm:mt-10 md:mt-15 lg:mt-20 bg-[#F1F6FA]">
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-3 relative">
            {/* BUTTONS */}
            <div className="custom-sticky flex flex-col items-start gap-4 text-[#2D2D2D] mb-4">
              {products.productsAndServices.map((item, index) => (
                <button
                  key={index}
                  className="font-bold text-left"
                  onClick={() => {
                    contentRefs.current[index] &&
                      contentRefs.current[index].scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* CONTENTS */}
            <div className="md:col-span-2 text-[#2D2D2D] flex flex-col gap-3">
              {products.productsAndServices.map((item, index) => (
                <div
                  key={index}
                  ref={(element) => (contentRefs.current[index] = element)}
                >
                  <h5 className="font-bold">{item.title}</h5>

                  <div className="border-1 border-white px-3 py-4 gap-4 grid grid-cols-1 md:grid-cols-2">
                    {item.productServiceItem &&
                      item.productServiceItem.map((productItem, index2) => (
                        <div key={index2}>
                          <Image
                            alt="Logo"
                            src={productItem.iconImage?.sourceUrl}
                            width={65}
                            height={65}
                            style={{
                              filter: "invert(1)",
                            }}
                          />
                          <h5 className="my-4 font-semibold leading-7 ">
                            {productItem.label}
                          </h5>
                          <p>{productItem.description}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsBlock2;
