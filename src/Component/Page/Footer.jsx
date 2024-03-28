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
      <div className="bg-[#F7F7F7]  flex flex-col tablet:flex-row  ">
        <div className=" flex flex-col   w-2/6  py-10 tablet:py-2  ">
          <img className="mobile:w-32 mobile:h-16 mobile:mx-36 tablet:ml-2 " src={logoImage} alt="Logo" />
          <p className="text-[#000000]  mobile:w-80 mobile:text-sm mobile:my-8 mobile:mx-10 tablet:w-40 tablet:pr-2 tablet:text-sm tablet:font-light  tablet:ml-4  tablet:mt-2   ">
            We SPELL INNOVATION say we’re young because we’re peopled by young,
            energetic, curious and committed minds who are excited to solve one
            stop automated solution for you.
          </p>
     
        </div>
        <div className="flex flex-col  justify-center mobile:ml-10 mobile:gap-5 mobile:-mt-10 mobile:w-4/6 tablet:w-3/4 tablet:flex-row tablet:justify-center tablet:mt-5">
          <div className="flex flex-col  mobile:gap-1 mobile:ml-28  tablet:-ml-28 tablet:pl-8 tablet:w-48 ">
            <h2 className="text-2xl text-[#5F2466] mobile:-ml-8 tablet:text-xl tablet:font-medium tablet:-ml-5 "> Quick Links</h2>
            <p className="text-[#000000] text-base font-light">About</p>
            <p className="text-[#000000] text-base font-light">Contact </p>
            <p className="text-[#000000] text-base font-light ">
              Terms & Conditions
            </p>
            <p className="text-[#000000] text-base font-light">
              Privacy Policy{" "}
            </p>
          </div>
           <div className="flex flex-col gap-2 mobile:ml-28 tablet:-ml-8 tablet:w-48 ">
            <h2 className="text-2xl text-[#5F2466] mobile:-ml-6 tablet:text-xl tablet:font-medium tablet:mx-2 tablet:pr-8 tablet:-ml-5 "> Our Associate</h2>
            <p className="text-[#000000] text-base font-light mr-10">Spell SMS</p>
            <p className="text-[#000000] text-base font-light">Spell Voice</p>
            <p className="text-[#000000] text-base font-light">
              Spell Digital Media
            </p>
            <p className="text-[#000000] text-base font-light">
              Spell Hosting
            </p>
          </div> 
          <div className="flex flex-col gap-2 mobile:ml-24  tablet:text-sm tablet:-ml-8">
            <h2 className="text-2xl text-[#5F2466] mobile:-ml-1 tablet:text-xl tablet:font-medium tablet:mr-10 "> Contact Us</h2>
            <div className="relative">
              <p className=" absolutetext-[#000000] text-base font-light px-6 ">
                01-5910781
              </p>
              <IoIosCall className="text-[#5F2466] absolute  top-1 gap-1  " />
            </div>

            <p className="text-[#000000] text-base font-light px-6">
              9801047737
            </p>
            <div className="relative">
              <p className="text-[#000000] text-base font-light px-6">
                info@spellinnovation.com
              </p>{" "}
              <MdEmail className="text-[#5F2466] absolute  top-1 gap-1" />
            </div>
            <p className="text-[#000000] text-base font-light px-6">
              contact@spellinnovation.com
            </p>
            <div className="relative">
              <p className="text-[#000000] text-base font-light px-6">
                Pipal bot, Mid baneswor
              </p>
              <MdEditLocation className="text-[#5F2466] absolute  top-1 gap-1" />
            </div>
          </div> 
        </div>
      </div>
      <p className="border-b-2 w-full  border-[#000000] tablet:ml-4 "></p>
      <p className=" bg-[#F7F7F7] flex justify-items-center mobile:ml-10  items-center py-5  ">
        ©2024 Spell Innovation. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
