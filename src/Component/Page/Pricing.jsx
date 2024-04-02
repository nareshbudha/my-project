import React from "react";
import pss from "../Image/pss.png";

import Frequtly from "./Frequtly";
import Photo from "./Photo";

const Pricing = () => {
  return (
    <div className="">
      <div className="flex  mobile:flex-col tablet:flex-row tablet:justify-between ">
        <div className="flex flex-col mobile:py-2 tablet:py-3 tablet:gap-3 desktop:ml-20 desktop:mt-28 ">
          <h3 className="text-[#5F2466] mobile:leading-6 mobile:text-xl mobile:font-semibold mobile:mx-7 tablet:text-3xl tablet:font-semibold tablet:pl-4 tablet:mr-36 laptop:text-4xl laptop:font-semibold  laptop:ml-5 laptop:-mr-6 desktop:text-5xl desktop:font-bold desktop:ml-8 desktop:mr-32	">
            Plans & Pricing
          </h3>
          <p className="text-[#000000] mobile:text-xs mobile:mx-8 tablet:text-lg tablet:pl-2 tablet:font-medium laptop:text-base laptop:font-light laptop:-mr-20 laptop:ml-8 desktop:mr-8 desktop:ml-12">
            Our video call feature allows you to connect with customers on a
            more personal level, fostering stronger relationships and increasing
            customer satisfaction.
          </p>
        </div>
        <img className="mobile:my-3 mobile:mx-3 mobile:w-40 mobile:h-40 tablet:w-72 tablet:h-56 tablet:ml-12 laptop:w-80 laptop:h-80 laptop:ml-40 laptop:pb-16 desktop:w-2/4 desktop:h-96" src={pss} alt="Logo" />
      </div>
      <div className="flex mobile:flex-col laptop:flex-row justify-center items-center mobile:gap-2 tablet:gap-8 ">
        <div className="flex flex-col items-center">
          <div className="w-[343px] h-[500px] bg-[#5F2466]">
            <h1 className="bg-[#1E56A8] rounded-md	flex text-[40px] font-bold leading-[50px] px-3 py-3 mx-2 mt-2 text-[#FFFFFF] items-center justify-center">
              Essential
            </h1>
            <p className="text-[#1E56A8] font-poppins rounded-md	flex flex-col text-[48px] font-normal leading-[50px] mx-2 mt-4  items-center justify-center">
              Rs.17.95
            </p>
            <p className="text-[#1E56A8] font-poppins rounded-md	flex flex-col text-[20px] mx-2 mt-2  items-center justify-center">
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
                  Other text Title
                </p>
                <p className="border-b-2 w-[232px] h-[0.73px] mr-2 border-[#FFFFFF] "></p>
              </div>
              <div className="flex flex-col justify-center gap-2  ">
                <p className=" flex justify-center items-center  text-[#FFFFFF] mr-10 gap-7  ">
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
              </div>
              <button className="bg-[#1E56A8] text-[#FFFFFF] w-[138.07px] h-[36.6px] justify-center items-center  rounded-lg text-[16px] leading-[18.75px]  font-bold ">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div
            className="w-[343px] h-[300px]
            flex flex-col justify-center items-center
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent "
          ></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[343px] h-[500px] bg-[#5F2466]">
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
              </div>
              <button className="bg-[#287870] text-[#FFFFFF] w-[138.07px] h-[36.6px] justify-center items-center  rounded-lg text-[16px] leading-[18.75px]  font-bold ">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div
            class="w-[343px] h-[300px]
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent"
          ></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[343px] h-[500px] bg-[#5F2466]">
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
              </div>
              <button className="bg-[#FC6517] text-[#FFFFFF] w-[138.07px] h-[36.6px] justify-center items-center  rounded-lg text-[16px] leading-[18.75px]  font-bold ">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div
            class="w-[343px] h-[300px]
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent"
          ></div>
        </div>
      </div>
      <Frequtly />
      <Photo />
    </div>
  );
};

export default Pricing;
