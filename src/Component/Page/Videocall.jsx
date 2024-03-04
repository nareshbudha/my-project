import React from "react";
import ll from "../Image/ll.png";
import vs from "../Image/vs.png";
import rr from "../Image/rr.png";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import {
  HiOutlineComputerDesktop,
  HiOutlinePhoneArrowUpRight,
} from "react-icons/hi2";
import { BsCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TbMinus } from "react-icons/tb";
import { MdEvent } from "react-icons/md";
import su from "../Image/su.png";
import ce from "../Image/ce.png";
import wwwq from "../Image/wwwq.png";
import am from "../Image/am.png";
import sss from "../Image/sss.png";
import Frequtly from "./Frequtly";
import Photo from "./Photo";

const Videocall = () => {
  return (
    <div>
      <div className=" flex  sm:flex-col lg:flex-row w-full  justify-between gap-5 pt-28 ">
        <div className="flex flex-col gap-5 ml-24">
          <h2 className="text-[#5F2466] text-4xl  w-[70%] font-bold justify-center items-center ">
            Experience Personal Customer Engagement with Interactive Video Calls
          </h2>
          <p className="text-[#000000] w-[65%]	text-xs	leading-6 flex   items-center">
            Our video call feature allows you to connect with customers on a
            more personal level, fostering stronger relationships and increasing
            customer satisfaction.
          </p>
          <div className="  text-[#FFFFFF]  flex flex-row  gap-[10px] font-bold   justify-start items-center">
            <button className="bg-[#702D77]  rounded-xl py-[10px] px-[25px] ">
              Get In touch
            </button>
            <button className="bg-[#702D77]  rounded-xl py-[10px] px-[25px]">
              View pricing
            </button>
          </div>
        </div>
        <img className="w-[25%] mr-48" src={ll} alt="Logo" />
      </div>
      <div className="flex flex-row justify-center items-center mx-24 gap-5">
        <div className="flex flex-col  w-[30%] bg-[#F7F7F7]  ">
          <BiSolidBarChartAlt2 className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   ">Conferencing </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Engage with multiple individuals simultaneously through video
            conferencing. Connect the right people on video using any device or
            channel.
          </p>
        </div>
        <div className="flex flex-col  w-[30%] bg-[#F7F7F7]  ">
          <HiOutlineComputerDesktop className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   ">Screen sharing </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Enhance visual experiences during video calls by allowing customers
            to share their screens, promoting better interactions.
          </p>
        </div>
        <div className="flex flex-col  w-[30%] bg-[#F7F7F7]  ">
          <HiOutlinePhoneArrowUpRight className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   "> Interactive calls </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Enhance visual experiences during video calls by allowing customers
            to share their screens, promoting better interactions.
          </p>
        </div>
        <div className="flex flex-col  w-[30%] bg-[#F7F7F7]  ">
          <MdEvent className="text-[#5F2466] w-[50px] h-[50px]  " />

          <h3 className="text-[#5F2466] text-2xl	   ">Network events </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Stay informed about network quality and events, ensuring optimal
            connections for your video interactions.
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full mt-20 gap-3">
        <h2 className="text-[#5F2466] text-[40px] leading-[50px] font-bold flex justify-end	">
          Why you need Video Call
        </h2>
        <h1 className="text-[#000000] font-light	 text-base px-40 w-[90%] ml-40 mt-10 ">
          Video calls provide a more immersive and personal communication
          experience, fostering stronger connections and understanding
        </h1>
        <p className="text-[#000000] font-light	 text-base">
          between parties, whether for business meetings, virtual
          collaborations, or personal interactions.
        </p>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col  justify-center items-center ml-52 mt-10 ">
          <div className="bg-[#F05327] text-[#FFFFFF] py-3 pl-6 gap-2   w-2/3 flex rounded-t-lg  ">
            <RxCross2 />
            <BsCircle className="pl-2" />
            <TbMinus />
          </div>
          <div className="bg-[#5F2466] w-2/3 pb-16 rounded-b-lg    ">
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
          src={vs}
          alt="Logo"
        />
      </div>
      <div className="flex flex-col bg-[#F7F7F7] justify-center items-center mt-16 py-4 gap-4">
        <p className="text-[#000000] text-2xl font-light">
          We support 10+ programming languages including
        </p>
        <div className="flex flex-row gap-[70px]">
          <img src={wwwq} alt="Logo" />
          <img src={ce} alt="Logo" />
          <img src={am} alt="Logo" />
          <img src={su} alt="Logo" />
          <img src={ce} alt="Logo" />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-[#5F2466] text-[40px]  font-bold mt-20 flex justify-center leading-[50px]">
          Create delightful calling experiences
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
              <ul className="list-disc mt-6 ml-44">
                <li className=" font-light	">
                  Set up using our trustworthy codes or do it yourself{" "}
                </li>
                <li className="font-light	">
                  Use SIP trunking to integrate existing hardware with APIs{" "}
                </li>
                <li className=" font-light	">
                  Pay only for what you need, no unpleasant billing surprises{" "}
                </li>
              </ul>
            </div>
          </div>

          <img className="ml-12" src={rr} alt="Logo" />
        </div>
        <div className="flex flex-row px-10 mt-5 justify-center items-center ml-7 gap-6 ">
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
            capabilities too?
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

export default Videocall;
