"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import classNames from "classnames";

import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

import MyeLogo from "@/logoMYE-Logo.png";

function Page({
  data,
}: {
  data:
    | {
        id: string;
        slug: string;
        title: string;
        uri: string;
        menuOrder: number;
      }[]
    | null;
}) {
  const [states, setStates] = useState({
    isMenu: false,
    scrollY: 0,
  });

  useEffect(() => {
    if (states.isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [states.isMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setStates((prev) => ({ ...prev, scrollY: window.scrollY }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shouldShowShadow = typeof window !== "undefined" && scrollY > 0;

  return (
    <nav
      id="navigation"
      className={classNames("", shouldShowShadow ? "shadow-lg" : "shadow-none")}
    >
      <div className="nav">
        <Image id="logo" src={MyeLogo} alt="Mye-Logo" />
        <ul className="mt-2">
          {data &&
            data
              .map((link) => link)
              .sort(
                (a: { menuOrder: number }, b: { menuOrder: number }) =>
                  a.menuOrder - b.menuOrder,
              )
              .map((link) => (
                <li key={link.id} className="link-nav">
                  <a href="/">{link.title}</a>
                </li>
              ))}
          <li>
            <a className="login-bg-white" href="/">
              Cloud Portal Login
            </a>
          </li>
          <li className="menu">
            <button
              title="Open Menu"
              onClick={() => {
                setStates({
                  ...states,
                  isMenu: !states.isMenu,
                });
              }}
            >
              <AiOutlineMenu size={30} />
            </button>
          </li>
        </ul>
      </div>

      {/* MENU NAVIGATION */}
      {states.isMenu && (
        <div className="mobile-menu-container lg:hidden">
          <motion.div
            className="mobile-menu"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between items-center">
              <Image id="logo-menu" src={MyeLogo} alt="Mye-Logo" />
              <button
                title="Close Menu"
                onClick={() => {
                  setStates({
                    ...states,
                    isMenu: !states.isMenu,
                  });
                }}
              >
                <AiFillCloseCircle size={30} />
              </button>
            </div>

            <div className="my-10">
              <ul className="flex justify-start items-start gap-5 flex-col pl-0">
                {data &&
                  data
                    .map((link) => link)
                    .sort(
                      (a: { menuOrder: number }, b: { menuOrder: number }) =>
                        a.menuOrder - b.menuOrder,
                    )
                    .map((link) => (
                      <li key={link.id} className="text-lg font-bold ml-10">
                        <a href="/" className="no-underline text-customDark">
                          {link.title}
                        </a>
                      </li>
                    ))}

                <li className="login-bg-white2">
                  <a href="/" className="no-underline text-white font-bold">
                    Cloud Portal Login
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
}

export default Page;
