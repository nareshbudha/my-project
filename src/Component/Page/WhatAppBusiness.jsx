import React from "react";
import ww from "../Image/ww.png";
import fff from "../Image/fff.png";

import { BsCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TbMinus } from "react-icons/tb";

import su from "../Image/su.png";
import ce from "../Image/ce.png";
import wwwq from "../Image/wwwq.png";
import am from "../Image/am.png";
import sp from "../Image/sp.png";
import sss from "../Image/sss.png";

import { CiUser } from "react-icons/ci";
import Frequtly from "./Frequtly";
import Photo from "./Photo";

const WhatAppBusiness = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className=" flex flex-col  lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
        <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
          <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl desktop:font-bold">
            Enhance Customer Communication with WhatsApp Business Integration
          </h2>
          <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
            With SpellCPaaS platform, you can leverage the power of WhatsApp
            Business to Connect with your customers more effectively.
          </p>

          <div className="  text-[#FFFFFF]  flex flex-row justify-start items-center gap-3">
            <button className="bg-[#5F2466] text-[#FFFFFF] mobile:rounded-md mobile:px-3 mobile:py-2  tablet:rounded-xl tablet:px-3 tablet:py-4 laptop:py-3 laptop:px-4">
              Get In touch
            </button>
            <button className="bg-[#5F2466] text-[#FFFFFF] mobile:rounded-md mobile:px-3 mobile:py-2  tablet:rounded-xl tablet:px-3 tablet:py-4 laptop:py-3 laptop:px-4">
              View pricing
            </button>
          </div>
        </div>

        <img className="mobile:w-40 mobile:h-40 tablet:w-72 tablet:h-72 laptop:w-96 laptop:h-96" src={ww} alt="Logo" />
      </div>
      <div className=" flex flex-col justify-center items-center w-full mt-20 gap-3">
        <h2 className="text-[#5F2466] text-[40px] leading-[50px] font-bold flex justify-end	">
          Enhance your WhatsApp business messages on a reliable platform{" "}
        </h2>
        <h1 className="text-[#000000] font-light	 text-base px-40 w-[80%] mt-10 ">
          Conversational marketing, sales or support use cases can be designed
          and deployed throughout the entire customer journey on WhatsApp over a
          unified platform.
        </h1>
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
              import http.client import json conn =
              http.client.HTTPSConnection(“baseUrl”) payload = json.dumps
              “from”: “441134960000”, “to”: “441134960001”, “messageId”:
              “a28dd97c-1ffb-4fcf-99f1-0b557ed381da”, “content”: “text”: “Some
              text” , “callbackData”: “Callback data”,
            </p>
          </div>
        </div>
        <img
          className="w-[380px] h-[350px] -ml-80 mr-96 mt-24 "
          src={fff}
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
          <img src={sp} alt="Logo" />
        </div>
      </div>
      <div className="bg-[#5F2466] pb-56">
        <h2 className="text-[#FFFFFF] text-[40px] font-bold py-10 mt-14	flex justify-center ">
          Elevate your communications with WhatsApp
        </h2>
        <div className="flex flex-row justify-center items-center gap-7">
          <div className="bg-[#782C8080] w-[403.35px] h-[299px] ml-52 ">
            <h3 className="text-[#ffffff] font-semibold flex 	text-2xl leading-6 gap-5 ml-5 mt-5	">
              <CiUser className="ml-2 w-[36px] h-[36px]  " />
              Smart API’s happy clients
            </h3>
            <ul className="list-disc mt-6 flex flex-col gap-3">
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Leverage real-time data and take customer interactions to the
                next level via Webhooks
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Tailor your solutions and add additional capabilities to look
                after your clients’ needs
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Add a click-to-call button to your website or app and let your
                callers reach you instantly
              </li>
            </ul>
          </div>
          <div className="bg-[#782C8080] w-[404px] h-[300.65px]  ">
            <h3 className="text-[#ffffff] font-semibold flex 	text-2xl leading-6 gap-5 ml-5 mt-5	">
              <CiUser className="ml-2 w-[32.08px] h-[32.08px]" />
              Empowered employees every where
            </h3>
            <ul className="list-disc mt-6 flex flex-col gap-3">
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Reduce agent workload significantly with features like ring
                groups and virtual receptionist
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Deploy number masking to disguise client and agent contact
                details, and ensure privacy
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Handle large call volumes even during peak season efficiently,
                with API-enabled call queues
              </li>
            </ul>
          </div>
          <div className="bg-[#782C8080]  w-[403.35px] h-[298.65px] mr-52 ">
            <h3 className="text-[#ffffff] font-semibold  flex	text-2xl leading-6 gap-5 ml-5 mt-5	">
              <CiUser className="ml-5 w-[36px] h-[36px]  " />
              Developer-friendly all the way
            </h3>

            <ul className="list-disc mt-6 flex flex-col gap-3">
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Give developers complete control over your voice capabilities
                with easy-to-configure APIs
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                Receive quick clarifications to all your API queries with
                comprehensive Acefone guides
              </li>
              <li className="ml-5 text-base text-[#ffffff] font-normal">
                No question is too tough for SpellCPaaS expert support team—get
                in touch with us 24x7x365
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className=" text-[#5F2466] text-[40px]  font-bold mt-20 flex justify-center leading-[50px]">
          Increase conversion rates with personalized offers and promotions
        </h2>
        <div className="flex flex-row    ">
          <div className="flex flex-col pl-32">
            <div className=" flex flex-col  items-center">
              <ul className="list-disc mt-6">
                <li className="pr-32 font-light	">
                  Abandoned cart reminders Orders management Related products
                  suggestions Repeated orders
                </li>
                <li className="pr-32 font-light	">Orders management</li>
                <li className="pr-32 font-light	">
                  Related products suggestions
                </li>
                <li className="pr-32 font-light	">
                  Related products suggestions
                </li>
              </ul>
              <p className="pr-32 font-light	">
                Send automated conversational commerce messages with our API or
                over our customer engagement solution M and interact with
                customers with a chatbot built on Answers or on our cloud
                contact center Conversations and API.
              </p>
            </div>
          </div>

          <img className="ml-12" src={sp} alt="Logo" />
        </div>
        <div className="flex flex-row px-10 mt-5 justify-center items-center mr-24 gap-6 ">
          <button className="rounded-[5px] bg-[#5F2466] text-[#FFFFFF]  py-3 px-12">
            Conversational commerce{" "}
          </button>
          <button className="rounded-[5px] bg-[#5F246663] text-[#000000]   py-3 px-12">
            Conversational marketing
          </button>
          <button className="rounded-[5px] bg-[#5F246663] text-[#000000]    py-3 px-12">
            Conversational support
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

export default WhatAppBusiness;
