import React from "react";
import { GoTriangleDown } from "react-icons/go";

const Frequtly = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7]  flex flex-row items-center  justify-around py-10 gap-5 mb-10 mt-10">
        <div className="flex flex-col pl-20  gap-5">
          <h2 className="text-[#5F2466] text-[40px] font-bold	leading-[50px]">
            Frequently Asked Question
          </h2>

          <h1 className="text-[#000000]">
            Here are some of the most commonly asked questions about
            <p className="text-[#5F2466] text-base leading-[18.75px] font-bold ">
              SPELLCPaaS
            </p>
          </h1>
          <h1 className="text-[#000000]">
            Still don’t find what you’re looking for? 
            <p className="text-[#5F2466]  text-base leading-[18.75px] font-bold">
              Chat with our experts!
            </p>
          </h1>
        </div>
        <div className=" flex flex-col text-2xl text-[#000000] gap-8 mr-24  font-medium		">
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between  pb-2">
              Do you offer global SMS coverage ? <GoTriangleDown className="" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between pb-2 ">
              How many characters can you incude in my text message ?
              <GoTriangleDown className="" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between pb-2 ">
              How do you protect my SMS information?
              <GoTriangleDown className="" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between pb-2 ">
              Are there any restrictions on the messages we can send ?
              <GoTriangleDown className="" />
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <p className="border-b-2 w-full border-[#000000] flex justify-between pb-2 ">
              What is a CPaaS plan ? <GoTriangleDown className="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequtly;
