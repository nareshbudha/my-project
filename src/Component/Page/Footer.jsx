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
    <div className="w-full ">
      <div className="bg-[#F7F7F7] flex flex-col  mobile:py-10 mobile:gap-10 tablet:flex-col tablet:gap-5 tablet:px-10 tabletmd:flex-row ">
        <div className=" flex flex-col p-3 gap-3 flex-1 mobile:gap-10 mobile:justify-evenly tabletmd:max-w-[30%] ">
          <img
            className=" w-32 h-16  justify-center mobile:w-32 mobile:h-16"
            src={logoImage}
            alt="Logo"
          />
          <p className="text-[#000000] items-center mobile:mx-3 font-light desktop:text-justify">
            We SPELL INNOVATION say we’re young because we’re peopled by young,
            energetic, curious and committed minds who are excited to solve one
            stop automated solution for you.
          </p>
          <div className="flex mx-auto gap-3   tablet:flex tablet:w-full ">
            <FaSquareInstagram className="text-[#5F2466] text-3xl" />
            <FaFacebook className="text-[#5F2466] text-3xl " />
            <FaLinkedin className="text-[#5F2466] text-3xl " />
            <FaXTwitter className="text-[#5F2466] text-3xl " />
          </div>
        </div>
        <div className="flex flex-col mobile:flex-row mobile:gap-2 mobile:flex-wrap mobile:justify-between  p-3   tablet:flex-row  tabletmd:max-w-[70%] tabletmd:w-full">
          <div className="flex flex-col  mobile:gap-1  ">
            <h2 className="text-2xl text-[#5F2466] tablet:text-xl tablet:font-medium ">
              Quick Links
            </h2>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              About
            </p>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              Contact{" "}
            </p>
            <p className="text-[#000000] text-base font-light hover:font-bold ">
              Terms & Conditions
            </p>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              Privacy Policy{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl text-[#5F2466]  tablet:text-xl tablet:font-medium ">
              {" "}
              Our Associate
            </h2>
            <p className="text-[#000000] text-base font-light hover:font-bold  ">
              Spell SMS
            </p>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              Spell Voice
            </p>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              Spell Digital Media
            </p>
            <p className="text-[#000000] text-base font-light hover:font-bold">
              Spell Hosting
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl text-[#5F2466]  tablet:text-xl tablet:font-medium ">
              
              Contact Us
            </h2>
            <div className="relative flex gap-2">
              <IoIosCall className="text-[#5F2466] " />
              <div>
                <p className="  text-[#000000] text-base  hover:font-bold font-light ">
                  01-5910781
                </p>
                <p className="text-[#000000] text-base font-light  hover:font-bold">
                  9801047737
                </p>
              </div>
            </div>

            <div className="relative flex gap-2">
              <MdEmail className="text-[#5F2466] " />
              <div>
                <p className="text-[#000000] text-base font-light hover:font-bold">
                  info@spellinnovation.com
                </p>{" "}
                <p className="text-[#000000] text-base font-light hover:font-bold ">
                  contact@spellinnovation.com
                </p>
              </div>
            </div>

            <div className="relative flex gap-2">
              <MdEditLocation className="text-[#5F2466] " />
              <p className="text-[#000000] text-base font-light hover:font-bold">
                Pipal bot, Mid baneswor
              </p>
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
