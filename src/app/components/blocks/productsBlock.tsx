"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";

import { BsHexagon, BsFillHexagonFill } from "react-icons/bs";

function ProductsBlock({
  products,
}: {
  products: {
    title: string;
    description: string;
    backgroundColor: string;
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
  const [activeProduct, setActiveProduct] = useState({
    productList: [] as {
      description: string;
      label: string;
      iconImage: {
        sourceUrl: string;
      };
    }[],
    productItem: 0,
  });

  useEffect(() => {
    setActiveProduct((prev: any) => {
      return {
        ...prev,
        productList: products.productsAndServices[0].productServiceItem,
      };
    });
  }, [products.productsAndServices]);

  return (
    <div
      className="text-white mt-8 sm:mt-10 md:mt-15 lg:mt-20"
      style={{
        background: `linear-gradient(90.37deg, ${products.backgroundColor})`,
      }}
    >
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <h1 className="animate text-center text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold">
            {products.title}
          </h1>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex flex-col justify-center lg:items-start items-start gap-4 border-b-2 lg:border-b-0  lg:border-r-2 pb-10 mb-7 lg:pb-0 lg:mb-0 mr-0 lg:mr-7 px-0 sm:px-10 md:mx-15 lg:px-0">
              {products.productsAndServices.map((productService, index) => (
                <button
                  key={index}
                  className={classNames(
                    "flex justify-center items-center text-left gap-2 ml-0 md:ml-5",
                    activeProduct.productItem === index ? "font-bold" : "",
                  )}
                  onClick={() => {
                    setActiveProduct({
                      productItem: index,
                      productList: productService.productServiceItem,
                    });
                  }}
                >
                  {activeProduct.productItem === index ? (
                    <BsFillHexagonFill size={25} color="#9D3CFF" />
                  ) : (
                    <BsHexagon size={25} />
                  )}
                  {productService.title}
                </button>
              ))}
            </div>
            <motion.div
              key={activeProduct.productItem}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {activeProduct.productList.map((product, index) => (
                <div key={index} className="fade-in">
                  <Image
                    alt="Logo"
                    src={product.iconImage.sourceUrl}
                    width={65}
                    height={65}
                  />
                  <h5 className="my-4 font-semibold leading-7 ">
                    {product.label}
                  </h5>
                  <p>{product.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsBlock;
