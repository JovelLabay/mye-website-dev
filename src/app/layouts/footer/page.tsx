import React from "react";

import Image from "next/image";

import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiSolidLocationPlus } from "react-icons/bi";

import MyeLogo from "@/logoMYE-Logo.png";

function Page() {
  return (
    <footer>
      <div className="footer">
        <div className="one">
          <Image id="logo" src={MyeLogo} title="Logo" alt="Logo" />
          <p className="company-description ml-5 lg:ml-0">
            A Cloud built by Filipinos, for Filipinos.
          </p>
          <p className="ml-5 lg:ml-0">Copyright 2023 - All Rights Reserved</p>
        </div>

        <div className="two">
          <h6>Quick links</h6>
          <div>
            <ul>
              <li>Home</li>
              <li>Products & Services</li>
              <li>About</li>
              <li>Contact Us</li>
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
    </footer>
  );
}

export default Page;
