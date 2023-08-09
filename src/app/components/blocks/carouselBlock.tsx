"use client";

import React, { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        interval={2000}
        controls={false}
        fade={true}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
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
                <motion.div
                  style={{ height: "100%", color: "white", textAlign: "right" }}
                  key={activeIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="flex flex-col justify-center items-end h-full px-[20px] sm:px-[30px] md:px-[60px] lg:px-[120px]">
                    <motion.h1
                      key={index}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] "
                    >
                      {item.label}
                    </motion.h1>
                    <motion.p
                      key={index}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      className="py-3"
                    >
                      {item.description}
                    </motion.p>
                    <motion.a
                      key={index}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.4 }}
                      href={item.learnMore.url}
                    >
                      <button className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-white text-customViolet font-medium md:font-semibold">
                        Learn more
                      </button>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselBlock;
