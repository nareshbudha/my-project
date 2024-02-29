import React from "react";
import { LuArrowUpRightSquare } from "react-icons/lu";

import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaGlobeAfrica } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";

import { RxCross2 } from "react-icons/rx";
import { TbMinus } from "react-icons/tb";

import { CiUser } from "react-icons/ci";
import { AiFillMessage } from "react-icons/ai";

import Footer from "./Footer";
import bb from "../Image/bb.png";
import gg from "../Image/gg.png";
import mm from "../Image/mm.png";
import jaa from "../Image/jaa.png";
import js from "../Image/js.png";
import ce from "../Image/ce.png";
import su from "../Image/su.png";
import ph from "../Image/ph.png";
import nn from "../Image/nn.png";
import cs from "../Image/cs.png";
import doa from "../Image/do.png";
import mi from "../Image/mi.png";
import Navbar from "../Navbar";
import oo from "../Image/oo.png";
import Photo from "./Photo";
import Frequtly from "./Frequtly";

const BulkSms = () => {
  return (
    <div className="font-Roboto">
      <div className="flex flex-row w-full gap-5 px-0 py-20">
        <div className="flex flex-col gap-5 justify-center items-center w-2/4">
          <h2 className="text-[#5F2466] text-4xl ml-32">
            Streamline Your Communication with Bulk SMS Services
          </h2>
          <p className="text-[#000000] text-base ml-32">
            Reach a vast audience instantly with Bulk SMS on our CPaaS platform.
            Send personalized messages, promotions, and updates to engage
            customers and fuel business growth
          </p>
          <button className="bg-[#5F2466] text-[#FFFFFF] rounded-xl py-2 px-4 mr-[400px]">
            Get in touch
          </button>
        </div>
        <img className="ml-40 mt-5" src={bb} alt="Logo" />
      </div>
      <div className="flex flex-row justify-end    gap-5 ">
        <div className="flex flex-col rounded-md	ml-32 bg-[#F7F7F7] w-[30%]  ">
          <LuArrowUpRightSquare className="text-[#5F2466] w-[50px] h-[50px] " />
          <h3 className="text-[#5F2466] text-2xl	   ">Send at scale</h3>
          <p className="text-[#000000] flex items-center  text-base  ">
            Send SMS messages to hundreds, thousands, or millions of customers
            globally, all made possible by our intelligent routing engine.
          </p>
        </div>
        <div className="flex flex-col  w-[30%] bg-[#F7F7F7] ">
          <BiSolidBarChartAlt2 className="text-[#5F2466] w-[50px] h-[50px]   " />
          <h3 className="text-[#5F2466] text-2xl	   ">Performance insights</h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Gain instant visibility into the performance of your SMS messages
            with real-time metrics on network-level deliverability.{" "}
          </p>
        </div>
        <div className="flex flex-col w-[30%] bg-[#F7F7F7] ">
          <HiOutlineComputerDesktop className="text-[#5F2466] w-[50px] h-[50px]  " />
          <h3 className="text-[#5F2466] text-2xl	   ">Integrate via REST API</h3>
          <p className="text-[#000000] flex justify-center p-2 ">
            Move swiftly from idea to implementation within minutes, courtesy of
            our intuitive API, developer manuals, pre-established integrations,
            and SDKs.
          </p>
        </div>
        <div className="flex flex-col mr-32 w-[30%] bg-[#F7F7F7]  ">
          <FaGlobeAfrica className="text-[#5F2466] w-[50px] h-[50px] " />
          <h3 className="text-[#5F2466] text-2xl	   ">Globally compliant </h3>
          <p className="text-[#000000] flex justify-center p-2  ">
            Safeguard your customers' data privacy by ensuring compliance with
            global regulations such as GDPR, HIPAA, 10DLC, and CCPA.
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full mt-20 gap-3">
        <h2 className="text-[#5F2466] text-[40px] leading-[50px] font-bold flex justify-end	">
          Why you need SMS APIs
        </h2>
        <p className="text-[#000000] font-light	flex ite text-base px-40 w-2/3 mt-10 ">
          SMS APIs offer seamless connectivity with contact lists, allowing not
          only bulk messaging but also the creation of IVR menus, execution of
          promotions, and smooth customer interactions. Additionally, they
          provide integration with CRM systems for enhanced business
          communication. Users can leverage these APIs to create personalized
          solutions using various programming languages like Python, HTML, Java,
          C#, C++, Ruby, .net, and more.
        </p>
      </div>

      <div className=" flex flex-row items-center ">
        <div className="flex flex-col   ml-96 mt-12 mb-12">
          <div className="bg-[#F05327] text-[#FFFFFF]  w-[75%] flex flex-row gap-5 rounded-t-lg py-2 px-14">
            <RxCross2 />
            <BsCircle className="pl-2" />
            <TbMinus />
          </div>
          <div className="bg-[#5F2466] w-[75%]  rounded-b-lg py-1 px-14 ">
            <p className="text-[#FFFFFF] w-[60%]  py-5 pr-1 ">
              import requests api_key = 'your_api_key' api_secret =
              'your_api_secret' nexmo_phone_number = 'your_nexmo_phone_number'
              recipient_phone_number = 'recipient_phone_number' nexmo_api_url =
              'https://rest.nexmo.com/sms/json' message_content = 'Hello, this
              is a test message!' &#123;"api_key": api_key, "api_secret":
              api_secret, "from": nexmo_phone_number, "to":
              recipient_phone_number&#125;
            </p>
          </div>
        </div>

        <img className="-ml-[400px] mr-96 mt-14" src={mm} alt="Logo" />
      </div>
      <div className="flex flex-col bg-[#F7F7F7] justify-center items-center py-4 gap-4">
        <p className="text-[#000000]  text-2xl font-light">
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
      <div className=" bg-[#5F2466] text-[#FFFFFF] flex flex-col mt-10  gap-10 py-12 px-64 w-full  ">
        <h2 className=" text-3xl flex justify-between pl-28">
          There’s so much to do with SMS API
        </h2>
        <div className="flex flex-row justify-center rounded-xl gap-16 ">
          <div className="flex flex-col bg-[#782C8080]  ">
            <h3 className="text-2xl  flex 	 gap-4 ">
              <CiUser />
              Great for customers
            </h3>
            <ul className="list-disc mt-6 flex flex-col gap-3">
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Acknowledge customer conversations with thank you messages and
                other templates
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Miss calls, not leads—follow up on unattended clients with
                schedule callback SMS feature{" "}
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Stay up-to-date and hold contextual interactions with SMS
                conversation history
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-[#782C8080] ">
            <h3 className="text-3xl  flex pb-1 gap-3">
              <AiFillMessage />
              Quick and convenient
            </h3>
            <ul className="  flex flex-col gap-3 list-disc mt-6">
              <li className="ml-5 text-base text-[#ffffff] font-normal	">
                SMS templates save the hassle of typing each text individually;
                steer clear of human errors
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal	">
                Configure SMS API and schedule customised messages to clients
                any time of the day
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal	">
                Enable quick replies for common customer queries with Acefone's
                auto-response SMSes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-[#5F2466] text-[40px]  font-bold mt-20 flex justify-center leading-[50px]">
          Why SMS solutions are perfect for you
        </h2>
        <div className="flex flex-row    ">
          <div className="flex flex-col pl-32">
            <h1 className=" font-poppins text-base text-[#5F2466] ml-48 font-bold mt-20  ">
              Enable personal customer care
            </h1>
            <div className=" flex flex-col  items-center">
              <p className="pl-20 pt-6 w-[70%] font-light	 ">
                Give your service teams the ability to receive and respond to
                SMS messages from a shared Inbox.
              </p>
              <ul className="list-disc mt-6">
                <li className="pr-32 font-light	">
                  Automation to handle volumes{" "}
                </li>
                <li className="pr-32 font-light	">Self-serve resolution </li>
                <li className="pr-32 font-light	">Escalate to agent</li>
                <li className="pr-32 font-light	">Integrate with your tools</li>
              </ul>
            </div>
          </div>

          <img className="ml-12" src={nn} alt="Logo" />
        </div>
        <div className="flex flex-row px-10 mt-5 justify-center items-center mr-24 gap-6 ">
          <button className="rounded-[5px] bg-[#5F2466] text-[#FFFFFF]  py-3 px-12">
            Customer care
          </button>
          <button className="rounded-[5px] bg-[#5F246663] text-[#000000]   py-3 px-12">
            Marketing campaigns
          </button>
          <button className="rounded-[5px] bg-[#5F246663] text-[#000000]    py-3 px-12">
            Optimizer for efficiency
          </button>
        </div>
      </div>
      <div className="bg-[#5F2466] w-full h-[403px] flex flex-row items-center mt-60 ">
        <div className="flex flex-col ml-24 ">
          <h1 className="text-[#FFFFFF] font-medium max-w-full	  text-[48px] leading-[50px]">
            Extend beyond text messages; personalize your calls with the
            utilization of Voice APIs.
          </h1>
          <btn className="text-[#FFFFFF] text-2xl mt-2 ">
            Explore our Voice API solution
          </btn>
        </div>
        <img className="mb-48 w-2/6 mr-36" src={oo} alt="Logo" />
      </div>
      <Frequtly />
      <Photo />
    </div>
  );
};

export default BulkSms;
