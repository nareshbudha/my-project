import { LuArrowUpRightSquare } from "react-icons/lu";

import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaGlobeAfrica } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";


import { CiUser } from "react-icons/ci";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";

import bb from "../Image/bb.png";

import mm from "../Image/mm.png";
import jaa from "../Image/jaa.png";
import js from "../Image/js.png";
import ce from "../Image/ce.png";
import su from "../Image/su.png";
import ph from "../Image/ph.png";
import nn from "../Image/nn.png";

import oo from "../Image/oo.png";
import Photo from "./Photo";
import Frequtly from "./Frequtly";

const BulkSms = () => {
  return (
    <div>
      <div className=" flex tablet:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Streamline Your Communication with Bulk Sms Services
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Instantly reach a broad audience with our Bulk SMS feature—ideal
              for mass communication and marketing. Effortlessly send
              personalized messages, promotions, and updates to engage customers
              and fuel business growth.
            </p>
            <button className="bg-[#5F2466] hover:bg-[#FC6517] text-[#FFFFFF] mobile:rounded-lg mobile:py-2 mobile:px-1 mobile:my-2 tablet:py-4 tablet:px-3 tablet:text-lg tablet:font-medium tablet:rounded-xl laptop:rounded-xl laptop:px-2 laptop:py-3 ">
              Learn More
            </button>
          </div>
          <img
            className="hidden tablet:block tablet:w-72 tablet:h-72 laptop:w-80 "
            src={bb}
            alt="Logo"
          />
        </div>
      </div>
    
      <div className="grid grid-cols-1 tabletmd:grid-cols-4 tablet:grid-cols-2 py-20 gap-3 justify-between tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className=" bg-[#F7F7F7] flex flex-col rounded-xl p-3 ">
          <LuArrowUpRightSquare className="text-[#5F2466]  mobile:w-10 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10  " />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	   ">
            Send at scale
          </h3>
          <p className="text-[#000000] flex items-center mobile:text-xs mobile:font-light  text-base font-normal desktop:text-lg desktop:leading-6 ">
            Send SMS messages to hundreds, thousands, or millions of customers
            globally, all made possible by our intelligent routing engine.
          </p>
        </div>
        <div className="flex flex-col   bg-[#F7F7F7] rounded-xl p-3">
          <BiSolidBarChartAlt2 className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10  " />
          <h3 className="text-[#5F2466] mr-5 mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold">
            Performance insights
          </h3>
          <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg desktop:leading-6 ">
            Gain instant visibility into the performance of your SMS messages
            with real-time metrics on network-level deliverability.{" "}
          </p>
        </div>
        <div className="bg-[#F7F7F7] flex flex-col rounded-xl p-3">
          <HiOutlineComputerDesktop className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10 " />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	 	   ">
            Integrate via REST API
          </h3>
          <p className="text-[#000000] flex justify-center  mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg desktop:leading-6 ">
            Move swiftly from idea to implementation within minutes, courtesy of
            our intuitive API, developer manuals, pre-established integrations,
            and SDKs.
          </p>
        </div>
        <div className="bg-[#F7F7F7] flex flex-col rounded-xl p-3">
          <FaGlobeAfrica className="text-[#5F2466] mobile:w-5 mobile:h-5 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10" />
          <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium tablet:text-2xl	tablet:font-semibold 	   ">
            Globally compliant
          </h3>
          <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg ">
            Safeguard your customers data privacy by ensuring compliance with
            global regulations such as GDPR, HIPAA, 10DLC, and CCPA.
          </p>
        </div>
      </div>
      <div className=" flex py-20 flex-col justify-center items-center gap-4 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-[#5F2466] flex mobile:text-2xl mobile:font-normal tablet:text-3xl  tablet:font-semibold laptop:text-4xl justify-center laptop:font-bold  	">
            Why you need SMS APIs
          </h2>
          <p
            className="text-[#000000] text-base font-normal text-center
        "
          >
            SMS APIs offer seamless connectivity with contact lists, allowing
            not only bulk messaging but also the creation of IVR menus,
            execution of promotions, and smooth customer interactions.
            Additionally, they provide integration with CRM systems for enhanced
            business communication. Users can leverage these APIs to create
            personalized solutions using various programming languages like
            Python, HTML, Java, C#, C++, Ruby, .net, and more.
          </p>
          <img
            className=" hidden  tablet:block  tablet:mt-5 w-[100%] "
            src={mm}
            alt="Logo"
          />
        </div>
      </div>

      <div className="flex py-20 flex-col tabletmd:w-[90%] laptop:w-[80%] desktop:w-[75%] w-[90%] mx-auto">
        <p className="text-[#000000] my-1 w-[40%] text-center  text-xs font-extralight  tablet:text-2xl tablet:font-light">
          We support 10+ programming languages including
        </p>
        <div className="flex mobile:flex-col mobile:gap-3 mobile:w-10 tablet:flex-row tablet:gap-12   tablet:w-4/5 tablet:justify-center laptop:justify-between ">
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
      <div className="bg-[#5F2466] w-full py-10">
        <div className="   text-[#FFFFFF] flex flex-col justify-center  items-center tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
          <h2 className=" mobile:text-lg tablet:text-3xl tablet:font-bold">
            There’s so much to do with SMS API
          </h2>
          <div className="flex flex-col justify-between gap-5 tabletmd:gap-10 p-5 tabletmd:w-4/5 h-auto tablet:flex-row">
            <div className="flex flex-col bg-[#782C8080] p-4">
              <h3 className="flex mobile:text-sm mobile:font-medium mobile:gap-1 tablet:text-xl tablet:gap-3 desktop:text-3xl ">
                <CiUser />
                Great for customers
              </h3>
              <ul className="flex flex-col list-disc mobile:mt-2 mobile:ml-5 mobile:text-xs mobile:font-thin mobile:leading-3 mobile:gap-1 tablet:mt-2 tablet:text-base tablet:font-normal gap-3 desktop:mt-4 desktop:gap-4">
                <li className="text-[#ffffff]  ">
                  Acknowledge customer conversations with thank you messages and
                  other templates
                </li>
                <li className="text-[#ffffff]  ">
                  Miss calls, not leads—follow up on unattended clients with
                  schedule callback SMS feature{" "}
                </li>
                <li className=" text-[#ffffff] ">
                  Stay up-to-date and hold contextual interactions with SMS
                  conversation history
                </li>
              </ul>
            </div>
            <div className="flex flex-col bg-[#782C8080] p-4">
              <h3 className="flex mobile:text-sm mobile:font-medium mobile:gap-1 tablet:text-xl tablet:gap-3 desktop:text-3xl">
                <AiOutlineMessage />
                Quick and convenient
              </h3>
              <ul className="  flex flex-col list-disc mobile:mt-2 mobile:ml-5 mobile:text-xs mobile:font-thin mobile:leading-3 mobile:gap-1 tablet:mt-2 tablet:text-base tablet:font-normal gap-3 desktop:mt-4 desktop:gap-4">
                <li className="text-[#ffffff] ">
                  SMS templates save the hassle of typing each text
                  individually; steer clear of human errors
                </li>
                <li className="text-[#ffffff] ">
                  Configure SMS API and schedule customised messages to clients
                  any time of the day
                </li>
                <li className="text-[#ffffff] ">
                  Enable quick replies for common customer queries with Acefones
                  auto-response SMSes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  py-20 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className=" desktop:w-4/6 mx-auto">
          <h2 className=" text-[rgb(95,36,102)]  text-xl font-bold text-center  tablet:text-2xl tabletmd:text-4xl gap-4">
            Why SMS solutions are perfect for you
          </h2>
          <div className="flex flex-col justify-between tablet:flex-row w-[100%] ">
            <div className="flex flex-col mobile:gap-4  tablet:gap-12 desktop:gap-10 ">
              <h1 className=" text-[#5F2466] font-bold  mt-10 tablet:mt-20 ">
                Enable personal customer care
              </h1>
              <div className=" flex flex-col ">
                <p className=" text-base font-light max-w-[400px]">
                  Give your service teams the ability to receive and respond to
                  SMS messages from a shared Inbox.
                </p>
              </div>

              <ul className="list-disc flex flex-col ml-7">
                <li className=" font-light	">Automation to handle volumes </li>
                <li className="  font-light	">Self-serve resolution </li>
                <li className=" font-light	">Escalate to agent</li>
                <li className=" font-light	">Integrate with your tools</li>
              </ul>
              <p className=" text-base font-light max-w-[400px]">
                  Give your service teams the ability to receive and respond to
                  SMS messages from a shared Inbox.
                </p>
            </div>

            <img className="hidden tablet:block " src={nn} alt="Logo" />
          </div>
          <div className="flex flex-row flex-wrap mobile:py-5 gap-2 tablet:gap-5 ">
            <button className="bg-[#5F246663]   text-[#000000] hover:text-[#ffff] rounded-lg  text-xs font-light  tablet:text-sm py-3 tablet:px-10 tablet:font-normal">
              Customer care
            </button>
            <a
              href="#"
              className=" bg-[#5F2466] hover:bg-[#5F246663] text-[#000000] hover:text-[#ffff] rounded-lg px-3 py-3 text-xs font-light tablet:text-sm tablet:px-5 tablet:font-normal"
            >
              Marketing campaigns
            </a>
            <a
              href="#"
              className="bg-[#5F3466] text-[#000000] hover:text-[#ffff] rounded-lg  text-xs font-light tablet:text-sm px-3 py-3 tablet:px-5 tablet:py-5 tablet:font-normal"
            >
              Optimizer for efficiency lol
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#5F2466]  ">
      <div className="flex flex-col tablet:flex-row justify-between tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="flex flex-col tabletmd:w-4/5 gap-5 py-10">
          <h1 className="text-[#FFFFFF] text-lg font-bold  tablet:max-w-full tablet:text-3xl tablet:font-normal laptop:text-4xl desktop:text-5xl   ">
            Extend beyond text messages; personalize your calls with the
            utilization of Voice APIs.
          </h1>
          <btn className="text-[#FFFFFF] flex text-base items-centr font-light tablet:text-xl tablet:font-semibold">
            Explore our Voice API solution <BsArrowRight />
          </btn>
        </div>
        <div>
        <img
          className=" hidden tablet:block  tabletmd:-mt-40"
          src={oo}
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

export default BulkSms;
