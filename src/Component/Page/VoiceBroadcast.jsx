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
    <div >
      <div className="flex mobile:mx-10 mobile:my-10 mobile:flex-col mobile:gap-10 laptop:flex-row laptop:mx-12">
        <div className=" flex flex-col mobile:gap-2 mobile:items-start mobile:justify-center tablet:gap-5 laptop:gap-6 desktop:gap-5">
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
        <div>
          <img
            className="w-56 tablet:w-80 laptop:w-[850px] "
            src={bc}
            alt="Logo"
          />
        </div>

      </div>


      <div className="tablet: mobile:mx-10  laptop:mx-5 desktop:mx-28 laptop:flex laptop:gap-5">
        <div className=" bg-[#F7F7F7] flex flex-col rounded-xl mobile:py-3 mobile:px-2 mobile:my-10 laptop:p-3">
          <LuArrowUpRightSquare className="text-[#5F2466] w-[50px] h-[50px] " />

          <h3 className="text-[#5F2466] text-2xl">VoIP Call</h3>
          <p className="text-[#000000] flex items-center  text-base  ">
            Build immersive one-to-one to large scale Voice-over-IP calls across
            browsers, app and web applications.
          </p>
        </div>
        <div className="flex flex-col rounded-md bg-[#F7F7F7] mobile:py-3 mobile:px-2 mobile:my-10 laptop:p-3 ">
          <HiOutlinePhoneArrowUpRight className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl">Phone Call </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Connect to PSTN networks globally and reach anyone with an Spell
            CPaaS phone number.
          </p>
        </div>
        <div className="flex flex-col bg-[#F7F7F7] rounded-md mobile:py-3 mobile:px-2 mobile:my-10 laptop:p-3">
          <HiOutlineComputerDesktop className="text-[#5F2466] w-[50px] h-[50px]  " />
          <h3 className="text-[#5F2466] text-2xl	mobile:leading-7   ">Voice API platform </h3>
          <p className="text-[#000000] flex justify-center p-2 ">
            Integrate voice calling within your applications. Make, receive, and
            control calls across the world programmatically.
          </p>
        </div>
        <div className="flex flex-col  bg-[#F7F7F7] rounded-md mobile:py-3 mobile:px-2 mobile:my-10 laptop:p-3 ">
          <FaUserFriends className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   ">Call Center </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Transform your call center with seamless Voice-over-IP calls, global
            PSTN network connectivity, and integrated voice calling through our
            API platform.
          </p>
        </div>
      </div>
      <div className="flex flex-col mobile:items-start mobile:mx-10 mobile:py-10 laptop:items-center laptop:gap-6">
        <h2 className="text-[#5F2466] mobile:text-2xl mobile:font-normal tablet:text-3xl  tablet:font-semibold laptop:text-4xl laptop:font-bold">
          Why you need Voice Broadcast
        </h2>
        <p className="text-[#000000] mobile:text-base mobile:font-light ">
          Cut through inbox overload! Reach thousands instantly with personalized voice messages. Alerts, reminders, campaigns - Voice Broadcast gets heard, loud and clear.  No spam folders, just engagement boost.
        </p>

      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col mobile:mx-10 laptop:mx-40  ">
          <div className="bg-[#F05327] text-[#FFFFFF] flex flex-row gap-5 rounded-t-lg py-2  laptop:px-40">
            <RxCross2 />
            <BsCircle className="pl-1" />
            <TbMinus />
          </div>
          <div className="bg-[#5F2466] rounded-b-lg py-40 px-14">
            <p className="text-[#FFFFFF] mobile:text-xs laptop:w-72  ">
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
          className="mobile:hidden tablet:block laptop:-ml-80"
          src={pp}
          alt="Logo"
        />
      </div>
      <div className="flex flex-col bg-[#F7F7F7] justify-around items-center mobile:py-12 mobile:my-20 gap-4 ">
        <p className="text-[#000000] text-center  text-base font-light  tablet:text-2xl tablet:font-light">
          We support 10+ programming languages including
        </p>
        <div className="flex mobile:flex-col mobile:gap-3 tablet:flex-row tablet:gap-5 tablet:justify-center laptop:justify-between laptop:gap-20 ">
          <img
            className=""
            src={jaa}
            alt="Logo"
          />
          <img
            className=""
            src={ph}
            alt="Logo"
          />
          <img
            className=""
            src={su}
            alt="Logo"
          />
          <img
            className=""
            src={ce}
            alt="Logo"
          />
          <img
            className=""
            src={js}
            alt="Logo"
          />
        </div>
      </div>
      <div className="bg-[#5F2466] laptop:py-10">
        <h2 className="text-[#FFFFFF] flex items-center justify-center text-xl font-bold py-8 laptop:text-3xl ">
          There’s so much to do with Voice API
        </h2>
        <div className="flex mobile:flex-col justify-center items-center gap-7 mobile:mx-5 laptop:flex-row laptop:mx-16">
          <div className="bg-[#782C8080] mobile:p-3 mobile:rounded-md ">
            <h3 className="text-[#ffffff] font-semibold flex text-xl gap-3">
              <PiFolderUserFill className=" " />
              Hassle-free Solution
            </h3>
            <p className="text-[#FFFFFF] font-light">
              Build the exact call experience you want within minutes with
              pre-packaged APIs/SDKs and a library of sample codes and
              documentation. There is no need to set up the infrastructure, deal
              with telecom carriers, or conduct capacity planning. We have
              tackled the hard challenges so you do not have to.
            </p>
          </div>
          <div className="bg-[#782C8080] mobile:p-3 mobile:rounded-md">
            <h3 className="text-[#ffffff] font-semibold flex 	text-xl gap-3">
              <GrConnect className="" />
              Connect Globally To Any Device
            </h3>
            <p className="text-[#FFFFFF] font-light ">
              With VoIP, PSTN & SIP calling, you get total freedom to reach
              customers around the world on any platform. Whether your users are
              on apps, browsers, SIP-enabled devices or traditional phones, we
              get them connected.
            </p>
          </div>
          <div className="bg-[#782C8080] mobile:p-3 mobile:rounded-md  ">
            <h3 className="text-[#ffffff] font-semibold  flex	text-xl  gap-3">
              <IoMdVideocam className="" />
              Connect Globally To Any Device
            </h3>
            <p className="text-[#FFFFFF] font-light">
              Crystal clear conversation is the goal. Engineered on WebRTC, the
              leading real-time communication standard, we built in powerful
              functionality and call-quality optimisation so that you and your
              customers will always get low-latency, jittery-free conversations.
            </p>
          </div>
        </div>
      </div>

      {/* Create delightful calling experiences */}
      <div className="flex flex-col my-10 mx-10 laptop:items-center">
        <h2 className=" text-[#5F2466] text-2xl font-bold flex justify-center laptop:text-4xl">
          Create delightful calling experiences{" "}
        </h2>

        <div className="flex laptop:flex-row laptop:justify-between laptop:mx-14">
          <div className="flex flex-col  laptop:py-20">

            <h1 className="  text-[#5F2466] font-bold text-base mb-8 ">
              The API convenience
            </h1>
            <p className="font-light">
              Receiving, making, forwarding, and </p>
            <span className="font-light">recording calls will never be
              the same.</span>

            <ul className="list-disc ml-5 font-light laptop:py-5">
              <li className="">
                Set up using our trustworthy codes or do it yourself
              </li>
              <li className="">
                Use SIP trunking to integrate existing hardware with APIs
              </li>
              <li className=" 	">
                Pay only for what you need, no unpleasant billing surprises
              </li>
            </ul>
          </div>
          <img className="mobile:hidden tablet:block tablet:w-72 tablet:my-10 laptop:ml-20" src={rr} alt="Logo" />
        </div>
        <div className="flex flex-row  gap-3 my-5 laptop:items-center ">
          <button className="rounded-md bg-[#5F246663] text-[#000000] hover:bg-[#5F2466]  hover:text-[#FFFFFF] tablet:py-4 tablet:px-2 ">
            The API convenience
          </button>
          <button className="rounded-md bg-[#5F246663] text-[#000000]  hover:bg-[#5F2466]  hover:text-[#FFFFFF] tablet:py-4 tablet:px-2">
            Complete all command
          </button>
          <button className="rounded-md bg-[#5F246663] text-[#000000]  hover:bg-[#5F2466]  hover:text-[#FFFFFF] tablet:py-4 tablet:px-2">
            Build better client connection
          </button>
        </div>
      </div>

      {/* Why go for just customised calling when you can personalise your SMS
      capabilities too? */}

      <div className="bg-[#5F2466] laptop:flex laptop:my-56">
        <div className="flex flex-col py-10  gap-3 mx-10 laptop:py-16">
          <h1 className="text-[#FFFFFF] font-medium text-4xl">
            Why go for just customised calling when you can personalise your SMS
            capabilities too?
          </h1>
          <btn className="text-[#FFFFFF] text-2xl font-semibold ">
            Explore our Voice API solution
            <svg
              className="-mt-7 ml-80 flex"
              width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_813_785)">
                <path d="M5.75 12H30.25M30.25 12L19.75 22M30.25 12L19.75 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges" />
              </g>
              <defs>
                <filter id="filter0_d_813_785" x="0.25" y="0.5" width="35.5" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_813_785" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_813_785" result="shape" />
                </filter>
              </defs>
            </svg>
          </btn>
        </div>
        <img className="mobile:hidden tablet:block tablet:w-72 tablet:mx-10 laptop:-mt-40" src={sss} alt="Logo" />
      </div>
      <Frequtly />
      <Photo />
    </div>
  );
};

export default VoiceBroadcast;
