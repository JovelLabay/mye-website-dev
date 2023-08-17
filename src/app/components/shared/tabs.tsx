"use client";

import { GlobalContext } from "@/lib/contexts/context";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React, { useState, useContext } from "react";
import { motion } from "framer-motion";

function Tabs({
  component,
}: {
  component: {
    title: string;
    node: React.ReactNode;
  }[];
}) {
  const globalContext = useContext(GlobalContext);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tab.Group
        onChange={setTabIndex}
        defaultIndex={
          globalContext?.productsServicesPage.activeTab === "services" ? 2 : 0
        }
      >
        <Tab.List className="grid grid-cols-3 mt-8 sm:mt-10 md:mt-15 lg:mt-20">
          {component.map((item, index) => (
            <Tab
              key={index}
              onClick={() => {
                if (item.title === "Services") {
                  globalContext?.productsServicesPage.setActiveTab("services");
                } else if (item.title === "Products") {
                  globalContext?.productsServicesPage.setActiveTab("products");
                }
              }}
              className={({ selected }) =>
                classNames(
                  "w-full outline-none py-3 md:py-3 lg:py-3 text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold",
                  selected
                    ? "bg-white text-customViolet border-2 border-customViolet duration-[1000ms]"
                    : "bg-customViolet text-white transition duration-[1000ms]",
                )
              }
            >
              {item.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <motion.div
            key={tabIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {component.map((item, index) => (
              <Tab.Panel key={index}>{item.node}</Tab.Panel>
            ))}
          </motion.div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Tabs;
