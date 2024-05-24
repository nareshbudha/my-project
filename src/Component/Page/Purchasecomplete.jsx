import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail, MdEditLocation } from "react-icons/md";

const Purchasecomplete = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-10 tabletmd:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto tabletmd:py-24">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className=" text-[#5F2466] flex  mt-2 text-xl tablet:text-3xl  tabletmd:text-5xl font-bold ">
            Thank you for your purchase!
          </h1>
          <span className="text-[#000000] text-sm tablet:text-base font-light ">
            An email confirmation has been sent to you.
          </span>
          <p className="text-[#000000] text-sm tablet:text-base font-light ">
            An digital items in this order are now registered to your account.
            To access your item simply visit email whenever you’re ready
          </p>
          <div className="bg-[#F7F7F7] ">
            <div className="flex p-3 flex-row items-center gap-3 ">
              <ImWhatsapp className="tablet:w-10 tablet:h-10 text-[#5F2466]" />
              <div className="flex flex-col ">
                <span className="text-base tablet:text-xl tabletmd:text-2xl text-[#5F2466] font-medium">
                  
                  WhatsApp Business
                </span>
                <p className="text-sm font-normal ">Plan details</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex-col w-full py-3 gap-5">
          <div className="bg-[#F7F7F7] flex flex-col p-3 rounded-xl ">
            <h1 className="text-[#5F2466] text-sm tablet:text-base font-bold ">
              Need Assistance?
            </h1>
            <p className="text-sm tablet:text-base ">
              For help or product support, please
              <span className="text-[#5F2466] text-xs tablet:text-base  font-bold ">
        
                Contact us
              </span>
              or visit
              <span className="text-[#5F2466] text-xs tablet:text-base font-bold ">

                SPELL INNOVATION.{" "}
              </span>
            </p>
          </div>
          <div className=" flex  gap-3 flex-col mt-3 ">
            <div className="bg-[#F7F7F7] flex flex-col rounded-lg py-6 px-2">
              <h1 className="text-sm tablet:text-base  flex gap-2 text-[#5F2466] font-bold ">
                <LuPhoneCall /> Phone
              </h1>
              <div className="flex flex-col gap-1 tabletmd:flex-row tablet:mx-4 tablet:gap-6">
                <p className="font-light text-sm tablet:text-base">+977 01-5910781</p>
                <p className=" font-light text-sm tablet:text-base">+977 01-5910781</p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] flex rounded-lg flex-col py-6 px-2">
              <h1 className="text-sm tablet:text-base flex gap-2 text-[#5F2466] font-bold">
                <MdEmail className="" />
                Email
              </h1>
              <div className="flex flex-col tablet:mx-4 ">
                <p className="font-medium text-sm tablet:text-base mobile:font-light">
                  info@spellinnovation.com
                </p>
                <p className="font-medium text-[12px] mobile:text-base mobile:font-light">
                  Contact@spellinnovation.com
                </p>
              </div>
            </div>
            <div className="bg-[#F7F7F7] flex rounded-lg flex-col py-6 px-2 ">
              <h1 className="text-base flex text-[#5F2466] font-bold gap-2 ">
                {" "}
                <MdEditLocation /> Location
              </h1>
              <div className="flex flex-col mx-4 ">
                <p className=" font-light text-base">Pipal bot, Mid baneswor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchasecomplete;
