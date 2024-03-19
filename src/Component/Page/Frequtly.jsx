import React from "react";
import { GoTriangleDown } from "react-icons/go";

const Frequtly = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7] flex-col   flex md:flex-row items-center  justify-around py-10 gap-5 mb-10 mt-10">
        <div className="flex flex-col pl-20  gap-5">
          <h2 className="text-[#5F2466] text-2xl font-normal sm:text-3xl sm:font-medium md:text-4xl md:font-semibold xl:text-5xl xl:font-bold	">
            Frequently Asked Question
          </h2>

          <h1 className="text-[#000000] text-sm font-medium md:text-base  md:font-bold ">
            Here are some of the most commonly asked questions about
            <p className="text-[#5F2466] text-sm font-bold md:text-base  md:font-bold ">
              SPELLCPaaS
            </p>
          </h1>
          <h1 className="text-[#000000] text-sm font-medium md:text-base  md:font-bold ">
            Still don’t find what you’re looking for? 
            <p className="text-[#5F2466] text-sm font-bold md:text-base  md:font-bold ">
              Chat with our experts!
            </p>
          </h1>
        </div>
        <div
          className=" flex flex-col  gap-8 mr-24 ml-20
          		"
        >
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between   text-base font-lght sm:text-lg sm:font-normal md:text-xl md:font-medium xl:text-2xl">
              Do you offer global SMS coverage ?
              <GoTriangleDown className=" mt-3" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between   text-base font-lght sm:text-lg sm:font-normal md:text-xl md:font-medium xl:text-2xl ">
              How many characters can you incude in my text message ?
              <GoTriangleDown className="mt-3" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between   text-base font-lght sm:text-lg sm:font-normal md:text-xl md:font-medium xl:text-2xl">
              How do you protect my SMS information?
              <GoTriangleDown className="mt-3" />
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <p className="border-b-2 w-full border-[#000000] flex justify-between   text-base font-lght sm:text-lg sm:font-normal md:text-xl md:font-medium xl:text-2xl ">
              Are there any restrictions on the messages we can send ?
              <GoTriangleDown className="mt-3" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between   text-base font-lght sm:text-lg sm:font-normal md:text-xl md:font-medium xl:text-2xl ">
              What is a CPaaS plan ? <GoTriangleDown className="mt-3" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequtly;
