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

import { FaMailBulk } from "react-icons/fa";

import { HiOutlineMicrophone } from "react-icons/hi2";

import Buttom from "./Buttom";
import Frequtly from "./Frequtly";
import Photo from "./Photo";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="w-full">
      <img className=" w-full" src={iamges} alt="Logo" />
      <div className=" text-[#702D77] absolute flex flex-col mobile:mx-10 justify-between mobile:top-[20%] laptop:top-2/4 -translate-y-2/4 mobile:space-y-4">
        <p className=" mobile:leading-5 mobile:text-xl mobile:font-light  tablet:text-3xl tablet:font-semibold tablet:mx-10 laptop:text-5xl  laptop:font-medium desktop:text-6xl ">
          Seamless CPaaS for Unparalleled
        </p>

        <div className="  text-[#FFFFFF] flex flex-row gap-2 mobile:justify-start mobile:items-start tablet:justify-center">
          <a className="bg-[#702D77] hover:bg-[#FC6517] mobile:rounded-lg mobile:text-sm mobile:font-extralight mobile:py-1 mobile:px-2 tablet:text-base tablet:font-normal tablet:py-2 tablet:px-2  laptop:py-3 laptop:px-6 laptop:font-bold laptop:text-base  ">
            Request trail
          </a>
          <a
            href="price"
            className="bg-[#702D77] hover:bg-[#FC6517] text-xs  mobile:rounded-lg mobile:text-sm mobile:font-extralight mobile:py-1 mobile:px-2 tablet:text-base tablet:font-normal tablet:py-2 tablet:px-2 tablet:mr-64 laptop:px-6 laptop:py-3 laptop:font-bold laptop:text-base "
          >
            Get Pricing
          </a>
        </div>
      </div>


      <div className="bg-[#F7F7F7]  w-full  flex flex-col items-center  mobile:my-8 tablet:my-10 mobile:py-5 tablet:py-8 ">
        <p className=" text-[#000000]  mobile:text-sm mobile:pr-2  tablet:text-base tablet:py-5 tablet:px-20 w-[75%] ">
          Elevate your business communication. Our CPaaS platform integrates
          Bulk smS, Voice Broadcast, Call Center, Video Calls, Messaging,
          WhatsApp Business, and ChatBot features. Streamline interactions,
          engage customers, and unlock new communication possibilities
          effortlessly.
        </p>
      </div>
      {/* product div */}
      <div className="  bg-[#5F2466] rounded-lg mx-auto flex flex-col mobile:my-10 mobile:py-5 mobile:w-11/12 tablet:w-4/5  laptop:w-5/6 laptop:flex-row laptop:my-28 laptop:px-6  laptop:py-6 justify-center">

        <div className="flex flex-col gap-5 items-center justify-center ">
          <h2 className=" text-[#FFFFFF] text-base   tablet:text-4xl tablet:font-bold  flex items-center ">
            Our Products
          </h2>
          <p className="text-[#FFFFFF] text-xs    tablet:text-base font-normal  tracking-normal text-center">
            Experience the convenience of Bulk smS, Voice Broadcast, and
            Call-Center capabilities in one platform.
          </p>
        </div>

        <div className=" w-fit flex flex-col  gap-6 mt-4  ">
          <div className="bg-[#FFFFFF24]   p-8 rounded-laptop grid gap-10">
            <div className=" gap-10">
              <p className=" text-[#FFFFFF] text-xs font-medium  tablet:text-2xl tablet:font-bold  tracking-normal text-left flex flex-row gap-1 items-center">
                <FaMailBulk className="gap-10 tablet:mr-3 mr-1 w-4 h-4 tablet:w-9 tablet:h-9" />
                Bulk mobileS
              </p>
              <h1 className=" text-[#FFFFFF] text-xs font-extralight  tablet:text-base tablet:font-light  tracking-normal text-left">
                Send personalized or mass smS messages seamlessly. Utilize
                templates and monitor delivery status with detailed reports.
              </h1>
            </div>
          </div>

          <div className="bg-[#FFFFFF24] m  p-8 rounded-lg grid gap-10">
            <div className=" gap-10">
              <p className=" text-[#FFFFFF]  text-xs font-medium  tablet:text-2xl tablet:font-bold tracking-normal text-left flex flex-row gap-1 items-center">
                <svg
                  className="mr-2 tablet:mr-3  w-4 h-4 tablet:w-9 tablet:h-9"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1875 1.75C5.5125 1.75 1.6875 5.575 1.6875 10.25V23V28.3125C5.61875 24.9125 10.6125 23 15.8187 23H20.8125C25.4875 23 29.3125 19.175 29.3125 14.5V10.25C29.3125 5.575 25.4875 1.75 20.8125 1.75H10.1875Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Voice Broadcast
              </p>
              <h1 className=" text-[#FFFFFF]   text-xs font-extralight  tablet:text-base tablet:font-light tracking-normal text-left">
                Engage audiences through automated voice messages. Create
                broadcasts, use pre-designed templates, and track analytics
                for effective outreach.
              </h1>
            </div>
          </div>

          <div className="bg-[#FFFFFF24]  p-8 rounded-lg flex gap-10">
            <div className="  gap-10">
              <p className=" text-[#FFFFFF] text-xs font-medium  tablet:text-2xl tablet:font-bold  tracking-normal  text-left flex flex-row gap-1 items-center ">
                <svg
                  className="mr-2 tablet:mr-3  w-4 h-4 tablet:w-9 tablet:h-9"
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
              <h1 className=" text-[#FFFFFF]   text-xs font-extralight  tablet:text-base tablet:font-light  tracking-normal text-left">
                Manage inbound and outbound calls efficiently. Implement call
                routing, monitor agent performance, and access detailed
                analytics for improved customer service.
              </h1>
            </div>
          </div>
          <div className="bg-[#FFFFFF24]  p-8 rounded-lg flex gap-10 ">
            <div className=" ">
              <p className=" text-[#FFFFFF]  text-xs font-medium  tablet:text-2xl tablet:font-bold  tracking-normal text-left flex flex-row gap-1 items-center">
                <svg
                  className="mr-2 tablet:mr-3  w-4 h-4 tablet:w-9 tablet:h-9"
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
              <h1 className=" text-[#FFFFFF]   text-xs font-extralight  tablet:text-base tablet:font-light  tracking-normal text-left">
                Initiate face-to-face interactions with video calls. Enable
                recording and integrate video calling capabilities seamlessly.
              </h1>
            </div>
          </div>
          <div className="bg-[#FFFFFF24]   p-8 rounded-lg grid gap-10">
            <div className="  gap-10">
              <p className=" text-[#FFFFFF]  text-xs font-medium  tablet:text-2xl tablet:font-bold   tracking-normal text-left flex flex-row gap-1 items-center">
                <HiOutlineMicrophone className="gap-10 mr-2 tablet:mr-3  w-4 h-4 tablet:w-9 tablet:h-9" />{" "}
                Voice Broadcast
              </p>
              <h1 className=" text-[#FFFFFF]  text-xs font-extralight  tablet:text-base tablet:font-light  tracking-normal text-left">
                Engage audiences through automated voice messages. Create
                broadcasts, use pre-designed templates, and track analytics
                for effective outreach.
              </h1>
            </div>
          </div>
          <div className="bg-[#FFFFFF24]   p-8 rounded-lg flex gap-10">
            <div className="  gap-10">
              <p className=" text-[#FFFFFF] text-xs font-medium  tablet:text-2xl tablet:font-bold   tracking-normal text-left flex flex-row gap-1 items-center">
                <HiOutlineMicrophone className="gap-10 mr-2 tablet:mr-3  w-4 h-4 tablet:w-9 tablet:h-9" />{" "}
                Voice Broadcast
              </p>
              <h1 className=" text-[#FFFFFF]   text-xs font-extralight  tablet:text-base tablet:font-light tracking-normal text-left">
                Engage audiences through automated voice messages. Create
                broadcasts, use pre-designed templates, and track analytics
                for effective outreach.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*pictures div  */}
      <div className="w-full  flex flex-col items-center text-center mobile:py-1 py-10">
        <p className="text-[#000000] text-center w-1/4 text-xs font-extralight tablet:text-2xl tablet:font-light">
          Join the 290,000+ brands that use SpellCPaaS to connect with their
          customers
        </p>
        <div className="flex flex-col mobile:py-10 py-20 tablet:flex-row items-center justify-between w-5/6 mobile:gap-3">
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] tablet:max-w-[110px] tablet:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={pizza}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] tablet:max-w-[110px] tablet:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={mc}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] tablet:max-w-[110px] tablet:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={dsoy}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] tablet:max-w-[110px] tablet:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={li}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] tablet:max-w-[110px] tablet:max-h-[110px] lg:max-w-[132px] lg:max-h-[132px]"
            src={pic}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] tablet:max-w-[113px] tablet:max-h-[113px]  laptop:max-w-[110px] laptop:max-h-[110px] desktop:max-w-[132px] desktop:max-h-[132px]"
            src={dell}
            alt="Logo"
          />
          <img
            className="w-full h-auto max-w-[60px] max-h-[60px] tablet:hidden laptop:block laptop:max-w-[110px] laptop:max-h-[110px] desktop:max-w-[132px] desktop:max-h-[132px]"
            src={pan}
            alt="Logo"
          />
        </div>
      </div>
      <section className="w-[80%] mx-auto mobile:py-5 tablet:py-10 laptop:py-20 desktop:py-24 ">
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Streamline Your Communication with Bulk Sms Services
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Instantly reach a broad audience with our Bulk SMS feature—ideal for mass communication and marketing. Effortlessly send personalized messages, promotions, and updates to engage customers and fuel business growth.
            </p>
            <button
              className="bg-[#5F2466] hover:bg-[#FC6517] text-[#FFFFFF] mobile:rounded-lg mobile:py-2 mobile:px-1 mobile:my-2 tablet:py-4 tablet:px-3 tablet:text-lg tablet:font-medium tablet:rounded-xl laptop:rounded-xl laptop:px-2 laptop:py-3 "

            >
              Learn More
            </button>
          </div>
          <img
            className="mobile:w-40 mobile:h-40 tablet:w-72 tablet:h-72 laptop:w-80 "
            src={bb}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <img
            className="mobile:w-48 mobile:h-48 tablet:w-72 tablet:h-72 laptop:w-80 laptop:h-80"
            src={bc}
            alt="Logo"
          />
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Automate Your Voice Broadcast with Ease
            </h2>
            <p className=" text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Our Voice Broadcast feature allows you to automate calls and
              deliver messages to a large audience, saving you time and effort.
              Reach your customers effectively and efficiently.
            </p>
            <button
              className="bg-[#5F2466] text-[#FFFFFF] hover:bg-[#FC6517] duration-10 mobile:rounded-lg mobile:py-2 mobile:px-1 mobile:my-2  tablet:px-3 tablet:text-lg tablet:font-medium tablet:rounded-xl laptop:px-2 laptop:py-3 "

            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className=" text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Efficiently manage customer communications with our powerful Call-Center solution.
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Our Call-Center solution empowers businesses to handle customer
              interactions seamlessly, improving customer satisfaction and
              boosting productivity.
            </p>
            < Buttom />
          </div>
          <img
            className=" mobile:w-48 mobile:h-48  tablet:w-72 tablet:h-72 laptop:w-96 lg:h-96 "
            src={cc}
            alt="Logo"
          />
        </div>
        <section className="flex flex-col-reverse lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <img
            className="mobile:w-44 mobile:h-44 tablet:w-72 tablet:h-72 laptop:w-96 laptop:h-96 "
            src={ll}
            alt="Logo"
          />
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
            <Buttom />
          </div>
        </section>
        <section className="flex flex-col  lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Enhance Customer Support with Versatile Messaging Solutions
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Messaging is a powerful tool for customer support and service.
              With our versatile messaging solutions, you can streamline
              communication, resolve issues faster, and provide a seamless
              customer experience.
            </p>
            <Buttom />
          </div>
          <img
            className="mobile:w-40 mobile:h-40 tablet:w-72 tablet:h-72 laptop:w-96 laptop:h-96 "
            src={dd}
            alt="Logo"
          />
        </section>
        <div className="flex flex-col-reverse lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <img
            className="mobile:w-44 mobile:h-44  tablet:w-72 tablet:h-72 laptop:w-96 laptop:h-96 "
            src={ee}
            alt="Logo"
          />
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Enhance Customer Communication with Whatsapp Business Integration
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              With our CPaaS platform, you can leverage the power of Whatsapp
              Business to connect with your customers more effectively.
            </p>
            <Buttom />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
              Seamless Conversations and Enhanced User Experiences through Chat-Bot
            </h2>
            <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
              Transform communication with CPaaS Chatbots, delivering personalized and interactive experiences through seamless integration of dynamic chat            </p>
            <Buttom />
          </div>
          <img
            className="mobile:w-44 mobile:h-44  tablet:w-72 tablet:h-72 laptop:w-96"
            src={ff}
            alt="Logo"
          />
        </div>
      </section>
      <Frequtly />
      <Photo />
    </div>

  );
};

export default Home;
