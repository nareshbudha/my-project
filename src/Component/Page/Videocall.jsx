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
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.3961 36.61C29.5954 34.9588 28.5604 33.757 26.7735 34.4898L23.2486 35.799C20.4268 37.1083 19.0207 35.799 17.6147 33.8352L11.2777 19.3944C10.4868 17.7432 10.8969 16.1897 12.6837 15.4569L17.6147 13.493C19.4015 12.7602 19.1184 11.2067 18.3177 9.55551L14.0898 1.6805C13.2891 0.0292866 11.6487 -0.371303 9.86186 0.361483C6.28814 1.8466 3.32957 4.15243 1.41578 7.58187C-0.927639 11.7734 0.244071 17.5966 0.712755 20.049C1.18144 22.5014 2.82183 26.7907 4.94068 31.2069C7.05952 35.6232 8.91473 39.0917 10.5746 41.0556C12.2346 43.0194 16.2086 48.3932 21.1396 49.5852C25.182 50.5622 29.5368 49.7415 33.1105 48.2662C34.8974 47.5334 34.9072 45.9799 34.1065 44.3189L30.3961 36.61ZM40.3751 11.5389H34.6045L42.2987 19.2381H24.9964V23.0876H42.2987L34.6142 30.777H40.3849L50.0027 21.1531L40.3751 11.5389Z"
              fill="#5F2466"
            />
          </svg>

          <h3 className="text-[#5F2466] text-2xl	   "> Interactive calls </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Enhance visual experiences during video calls by allowing customers
            to share their screens, promoting better interactions.
          </p>
        </div>
        <div className="flex flex-col  w-[30%] bg-[#F7F7F7]  ">
          <svg
            width="38"
            height="42"
            viewBox="0 0 38 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.5833 4.33332H31.5V0.166656H27.3333V4.33332H10.6667V0.166656H6.5V4.33332H4.41667C2.10417 4.33332 0.270833 6.20832 0.270833 8.49999L0.25 37.6667C0.25 38.7717 0.688987 39.8315 1.47039 40.6129C2.25179 41.3943 3.3116 41.8333 4.41667 41.8333H33.5833C35.875 41.8333 37.75 39.9583 37.75 37.6667V8.49999C37.75 6.20832 35.875 4.33332 33.5833 4.33332ZM33.5833 37.6667H4.41667V16.8333H33.5833V37.6667ZM33.5833 12.6667H4.41667V8.49999H33.5833V12.6667ZM19 23.0833H29.4167V33.5H19V23.0833Z"
              fill="#5F2466"
            />
          </svg>

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
