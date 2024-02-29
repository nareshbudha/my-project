import React from "react";
import { FaUserAlt, FaPhone, FaUserFriends } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

import iamges from "../Image/Homepage1.png";
import mc from "../Image/mc.png";
import pizza from "../Image/pizza.png";
import dsoy from "../Image/dsoy.png";
import li from "../Image/li.png";
import dell from "../Image/dell.png";
import pan from "../Image/pan.png";
import pic from "../Image/pic.png";
import bb from "../Image/bb.png";
import bc from "../Image/bc.png";
import cc from "../Image/cc.png";
import ll from "../Image/ll.png";
import dd from "../Image/dd.png";
import ee from "../Image/ee.png";
import ff from "../Image/ff.png";
import gg from "../Image/gg.png";

import { FaMailBulk } from "react-icons/fa";
import { MdMissedVideoCall } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";
import { FcConferenceCall } from "react-icons/fc";
import Buttom from "./Buttom";
import Learnmore from "./Learnmore";
import Navbar from "../Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="container  relative pb-3px ">
        <div className="grid xl:grid-cols xl:grid-rows-2 gap-8">
          <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
            <img
              className="w-full pt-0 border-spacing-1"
              src={iamges}
              alt="Logo"
            />
            <div className=" text-[#702D77] font-spline-sans absolute flex sm:flex-col md:flex-col lg:flex-col  justify-between pl-14 max-w-[700px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
              <p className="text-[65px] leading-[65px] font-medium ">
                Seamless CPaaS for Unparalleled
              </p>

              <div className="  text-[#FFFFFF] w-fit  flex flex-row gap-[10px] font-bold   justify-center items-center">
                <button className="bg-[#702D77]  rounded-xl py-[10px] px-[25px] ">
                  Request trail
                </button>
                <button className="bg-[#702D77]  rounded-xl py-[10px] px-[25px]">
                  Request pricing
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7]  w-full  flex flex-col items-center p-10  my-8">
          <p className=" text-[#000000] text-base   w-[75%] ">
            Elevate your business communication. Our CPaaS platform integrates
            Bulk SMS, Voice Broadcast, Call Center, Video Calls, Messaging,
            WhatsApp Business, and ChatBot features. Streamline interactions,
            engage customers, and unlock new communication possibilities
            effortlessly.
          </p>
        </div>

        <div className="  bg-[#5F2466] w-4/5 mx-auto  rounded-lg	 flex mobile:flex-col tablet:flex-col laptop:flex-row mb-12 py-[29px] px-[34px]">
          <div className="flex flex-col gap-5 items-center justify-center ">
            <h2 className=" text-[#FFFFFF]   text-4xl font-bold  flex items-center ">
              Our Products
            </h2>
            <p className="text-[#FFFFFF]    text-base font-normal leading-26 tracking-normal text-center">
              Experience the convenience of Bulk SMS, Voice Broadcast, and
              Call-Center capabilities in one platform.
            </p>
          </div>

          <div className=" w-fit flex flex-col  gap-6 mt-4  ">
            <div className="bg-[#FFFFFF24] w-full p-10 rounded-lg grid gap-10  ">
              <div className=" max-w-[2400px] h-[60px] gap-10">
                <p className=" text-[#FFFFFF] text-2xl font-bold leading-50 tracking-normal text-left flex flex-row gap-1 items-center">
                  <FaMailBulk /> Bulk SMS
                </p>
                <h1 className=" container pb-8 text-[#FFFFFF] text-base font-light leading-26 tracking-normal text-left">
                  Send personalized or mass SMS messages seamlessly. Utilize
                  templates and monitor delivery status with detailed reports.
                </h1>
              </div>
            </div>

            <div className="bg-[#FFFFFF24] max-w-full  p-10 rounded-lg grid gap-10">
              <div className=" max-w-[2400px] h-[60px] gap-10">
                <p className=" text-[#FFFFFF]  text-2xl font-bold leading-50 tracking-normal text-left flex flex-row gap-1 items-center">
                  <RiUserVoiceFill /> Voice Broadcast
                </p>
                <h1 className=" text-[#FFFFFF]  text-base font-light leading-26 tracking-normal text-left">
                  Engage audiences through automated voice messages. Create
                  broadcasts, use pre-designed templates, and track analytics
                  for effective outreach.
                </h1>
              </div>
            </div>

            <div className="bg-[#FFFFFF24] w-full p-10 rounded-lg grid gap-10">
              <div className=" max-w-[2400px] h-[60px] gap-10">
                <p className=" text-[#FFFFFF]  text-2xl font-bold leading-50 tracking-normal text-left flex flex-row gap-1 items-center ">
                  <FcConferenceCall />
                  Call Center
                </p>
                <h1 className=" text-[#FFFFFF]  text-base font-light leading-26 tracking-normal text-left">
                  Manage inbound and outbound calls efficiently. Implement call
                  routing, monitor agent performance, and access detailed
                  analytics for improved customer service.
                </h1>
              </div>
            </div>
            <div className="bg-[#FFFFFF24] w-full p-10 rounded-lg grid gap-10 mb-4">
              <div className=" max-w-[2400px] h-[60px] gap-10 ">
                <p className=" text-[#FFFFFF]  text-2xl font-bold leading-50 tracking-normal text-left flex flex-row gap-1 items-center">
                  <MdMissedVideoCall /> Video call
                </p>
                <h1 className=" text-[#FFFFFF]  text-base font-light leading-26 tracking-normal text-left">
                  Initiate face-to-face interactions with video calls. Enable
                  recording and integrate video calling capabilities seamlessly.
                </h1>
              </div>
            </div>
            <div className="bg-[#FFFFFF24] max-w-full  p-10 rounded-lg grid gap-10">
              <div className=" max-w-[2400px] h-[60px] gap-10">
                <p className=" text-[#FFFFFF]  text-2xl font-bold leading-50 tracking-normal text-left flex flex-row gap-1 items-center">
                  <RiUserVoiceFill /> Voice Broadcast
                </p>
                <h1 className=" text-[#FFFFFF]  text-base font-light leading-26 tracking-normal text-left">
                  Engage audiences through automated voice messages. Create
                  broadcasts, use pre-designed templates, and track analytics
                  for effective outreach.
                </h1>
              </div>
            </div>
            <div className="bg-[#FFFFFF24] max-w-full  p-10 rounded-lg grid gap-10">
              <div className=" max-w-[2400px] h-[60px] gap-10">
                <p className=" text-[#FFFFFF]  text-2xl font-bold leading-50 tracking-normal text-left flex flex-row gap-1 items-center">
                  <RiUserVoiceFill /> Voice Broadcast
                </p>
                <h1 className=" text-[#FFFFFF]  text-base font-light leading-26 tracking-normal text-left">
                  Engage audiences through automated voice messages. Create
                  broadcasts, use pre-designed templates, and track analytics
                  for effective outreach.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col items-center  mt-4 text-center">
          <p className="text-[#000000] text-2xl  mb-1 mt-1 w-[40%] text-center ">
            Join the 290,000+ brands that use SpellCPaaS to connect with their
            customers
          </p>
          <div className="flex  sm:flex-col  md:flex-row lg:flex-row items-center   gap-10">
            <img
              className="max-w-[132px] max-h-[132px]"
              src={pizza}
              alt="Logo"
            />
            <img className="max-w-[132px] max-h-[132px]" src={mc} alt="Logo" />
            <img
              className="max-w-[132px] max-h-[132px]"
              src={dsoy}
              alt="Logo"
            />
            <img className="max-w-[132px] max-h-[132px]" src={li} alt="Logo" />
            <img className="max-w-[132px] max-h-[132px]" src={pic} alt="Logo" />
            <img
              className="max-w-[132px] max-h-[132px]"
              src={dell}
              alt="Logo"
            />
            <img className="max-w-[132px] max-h-[132px]" src={pan} alt="Logo" />
          </div>
        </div>
        <div className="flex mobile:flex-col tablet:flex-col laptop:flex-row w-full mt-28">
          <div className="flex flex-col gap-5 justify-center  items-center w-2/4">
            <h2 className="text-[#5F2466] text-4xl font-bold pl-40 ">
              Streamline Your Communication with Bulk SMS Services
            </h2>
            <p className="text-[#000000] text-base pl-40">
              Reach a vast audience instantly with Bulk SMS on our CPaaS
              platform. Send personalized messages, promotions, and updates to
              engage customers and fuel business growth
            </p>
            <button className="bg-[#5F2466] text-[#FFFFFF] rounded-xl py-3 px-2 mr-[350px]">
              Learn More
            </button>
          </div>
          <img className="ml-40 pb-16" src={bb} alt="Logo" />
        </div>

        <div className="   flex sm:flex-col lg:flex-row w-full  justify-center gap-5 mb-10 mt-10">
          <img className=" mr-20" src={bc} alt="Logo" />
          <div className="text-[#5F2466] w-2/4 flex flex-col items-center justify-center pl-40">
            <h2 className="  text-5xl pr-[100px] ">
              Automate Your Voice Broadcast with Ease
            </h2>
            <p className=" text-[#000000] text-base w-[80%] mr-28 mt-4">
              Our Voice Broadcast feature allows you to automate calls and
              deliver messages to a large audience, saving you time and effort.
              Reach your customers effectively and efficiently.
            </p>
            <button className="bg-[#5F2466] text-[#FFFFFF] rounded-xl py-3 px-2 mr-[500px] mt-4">
              Learn More
            </button>
          </div>
        </div>
        <div className=" text-[#5F2466]  flex  sm:flex-col lg:flex-row w-full items-center  justify-center gap-5 mb-10 mt-10">
          <div className="font-roboto flex flex-col items-center  justify-items-center">
            <h2 className=" text-5xl w-[70%]">
              Efficiently manage customer communications with our powerful
              Call-Center solution.
            </h2>
            <p className="text-[#000000] w-[55%] pt-1 pb-1">
              Our Call-Center solution empowers businesses to handle customer
              interactions seamlessly, improving customer satisfaction and
              boosting productivity.
            </p>
            <Buttom />
          </div>
          <img
            className="max-w-[433px] max-h-[397px] mr-36"
            src={cc}
            alt="Logo"
          />
        </div>
        <section className=" flex  sm:flex-col lg:flex-row w-full justify-center items-center gap-10  mb-9 mt-10">
          <img
            className="w-[370.96px] h-[375.48px] pl-28"
            src={ll}
            alt="Logo"
          />
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-[#5F2466] text-4xl  w-2/4 font-bold ">
              Experience Personal Customer Engagement with Interactive Video
              Calls
            </h2>
            <p className="text-[#000000] 	text-xs	leading-6 flex  justify-center items-center">
              Our video call feature allows you to connect with customers on a
              more personal level, fostering stronger relationships and
              increasing customer satisfaction.
            </p>
            <Buttom />
          </div>
        </section>

        <section className="  flex  sm:flex-col lg:flex-row w-full justify-center items-center gap-5 mb-10 mt-10 ">
          <div className="w-[590px] h-[282px]flex flex-col justify-center items-center gap-6 ">
            <h2 className="text-[#5F2466] text-4xl mr-20 font-bold ">
              Enhance Customer Support with Versatile Messaging Solutions
            </h2>
            <p className="text-[#000000] leading-6	text-base">
              Messaging is a powerful tool for customer support and service.
              With our versatile messaging solutions, you can streamline
              communication, resolve issues faster, and provide a seamless
              customer experience.
            </p>
            <Buttom />
          </div>
          <img src={dd} alt="Logo" />
        </section>
        <div className="text-[#5F2466] flex  sm:flex-col lg:flex-row w-full items-center  justify-center gap-44 mb-10 mt-10">
          <img className="ml-32" src={ee} alt="Logo" />
          <div className="flex flex-col justify-center items-center pl-28 w-2/4 ">
            <h2 className="text-[#5F2466] text-4xl  font-bold mr-36">
              Enhance Customer Communication with Whatsapp Business Integration
            </h2>
            <p className="text-[#000000] leading-6 mr-20	text-base">
              With our CPaaS platform, you can leverage the power of Whatsapp
              Business to connect with your customers more effectively.
            </p>
            <Buttom />
          </div>
        </div>
        <div className="text-[#5F2466]  flex flex-row items-center  justify-center gap-5 mb-10 mt-10">
          <div className=" w-2/5flex flex-col justify-center items-center ml-28 gap-6 ">
            <h2 className="text-[#5F2466] text-4xl  font-bold ">
              Enhance Customer Communication with Whatsapp Business Integration
            </h2>
            <p className="text-[#000000] leading-6	text-base w-2/5 mt-7">
              With our CPaaS platform, you can leverage the power of Whatsapp
              Business to connect with your customers more effectively.
            </p>
            <Buttom />
          </div>
          <img className="mr-28" src={ff} alt="Logo" />
        </div>

        <div className="bg-[#F7F7F7]  flex flex-row items-center  justify-center py-10 gap-5 mb-10 mt-10">
          <div className="flex flex-col  gap-12">
            <h2 className="text-[#5F2466] text-4xl font-bold	leading-[50px]">
              Frequently Asked Question
            </h2>

            <p className="text-[#000000]">
              Here are some of the most commonly asked questions about
              <span className="text-[#5F2466]">SPELLCPaaS</span>
            </p>
            <p className="text-[#000000]">
              Still don’t find what you’re looking for? 
              <span className="text-[#5F2466]">Chat with our experts!</span>
            </p>
          </div>
          <div className=" flex flex-col text-4xl text-[#000000] gap-4  	">
            <p className="border-b border-gray-500">
              How do I get started with SPELLCPaaS ?
            </p>

            <p className="border-b border-gray-500">
              {" "}
              Does SPELLCPaaS sell or lease VoIP phones ?
            </p>

            <p className="border-b border-gray-500">
              What are my payment options ?
            </p>

            <p className="border-b border-gray-500">
              Is your platform secure ?
            </p>
            <p className="border-b border-gray-500">What is a CPaaS plan ?</p>

            <p className="border-b border-gray-500">
              What’s included with every plan ?
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center py-[100px] px-[50px] ">
          <div className="flex flex-col justify-items-center items-center">
            <h2 className="text-[#5F2466] text-4xl  font-bold leading-[50px]">
              You’re at the start of something special.
            </h2>
            <p className="text-[#000000]  text-base mb-6 mt-6">
              Try our cloud contact center software today.
            </p>

            <div className="text-[#000000] font-Poppins font-base  grid grid-cols-2 gap-4 mr-8  ">
              <div className="relative">
                <input
                  className="bg-[#E6E6E6] border-none flex rounded-md outline-none px-9 py-3 w-full"
                  type="text"
                  placeholder="Full Name*"
                />
                <FaUserAlt className="absolute  top-4 left-1 " />
              </div>

              <div className="relative">
                <input
                  className="bg-[#E6E6E6] flex rounded-md border-none outline-none px-9 py-3 w-full"
                  type="text"
                  placeholder="Phone number"
                />
                <FaPhone className="absolute top-4 left-1" />
              </div>

              <div className="relative">
                <input
                  className="bg-[#E6E6E6] flex rounded-md border-none outline-none px-9 py-3 w-full"
                  type="text"
                  placeholder="Business email address*"
                />
                <MdOutlineMarkEmailUnread className="absolute top-4 left-1" />
              </div>
              <div className="relative">
                <input
                  className="bg-[#E6E6E6] flex rounded-md border-none outline-none px-9 py-3  w-full"
                  type="text"
                  placeholder="Number of users"
                />
                <FaUserFriends className="absolute top-4 left-1" />
              </div>
              <button className="bg-[#5F2466]  text-[#FFFFFF]   rounded-xl w-fit  mt-1 mr-[800px]  py-[15px] px-[25px] m">
                Submit
              </button>
            </div>
          </div>
          <img className="flex rounded-xl" src={gg} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
