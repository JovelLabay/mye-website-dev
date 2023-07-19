import React from "react";

import Image from "next/image";

import { AiFillPhone } from "react-icons/ai";
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
      }[]
    | null;
}) {
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
                A Cloud built by Filipinos, for Filipinos.
              </p>
              <p className="w-full text-center hidden lg:block">
                Copyright 2023 - All Rights Reserved
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
                      <a href={link.uri} className="no-underline text-black">
                        {link.title}
                      </a>
                    </li>
                  ))}
            </ul>

            <ul>
              <li>FAQ</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="three">
          <h6>Contact information</h6>
          <ul>
            <li>
              <AiFillPhone size={25} />
              +1 (234) 567 8910
            </li>
            <li>
              <MdEmail size={25} />
              hello@myecloud.com
            </li>
            <li>
              <BiSolidLocationPlus size={25} />
              Marajo Tower, 4th Avenue Taguig, Metro Manila, Philippines
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="ml-5 lg:ml-0 text-center font-light text-gray-500 block lg:hidden">
          Copyright 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Page;
