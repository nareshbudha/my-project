import React from "react";
import pss from "../Image/pss.png";

import Frequtly from "./Frequtly";
import Photo from "./Photo";

const Pricing = () => {
  return (
    <div>
      <div className=" tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto ">
        <div className="flex flex-col lg:flex-row w-full mobile:py-5 mobile:gap-5 tablet:py-10 tablet:gap-16 laptop:gap-32 desktop:gap-48">
          <div className="flex flex-col mobile:gap-3 tablet:gap-5 laptop:gap-6 desktop:gap-5 justify-center items-start">
            <h2 className="text-[#5F2466] text-xl font-semibold tablet:text-2xl laptop:text-4xl laptop:font-medium">
              Plans & Pricing
            </h2>
            <p className="text-[#000000] text-xs first-letter:font-light tablet:text-base">
              Our video call feature allows you to connect with customers on a
              more personal level, fostering stronger relationships and
              increasing customer satisfaction.
            </p>
          </div>
          <div>
            <img
              className="hidden tablet:block tablet:w-72 tablet:h-72 laptop:w-80  "
              src={pss}
              alt="Logo"
            />
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row justify-center items-center gap-4  ">
          <div className="flex flex-col items-center">
            <div className="flex-1 w-[343px] bg-[#5F2466] ">
              <div className="flex flex-col gap-1 tablet:gap-2">
              <h1 className="bg-[#1E56A8] rounded-md	flex text-base tablet:text-2xl tabletmd:text-4xl font-bold py-1 tablet:py-3 tablet:mx-10 tablet:my-3  text-[#FFFFFF] items-center justify-center">
                Essential
              </h1>
              <p className="text-[#1E56A8]  rounded-md	flex font-normal   items-center justify-center text-sm tablet:text-2xl tabletmd:text-4xl">
                Rs.17.95
              </p>
              <p className="text-[#1E56A8] rounded-md	flex  items-center justify-center text-sm tablet:text-2xl tabletmd:text-4xl">
                Per Month
              </p>
              </div>
           
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center gap-1">
                  <p className=" text-[#FFFFFF] flex justify-center items-center text-xs gap-2">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Sample text here
                  </p>
                  <p className="border-b-[1px]  border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7135 4.22818L15.636 0.153931L10.2483 5.54164L4.86062 0.153931L0.786377 4.22818L6.17408 9.61588L0.786377 15.0036L4.86062 19.081L10.2483 13.6933L15.636 19.081L19.7135 15.0036L14.3258 9.61588L19.7135 4.22818Z"
                        fill="#FF3B3B"
                      />
                    </svg>
                    Other text Title
                  </p>
                  <p className="border-b-[1px] border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7135 4.22818L15.636 0.153931L10.2483 5.54164L4.86062 0.153931L0.786377 4.22818L6.17408 9.61588L0.786377 15.0036L4.86062 19.081L10.2483 13.6933L15.636 19.081L19.7135 15.0036L14.3258 9.61588L19.7135 4.22818Z"
                        fill="#FF3B3B"
                      />
                    </svg>
                    Text Space Goes Here
                  </p>
                  <p className="border-b-[1px]  border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7135 4.22818L15.636 0.153931L10.2483 5.54164L4.86062 0.153931L0.786377 4.22818L6.17408 9.61588L0.786377 15.0036L4.86062 19.081L10.2483 13.6933L15.636 19.081L19.7135 15.0036L14.3258 9.61588L19.7135 4.22818Z"
                        fill="#FF3B3B"
                      />
                    </svg>
                    Description Space
                  </p>
                  <p className="border-b-[1px] border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7135 4.22818L15.636 0.153931L10.2483 5.54164L4.86062 0.153931L0.786377 4.22818L6.17408 9.61588L0.786377 15.0036L4.86062 19.081L10.2483 13.6933L15.636 19.081L19.7135 15.0036L14.3258 9.61588L19.7135 4.22818Z"
                        fill="#FF3B3B"
                      />
                    </svg>
                    Sample Text Here
                  </p>
                  <button className="bg-[#1E56A8] text-[#FFFFFF] flex justify-center items-center mb-2  rounded-lg font-bold text-sm ">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
            <div
              className="hidden tablet:block tablet:w-[343px] tablet:h-[10px]
            tabletmd:flex flex-col justify-center items-center
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent "
            ></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex-1 w-[343px] bg-[#5F2466] ">
              <div className="flex flex-col gap-1 tablet:gap-2">
              <h1 className="bg-[#287870] rounded-md	flex text-base tablet:text-2xl tabletmd:text-4xl font-bold py-1 tablet:py-3 tablet:mx-10 tablet:my-3  text-[#FFFFFF] items-center justify-center">
              Professional
              </h1>
              <p className="text-[#287870]  rounded-md	flex font-normal   items-center justify-center text-sm tablet:text-2xl tabletmd:text-4xl">
                Rs.21.95
              </p>
              <p className="text-[#287870] rounded-md	flex  items-center justify-center text-sm tablet:text-2xl tabletmd:text-4xl">
                Per Month
              </p>
              </div>
           
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center gap-1">
                  <p className=" text-[#FFFFFF] flex justify-center items-center text-xs gap-2">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Sample text here
                  </p>
                  <p className="border-b-[1px]  border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                 
                  <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Other text Title
                  </p>
                  <p className="border-b-[1px] border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                  <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Text Space Goes Here
                  </p>
                  <p className="border-b-[1px]  border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7135 4.22818L15.636 0.153931L10.2483 5.54164L4.86062 0.153931L0.786377 4.22818L6.17408 9.61588L0.786377 15.0036L4.86062 19.081L10.2483 13.6933L15.636 19.081L19.7135 15.0036L14.3258 9.61588L19.7135 4.22818Z"
                        fill="#FF3B3B"
                      />
                    </svg>
                    Description Space
                  </p>
                  <p className="border-b-[1px] border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7135 4.22818L15.636 0.153931L10.2483 5.54164L4.86062 0.153931L0.786377 4.22818L6.17408 9.61588L0.786377 15.0036L4.86062 19.081L10.2483 13.6933L15.636 19.081L19.7135 15.0036L14.3258 9.61588L19.7135 4.22818Z"
                        fill="#FF3B3B"
                      />
                    </svg>
                    Sample Text Here
                  </p>
                  <button className="bg-[#287870] text-[#FFFFFF] flex justify-center items-center mb-2  rounded-lg font-bold text-sm ">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
            <div
              className="hidden tablet:block tablet:w-[343px] tablet:h-[10px]
            tabletmd:flex flex-col justify-center items-center
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent "
            ></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex-1 w-[343px] bg-[#5F2466] ">
              <div className="flex flex-col gap-1 tablet:gap-2">
              <h1 className="bg-[#FC6517] rounded-md	flex text-base tablet:text-2xl tabletmd:text-4xl font-bold py-1 tablet:py-3 tablet:mx-10 tablet:my-3  text-[#FFFFFF] items-center justify-center">
              Enterprise
              </h1>
              <p className="text-[#FC6517]  rounded-md	flex font-normal   items-center justify-center text-sm tablet:text-2xl tabletmd:text-4xl">
                Rs.31.95
              </p>
              <p className="text-[#FC6517] rounded-md	flex  items-center justify-center text-sm tablet:text-2xl tabletmd:text-4xl">
                Per Month
              </p>
              </div>
           
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center gap-1">
                  <p className=" text-[#FFFFFF] flex justify-center items-center text-xs gap-2">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Sample text here
                  </p>
                  <p className="border-b-[1px]  border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                  <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Other text Title
                  </p>
                  <p className="border-b-[1px] border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                  <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Text Space Goes Here
                  </p>
                  <p className="border-b-[1px]  border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                  <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Description Space
                  </p>
                  <p className="border-b-[1px] border-[#FFFFFF] "></p>
                  <p className=" flex justify-center items-center  text-[#FFFFFF] gap-2 text-xs">
                  <svg
                      className="w-3 h-3"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Sample Text Here
                  </p>
                  <button className="bg-[#FC6517] text-[#FFFFFF] flex justify-center items-center mb-2  rounded-lg font-bold text-sm ">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
            <div
              className="hidden tablet:block tablet:w-[343px] tablet:h-[10px]
            tabletmd:flex flex-col justify-center items-center
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent "
            ></div>
          </div>

          {/* <div className="flex flex-col items-center">
            <div className="flex-1 bg-[#5F2466] w-[343px]">
              <h1 className="bg-[#287870] rounded-md	flex text-[40px] font-bold leading-[50px] px-3 py-3 mx-2 mt-2 text-[#FFFFFF] items-center justify-center">
                Professional
              </h1>
              <p className="text-[#287870] font-poppins rounded-md	flex flex-col text-[48px] font-normal leading-[50px] mx-2 mt-4  items-center justify-center">
                Rs.21.95
              </p>
              <p className="text-[#287870] font-poppins rounded-md	flex flex-col text-[20px] mx-2 mt-2  items-center justify-center">
                Per Month
              </p>
              <div className="flex flex-col justify-center items-center gap-4 mt-6">
                <div className="flex flex-col justify-center gap-2  ">
                  <p className=" flex justify-center items-center  text-[#FFFFFF] mr-16 gap-10">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Sample text here
                  </p>
                  <p className="border-b-2 w-[226.24px] h-[0.73px]  border-[#FFFFFF] "></p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2  ">
                  <p className=" flex justify-center items-center  text-[#FFFFFF]  gap-10 mr-20  ">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Other text Title
                  </p>
                  <p className="border-b-2 w-[232px] h-[0.73px] mr-2 border-[#FFFFFF] "></p>
                </div>
                <div className="flex flex-col justify-center gap-2  ">
                  <p className=" flex justify-center items-center  text-[#FFFFFF] mr-10 gap-7  ">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Text Space Goes Here
                  </p>
                  <p className="border-b-2 w-[230px] h-[0.73px]  border-[#FFFFFF] "></p>
                </div>
                <div className="flex flex-col justify-center gap-2 ">
                  <p className=" flex justify-center items-center  text-[#FFFFFF] mr-16 gap-10  ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7135 4.22818L15.636 0.153931L10.2483 5.54164L4.86062 0.153931L0.786377 4.22818L6.17408 9.61588L0.786377 15.0036L4.86062 19.081L10.2483 13.6933L15.636 19.081L19.7135 15.0036L14.3258 9.61588L19.7135 4.22818Z"
                        fill="#FF3B3B"
                      />
                    </svg>
                    Description Space
                  </p>
                  <p className="border-b-2 w-[235px] h-[0.73px]  border-[#FFFFFF] "></p>
                </div>

                <div className="flex flex-col justify-around  ">
                  <p className="flex justify-center items-center  text-[#FFFFFF] py-2 mr-16 gap-10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7135 4.22818L15.636 0.153931L10.2483 5.54164L4.86062 0.153931L0.786377 4.22818L6.17408 9.61588L0.786377 15.0036L4.86062 19.081L10.2483 13.6933L15.636 19.081L19.7135 15.0036L14.3258 9.61588L19.7135 4.22818Z"
                        fill="#FF3B3B"
                      />
                    </svg>
                    Sample Text Here
                  </p>
                  <div className="flex justify-center items-center py-3">
                    {" "}
                    <button className="bg-[#287870] text-[#FFFFFF] w-[138.07px] h-[36.6px] justify-center items-center  rounded-lg text-[16px] leading-[18.75px]  font-bold ">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="hidden tablet:block tablet:w-[343px] tablet:h-[10px]
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent"
            ></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex-1 bg-[#5F2466] w-[343px]">
              <h1 className="bg-[#FC6517] rounded-md	flex text-[40px] font-bold leading-[50px] px-3 py-3 mx-2 mt-2 text-[#FFFFFF] items-center justify-center">
                Essential
              </h1>
              <p className="text-[#FC6517] font-poppins rounded-md	flex flex-col text-[48px] font-normal leading-[50px] mx-2 mt-4  items-center justify-center">
                Rs.31.95
              </p>
              <p className="text-[#FC6517] font-poppins rounded-md	flex flex-col text-[20px] mx-2 mt-2  items-center justify-center">
                Per Month
              </p>
              <div className="flex flex-col justify-center items-center gap-4 mt-6">
                <div className="flex flex-col justify-center gap-2  ">
                  <p className=" flex justify-center items-center  text-[#FFFFFF] mr-16 gap-10">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Sample text here
                  </p>
                  <p className="border-b-2 w-[226.24px] h-[0.73px]  border-[#FFFFFF] "></p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2  ">
                  <p className=" flex justify-center items-center  text-[#FFFFFF]  gap-10 mr-20  ">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Other text Title
                  </p>
                  <p className="border-b-2 w-[232px] h-[0.73px] mr-2 border-[#FFFFFF] "></p>
                </div>
                <div className="flex flex-col justify-center gap-2  ">
                  <p className=" flex justify-center items-center  text-[#FFFFFF] mr-10 gap-7  ">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Text Space Goes Here
                  </p>
                  <p className="border-b-2 w-[230px] h-[0.73px]  border-[#FFFFFF] "></p>
                </div>
                <div className="flex flex-col justify-center gap-2 ">
                  <p className=" flex justify-center items-center  text-[#FFFFFF] mr-16 gap-10  ">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Description Space
                  </p>
                  <p className="border-b-2 w-[235px] h-[0.73px]  border-[#FFFFFF] "></p>
                </div>

                <div className="flex flex-col justify-around  ">
                  <p className="flex justify-center items-center  text-[#FFFFFF] py-2 mr-16 gap-10">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0772 21.0692L0.863892 11.8591L4.868 7.855L10.0772 13.0674L22.5805 0.564087L26.5846 4.565L10.0772 21.0692Z"
                        fill="#378D00"
                      />
                    </svg>
                    Sample Text Here
                  </p>
                  <div className="flex justify-center items-center py-3">
                    {" "}
                    <button className="bg-[#FC6517] text-[#FFFFFF] w-[138.07px] h-[36.6px] justify-center items-center  rounded-lg text-[16px] leading-[18.75px]  font-bold ">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="hidden tablet:block tablet:w-[343px] tablet:h-[10px]
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent"
            ></div>
          </div> */}
        </div>
      </div>

      <Frequtly />
      <Photo />
    </div>
  );
};

export default Pricing;
