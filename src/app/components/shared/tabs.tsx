"use client";

import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

function Tabs({
  component,
}: {
  component: {
    title: string;
    node: React.ReactNode;
  }[];
}) {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="grid grid-cols-3 mt-8 sm:mt-10 md:mt-15 lg:mt-20">
          {component.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full outline-none py-3 md:py-3 lg:py-3 text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold",
                  selected
                    ? "bg-white text-customViolet"
                    : "bg-customViolet text-white",
                )
              }
            >
              {item.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {component.map((item, index) => (
            <Tab.Panel key={index}>{item.node}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Tabs;
