import React from "react";
import bc from "../Image/bc.png";
import pp from "../Image/pp.png";
import {
  HiOutlineComputerDesktop,
  HiOutlinePhoneArrowUpRight,
} from "react-icons/hi2";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { PiFolderUserFill } from "react-icons/pi";
import { GrConnect } from "react-icons/gr";
import { IoMdVideocam } from "react-icons/io";

import jaa from "../Image/jaa.png";
import js from "../Image/js.png";
import ce from "../Image/ce.png";
import su from "../Image/su.png";
import ph from "../Image/ph.png";
import rr from "../Image/rr.png";
import sss from "../Image/sss.png";
import Photo from "./Photo";
import Frequtly from "./Frequtly";

const VoiceBroadcast = () => {
  return (
    <div>
      <div className="flex tablet:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Automate Your Voice Broadcast with Ease
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Our Voice Broadcast feature allows you to automate calls and
              deliver messages to a large audience, saving you time and effort.
              Reach your customers effectively and efficiently.
            </p>
            <button className="bg-[#5F2466] hover:bg-[#FC6517] text-[#FFFFFF] text-xs mobile:rounded-lg px-1 py-2 mobile:my-2 tablet:px-5 tablet:text-lg tablet:font-medium tablet:rounded-xl">
              Get in touch
            </button>
          </div>
          <div>
            <img
              className="hidden tablet:block tablet:w-72 tablet:h-72 laptop:w-80  "
              src={bc}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 tabletmd:grid-cols-4 tablet:grid-cols-2 py-20 gap-3 justify-between tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="bg-[#F7F7F7] flex flex-col rounded-xl p-3 ">
          <LuArrowUpRightSquare className="text-[#5F2466] mobile:w-10 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10 " />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	  ">
            VoIP Call
          </h3>
          <p className="text-[#000000] flex items-center mobile:text-xs mobile:font-light  text-base font-normal desktop:text-lg desktop:leading-6  ">
            Build immersive one-to-one to large scale Voice-over-IP calls across
            browsers, app and web applications.
          </p>
        </div>
        <div className="flex flex-col   bg-[#F7F7F7] rounded-xl p-3">
          <HiOutlinePhoneArrowUpRight className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10" />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold">
            Phone Call
          </h3>
          <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg desktop:leading-6">
            Connect to PSTN networks globally and reach anyone with an Spell
            CPaaS phone number.
          </p>
        </div>
        <div className="bg-[#F7F7F7] flex flex-col rounded-xl p-3">
          <HiOutlineComputerDesktop className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10 " />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	 	   ">
            Voice API platform{" "}
          </h3>
          <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg ">
            Integrate voice calling within your applications. Make, receive, and
            control calls across the world programmatically.
          </p>
        </div>
        <div className="bg-[#F7F7F7] flex flex-col rounded-xl p-3">
          <FaUserFriends className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10" />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	 	  ">
            Call Center{" "}
          </h3>
          <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg ">
            Transform your call center with seamless Voice-over-IP calls, global
            PSTN network connectivity, and integrated voice calling through our
            API platform.
          </p>
        </div>
      </div>
      <div className=" flex py-20 flex-col justify-center items-center gap-4 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-[#5F2466] flex mobile:text-2xl mobile:font-normal tablet:text-3xl  tablet:font-semibold laptop:text-4xl justify-center laptop:font-bold  	">
            Why you need Voice Broadcast
          </h2>
          <p
            className="text-[#000000] text-base font-normal text-center
        "
          >
            Cut through inbox overload! Reach thousands instantly with
            personalized voice messages. Alerts, reminders, campaigns - Voice
            Broadcast gets heard, loud and clear. No spam folders, just
            engagement boost.
          </p>
          <img
            className=" hidden  tablet:block  tablet:mt-5 w-[100%] "
            src={pp}
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#F7F7F7] justify-around items-center mobile:py-12 mobile:my-20 gap-4 ">
        <p className="text-[#000000] text-center  text-base font-light  tablet:text-2xl tablet:font-light">
          We support 10+ programming languages including
        </p>
        <div className="flex mobile:flex-col mobile:gap-3 tablet:flex-row tablet:gap-5 tablet:justify-center laptop:justify-between laptop:gap-20 ">
          <img className="" src={jaa} alt="Logo" />
          <img className="" src={ph} alt="Logo" />
          <img className="" src={su} alt="Logo" />
          <img className="" src={ce} alt="Logo" />
          <img className="" src={js} alt="Logo" />
        </div>
      </div>
      <div className="bg-[#5F2466] w-full py-10">
        <div className="   text-[#FFFFFF] flex flex-col justify-center  items-center tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
          <h2 className=" mobile:text-lg tablet:text-3xl tablet:font-bold">
            There’s so much to do with Voice API
          </h2>
          <div className="grid grid-cols-1 tabletmd:grid-cols-3 tablet:grid-cols-2 gap-3 py-20">
            <div className="flex flex-col bg-[#782C8080] gap-3 p-4 w-full h-fit">
              <h3 className="flex mobile:text-sm mobile:font-medium  tablet:text-xl gap-3  desktop:font-semibold desktop:text-2xl ">
                <PiFolderUserFill className=" " />
                <span>Hassle-free Solutions</span>
              </h3>
              <p className="flex flex-col mobile:text-xs mobile:font-thin mobile:leading-3   tablet:text-base tablet:font-normal ">
                Build the exact call experience you want within minutes with
                pre-packaged APIs/SDKs and a library of sample codes and
                documentation. There is no need to set up the infrastructure,
                deal with telecom carriers, or conduct capacity planning. We
                have tackled the hard challenges so you do not have to.
              </p>
            </div>
            <div className="flex flex-col bg-[#782C8080] p-3 w-full gap-3 h-fit ">
              <h3 className="flex mobile:text-sm mobile:font-medium  tablet:text-xl gap-3  items-center desktop:font-semibold desktop:text-2xl ">
                <GrConnect className="" />
                <span>Connect Globally To Any Device</span>
              </h3>
              <p className="  flex flex-col  py-1 mobile:text-xs mobile:font-thin mobile:leading-3   tablet:text-base tablet:font-normal">
                With VoIP, PSTN & SIP calling, you get total freedom to reach
                customers around the world on any platform. Whether your users
                are on apps, browsers, SIP-enabled devices or traditional
                phones, we get them connected.
              </p>
            </div>
            <div className="flex flex-col bg-[#782C8080] p-4 w-full gap-3 h-fit ">
              <h3 className="flex mobile:text-sm mobile:font-medium  tablet:text-xl items-center gap-3  desktop:font-semibold desktop:text-2xl ">
                <IoMdVideocam className="" />
                <span>Crystal clear voice</span>
              </h3>
              <p className="  flex flex-col mobile:text-xs mobile:font-thin mobile:leading-3  tablet:text-base tablet:font-normal ">
                Crystal clear conversation is the goal. Engineered on WebRTC,
                the leading real-time communication standard, we built in
                powerful functionality and call-quality optimisation so that you
                and your customers will always get low-latency, jittery-free
                conversations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Create delightful calling experiences */}
      <div className="flex flex-col  py-20 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className=" desktop:w-4/6 mx-auto">
          <h2 className=" text-[rgb(95,36,102)]  text-xl font-bold text-center  tablet:text-2xl tabletmd:text-4xl gap-4">
            Create delightful calling experiences
          </h2>
          <div className="flex flex-col justify-between  tablet:flex-row w-[100%] ">
            <div className="flex flex-col mobile:gap-4  tablet:gap-12 desktop:gap-10 ">
              <h1 className=" text-[#5F2466] font-bold  mt-10 tablet:mt-20 ">
                The API convenience
              </h1>
              <div className=" flex flex-col ">
                <p className=" text-base font-light max-w-[400px]">
                  Receiving, making, forwarding, and recording calls will never
                  be the same.
                </p>
              </div>

              <ul className="list-disc flex flex-col ml-7">
                <li className=" font-light	">
                  Set up using our trustworthy codes or do it yourself
                </li>
                <li className="  font-light	">
                  Use SIP trunking to integrate existing hardware with APIs
                </li>
                <li className=" font-light	">
                  Pay only for what you need, no unpleasant billing surprises
                </li>
              </ul>
            </div>

            <img className="hidden tablet:block " src={rr} alt="Logo" />
          </div>
          <div className="flex flex-row flex-wrap gap-3 tablet:gap-5 py-5 tablet:py-20">
            <button className="bg-[#5F246663]   text-[#000000] hover:text-[#ffff] rounded-lg  text-xs font-light  tablet:text-sm py-3 tablet:px-10 tablet:font-normal">
            The API convenience
            </button>
            <a
              href="#"
              className=" bg-[#5F2466] hover:bg-[#5F246663] text-[#000000] hover:text-[#ffff] rounded-lg px-3 py-3 text-xs font-light tablet:text-sm tablet:px-5 tablet:font-normal"
            >
             Complete all command
            </a>
            <a
              href="#"
              className="bg-[#5F3466] text-[#000000] hover:text-[#ffff] rounded-lg  text-xs font-light tablet:text-sm px-3 py-3 tablet:px-5 tablet:py-5 tablet:font-normal"
            >
             Build better client connection
            </a>
          </div>
        </div>
      </div>

      {/* Why go for just customised calling when you can personalise your SMS
      capabilities too? */}
        <div className="bg-[#5F2466] my-20 ">
      <div className="flex flex-col tablet:flex-row justify-between tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="flex flex-col tabletmd:w-4/5 gap-5 py-10">
          <h1 className="text-[#FFFFFF] text-lg font-bold  tablet:max-w-full tablet:text-3xl tablet:font-normal laptop:text-4xl desktop:text-5xl   ">
          Why go for just customised calling when you can personalise your SMS capabilities too?
          </h1>
          <btn className="text-[#FFFFFF] flex text-base items-center gap-3 font-light tablet:text-xl tablet:font-semibold">
          Explore our Chat SMS solution <BsArrowRight />
          </btn>
        </div>
        <div>
        <img
          className=" hidden tablet:block  tabletmd:-mt-40"
          src={sss}
          alt="Logo"
        />
        </div>
       
      </div>
      </div>
      <Frequtly />
      <Photo />
    </div>
  );
};

export default VoiceBroadcast;
