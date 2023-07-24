"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import classNames from "classnames";

import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

import MyeLogo from "@/logoMYE-Logo.png";
import NavBg from "@/imgdesign-nav2.jpeg";

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
  const router = usePathname();

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
      className={classNames("", shouldShowShadow ? "shadow-lg" : "")}
      {...(router === "/" && {
        style: {
          background: "white",
        },
      })}
    >
      {router !== "/" ? (
        <div className="absolute w-full h-full left-0 -z-10 top-0">
          <Image
            src={NavBg}
            alt="NavBg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      ) : null}

      <div className="nav">
        <a href="/" title="Home">
          <Image id="logo" src={MyeLogo} alt="Mye-Logo" />
        </a>
        <ul>
          {data &&
            data
              .map((link) => link)
              .sort(
                (a: { menuOrder: number }, b: { menuOrder: number }) =>
                  a.menuOrder - b.menuOrder,
              )
              .map((link) => (
                <li key={link.id} className="link-nav">
                  <a
                    href={link.uri}
                    className={classNames(
                      router === "/" ? "text-[#2D2D2D]" : "text-white",
                    )}
                  >
                    {link.title}
                  </a>
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

            <div className="py-10 overflow-auto h-full">
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
                        <a
                          href={link.uri}
                          className="no-underline text-customDark"
                        >
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
