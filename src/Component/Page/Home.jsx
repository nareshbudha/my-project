import image1 from "../Image/Homepage1.png";
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
import { MdRecordVoiceOver,MdVideoCall, MdAddIcCall  } from "react-icons/md";

import { HiOutlineMicrophone } from "react-icons/hi2";

import Buttom from "./Buttom";
import Frequtly from "./Frequtly";
import Photo from "./Photo";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      <div style={{backgroundImage:`url(${image1})`, height:"700px", width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div  className=" text-[#702D77]   flex flex-col  justify-between  gap-20 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <p className=" mobile:leading-5 mt-10 mobile:text-xl mobile:font-light  tablet:text-3xl tablet:font-semibold  laptop:text-5xl  laptop:font-medium desktop:text-8xl ">
          Seamless CPaaS for Unparalleled
        </p>

        <div className="  text-[#FFFFFF] flex flex-row gap-2 mobile:justify-start mobile:items-start tablet:justify-center desktop:justify-start ">
          <Link className="bg-[#702D77] hover:bg-[#FC6517] mobile:rounded-lg mobile:text-sm mobile:font-extralight mobile:py-1 mobile:px-2 tablet:text-base tablet:font-normal tablet:py-2 tablet:px-2  laptop:py-3 laptop:px-6 laptop:font-bold laptop:text-base  ">
            Request trail
          </Link>
          <Link
            to={"price"}
            className="bg-[#702D77] hover:bg-[#FC6517] text-xs  mobile:rounded-lg mobile:text-sm mobile:font-extralight mobile:py-1 mobile:px-2 tablet:text-base tablet:font-normal tablet:py-2 tablet:px-2 tablet:mr-64 laptop:px-6 laptop:py-3 laptop:font-bold laptop:text-base "
          >
            Get Pricing
          </Link>
        </div>
      </div>
      </div>
      {/* <img className=" w-full desktop:pb-32" src={iamges} alt="Logo" /> */}


      <div className="">
        <div className="bg-[#F7F7F7]  w-full  flex flex-col items-center  mobile:my-8 tablet:my-10 mobile:py-5 tablet:py-8 ">
          <p className=" text-[#000000] text-center  mobile:text-sm  tablet:text-base tablet:py-5  tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
            Elevate your business communication. Our CPaaS platform integrates
            Bulk smS, Voice Broadcast, Call Center, Video Calls, Messaging,
            WhatsApp Business, and ChatBot features. Streamline interactions,
            engage customers, and unlock new communication possibilities
            effortlessly.
          </p>
        </div>
        {/* product div */}
        <div className="  bg-[#5F2466] rounded-lg mx-auto flex flex-col mobile:my-10 mobile:py-5  laptop:flex-row laptop:my-28 laptop:px-6  laptop:py-6 justify-center tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] px-3">
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
                  Bulk mobileSms
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
                <MdRecordVoiceOver className="gap-10 tablet:mr-3 mr-1 w-4 h-4 tablet:w-9 tablet:h-9"/>
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
                <MdAddIcCall  className="gap-10 tablet:mr-3 mr-1 w-4 h-4 tablet:w-9 tablet:h-9"/>
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
                <MdVideoCall className="gap-10 tablet:mr-3 mr-1 w-4 h-4 tablet:w-9 tablet:h-9"/>
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
        <div className="flex flex-col items-center text-center mobile:py-1 py-10 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto" >
          <p className="text-[#000000] text-center w-1/4 text-xs font-extralight tablet:text-2xl tablet:font-light">
            Join the 290,000+ brands that use SpellCPaaS to connect with their
            customers
          </p>
          <div className="flex flex-col mobile:py-10 py-20 tablet:flex-row items-center justify-between  mobile:gap-3">
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
              className="w-full h-auto max-w-[60px] max-h-[60px] laptop:max-w-[110px] laptop:max-h-[110px] desktop:max-w-[132px] desktop:max-h-[132px]"
              src={pan}
              alt="Logo"
            />
          </div>
        </div>
        <section className="mobile:py-5 tablet:py-10 laptop:py-20 desktop:py-24 tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
          <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
            <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
              <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
                Streamline Your Communication with Bulk Sms Services
              </h2>
              <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
                Instantly reach a broad audience with our Bulk SMS feature—ideal
                for mass communication and marketing. Effortlessly send
                personalized messages, promotions, and updates to engage
                customers and fuel business growth.
              </p>
              <button className="bg-[#5F2466] hover:bg-[#FC6517] text-[#FFFFFF] mobile:rounded-lg mobile:py-2 mobile:px-1 mobile:my-2 tablet:py-4 tablet:px-3 tablet:text-lg tablet:font-medium tablet:rounded-xl laptop:rounded-xl laptop:px-2 laptop:py-3 ">
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
                deliver messages to a large audience, saving you time and
                effort. Reach your customers effectively and efficiently.
              </p>
              <button className="bg-[#5F2466] text-[#FFFFFF] hover:bg-[#FC6517] duration-10 mobile:rounded-lg mobile:py-2 mobile:px-1 mobile:my-2  tablet:px-3 tablet:text-lg tablet:font-medium tablet:rounded-xl laptop:px-2 laptop:py-3 ">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
            <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
              <h2 className=" text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold tablet:text-3xl laptop:text-4xl laptop:font-medium">
                Efficiently manage customer communications with our powerful
                Call-Center solution.
              </h2>
              <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
                Our Call-Center solution empowers businesses to handle customer
                interactions seamlessly, improving customer satisfaction and
                boosting productivity.
              </p>
              <Buttom />
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
                Enhance Customer Communication with Whatsapp Business
                Integration
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
                Seamless Conversations and Enhanced User Experiences through
                Chat-Bot
              </h2>
              <p className="text-[#000000] mobile:text-xs mobile:font-light tablet:text-base">
                Transform communication with CPaaS Chatbots, delivering
                personalized and interactive experiences through seamless
                integration of dynamic chat{" "}
              </p>
              <Buttom />
            </div>
            <img
              className="mobile:w-44 mobile:h-44  tablet:w-72 tablet:h-72 laptop:w-96"
              src={ff}
              alt="Logo"
            />
          </div>
        </section>
      </div>
      <Frequtly />
      <Photo />
    </div>
  );
};

export default Home;
