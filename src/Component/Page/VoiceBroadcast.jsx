import React from "react";
import bc from "../Image/bc.png";
import pp from "../Image/pp.png";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { FaPhone, FaUserFriends } from "react-icons/fa";
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
    <div className="font-Roboto">
      <div className="   flex sm:flex-col lg:flex-row w-full  justify-between gap-5 py-40">
        <div className="text-[#5F2466] w-[45%] ml-5 flex flex-col items-start gap-5  ">
          <h2 className="  text-[40px] leading-[50px] font-bold	ml-16 ">
            Automate Your Voice Broadcast with Ease
          </h2>
          <p className=" text-[#000000] text-base ml-16 ">
            Our Voice Broadcast feature allows you to automate calls and deliver
            messages to a large audience, saving you time and effort. Reach your
            customers effectively and efficiently.
          </p>
          <button className="bg-[#5F2466] text-[#FFFFFF] font-bold  flex flex-row rounded-xl ml-16  py-4   px-6">
            Get in touch
          </button>
        </div>
        <img className=" w-2/6 h-2/5 mr-56" src={bc} alt="Logo" />
      </div>
      <div className="flex flex-row justify-end    gap-5 ">
        <div className="flex flex-col rounded-md	ml-32 bg-[#F7F7F7] w-[30%]  ">
          <LuArrowUpRightSquare className="text-[#5F2466] w-[50px] h-[50px] " />

          <h3 className="text-[#5F2466] text-2xl	   ">VoIP Call</h3>
          <p className="text-[#000000] flex items-center  text-base  ">
            Build immersive one-to-one to large scale Voice-over-IP calls across
            browsers, app and web applications.
          </p>
        </div>
        <div className="flex flex-col  w-[30%] bg-[#F7F7F7] ">
          <FaPhone className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   ">Phone Call </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Connect to PSTN networks globally and reach anyone with an Spell
            CPaaS phone number.
          </p>
        </div>
        <div className="flex flex-col w-[30%] bg-[#F7F7F7] ">
          <HiOutlineComputerDesktop className="text-[#5F2466] w-[50px] h-[50px]  " />
          <h3 className="text-[#5F2466] text-2xl	   ">Voice API platform </h3>
          <p className="text-[#000000] flex justify-center p-2 ">
            Integrate voice calling within your applications. Make, receive, and
            control calls across the world programmatically.
          </p>
        </div>
        <div className="flex flex-col mr-32 w-[30%] bg-[#F7F7F7]  ">
          <FaUserFriends className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   ">Call Center </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Transform your call center with seamless Voice-over-IP calls, global
            PSTN network connectivity, and integrated voice calling through our
            API platform.
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full mt-20 gap-3">
        <h2 className="text-[#5F2466] text-[40px] leading-[50px] font-bold flex justify-end	">
          Why you need Voice Broadcast
        </h2>
        <h1 className="text-[#000000] font-light	 text-base px-40 w-[80%] mt-10 ">
          Cut through inbox overload! Reach thousands instantly with
          personalized voice messages. Alerts, reminders, campaigns - Voice
        </h1>
        <p className="text-[#000000] font-light	 text-base">
          Broadcast gets heard, loud and clear. No spam folders, just engagement
          boost.
        </p>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col  justify-center items-center ml-52 mt-10 ">
          <div className="bg-[#F05327] text-[#FFFFFF] py-3 pl-6 gap-2   w-2/3 flex rounded-t-lg  ">
            <RxCross2 />
            <BsCircle className="pl-2" />
            <TbMinus />
          </div>
          <div className="bg-[#5F2466] w-2/3  rounded-b-lg    ">
            <p className="text-[#FFFFFF]  text-base font-light pl-8 mt-11 mb-24 w-[65%] ">
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
          className="w-[380px] h-[350px] -ml-80 mr-96 mt-24 "
          src={pp}
          alt="Logo"
        />
      </div>
      <div className="flex flex-col bg-[#F7F7F7] justify-center items-center mt-16 py-4 gap-4">
        <p className="text-[#000000] text-2xl font-light">
          We support 10+ programming languages including
        </p>
        <div className="flex flex-row gap-[70px]">
          <img src={jaa} alt="Logo" />
          <img src={ph} alt="Logo" />
          <img src={su} alt="Logo" />
          <img src={ce} alt="Logo" />
          <img src={js} alt="Logo" />
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
