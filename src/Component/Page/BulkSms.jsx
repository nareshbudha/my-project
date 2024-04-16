import { LuArrowUpRightSquare } from "react-icons/lu";

import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaGlobeAfrica } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";

import { RxCross2 } from "react-icons/rx";
import { TbMinus } from "react-icons/tb";

import { CiUser } from "react-icons/ci";
import { AiFillMessage } from "react-icons/ai";

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
    <div className=" ">
      <section className="w-5/6 mx-auto ">
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:text-xl mobile:font-medium tablet:text-3xl laptop:text-4xl desktop:text-5xl">
              Streamline Your Communication with Bulk Sms Services
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Instantly reach a broad audience with our Bulk SMS feature—ideal for mass communication and marketing. Effortlessly send personalized messages, promotions, and updates to engage customers and fuel business growth.
            </p>
            <button
              className="bg-[#5F2466] text-[#FFFFFF] mobile:rounded-lg mobile:p-1 mobile:my-2 tablet:py-4 tablet:px-3 tablet:text-lg tablet:font-medium tablet:rounded-xl laptop:rounded-xl laptop:px-2 laptop:py-3 "

            >
              Learn More
            </button>
          </div>
          <img
            className="mobile:w-40 mobile:h-40 tablet:w-72 tablet:h-72 laptop:w-full laptop:h-full "
            src={bb}
            alt="Logo"
          />
        </div>
        <div className="flex justify-between mobile:gap-1 mobile:py-10 tablet:gap-3 laptop:gap-6">
          <div className=" bg-[#F7F7F7] flex flex-col rounded-xl mobile:w-72 mobile:gap-1 mobile:h-56 tablet:w-96 tablet:h-44 laptop:w-60 laptop:h-44 desktop:w-72 desktop:h-48  ">
            <LuArrowUpRightSquare className="text-[#5F2466] mobile:w-3 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10  " />
            <h3 className="text-[#5F2466] mobile:text-sm mobile:font-medium tablet:text-2xl	tablet:font-semibold 	   ">
              Send at scale
            </h3>
            <p className="text-[#000000] flex items-center mobile:text-xs mobile:font-light  text-base font-normal desktop:text-lg desktop:leading-6 ">
              Send SMS messages to hundreds, thousands, or millions of customers
              globally, all made possible by our intelligent routing engine.
            </p>
          </div>
          <div className="flex flex-col   bg-[#F7F7F7] rounded-xl mobile:w-72 mobile:h-56 mobile:gap-2  tablet:w-96 tablet:h-44 laptop:w-64 laptop:h-44 desktop:w-72 desktop:h-48 desktop:px-3 desktop:py-1">
            <BiSolidBarChartAlt2 className="text-[#5F2466] mobile:w-3 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10  " />
            <h3 className="text-[#5F2466] mobile:text-base mobile:font-medium mobile:leading-4 tablet:text-2xl	tablet:font-semibold ">
              Performance insights
            </h3>
            <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg desktop:leading-6 ">
              Gain instant visibility into the performance of your SMS messages
              with real-time metrics on network-level deliverability.{" "}
            </p>
          </div>
          <div className="bg-[#F7F7F7] flex-col rounded-xl mobile:w-80 mobile:h-56  tablet:w-96 tablet:h-44 laptop:w-64 laptop:h-44 desktop:w-72 desktop:h-48 desktop:ml-1 ">
            <HiOutlineComputerDesktop className="text-[#5F2466] mobile:w-10 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10 " />
            <h3 className="text-[#5F2466] mobile:text-sm mobile:font-medium tablet:text-2xl	tablet:font-semibold">
              Integrate via REST API
            </h3>
            <p className="text-[#000000] flex justify-center  mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg desktop:leading-6 ">
              Move swiftly from idea to implementation within minutes, courtesy of
              our intuitive API, developer manuals, pre-established integrations,
              and SDKs.
            </p>
          </div>
          <div className="bg-[#F7F7F7]  flex-col rounded-xl mobile:w-72 mobile:h-56 tablet:w-96 tablet:h-44 laptop:w-60 laptop:h-44 desktop:w-72 desktop:h-48 desktop:px-3 desktop:py-1">
            <FaGlobeAfrica className="text-[#5F2466] mobile:w-3 mobile:h-4 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10" />
            <h3 className="text-[#5F2466] mobile:text-sm mobile:font-medium mobile:leading-4 tablet:text-2xl	tablet:font-semibold 	   ">
              Globally compliant
            </h3>
            <p className="text-[#000000] flex justify-center mobile:text-xs mobile:font-light text-base font-normal desktop:text-lg desktop:leading-6 ">
              Safeguard your customers data privacy by ensuring compliance with
              global regulations such as GDPR, HIPAA, 10DLC, and CCPA.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mobile:gap-4">
          <h2 className="text-[#5F2466] gap-10  mobile:text-2xl mobile:font-normal tablet:text-3xl  tablet:font-semibold laptop:text-4xl laptop:font-bold  flex justify-end	">
            Why you need SMS APIs
          </h2>
          <p className="text-[#000000] mobile:text-xs mobile:font-light  tablet:text-base w-3/5 ">
            SMS APIs offer seamless connectivity with contact lists, allowing not
            only bulk messaging but also the creation of IVR menus, execution of
            promotions, and smooth customer interactions. Additionally, they
            provide integration with CRM systems for enhanced business
            communication. Users can leverage these APIs to create personalized
            solutions using various programming languages like Python, HTML, Java,
            C#, C++, Ruby, .net, and more.
          </p>
        </div>
        <div className=" flex flex-row justify-center items-center mobile:py-10">
          <div className="flex flex-col">
            <div className="bg-[#F05327] text-[#FFFFFF] flex flex-row gap-5 rounded-t-lg py-2 px-14  mobile:w-72 tablet:w-80 laptop:w-1/3
              ">
              <RxCross2 />
              <BsCircle className="pl-2" />
              <TbMinus />
            </div>
            <div className="bg-[#5F2466] rounded-b-lg py-1 px-14 mobile:w-72 tablet:w-80 laptop:w-1/3 laptop:h-80 ">
              <p className="text-[#FFFFFF] w-2/5 mobile:text-xs mobile:py-2 mobile:pr-1 py-5 pr-1 ">
                iimport requests api_key = your_api_key api_secret =
                your_api_secret nexmo_phone_number = your_nexmo_phone_number
                recipient_phone_number = recipient_phone_number nexmo_api_url =
                https://rest.nexmo.com/sms/json message_content = Hello, this is a
                test message! &#123;api_key: api_key, api_secret: api_secret,
                from: nexmo_phone_number, to: recipient_phone_number&#125;
              </p>
            </div>
          </div>

          <img
            className="mobile:hidden tablet:block tablet:w-72 tablet:-ml-28"
            src={mm}
            alt="Logo"
          />
        </div>
      </section>

      <div className="flex flex-col bg-[#F7F7F7] justify-around items-center mobile:py-5 mobile:my-3 py-10 my-20 gap-4">
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
      <div className=" bg-[#5F2466] text-[#FFFFFF] w-full flex flex-col items-center mobile:py-3 mobile:my-14">
        <h2 className="flex justify-between mobile:text-lg  tablet:text-3xl tablet:font-bold ">
          There’s so much to do with SMS API
        </h2>
        <div className="flex flex-row justify-center gap-5 py-10  ">
          <div className="flex flex-col bg-[#782C8080]  desktop:w-96  ">
            <h3 className="flex mobile:text-sm mobile:font-normal mobile:gap-1 tablet:text-xl tablet:gap-3 desktop:text-3xl ">
              <CiUser />
              Great for customers
            </h3>
            <ul className="flex flex-col list-disc mobile:mt-2 mobile:ml-5 mobile:text-xs mobile:font-thin mobile:leading-3 mobile:gap-1 tablet:mt-2 tablet:text-base tablet:font-light gap-3 desktop:mt-4 desktop:gap-4">
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
          <div className="flex flex-col bg-[#782C8080]   desktop:w-96  ">
            <h3 className="flex mobile:text-sm mobile:font-normal mobile:gap-1 tablet:text-xl tablet:gap-3 desktop:text-3xl">
              <AiFillMessage />
              Quick and convenient
            </h3>
            <ul className="  flex flex-col list-disc mobile:mt-2 mobile:ml-5 mobile:text-xs mobile:font-thin mobile:leading-3 mobile:gap-1 tablet:mt-2 tablet:text-base tablet:font-light gap-1 desktop:mt-4 desktop:gap-4">
              <li className="text-[#ffffff] ">
                SMS templates save the hassle of typing each text individually;
                steer clear of human errors
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
      <div className="flex flex-col">




        <div className=" flex flex-col tablet:items-center tablet:gap-5 ">
          <div className="flex flex-col mobile:items-center mobile:gap-3">
            <h2 className=" text-[#5F2466] flex text-base font-semibold  tablet:text-4xl  tablet:font-bold ">
              Why SMS solutions are perfect for you
            </h2>
            <h1 className=" text-[#5F2466]  text-base tablet:text-xl tablet:font-bold">
              Enable personal customer care
            </h1>
            <p className="text-base font-light text-[#000000]">Give your service teams the ability to receive and respond

            </p>
            <span className="text-base font-light text-[#000000]">to SMS messages from a shared Inbox.</span>

            <ul className="list-disc ">
              <li className=" font-light	">Automation to handle volumes </li>
              <li className="  font-light	">Self-serve resolution </li>
              <li className=" font-light	">Escalate to agent</li>
              <li className=" font-light	">Integrate with your tools</li>
            </ul>


          </div>


          <img
            className="mobile:hidden tablet:block tablet:w-60"
            src={nn}
            alt="Logo"
          />
        </div>
        <div className="flex flex-row justify-center items-center  mobile:gap-5 mobile:py-5 tablet:gap-2">
          <button
            className="bg-[#5F246663]   text-[#000000] hover:text-[#ffff] rounded-lg mobile:py-1 mobile:px-2 mobile:text-xs mobile:font-light tablet:text-sm tablet:py-2 tablet:px-5 tablet:font-normal"

          >
            Customer care
          </button>
          <a
            href="#"
            className=" bg-[#5F2466] hover:bg-[#5F246663] text-[#000000] hover:text-[#ffff] rounded-lg mobile:py-1 mobile:px-2 mobile:text-xs mobile:font-light tablet:text-sm tablet:py-2 tablet:px-5 tablet:font-normal"
          >
            Marketing campaigns
          </a>
          <a
            href="#"
            className="bg-[#5F2466] text-[#000000] hover:text-[#ffff] rounded-lg mobile:py-1 mobile:px-2 mobile:text-xs mobile:font-light tablet:text-sm tablet:py-2 tablet:px-5 tablet:font-normal"

          >
            Optimizer for efficiency
          </a>
        </div>
      </div>
      <div className="bg-[#5F2466] flex flex-col-reverse tablet:flex-row items-center mobile:py-5 mobile:my-8 mobile:px-5 tablet:px-28  tablet:py-40 tablet:w-full tablet:h-44 ">
        <div className="flex flex-col justify-center mobile:gap-2 tablet:gap-10">
          <h1 className="text-[#FFFFFF] text-lg font-light tablet:max-w-full  tablet:text-xl tablet:font-normal laptop:text-3xl desktop:text-5xl   ">
            Extend beyond text messages; personalize your calls with the
            utilization of Voice APIs.
          </h1>
          <btn
            className="text-[#FFFFFF] text-sm tablet:text-xl tablet:font-normal  flex items-center "

          >
            Explore our Voice API solution{" "}
            <svg
              className="ml-5 mt-3"
              width="36"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_455_577)">
                <path
                  d="M5.75 12H30.25M30.25 12L19.75 22M30.25 12L19.75 2"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  shapeRendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_455_577"
                  x="0.25"
                  y="0.5"
                  width="35.5"
                  height="31"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_455_577"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_455_577"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </btn>
        </div>
        <img
          className=" hidden tablet:block  tablet:w-1/4 mb-40"
          src={oo}
          alt="Logo"
        />
      </div>
      <Frequtly />
      <Photo />
    </div>
  );
};

export default BulkSms;
