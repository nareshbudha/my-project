import React from "react";
import { GoTriangleDown } from "react-icons/go";

const Frequtly = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7] flex-col flex tablet:flex-row items-center justify-around py-10 gap-5 mb-10 mt-10 ">
        <div className="flex flex-col mobile:px-10 mobile:gap-3 tablet:gap-5">
          <h2 className="text-[#5F2466] mobile:text-2xl mobile:font-medium mobile:mr-10 tablet:text-2xl tablet:font-semibold ">
            Frequently Asked Question
          </h2>

          <h1 className="text-[#000000] text-sm font-medium tablet:text-lg  tablet:font-bold ">
            Here are some of the most commonly asked questions about
            <p className="text-[#5F2466] mobile:text-sm font-bold tablet:text-base  tablet:font-bold ">
              SPELLCPaaS
            </p>
          </h1>
          <h1 className="text-[#000000] text-sm font-medium tablet:text-base tablet:font-bold ">
            Still don’t find what you’re looking for? 
            <p className="text-[#5F2466] text-sm font-bold tablet:text-base  tablet:font-bold ">
              Chat with our experts!
            </p>
          </h1>
        </div>
        <div
          className=" flex flex-col mobile:gap-4 mobile:mx-10">
          <div className="flex flex-row justify-around ">
            <p className=" w-full border-[#000000] flex justify-between border-b-2 mobile:border-b-1 mobile:text-xs mobile:font-light  tablet:text-xl tablet:font-medium tablet:w-80">
              Do you offer global SMS coverage ?
              <GoTriangleDown className="mobile: " />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className=" w-full border-[#000000] flex justify-between border-b-2 mobile:border-b-1  mobile:text-xs mobile:font-light  tablet:text-xl tablet:font-medium tablet:w-80">
              How many characters can you incude in my text message ?
              <GoTriangleDown className="" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className=" w-full border-[#000000] flex justify-between border-b-2 mobile:border-b-1  mobile:text-xs mobile:font-light  tablet:text-xl tablet:font-medium tablet:w-80">
              How do you protect my SMS information?
              <GoTriangleDown className="mt-3" />
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <p className=" w-full border-[#000000] flex justify-betwee border-b-2 mobile:border-b-1  mobile:text-xs mobile:font-light  tablet:text-xl tablet:font-medium tablet:w-80 ">
              Are there any restrictions on the messages we can send ?
              <GoTriangleDown className="mt-3" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className=" w-full border-[#000000] flex justify-between border-b-2 mobile:border-b-1  mobile:text-xs mobile:font-light  tablet:text-xl tablet:font-medium tablet:w-80">
              What is a CPaaS plan ? <GoTriangleDown className="mt-3" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequtly;
