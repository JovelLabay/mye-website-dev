"use client";

import React, { useState, useEffect, useContext } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { motion } from "framer-motion";
import classNames from "classnames";

import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

import MyeLogo from "@/logoMYE-Logo.png";
import NavBg from "@/imgdesign-nav2.jpeg";
import Link from "next/link";
import { GlobalContext } from "@/lib/contexts/context";

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
  const route = useRouter();
  const globalContext = useContext(GlobalContext);

  const [states, setStates] = useState({
    isMenu: false,
    scrollY: 0,
    isOpenAboutUsSubMenu: false,
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

  const handleClick = (e: any, id: string) => {
    setStates({
      ...states,
      isMenu: false,
    });
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 100;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  function scrollToElement(id: any) {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 100;
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

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
                  {link.title === "About Us" ? (
                    <div className="dropdown">
                      <a
                        href="/about-us/"
                        className={classNames(
                          router === "/" ? "text-[#2D2D2D]" : "text-white",
                        )}
                      >
                        {link.title}
                      </a>
                      {/* DROPDOWN ABOUT US */}
                      <div className="dropdown-content w-[200px]">
                        <div className="flex flex-col items-start gap-2">
                          <div>
                            <a
                              href="/about-us/#mission"
                              onClick={(e) => {
                                if (router === "/about-us/") {
                                  e.preventDefault();
                                }
                                scrollToElement("ourteam");
                              }}
                              className="text-[#2D2D2D]"
                            >
                              Mission
                            </a>
                          </div>
                          <div>
                            <a
                              href="/about-us/#vision"
                              onClick={(e) => {
                                if (router === "/about-us/") {
                                  e.preventDefault();
                                }
                                scrollToElement("ourteam");
                              }}
                              className="text-[#2D2D2D]"
                            >
                              Vision
                            </a>
                          </div>
                          <div>
                            <a
                              href="/about-us/#ourteam"
                              onClick={(e) => {
                                if (router === "/about-us/") {
                                  e.preventDefault();
                                }
                                scrollToElement("ourteam");
                              }}
                              className="text-[#2D2D2D]"
                            >
                              Our Team
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : link.title === "Contact Us" ? (
                    <a
                      href="/#getintouch"
                      onClick={
                        router !== "/"
                          ? undefined
                          : (e) => handleClick(e, "getintouch")
                      }
                      className={classNames(
                        router === "/" ? "text-[#2D2D2D]" : "text-white",
                      )}
                    >
                      {link.title}
                    </a>
                  ) : (
                    <a
                      href={link.uri}
                      onClick={() => {
                        link.title === "Products & Services" &&
                          globalContext?.productsServicesPage.setActiveTab(
                            "products",
                          );
                      }}
                      className={classNames(
                        router === "/" ? "text-[#2D2D2D]" : "text-white",
                      )}
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
          <li>
            <a
              className={
                router === "/" ? "login-bg-white" : "login-bg-white-none-home"
              }
              href="/"
            >
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
              <AiOutlineMenu
                size={30}
                color={router === "/" ? "#2D2D2D" : "white"}
              />
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
                        {link.title === "About Us" ? (
                          <>
                            <button
                              className="no-underline text-customDark"
                              onClick={() => {
                                setStates((prev) => ({
                                  ...prev,
                                  isOpenAboutUsSubMenu:
                                    !states.isOpenAboutUsSubMenu,
                                }));
                              }}
                            >
                              {link.title}
                            </button>

                            {states.isOpenAboutUsSubMenu && (
                              <motion.div
                                className="flex flex-col ml-5 gap-4 mt-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              >
                                <Link
                                  href="/about-us/#mission"
                                  onClick={(e) => {
                                    e.preventDefault();

                                    scrollToElement("ourteam");
                                  }}
                                  className="text-customViolet no-underline"
                                >
                                  Mission
                                </Link>
                                <Link
                                  href="/about-us/#vision"
                                  onClick={(e) => {
                                    e.preventDefault();

                                    scrollToElement("ourteam");
                                  }}
                                  className="text-customViolet no-underline"
                                >
                                  Vision
                                </Link>
                                <Link
                                  href="/about-us/#ourteam"
                                  onClick={(e) => {
                                    e.preventDefault();

                                    scrollToElement("ourteam");
                                  }}
                                  className="text-customViolet no-underline"
                                >
                                  Our Team
                                </Link>
                              </motion.div>
                            )}
                          </>
                        ) : link.title === "Contact Us" ? (
                          <a
                            href="/#getintouch"
                            onClick={
                              router !== "/"
                                ? undefined
                                : (e) => handleClick(e, "getintouch")
                            }
                            className="no-underline text-customDark"
                          >
                            {link.title}
                          </a>
                        ) : (
                          <a
                            href={link.uri}
                            className="no-underline text-customDark"
                          >
                            {link.title}
                          </a>
                        )}
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
