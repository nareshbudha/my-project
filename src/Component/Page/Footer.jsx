import React from "react";
import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdEditLocation } from "react-icons/md";

import { IoIosCall } from "react-icons/io";

import logoImage from "../Image/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7] mb-2 flex flex-row">
        <div className=" flex flex-col w-2/6  py-20 px-10">
          <img className="w-[160px] h-[55px]" src={logoImage} alt="Logo" />
          <p className="text-base text-[#000000] flex  items-center ">
            We SPELL INNOVATION say we’re young because we’re peopled by young,
            energetic, curious and committed minds who are excited to solve one
            stop automated solution for you.
          </p>
          <div className="flex flex-row gap-10 ">
            <FaSquareInstagram className="text-[#5F2466] text-3xl mt-4" />
            <FaFacebook className="text-[#5F2466] text-3xl mt-4" />
            <FaLinkedin className="text-[#5F2466] text-3xl mt-4" />
            <FaXTwitter className="text-[#5F2466] text-3xl mt-4" />
          </div>
        </div>
        <div className="flex flex-row-3 gap-10 w-4/6 py-20 justify-center">
          <div className="flex flex-col  gap-2">
            <h2 className="text-2xl text-[#5F2466]"> Quick Links</h2>
            <p className="text-[#000000] text-base font-Poppins">About</p>
            <p className="text-[#000000] text-base font-Poppins">Contact </p>
            <p className="text-[#000000] text-base font-Poppins">
              Terms & Conditions
            </p>
            <p className="text-[#000000] text-base font-Poppins">
              Privacy Policy{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-[#5F2466]"> Our Associate</h2>
            <p className="text-[#000000] text-base font-Poppins">Spell SMS</p>
            <p className="text-[#000000] text-base font-Poppins">Spell Voice</p>
            <p className="text-[#000000] text-base font-Poppins">
              Spell Digital Media
            </p>
            <p className="text-[#000000] text-base font-Poppins">
              Spell Hosting
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl text-[#5F2466]"> Contact Us</h2>
            <div className="relative">
              <p className=" absolutetext-[#000000] text-base font-Poppins px-6">
                01-5910781
              </p>
              <IoIosCall className="text-[#5F2466] absolute  top-1 gap-1  " />
            </div>

            <p className="text-[#000000] text-base font-Poppins px-6">
              9801047737
            </p>
            <div className="relative">
              <p className="text-[#000000] text-base font-Poppins px-6">
                info@spellinnovation.com
              </p>{" "}
              <MdEmail className="text-[#5F2466] absolute  top-1 gap-1" />
            </div>
            <p className="text-[#000000] text-base font-Poppins px-6">
              contact@spellinnovation.com
            </p>
            <div className="relative">
              <p className="text-[#000000] text-base font-Poppins px-6">
                Pipal bot, Mid baneswor
              </p>
              <MdEditLocation className="text-[#5F2466] absolute  top-1 gap-1" />
            </div>
          </div>
        </div>
      </div>
      <p className=" bg-[#F7F7F7] flex justify-items-center items-center py-5 px-15">
        ©2024 Spell Innovation. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
