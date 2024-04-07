import React from "react";
import { GoTriangleDown } from "react-icons/go";

const Frequtly = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7] mobile:flex-col tablet:flex-row mobile:px-8 mobile:gap-12   py-20 tablet:px-36 mx-auto flex w-full justify-between ">
        <div className="flex flex-col mobile:gap-3 ">
          <h2 className="text-[#5F2466] mobile:text-xl mobile:font-bold">
            Frequently Asked Question
          </h2>

          <h1 className="text-[#000000] mobile:text-base mobile:font-light mobile:leading-4">
            Here are some of the most commonly asked questions about
            <p className="text-[#5F2466] mobile:text-base mobile:font-bold">
              SPELLCPaaS
            </p>
          </h1>
          <h1 className="text-[#000000] mobile:text-base mobile:font-light">
            Still don’t find what you’re looking for?
            <p className="text-[#5F2466] mobile:text-base mobile:font-bold">
              Chat with our experts!
            </p>
          </h1>
        </div>
        <div
          className=" flex flex-col mobile:gap-4  w-full mobile:w-full mobile:text-xs mobile:font-light tablet:justify-center tablet:w-full tablet:text-base tablet:font-medium  desktop:text-2xl desktop:font-medium ">
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
