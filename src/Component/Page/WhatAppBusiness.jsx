import React from "react";
import ww from "../Image/ww.png";
import fff from "../Image/fff.png";
import su from "../Image/su.png";
import ce from "../Image/ce.png";
import wwwq from "../Image/wwwq.png";
import am from "../Image/am.png";
import sp from "../Image/sp.png";
import sss from "../Image/sss.png";
import { BsArrowRight } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";
import Frequtly from "./Frequtly";
import Photo from "./Photo";

const WhatAppBusiness = () => {
  return (
    <div>
      <div className="flex tablet:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Enhance Customer Communication with WhatsApp Business Integration
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              With SpellCPaaS platform, you can leverage the power of WhatsApp
              Business to Connect with your customers more effectively.
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
              src={ww}
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <div className=" flex py-20 flex-col justify-center items-center gap-4 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-[#5F2466] flex mobile:text-2xl mobile:font-normal tablet:text-3xl  tablet:font-semibold laptop:text-4xl justify-center laptop:font-bold  	">
            Enhance your WhatsApp business messages on a reliable platform
          </h2>
          <p className="text-[#000000] text-base font-normal text-center">
            Conversational marketing, sales or support use cases can be designed
            and deployed throughout the entire customer journey on WhatsApp over
            a unified platform.  
          </p>
          <img
            className=" hidden  tablet:block  tablet:mt-5 w-[100%] "
            src={fff}
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
          <img src={sp} alt="Logo" />
        </div>
      </div>
      <div className="bg-[#5F2466] w-full my-10">
        <div className="   text-[#FFFFFF] flex flex-col justify-center  items-center tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
          <h2 className=" mobile:text-lg tablet:text-3xl tablet:font-bold py-5">
            Elevate your communications with WhatsApp
          </h2>
          <div className="grid grid-cols-1 tabletmd:grid-cols-3 tablet:grid-cols-2 gap-3 py-20">
            <div className="flex flex-col bg-[#782C8080] p-4">
              <h3 className="flex items-center mobile:text-sm mobile:font-medium mobile:gap-1 tablet:text-xl tablet:gap-3 desktop:text-3xl ">
                <CiUser />
                Smart API’s happy clients
              </h3>
              <ul className="flex py-3 flex-col list-disc mobile mobile:ml-5 mobile:text-xs mobile:font-thin mobile:leading-3 mobile:gap-1 tablet tablet:text-base tablet:font-normal gap-3 desktop: desktop:gap-4">
                <li className="text-[#ffffff]  ">
                  Leverage real-time data and take customer interactions to the
                  next level via Webhooks
                </li>
                <li className="text-[#ffffff]  ">
                  Tailor your solutions and add additional capabilities to look
                  after your clients’ needs
                </li>
                <li className=" text-[#ffffff] ">
                  Add a click-to-call button to your website or app and let your
                  callers reach you instantly
                </li>
              </ul>
            </div>
            <div className="flex flex-col bg-[#782C8080]  p-4">
              <h3 className="flex items-center mobile:text-sm mobile:font-medium mobile:gap-1 tablet:text-xl tablet:gap-3 desktop:text-3xl ">
                <HiUserGroup className="" />
                <span>Empowered employees every where</span>
              </h3>
              <ul className="flex py-3 flex-col list-disc mobile:ml-5 mobile:text-xs mobile:font-thin mobile:leading-3 mobile:gap-1  tablet:text-base tablet:font-normal gap-3  desktop:gap-4">
                <li className="text-[#ffffff]  ">
                  Reduce agent workload significantly with features like ring
                  groups and virtual receptionist
                </li>
                <li className="text-[#ffffff]  ">
                  Deploy number masking to disguise client and agent contact
                  details, and ensure privacy
                </li>
                <li className=" text-[#ffffff] ">
                  Handle large call volumes even during peak season efficiently,
                  with API-enabled call queues
                </li>
              </ul>
            </div>
            <div className="flex flex-col bg-[#782C8080]  p-4">
              <h3 className="flex items-center mobile:text-sm mobile:font-medium mobile:gap-1 tablet:text-xl tablet:gap-3 desktop:text-3xl ">
                <FaUserGroup className="" />
                <span>Developer-friendly all the way</span>
              </h3>
              <ul className="flex py-4 flex-col list-disc  mobile:ml-5 mobile:text-xs mobile:font-thin mobile:leading-3 mobile:gap-1  tablet:text-base tablet:font-normal gap-3 desktop:gap-4">
                <li className="text-[#ffffff]  ">
                  Give developers complete control over your voice capabilities
                  with easy-to-configure APIs
                </li>
                <li className="text-[#ffffff]  ">
                  Receive quick clarifications to all your API queries with
                  comprehensive Acefone guides
                </li>
                <li className=" text-[#ffffff] ">
                  No question is too tough for SpellCPaaS expert support
                  team—get in touch with us 24x7x365
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col my-20 py-20 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className=" desktop:w-4/6 mx-auto">
          <h2 className=" text-[rgb(95,36,102)]  text-xl font-bold text-center  tablet:text-2xl tabletmd:text-4xl gap-4">
            Increase conversion rates with personalized offers and promotions 
          </h2>
          <div className="flex flex-col justify-center tablet:flex-row w-[100%] ">
            <div className="flex flex-col mobile:gap-4  tablet:gap-12 desktop:gap-10 ">
              <ul className="list-disc flex flex-col ml-7">
                <li className=" font-light	">Abandoned cart reminders</li>
                <li className="  font-light	">Orders management</li>
                <li className=" font-light	">Related products suggestions</li>
                <li className=" font-light	">Repeated orders</li>
              </ul>
              <p className=" text-base font-light max-w-[400px]">
                Send automated conversational commerce messages with our API or
                over our customer engagement solution M and interact with
                customers with a chatbot built on Answers or on our cloud
                contact center Conversations and API.  
              </p>
            </div>
            <img className="hidden tablet:block " src={sp} alt="Logo" />
          </div>
         
          

          <div className="flex flex-row flex-wrap justify-center mobile:py-5 gap-2 tablet:gap-5 ">
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
        <div className="flex flex-col  tabletmd:w-[80%] gap-5 py-10">
          <h1 className="text-[#FFFFFF] text-lg font-bold  tablet:max-w-[100%] tablet:text-3xl tablet:font-normal laptop:text-4xl desktop:text-5xl   ">
          Why go for just customised calling when you can personalise your SMS
            capabilities too?
          </h1>
          <btn className="text-[#FFFFFF] flex items-center  gap-5 text-base  font-light tablet:text-xl tablet:font-semibold">
            Explore our Voice API solution <BsArrowRight />
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

export default WhatAppBusiness;
