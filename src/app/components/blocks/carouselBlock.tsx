"use client";

import React from "react";

import Carousel from "react-bootstrap/Carousel";

function CarouselBlock({
  carouselItem,
}: {
  carouselItem: {
    description: string;
    label: string;
    image: {
      sourceUrl: string;
    };
    backgroundColor: string;
    learnMore: {
      url: string;
      title?: string | null;
    };
  }[];
}) {
  return (
    <div>
      <Carousel interval={2000} controls={false} fade={true}>
        {carouselItem.map((item, index) => (
          <Carousel.Item key={index}>
            <div
              className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh]"
              style={{
                backgroundImage: `url(${item.image.sourceUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: item.backgroundColor,
                  height: "100%",
                  color: "white",
                  textAlign: "right",
                }}
              >
                <div className="flex flex-col justify-center items-end h-full px-[20px] sm:px-[30px] md:px-[60px] lg:px-[120px]">
                  <h1 className="font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] ">
                    {item.label}
                  </h1>
                  <p className="py-3">{item.description}</p>
                  <a href={item.learnMore.url}>
                    <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-white text-customViolet font-medium md:font-semibold">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselBlock;
