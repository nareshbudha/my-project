import React from "react";
import { GoTriangleDown } from "react-icons/go";

const Frequtly = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7] flex-col flex tablet:flex-row items-center justify-around  gap-5 py-5 my-16 ">
        <div className="flex flex-col mobile:px-10 mobile:gap-3 tablet:gap-3">
          <h2 className="text-[#5F2466] mobile:leading-6 mobile:text-2xl mobile:font-medium mobile:mr-10 tablet:text-2xl tablet:font-semibold tablet:-ml-8 tablet:-mr-40 ">
            Frequently Asked Question
          </h2>

          <h1 className="text-[#000000] text-sm font-medium tablet:text-base  tablet:font-light tablet:-ml-8 tablet:-mr-32 ">
            Here are some of the most commonly asked questions about
            <p className="text-[#5F2466] mobile:text-sm font-bold tablet:text-base tablet:font-semibold ">
              SPELLCPaaS
            </p>
          </h1>
          <h1 className="text-[#000000] text-sm font-medium tablet:text-base tablet:font-light tablet:-mr-16 tablet:-ml-8 ">
            Still don’t find what you’re looking for? 
            <p className="text-[#5F2466] text-sm font-bold tablet:text-base tablet:font-semibold">
              Chat with our experts!
            </p>
          </h1>
        </div>
        <div
          className=" flex flex-col mobile:gap-4 mobile:mx-10 w-full mobile:w-[53%] mobile:mr-28  mobile:text-xs mobile:font-light tablet:justify-center   tablet:w-full tablet:text-base tablet:font-medium tablet:ml-32 tablet:mr-12 desktop:text-2xl desktop:font-medium desktop:mr-12 desktop:ml-12 desktop:w-2/4">
          <div className="flex flex-row justify-around ">
            <p className=" w-full border-[#000000] flex justify-between border-b-2    ">
              Do you offer global SMS coverage ?
              <GoTriangleDown className="mobile: " />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className=" w-full border-[#000000] flex justify-between border-b-2    ">
              How many characters can you incude in my text message ?
              <GoTriangleDown className="" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className=" w-full border-[#000000] flex justify-between border-b-2 mobile:border-b-1    ">
              How do you protect my SMS information?
              <GoTriangleDown className="mt-3 " />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className=" w-full border-[#000000] flex justify-between border-b-2 mobile:border-b-1    ">
              What is a CPaaS plan ? <GoTriangleDown className="mt-3" />
            </p>
          </div>
         
          <div className="flex flex-row justify-around">
            <p className=" w-full border-[#000000] flex justify-between border-b-2 mobile:border-b-1   ">
            What’s included with every plan ?<GoTriangleDown className="mt-3" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequtly;
