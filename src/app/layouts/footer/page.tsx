"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillYoutube,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiSolidLocationPlus } from "react-icons/bi";

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
        footer?: {
          footerDescription: string;
          footerSubDescription: string;
          anchorLinks: {
            achorLink: string;
            anchorName: string;
          }[];
          socialMedina: {
            socialMedinaLink: string;
            socialMedinaItemName: string;
          }[];
        };
      }[]
    | null;
}) {
  const router = usePathname();
  const redirect = useRouter();

  const handleClick = (e: any, id: string) => {
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

  const footerData = data && data[5].footer;

  return (
    <footer>
      <div className="footer">
        <div>
          <div className="flex">
            <div>
              <Image id="logo" src={MyeLogo} title="Logo" alt="Logo" />
            </div>
            <div className="flex flex-col justify-center items-center mt-2 w-[85%] gap-2">
              <p className="w-full text-center">
                {footerData?.footerDescription}
              </p>
              <p className="w-full text-center hidden lg:block">
                {footerData?.footerSubDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="two -mt-[80px] sm:-mt-0">
          <h6>Quick links</h6>
          <div>
            <ul>
              {data &&
                data
                  .map((link) => link)
                  .sort(
                    (a: { menuOrder: number }, b: { menuOrder: number }) =>
                      a.menuOrder - b.menuOrder,
                  )
                  .map((link) => (
                    <li key={link.id}>
                      {link.title === "Contact Us" ? (
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
            </ul>
          </div>
        </div>

        <div className="three">
          <h6>Contact information</h6>
          <ul>
            {footerData?.anchorLinks.map((link, i) => (
              <li key={i}>
                {link.anchorName === "phone" ? (
                  <AiFillPhone size={25} />
                ) : link.anchorName === "email" ? (
                  <MdEmail size={25} />
                ) : (
                  <BiSolidLocationPlus size={33} />
                )}
                {link.achorLink}
              </li>
            ))}
          </ul>

          <div>
            <ul className="flex gap-3">
              {footerData?.socialMedina.map((sc, index) => (
                <li
                  key={index}
                  onClick={() => {
                    redirect.push(sc.socialMedinaLink);
                  }}
                >
                  {sc.socialMedinaItemName === "linkedin" ? (
                    <AiFillLinkedin size={25} />
                  ) : sc.socialMedinaItemName === "facebook" ? (
                    <AiFillFacebook size={25} />
                  ) : sc.socialMedinaItemName === "youtube" ? (
                    <AiFillYoutube size={25} />
                  ) : (
                    <AiFillInstagram size={25} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p className="ml-5 lg:ml-0 text-center font-light text-gray-500 block lg:hidden">
          {footerData?.footerSubDescription}
        </p>
      </div>
    </footer>
  );
}

export default Page;
