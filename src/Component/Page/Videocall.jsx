import React from "react";
import ll from "../Image/ll.png";
import vs from "../Image/vs.png";
import rr from "../Image/rr.png";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import {
  HiOutlineComputerDesktop,
  HiOutlinePhoneArrowUpRight,
} from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import { MdEvent,MdPendingActions } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
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
      <div className="flex tablet:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Experience Personal Customer Engagement with Interactive Video
              Calls
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Our video call feature allows you to connect with customers on a
              more personal level, fostering stronger relationships and
              increasing customer satisfaction.
            </p>
            <div className="flex flex-row gap-2">
              <button className="bg-[#5F2466] hover:bg-[#FC6517] text-[#FFFFFF] text-xs mobile:rounded-lg px-1 py-2 mobile:my-2 tablet:px-5 tablet:text-lg tablet:font-medium tablet:rounded-xl">
                Get in touch
              </button>
              <button className="bg-[#5F2466] hover:bg-[#FC6517] text-[#FFFFFF] text-xs mobile:rounded-lg px-1 py-2 mobile:my-2 tablet:px-5 tablet:text-lg tablet:font-medium tablet:rounded-xl">
                View pricing
              </button>
            </div>
          </div>
          <div>
            <img
              className="hidden tablet:block tablet:w-72 tablet:h-72 laptop:w-80  "
              src={ll}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 tabletmd:grid-cols-4 tablet:grid-cols-2 py-20 gap-3 justify-between tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="bg-[#F7F7F7] flex flex-col rounded-xl p-3 ">
          <BiSolidBarChartAlt2 className="text-[#5F2466] mobile:w-10 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10 " />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	  ">
            Conferencing
          </h3>
          <p className="text-[#000000] flex items-center mobile:text-xs mobile:font-light  text-base font-normal desktop:text-lg desktop:leading-6  ">
            Engage with multiple individuals simultaneously through video
            conferencing. Connect the right people on video using any device or
            channel.
          </p>
        </div>
        <div className="flex flex-col   bg-[#F7F7F7] rounded-xl p-3">
          <HiOutlineComputerDesktop className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10" />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold">
            Screen sharing
          </h3>
          <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg desktop:leading-6">
            Enhance visual experiences during video calls by allowing customers
            to share their screens, promoting better interactions.
          </p>
        </div>
        <div className="bg-[#F7F7F7] flex flex-col rounded-xl p-3">
          <HiOutlinePhoneArrowUpRight className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10 " />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	 	   ">
            Interactive calls
          </h3>
          <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg ">
            Enrich video call experiences by selecting menu options through DTMF
            recognition, sharing audio, or playing text-to-speech content.
          </p>
        </div>
        <div className="bg-[#F7F7F7] flex flex-col rounded-xl p-3">
          <MdEvent className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10" />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	 	  ">
            Network events
          </h3>
          <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg ">
            Stay informed about network quality and events, ensuring optimal
            connections for your video interactions.
          </p>
        </div>
      </div>
      <div className=" flex py-20 flex-col justify-center items-center gap-4 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-[#5F2466] flex mobile:text-2xl mobile:font-normal tablet:text-3xl  tablet:font-semibold laptop:text-4xl justify-center laptop:font-bold  	">
            Why you need Video Call
          </h2>
          <p
            className="text-[#000000] text-base font-normal text-center
        "
          >
          
            Video calls provide a more immersive and personal communication
            experience, fostering stronger connections and understanding
          </p>
          <img
            className=" hidden  tablet:block  tablet:mt-5 w-[100%] "
            src={vs}
            alt="Logo"
          />
        </div>
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
      <div className="bg-[#5F2466] w-full py-10">
        <div className="   text-[#FFFFFF] flex flex-col justify-center  items-center tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
          <h2 className=" mobile:text-lg tablet:text-3xl tablet:font-bold">
            There’s so much to do with Voice API
          </h2>
          <div className="grid grid-cols-1 tabletmd:grid-cols-3 tablet:grid-cols-2 gap-3 py-20">
            <div className="flex flex-col bg-[#782C8080] gap-3 p-4 w-full h-fit">
              <h3 className="flex mobile:text-sm mobile:font-medium  tablet:text-xl gap-3  desktop:font-semibold desktop:text-2xl ">
                < FaUserCheck className=" " />
                <span>Seamless Integration</span>
              </h3>
              <p className="flex flex-col mobile:text-xs mobile:font-thin mobile:leading-3   tablet:text-base tablet:font-normal ">
              Effortlessly integrate video capabilities into your applications, providing a smooth and unified user experience.
              </p>
            </div>
            <div className="flex flex-col bg-[#782C8080] p-3 w-full gap-3 h-fit ">
              <h3 className="flex mobile:text-sm mobile:font-medium  tablet:text-xl gap-3  items-center desktop:font-semibold desktop:text-2xl ">
                <MdPendingActions className="" />
                <span>Customizable Interactions</span>
              </h3>
              <p className="  flex flex-col  py-1 mobile:text-xs mobile:font-thin mobile:leading-3   tablet:text-base tablet:font-normal">
              Tailor video interactions with features like screen sharing, interactive menus, and audio/video effects for personalized and engaging experiences.
              </p>
            </div>
            <div className="flex flex-col bg-[#782C8080] p-4 w-full gap-3 h-fit ">
              <h3 className="flex mobile:text-sm mobile:font-medium  tablet:text-xl items-center gap-3  desktop:font-semibold desktop:text-2xl ">
                < TbHeartRateMonitor  className="" />
                <span>Real-Time Monitoring</span>
              </h3>
              <p className="  flex flex-col mobile:text-xs mobile:font-thin mobile:leading-3  tablet:text-base tablet:font-normal ">
              Ensure optimal video quality with real-time monitoring of network events, allowing you to maintain a reliable and high-quality video communication environment.
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

export default Videocall;
