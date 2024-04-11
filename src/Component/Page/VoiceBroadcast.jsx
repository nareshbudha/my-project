import React from "react";
import bc from "../Image/bc.png";
import pp from "../Image/pp.png";
import {
  HiOutlineComputerDesktop,
  HiOutlinePhoneArrowUpRight,
} from "react-icons/hi2";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TbMinus } from "react-icons/tb";
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
    <div className="font-Roboto w-[80 %] mx-auto mobile:py-5 mobile:px-10 tablet:py-10 laptop:py-20 desktop:py-24">
      <div className="flex flex-col tablet:flex-row mobile:py-8 mobile:gap-12 ">
        <div className=" flex flex-col mobile:gap-2   tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
          <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
            Automate Your Voice Broadcast with Ease
          </h2>
          <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
            Our Voice Broadcast feature allows you to automate calls and
            deliver messages to a large audience, saving you time and effort.
            Reach your customers effectively and efficiently.
          </p>
          <button
            className="bg-[#5F2466] text-[#FFFFFF] hover:bg-[#FC6517] duration-10 mobile:rounded-lg mobile:py-2 mobile:px-1 mobile:my-2  tablet:px-3 tablet:text-lg tablet:font-medium tablet:rounded-xl laptop:px-2 laptop:py-3"
          >
            Get in touch
          </button>
        </div>
        <img
          className="mobile:w-48 mobile:h-48 tablet:w-72 tablet:h-72 laptop:w-80 laptop:h-80"
          src={bc}
          alt="Logo"
        />
      </div>
      <div className="flex mobile:flex-col  mobile:w-2/4 tablet:flex-row justify-end    gap-6 ">
        <div className="flex flex-col rounded-md bg-[#F7F7F7]   ">
          <LuArrowUpRightSquare className="text-[#5F2466] w-[50px] h-[50px] " />

          <h3 className="text-[#5F2466] text-2xl	   ">VoIP Call</h3>
          <p className="text-[#000000] flex items-center  text-base  ">
            Build immersive one-to-one to large scale Voice-over-IP calls across
            browsers, app and web applications.
          </p>
        </div>
        <div className="flex flex-col rounded-md bg-[#F7F7F7] ">
          <HiOutlinePhoneArrowUpRight className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   ">Phone Call </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Connect to PSTN networks globally and reach anyone with an Spell
            CPaaS phone number.
          </p>
        </div>
        <div className="flex flex-col bg-[#F7F7F7] rounded-md ">
          <HiOutlineComputerDesktop className="text-[#5F2466] w-[50px] h-[50px]  " />
          <h3 className="text-[#5F2466] text-2xl	mobile:leading-7   ">Voice API platform </h3>
          <p className="text-[#000000] flex justify-center p-2 ">
            Integrate voice calling within your applications. Make, receive, and
            control calls across the world programmatically.
          </p>
        </div>
        <div className="flex flex-col  bg-[#F7F7F7] rounded-md  ">
          <FaUserFriends className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   ">Call Center </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Transform your call center with seamless Voice-over-IP calls, global
            PSTN network connectivity, and integrated voice calling through our
            API platform.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-10">
        <h2 className="text-[#5F2466] mobile:mr-2 mobile:text-2xl mobile:font-normal tablet:text-3xl  tablet:font-semibold laptop:text-4xl laptop:font-bold laptop:mr-48 flex justify-end">
          Why you need Voice Broadcast
        </h2>
        <h1 className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-sm  desktop:text-xl desktop:font-normal ">
          Cut through inbox overload! Reach thousands instantly with
          personalized voice messages. Alerts, reminders, campaigns - Voice
        </h1>
        <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-sm ">
          Broadcast gets heard, loud and clear. No spam folders, just engagement
          boost.
        </p>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col  ">
          <div className="bg-[#F05327] text-[#FFFFFF] flex flex-row gap-5 rounded-t-lg py-2 px-14  mobile:w-72 tablet:w-80 laptop:w-96">
            <RxCross2 />
            <BsCircle className="pl-2" />
            <TbMinus />
          </div>
          <div className="bg-[#5F2466] rounded-b-lg py-1 px-14 mobile:w-72 tablet:w-80 laptop:w-96">
            <p className="text-[#FFFFFF] w-[60%] mobile:text-xs mobile:py-2 mobile:pr-1 py-5 pr-1  ">
              from nexmo import Client # Your Nexmo account credentials api_key
              = "YOUR_API_KEY" api_secret = "YOUR_API_SECRET" client =
              Client(api_key, api_secret) # Make a call response =
              client.calls.create( to="+1234567890", from_="+1987654321",
              url="https://your-voice-application.com/call.php" )
              print(f"CallID:response["id"]")
            </p>
          </div>
        </div>
        <img
          className="mobile:hidden  tablet:block tablet:w-72  tablet:-ml-28  mt-14"
          src={pp}
          alt="Logo"
        />
      </div>
      <div className="flex flex-col bg-[#F7F7F7] justify-around items-center py-4 gap-4 mobile:-ml-28">
        <p className="text-[#000000] my-1 w-[40%] text-center  text-xs font-extralight  tablet:text-2xl tablet:font-light">
          We support 10+ programming languages including
        </p>
        <div className="flex mobile:flex-col mobile:gap-3 mobile:w-10 tablet:flex-row tablet:gap-12 tablet:ml-12  tablet:w-4/5 tablet:justify-center laptop:justify-between ">
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] md:max-w-[110px] md:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={jaa}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] md:max-w-[110px] md:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={ph}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] md:max-w-[110px] md:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={su}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] md:max-w-[110px] md:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={ce}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] md:max-w-[110px] md:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={js}
            alt="Logo"
          />
        </div>
      </div>
      <div className="bg-[#5F2466] pb-56">
        <h2 className="text-[#FFFFFF] text-[40px] font-bold py-10 mt-14	flex justify-center ">
          There’s so much to do with Voice API
        </h2>
        <div className="flex flex-row justify-center items-center gap-7">
          <div className="bg-[#782C8080] w-[403.35px] h-[299px] ml-52 ">
            <h3 className="text-[#ffffff] font-semibold flex 	text-2xl leading-6 gap-5 ml-5 mt-5	">
              <PiFolderUserFill className="ml-2 w-[36px] h-[36px]  " />
              Hassle-free Solution
            </h3>
            <p className="text-[#FFFFFF] pt-9 mx-8">
              Build the exact call experience you want within minutes with
              pre-packaged APIs/SDKs and a library of sample codes and
              documentation. There is no need to set up the infrastructure, deal
              with telecom carriers, or conduct capacity planning. We have
              tackled the hard challenges so you do not have to.
            </p>
          </div>
          <div className="bg-[#782C8080] w-[404px] h-[298.65px]  ">
            <h3 className="text-[#ffffff] font-semibold flex 	text-2xl leading-6 gap-5 ml-5 mt-5	">
              <GrConnect className="ml-2 w-[32.08px] h-[32.08px]" />
              Connect Globally To Any Device
            </h3>
            <p className="text-[#FFFFFF] pt-6 mx-7">
              With VoIP, PSTN & SIP calling, you get total freedom to reach
              customers around the world on any platform. Whether your users are
              on apps, browsers, SIP-enabled devices or traditional phones, we
              get them connected.
            </p>
          </div>
          <div className="bg-[#782C8080]  w-[403.35px] h-[298.65px] mr-52 ">
            <h3 className="text-[#ffffff] font-semibold  flex	text-2xl leading-6 gap-5 ml-5 mt-5	">
              <IoMdVideocam className="ml-5 w-[36px] h-[36px]  " />
              Connect Globally To Any Device
            </h3>
            <p className="text-[#FFFFFF]  pt-6 mx-7">
              Crystal clear conversation is the goal. Engineered on WebRTC, the
              leading real-time communication standard, we built in powerful
              functionality and call-quality optimisation so that you and your
              customers will always get low-latency, jittery-free conversations.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-[#5F2466] text-[40px]  font-bold mt-20 flex justify-center leading-[50px]">
          Create delightful calling experiences{" "}
        </h2>
        <div className="flex flex-row    ">
          <div className="flex flex-col pl-32">
            <h1 className=" font-poppins text-base text-[#5F2466] ml-48 font-bold mt-20  ">
              The API convenience{" "}
            </h1>
            <div className=" flex flex-col  items-center">
              <p className="pl-20 pt-6 w-[70%] font-light	 ">
                Receiving, making, forwarding, and recording calls will never be
                the same.
              </p>
              <ul className="list-disc mt-6">
                <li className="pr-32 font-light	">
                  Set up using our trustworthy codes or do it yourself{" "}
                </li>
                <li className="pr-32 font-light	">
                  Use SIP trunking to integrate existing hardware with APIs{" "}
                </li>
                <li className="pr-32 font-light	">
                  Pay only for what you need, no unpleasant billing surprises{" "}
                </li>
              </ul>
            </div>
          </div>

          <img className="ml-12" src={rr} alt="Logo" />
        </div>
        <div className="flex flex-row px-10 mt-5 justify-center items-center mr-24 gap-6 ">
          <button className="rounded-[5px] bg-[#5F2466] text-[#FFFFFF]  py-3 px-12">
            The API convenience
          </button>
          <button className="rounded-[5px] bg-[#5F246663] text-[#000000]   py-3 px-12">
            Complete all command
          </button>
          <button className="rounded-[5px] bg-[#5F246663] text-[#000000]    py-3 px-12">
            Build better client connection
          </button>
        </div>
      </div>
      <div className="bg-[#5F2466] w-full h-[403px] flex flex-row items-center mt-60 ">
        <div className="flex flex-col ml-24 ">
          <h1 className="text-[#FFFFFF] font-medium max-w-full	  text-[48px] leading-[50px]">
            Why go for just customised calling when you can personalise your SMS
            capabilities too?{" "}
          </h1>
          <btn className="text-[#FFFFFF] text-2xl mt-2 ">
            Explore our Voice API solution
          </btn>
        </div>
        <img className="mb-48 w-2/6 mr-36" src={sss} alt="Logo" />
      </div>
      <Frequtly />
      <Photo />
    </div>
  );
};

export default VoiceBroadcast;
