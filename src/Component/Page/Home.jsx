import React from "react";
import { FaUserAlt } from "react-icons/fa";

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

import { HiOutlineMicrophone } from "react-icons/hi2";

import Buttom from "./Buttom";

const Home = () => {
  return (
    <div>
      <div className="  relative pb-[3px] ">
        <div className="flex  gap-8">
          <div className="relative w-full gap-10 mt-3">
            <img className=" w-full" src={iamges} alt="Logo" />
            <div className=" text-[#702D77] font-spline-sans absolute flex flex-col  justify-between pl-14 sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
              <p className="text-sm sm:text-2xl sm:font-light  md:text-4xl md:font-normal   xl:text-6xl  xl:font-medium ">
                Seamless CPaaS for Unparalleled
              </p>

              <div className="  text-[#FFFFFF] text-xs sm:text-sm md:text-base xl:text-lg   flex flex-row   gap-2 xl:gap-3    justify-center items-center">
                <a className="bg-[#702D77] hover:bg-[#FC6517] rounded-xl py-1 px-1  sm:py-2 sm:px-3 md:py-3 md:px-4 2xl:rounded-lg xl:py-3 2xl:px-6 ">
                  Request trail
                </a>
                <a
                  href="price"
                  className="bg-[#702D77] hover:bg-[#FC6517] rounded-xl py-1 px-1  sm:py-2 sm:px-3 md:py-3 md:px-4 xl:rounded-lg xl:py-3 2xl:px-6 "
                >
                  Request Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7]  w-full  flex flex-col items-center p-10  my-2 sm:my-4 md:my-6 xl:my-">
          <p className=" text-[#000000] text-xs sm:text-sm md:text-base xl:text-lg   w-[75%] ">
            Elevate your business communication. Our CPaaS platform integrates
            Bulk SMS, Voice Broadcast, Call Center, Video Calls, Messaging,
            WhatsApp Business, and ChatBot features. Streamline interactions,
            engage customers, and unlock new communication possibilities
            effortlessly.
          </p>
        </div>
        <div className="  bg-[#5F2466] w-4/5 mx-auto  rounded-lg	 flex flex-col gap-3 laptop:flex-row mb-12 py-[29px] px-[34px]">
          <div className="flex flex-col gap-5 items-center justify-center ">
            <h2 className=" text-[#FFFFFF] text-base   md:text-4xl md:font-bold  flex items-center ">
              Our Products
            </h2>
            <p className="text-[#FFFFFF] text-xs    md:text-base font-normal  tracking-normal text-center">
              Experience the convenience of Bulk SMS, Voice Broadcast, and
              Call-Center capabilities in one platform.
            </p>
          </div>

          <div className=" w-fit flex flex-col  gap-6 mt-4  ">
            <div className="bg-[#FFFFFF24]   p-8 rounded-lg grid gap-10">
              <div className=" gap-10">
                <p className=" text-[#FFFFFF] text-xs font-medium  md:text-2xl md:font-bold  tracking-normal text-left flex flex-row gap-1 items-center">
                  <FaMailBulk className="gap-10 md:mr-3 mr-1 w-4 h-4 md:w-9 md:h-9" />
                  Bulk SMS
                </p>
                <h1 className=" text-[#FFFFFF] text-xs font-extralight  md:text-base md:font-light  tracking-normal text-left">
                  Send personalized or mass SMS messages seamlessly. Utilize
                  templates and monitor delivery status with detailed reports.
                </h1>
              </div>
            </div>

            <div className="bg-[#FFFFFF24] m  p-8 rounded-lg grid gap-10">
              <div className=" gap-10">
                <p className=" text-[#FFFFFF]  text-xs font-medium  md:text-2xl md:font-bold tracking-normal text-left flex flex-row gap-1 items-center">
                  <svg
                    className="mr-2 md:mr-3  w-4 h-4 md:w-9 md:h-9"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1875 1.75C5.5125 1.75 1.6875 5.575 1.6875 10.25V23V28.3125C5.61875 24.9125 10.6125 23 15.8187 23H20.8125C25.4875 23 29.3125 19.175 29.3125 14.5V10.25C29.3125 5.575 25.4875 1.75 20.8125 1.75H10.1875Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Voice Broadcast
                </p>
                <h1 className=" text-[#FFFFFF]   text-xs font-extralight  md:text-base md:font-light tracking-normal text-left">
                  Engage audiences through automated voice messages. Create
                  broadcasts, use pre-designed templates, and track analytics
                  for effective outreach.
                </h1>
              </div>
            </div>

            <div className="bg-[#FFFFFF24]  p-8 rounded-lg flex gap-10">
              <div className="  gap-10">
                <p className=" text-[#FFFFFF] text-xs font-medium  md:text-2xl md:font-bold  tracking-normal  text-left flex flex-row gap-1 items-center ">
                  <svg
                    className="mr-2 md:mr-3  w-4 h-4 md:w-9 md:h-9"
                    width="27"
                    height="34"
                    viewBox="0 0 27 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.8958 29.8031L25.8907 24.4425C25.5422 22.5654 24.1744 21.0828 22.3207 20.5735L18.852 19.6286C18.5212 19.3439 18.1536 19.1038 17.7498 18.9132V18.7099L18.8732 17.5865C19.0581 17.4016 19.2232 17.204 19.3797 17H19.8755C21.0471 17 22.0005 16.0466 22.0005 14.875V14.0356C22.8229 13.7424 23.4165 12.9632 23.4165 12.0417V10.625C23.4165 9.54338 22.6005 8.65725 21.5536 8.52621C22.3292 6.58183 22.087 4.37963 20.9055 2.63429C19.7707 0.959792 17.9857 0 16.0073 0H9.13649C8.84112 0 8.5762 0.183458 8.47279 0.460417C8.45224 0.514958 8.27658 1.00654 8.15404 1.72338C6.83866 2.31625 5.78962 3.349 5.30937 4.55742C4.82133 5.78567 4.91837 7.14567 5.59129 8.49079L5.6012 8.51063C4.47991 8.56729 3.58245 9.48954 3.58245 10.625V12.0417C3.58245 13.2133 4.53587 14.1667 5.70745 14.1667H6.46324C6.61837 15.458 7.19212 16.6529 8.1257 17.5865L9.24912 18.7099V18.8983C8.84395 19.0882 8.46924 19.3389 8.13349 19.6322L4.67683 20.5743C2.82454 21.0835 1.45674 22.5661 1.10895 24.4418L0.102411 29.8045C-0.090964 30.8437 0.184578 31.9069 0.861036 32.7215C1.53608 33.5346 2.52845 34.0007 3.58245 34.0007H23.4158C24.4698 34.0007 25.4622 33.5346 26.1372 32.7215C26.8137 31.9076 27.0899 30.8444 26.8951 29.8038L26.8958 29.8031ZM19.1665 23.375C19.1665 23.5641 19.0935 23.7384 18.9497 23.8793C18.8208 24.0111 18.6466 24.0833 18.4582 24.0833H16.659C17.3347 23.3304 17.7498 22.3394 17.7498 21.25V20.5438C18.6232 21.1969 19.1665 22.2381 19.1665 23.375ZM10.6665 21.25V19.8064C11.5243 20.2838 12.4912 20.5417 13.4998 20.5417C14.5085 20.5417 15.4754 20.2838 16.3332 19.8064V21.25C16.3332 22.8126 15.0624 24.0833 13.4998 24.0833C11.9372 24.0833 10.6665 22.8126 10.6665 21.25ZM20.217 15.4828C20.3728 15.0606 20.4812 14.62 20.5357 14.1667H20.5839V14.875C20.5839 15.1392 20.4323 15.3609 20.217 15.4828ZM21.9998 10.625V12.0417C21.9998 12.432 21.6825 12.75 21.2915 12.75H20.5832V9.91667H21.2915C21.6825 9.91667 21.9998 10.2347 21.9998 10.625ZM9.66562 1.41667H16.0073C17.5083 1.41667 18.8662 2.1505 19.7325 3.42904C20.615 4.73167 20.8162 6.35942 20.2984 7.81929C19.7572 6.55492 18.5014 5.66667 17.0422 5.66667H10.3024C9.16129 4.24929 9.44604 2.29642 9.66562 1.41667ZM6.62616 5.08017C6.88258 4.43629 7.39612 3.84483 8.04708 3.40142C8.08533 4.20608 8.26666 5.08017 8.73062 5.899C7.87495 6.21775 7.18079 6.85454 6.78341 7.66842C6.37116 6.75042 6.30812 5.87988 6.62616 5.08017ZM4.99983 12.0417V10.625C4.99983 10.2347 5.31716 9.91667 5.70816 9.91667H6.41649V12.75H5.70816C5.31716 12.75 4.99983 12.432 4.99983 12.0417ZM7.83316 13.4583V9.20833C7.83316 8.03675 8.78658 7.08333 9.95816 7.08333H17.0415C18.2131 7.08333 19.1665 8.03675 19.1665 9.20833V13.4583C19.1665 14.2141 18.9767 14.9395 18.6225 15.5833H16.8913C16.6172 14.9593 15.9953 14.5208 15.2707 14.5208H13.854C12.8772 14.5208 12.0832 15.3156 12.0832 16.2917C12.0832 17.2678 12.8772 18.0625 13.854 18.0625H15.2707C15.9953 18.0625 16.6172 17.624 16.8913 17H17.4566L16.6264 17.8302C15.7906 18.6653 14.6806 19.125 13.4998 19.125C12.319 19.125 11.2091 18.6653 10.3732 17.8302L9.12799 16.5849C8.29287 15.7498 7.83316 14.6398 7.83316 13.4583ZM15.6248 16.2917C15.6248 16.4872 15.4655 16.6458 15.2707 16.6458H13.854C13.6592 16.6458 13.4998 16.4872 13.4998 16.2917C13.4998 16.0962 13.6592 15.9375 13.854 15.9375H15.2707C15.4655 15.9375 15.6248 16.0962 15.6248 16.2917ZM10.3407 24.0833H8.54149C8.15049 24.0833 7.83316 23.7653 7.83316 23.375C7.83316 22.4251 8.20149 21.5369 8.87654 20.8682C8.99199 20.7506 9.11879 20.6458 9.24983 20.5466V21.25C9.24983 22.3394 9.66491 23.3304 10.3407 24.0833ZM1.95116 31.8162C1.54529 31.3268 1.37883 30.6885 1.49499 30.0652L2.50154 24.7017C2.75087 23.3623 3.72766 22.3047 5.05083 21.9406L6.79545 21.4653C6.54683 22.061 6.41649 22.7078 6.41649 23.375C6.41649 24.5466 7.36991 25.5 8.54149 25.5H12.7915V32.5833H3.58316C2.95133 32.5833 2.35704 32.3035 1.95116 31.8162ZM25.0478 31.8162C24.6426 32.3035 24.0476 32.5833 23.4158 32.5833H14.2075V25.5H18.4575C19.0319 25.5 19.566 25.2755 19.9499 24.8809C20.3579 24.4843 20.5825 23.9495 20.5825 23.375C20.5825 22.7007 20.433 22.0554 20.183 21.4597L21.9467 21.9399C23.2706 22.304 24.2481 23.3623 24.4981 24.7024L25.5032 30.0638C25.6201 30.6878 25.4544 31.3268 25.0478 31.8162Z"
                      fill="white"
                    />
                  </svg>
                  Call Center
                </p>
                <h1 className=" text-[#FFFFFF]   text-xs font-extralight  md:text-base md:font-light  tracking-normal text-left">
                  Manage inbound and outbound calls efficiently. Implement call
                  routing, monitor agent performance, and access detailed
                  analytics for improved customer service.
                </h1>
              </div>
            </div>
            <div className="bg-[#FFFFFF24]  p-8 rounded-lg flex gap-10 ">
              <div className=" ">
                <p className=" text-[#FFFFFF]  text-xs font-medium  md:text-2xl md:font-bold  tracking-normal text-left flex flex-row gap-1 items-center">
                  <svg
                    className="mr-2 md:mr-3  w-4 h-4 md:w-9 md:h-9"
                    width="32"
                    height="21"
                    viewBox="0 0 32 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.2736 0.563599H1.58062C1.00078 0.563599 0.5 1.03802 0.5 1.64422V19.3558C0.5 19.9357 0.974419 20.4365 1.58062 20.4365H24.2736C24.8535 20.4365 25.3543 19.962 25.3543 19.3558V14.2427L29.2814 18.1698C29.4922 18.3807 29.7558 18.4861 30.0457 18.4861C30.1775 18.4861 30.3357 18.4597 30.4674 18.407C30.8628 18.2489 31.1264 17.8535 31.1264 17.4055V3.56825C31.1264 3.14654 30.8628 2.7512 30.4674 2.5667C30.0721 2.40856 29.5977 2.48763 29.3078 2.80391L25.3806 6.73104V1.64422C25.3543 1.03802 24.8798 0.563599 24.2736 0.563599ZM23.193 9.34034V11.6597V18.3016H2.63488V2.69848H23.193V9.34034ZM28.9651 6.17755V14.8489L25.3543 11.238V9.81476L28.9651 6.17755Z"
                      fill="white"
                    />
                  </svg>
                  Video call
                </p>
                <h1 className=" text-[#FFFFFF]   text-xs font-extralight  md:text-base md:font-light  tracking-normal text-left">
                  Initiate face-to-face interactions with video calls. Enable
                  recording and integrate video calling capabilities seamlessly.
                </h1>
              </div>
            </div>
            <div className="bg-[#FFFFFF24]   p-8 rounded-lg grid gap-10">
              <div className="  gap-10">
                <p className=" text-[#FFFFFF]  text-xs font-medium  md:text-2xl md:font-bold   tracking-normal text-left flex flex-row gap-1 items-center">
                  <HiOutlineMicrophone className="gap-10 mr-2 md:mr-3  w-4 h-4 md:w-9 md:h-9" />{" "}
                  Voice Broadcast
                </p>
                <h1 className=" text-[#FFFFFF]  text-xs font-extralight  md:text-base md:font-light  tracking-normal text-left">
                  Engage audiences through automated voice messages. Create
                  broadcasts, use pre-designed templates, and track analytics
                  for effective outreach.
                </h1>
              </div>
            </div>
            <div className="bg-[#FFFFFF24]   p-8 rounded-lg flex gap-10">
              <div className="  gap-10">
                <p className=" text-[#FFFFFF] text-xs font-medium  md:text-2xl md:font-bold   tracking-normal text-left flex flex-row gap-1 items-center">
                  <HiOutlineMicrophone className="gap-10 mr-2 md:mr-3  w-4 h-4 md:w-9 md:h-9" />{" "}
                  Voice Broadcast
                </p>
                <h1 className=" text-[#FFFFFF]   text-xs font-extralight  md:text-base md:font-light tracking-normal text-left">
                  Engage audiences through automated voice messages. Create
                  broadcasts, use pre-designed templates, and track analytics
                  for effective outreach.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex flex-col items-center  mt-4 text-center">
          <p className="text-[#000000]   mb-1 mt-1 w-[40%] text-center  text-xs font-extralight  md:text-2xl md:font-light  ">
            Join the 290,000+ brands that use SpellCPaaS to connect with their
            customers
          </p>
          <div className=" gap-3 flex flex-col sm:flex-col  md:flex-row lg:flex-col xl:flex-row items-center   sm:gap-4 md:gap-12">
            <img
              className=" w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] md:max-w-[132px] md:max-h-[132px]"
              src={pizza}
              alt="Logo"
            />
            <img
              className=" w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] md:max-w-[132px] md:max-h-[132px]"
              src={mc}
              alt="Logo"
            />
            <img
              className=" w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] md:max-w-[132px] md:max-h-[132px]"
              src={dsoy}
              alt="Logo"
            />
            <img
              className=" w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] md:max-w-[132px] md:max-h-[132px]"
              src={li}
              alt="Logo"
            />
            <img
              className=" w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] md:max-w-[132px] md:max-h-[132px]"
              src={pic}
              alt="Logo"
            />
            <img
              className=" w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] md:max-w-[132px] md:max-h-[132px]"
              src={dell}
              alt="Logo"
            />
            <img
              className=" w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] md:max-w-[132px] md:max-h-[132px]"
              src={pan}
              alt="Logo"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full mt-28">
          <div className="flex flex-col gap-5 justify-center  items-center ">
            <h2 className="text-[#5F2466] text-xl ml-48 font-normal sm:text-xl sm:font-medium sm:pl-10 md:text-3xl md:font-semibold md:pl-8  lg:text-4xl lg:font-bold lg:pl-14 ">
              Streamline Your Communication with Bulk SMS Services
            </h2>
            <p className="text-[#000000] text-xs pl-36 font-thin sm:pl-56 md:text-[12px] md:pl-40 lg:text-base lg:ml-24 ">
              Reach a vast audience instantly with Bulk SMS on our CPaaS
              platform. Send personalized messages, promotions, and updates to
              engage customers and fuel business growth
            </p>
            <button
              className="bg-[#5F2466] text-[#FFFFFF]  -mr-32 rounded-lg py-2 px-1 sm:ml-8 xm:py-3 xm:px-2 md:-ml-20  md:rounded-xl lg:-ml-6 xl:mr-28 xl:py-4 xl:px-3"
              onClick={(event) => {
                event.target.style.backgroundColor =
                  event.target.style.backgroundColor === "rgb(252, 101, 23)"
                    ? "#5F2466"
                    : "#FC6517";
              }}
            >
              Learn More
            </button>
          </div>
          <img
            className="w-40 h-40 ml-24 mt-5  sm:ml-44 sm:mt-3 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:ml-40 lg:pb-16"
            src={bb}
            alt="Logo"
          />
        </div>
        <div className="   flex flex-col-reverse lg:flex-row  justify-center gap-5 mb-10 mt-10">
          <img
            className=" w-40 h-40 ml-24 mt-5  sm:ml-44 sm:mt-3 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:ml-40 lg:pb-16 "
            src={bc}
            alt="Logo"
          />
          <div className="text-[#5F2466]  flex flex-col items-center justify-center pl-32 gap-5">
            <h2 className=" text-xl font-normal sm:text-xl sm:font-medium sm:pl-10 md:text-3xl md:font-semibold md:pl-8  lg:text-4xl lg:font-bold lg:pr-5 xl:pr-1    ">
              Automate Your Voice Broadcast with Ease
            </h2>
            <p className=" text-[#000000] text-xs  font-thin sm:pl-56 md:text-[12px] md:pl-40 lg:text-base lg:pr-40 lg:-ml-32 xl:pl-40">
              Our Voice Broadcast feature allows you to automate calls and
              deliver messages to a large audience, saving you time and effort.
              Reach your customers effectively and efficiently.
            </p>
            <button
              className="bg-[#5F2466] text-[#FFFFFF] mr-28 -ml-20 rounded-lg py-2 px-1 sm:ml-8 sm:py-3 sm:px-5 md:-ml-10   md:rounded-xl  lg:mr-36 lg:py-3 lg:px-2  xl:-ml-80    "
              onClick={(event) => {
                event.target.style.backgroundColor =
                  event.target.style.backgroundColor === "rgb(252, 101, 23)"
                    ? "#5F2466"
                    : "#FC6517";
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-28">
          <div className="flex flex-col gap-5 justify-center  items-center">
            <h2 className=" text-[#5F2466] text-xl ml-48 font-normal sm:text-xl sm:font-medium sm:pl-10 md:text-3xl md:font-semibold md:pl-8  lg:text-4xl lg:font-bold lg:pl-14">
              Efficiently manage customer communications with our powerful
              Call-Center solution.
            </h2>
            <p className="text-[#000000] text-xs pl-36 font-thin sm:pl-56 md:text-[12px] md:pl-40 lg:text-base lg:ml-24 ">
              Our Call-Center solution empowers businesses to handle customer
              interactions seamlessly, improving customer satisfaction and
              boosting productivity.
            </p>
            <Buttom />
          </div>
          <img
            className="w-40 h-40 ml-24 mt-5  sm:ml-44 sm:mt-3 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:ml-40 lg:pb-16 lg:mr-6"
            src={cc}
            alt="Logo"
          />
        </div>
        {/* <section className=" flex  sm:flex-col lg:flex-row w-full justify-center items-center gap-10  mb-9 mt-10">
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
        </section> */}
        {/* <section className="  flex  sm:flex-col lg:flex-row w-full justify-center items-center gap-5 mb-10 mt-10 ">
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
        </section> */}
        {/* <div className="text-[#5F2466] flex  sm:flex-col lg:flex-row w-full items-center  justify-center gap-44 mb-10 mt-10">
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
        </div> */}
        {/* <div className="text-[#5F2466]  flex flex-row items-center  justify-center gap-5 mb-10 mt-10">
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
        </div> */}
        {/* 
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
        </div> */}
        {/* <div className="flex flex-row justify-center items-center py-[100px] px-[50px] ">
          <div className="flex flex-col justify-items-center items-center">
            <h2 className="text-[#5F2466] text-4xl  font-bold leading-[50px]">
              You’re at the start of something special.
            </h2>
            <p className="text-[#000000]  text-base mb-6 mt-6">
              Try our cloud contact center software today.
            </p>

            <div className="text-[#000000]  mobile:flex-col tablet:flex-col laptop:flex-row w-ful font-Poppins font-base   gap-4 mr-8  ">
              <div className="flex flex-row gap-12">
                <div className="relative gap-5">
                  <input
                    className="bg-[#E6E6E6] border-none flex rounded-[5px] w-[335px] h-[53px] placeholder-[#000000] placeholder-opacity-75 outline-none px-9 py-3 "
                    type="text"
                    placeholder="Full Name*"
                  />
                  <FaUserAlt className="absolute  top-4 left-1 " />
                </div>

                <div className="relative">
                  <input
                    className="bg-[#E6E6E6] flex pl-11 border-none outline-none px-9 py-3 rounded-[5px] w-[335px] h-[53px] placeholder-[#000000] placeholder-opacity-75 "
                    type="text"
                    placeholder="Phone number"
                  />
                  <svg
                    className="flex -mt-8 ml-2"
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.67188 8.74609C9.17969 9.00391 9.63672 9.32031 10.043 9.69531C10.4492 10.0703 10.8008 10.4922 11.0977 10.9609C11.3945 11.4297 11.6172 11.9297 11.7656 12.4609C11.9141 12.9922 11.9922 13.5469 12 14.125H10.5C10.5 13.5078 10.3828 12.9258 10.1484 12.3789C9.91406 11.832 9.58984 11.3555 9.17578 10.9492C8.76172 10.543 8.28516 10.2227 7.74609 9.98828C7.20703 9.75391 6.625 9.63281 6 9.625C5.38281 9.625 4.80078 9.74219 4.25391 9.97656C3.70703 10.2109 3.23047 10.5352 2.82422 10.9492C2.41797 11.3633 2.09766 11.8398 1.86328 12.3789C1.62891 12.918 1.50781 13.5 1.5 14.125H0C0 13.5547 0.078125 13.0039 0.234375 12.4727C0.390625 11.9414 0.613281 11.4414 0.902344 10.9727C1.19141 10.5039 1.53906 10.082 1.94531 9.70703C2.35156 9.33203 2.8125 9.01172 3.32812 8.74609C2.75781 8.32422 2.3125 7.79297 1.99219 7.15234C1.67188 6.51172 1.50781 5.83594 1.5 5.125C1.5 4.50781 1.61719 3.92578 1.85156 3.37891C2.08594 2.83203 2.41016 2.35547 2.82422 1.94922C3.23828 1.54297 3.71484 1.22266 4.25391 0.988281C4.79297 0.753906 5.375 0.632812 6 0.625C6.61719 0.625 7.19922 0.742188 7.74609 0.976562C8.29297 1.21094 8.76953 1.53516 9.17578 1.94922C9.58203 2.36328 9.90234 2.83984 10.1367 3.37891C10.3711 3.91797 10.4922 4.5 10.5 5.125C10.5 5.83594 10.3398 6.51172 10.0195 7.15234C9.69922 7.79297 9.25 8.32422 8.67188 8.74609ZM3 5.125C3 5.53906 3.07812 5.92578 3.23438 6.28516C3.39062 6.64453 3.60547 6.96094 3.87891 7.23438C4.15234 7.50781 4.46875 7.72266 4.82812 7.87891C5.1875 8.03516 5.57812 8.11719 6 8.125C6.40625 8.125 6.79297 8.04688 7.16016 7.89062C7.52734 7.73438 7.84375 7.51953 8.10938 7.24609C8.375 6.97266 8.58984 6.65625 8.75391 6.29688C8.91797 5.9375 9 5.54688 9 5.125C9 4.71875 8.92188 4.33203 8.76562 3.96484C8.60938 3.59766 8.39453 3.28125 8.12109 3.01562C7.84766 2.75 7.52734 2.53516 7.16016 2.37109C6.79297 2.20703 6.40625 2.125 6 2.125C5.58594 2.125 5.19922 2.20312 4.83984 2.35938C4.48047 2.51562 4.16406 2.73047 3.89062 3.00391C3.61719 3.27734 3.40234 3.59766 3.24609 3.96484C3.08984 4.33203 3.00781 4.71875 3 5.125ZM24 0.625V2.125H13.5V0.625H24ZM13.5 6.625H24V8.125H13.5V6.625ZM13.5 12.625H24V14.125H13.5V12.625Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row gap-12">
                <div className="relative">
                  <input
                    className="bg-[#E6E6E6] flex border-none text-[#000000] pl-11 text-base outline-none px-9 py-3 rounded-[5px] w-[335px] h-[53px] mt-3 placeholder-[#000000] placeholder-opacity-75 "
                    type="text"
                    placeholder="Business email address*"
                  />

                  <svg
                    className="-mt-8 ml-2 flex items-start"
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0.625H2C1.60218 0.625 1.22064 0.783035 0.93934 1.06434C0.658035 1.34564 0.5 1.72718 0.5 2.125V14.125C0.5 14.5228 0.658035 14.9044 0.93934 15.1857C1.22064 15.467 1.60218 15.625 2 15.625H20C20.3978 15.625 20.7794 15.467 21.0607 15.1857C21.342 14.9044 21.5 14.5228 21.5 14.125V2.125C21.5 1.72718 21.342 1.34564 21.0607 1.06434C20.7794 0.783035 20.3978 0.625 20 0.625ZM18.35 2.125L11 7.21L3.65 2.125H18.35ZM2 14.125V2.8075L10.5725 8.74C10.698 8.8271 10.8472 8.87377 11 8.87377C11.1528 8.87377 11.302 8.8271 11.4275 8.74L20 2.8075V14.125H2Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <input
                    className="bg-[#E6E6E6] placeholder-[#000000] placeholder-opacity-75 flex border-none outline-none px-9 py-3 mt-3 rounded-[5px] w-[335px] h-[53px]"
                    type="text"
                    placeholder="Number of users"
                  />
                  <svg
                    className=" flex -ml-[328px] mt-4 "
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 19.125V17.125C1 16.0641 1.42143 15.0467 2.17157 14.2966C2.92172 13.5464 3.93913 13.125 5 13.125H9C10.0609 13.125 11.0783 13.5464 11.8284 14.2966C12.5786 15.0467 13 16.0641 13 17.125V19.125M14 1.255C14.8604 1.4753 15.623 1.9757 16.1676 2.67731C16.7122 3.37892 17.0078 4.24183 17.0078 5.13C17.0078 6.01817 16.7122 6.88108 16.1676 7.58269C15.623 8.2843 14.8604 8.7847 14 9.005M19 19.125V17.125C18.9949 16.2422 18.6979 15.3858 18.1553 14.6894C17.6126 13.993 16.8548 13.4957 16 13.275M3 5.125C3 6.18587 3.42143 7.20328 4.17157 7.95343C4.92172 8.70357 5.93913 9.125 7 9.125C8.06087 9.125 9.07828 8.70357 9.82843 7.95343C10.5786 7.20328 11 6.18587 11 5.125C11 4.06413 10.5786 3.04672 9.82843 2.29657C9.07828 1.54643 8.06087 1.125 7 1.125C5.93913 1.125 4.92172 1.54643 4.17157 2.29657C3.42143 3.04672 3 4.06413 3 5.125Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <button
                className="bg-[#5F2466]  text-[#FFFFFF] font-bold leading-5 text-[16px]  rounded-[10px] w-fit  mt-3 mr-[800px]  py-3 px-6 gap-3"
                onClick={(event) => {
                  event.target.style.backgroundColor =
                    event.target.style.backgroundColor === "rgb(252, 101, 23)"
                      ? "#5F2466"
                      : "#FC6517";
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <img className="flex rounded-xl" src={gg} alt="Logo" />
        </div>  */}
      </div>
    </div>
  );
};

export default Home;
