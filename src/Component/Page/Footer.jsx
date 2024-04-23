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
  const today = new Date();
  return (
    <div className="w-fu;;">
      <div className="bg-[#F7F7F7] flex mobile:flex-col mobile:py-10 mobile:gap-10 mobile:items-end tablet:flex-row tablet:gap-10 tablet:px-10  ">
        <div className=" flex flex-col mobile:gap-10 mobile:justify-evenly">
          <img className="mobile:w-32 mobile:h-16" src={logoImage} alt="Logo" />
          <p className="text-[#000000] items-center">
            We SPELL INNOVATION say we’re young because we’re peopled by young,
            energetic, curious and committed minds who are excited to solve one
            stop automated solution for you.
          </p>
          <div className="flex gap-10 mobile:hidden tablet:flex tablet:w-full ">
            <FaSquareInstagram className="text-[#5F2466] text-3xl" />
            <FaFacebook className="text-[#5F2466] text-3xl " />
            <FaLinkedin className="text-[#5F2466] text-3xl " />
            <FaXTwitter className="text-[#5F2466] text-3xl " />
          </div>

        </div>
        <div className="flex flex-col  mobile:gap-5  tablet:w-3/4 tablet:flex-row tablet:justify-center ">
          <div className="flex flex-col  mobile:gap-1 tablet:w-48 laptop:w-80 desktop:w-80 ">
            <h2 className="text-2xl text-[#5F2466] tablet:text-xl tablet:font-medium "> Quick Links</h2>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              About</p>
            <p className="text-[#000000] text-base font-light hover:font-bold">Contact </p>
            <p className="text-[#000000] text-base font-light hover:font-bold ">
              Terms & Conditions
            </p>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              Privacy Policy{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 tablet:w-48 laptop:w-80 desktop:w-96 ">
            <h2 className="text-2xl text-[#5F2466]  tablet:text-xl tablet:font-medium "> Our Associate</h2>
            <p className="text-[#000000] text-base font-light hover:font-bold  ">Spell SMS</p>
            <p className="text-[#000000] text-base font-light hover:font-bold">Spell Voice</p>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              Spell Digital Media
            </p>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              Spell Hosting
            </p>
          </div>
          <div className="flex flex-col gap-2 tablet:text-sm laptop:w-80 desktop:w-96">
            <h2 className="text-2xl text-[#5F2466]  tablet:text-xl tablet:font-medium "> Contact Us</h2>
            <div className="relative">
              <p className=" absolute text-[#000000] text-base ml-5 hover:font-bold font-light ">
                01-5910781
              </p>
              <IoIosCall className="text-[#5F2466] absolute top-1 gap-1  " />
            </div>

            <p className="text-[#000000] text-base font-light px-6 mt-6 hover:font-bold">
              9801047737
            </p>
            <div className="relative">
              <p className="text-[#000000] text-base font-light hover:font-bold px-6">
                info@spellinnovation.com
              </p>{" "}
              <MdEmail className="text-[#5F2466] absolute  top-1 gap-1" />
            </div>
            <p className="text-[#000000] text-base font-light hover:font-bold px-6">
              contact@spellinnovation.com
            </p>
            <div className="relative">
              <p className="text-[#000000] text-base font-light hover:font-bold px-6">
                Pipal bot, Mid baneswor
              </p>
              <MdEditLocation className="text-[#5F2466] absolute  top-1 gap-1" />
            </div>
          </div>
        </div>
      </div>
      <p className="border-b-2 w-full  border-[#000000]  "></p>
      <p className=" bg-[#F7F7F7] flex justify-items-center  items-center ">
        &copy; {today.getFullYear()} Spell Innovation. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
