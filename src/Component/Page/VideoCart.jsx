import React from "react"
import esewa from "../Image/esewa.png"
import khalti from "../Image/khalti.png"
import gbl from "../Image/gbl.png"
import visa from "../Image/visa.png"
import { MdKeyboardVoice  } from "react-icons/md";
import SliderComp from "./SliderComp";
import { ImWhatsapp } from "react-icons/im";

const  VideoCart = () => {
  return (
    <div className="flex flex-col gap-10 tabletmd:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto my-3 tabletmd:py-24">
      <div className="flex-1 flex-col gap-10">
        <h1 className=" text-[#5F2466] text-2xl tablet:text-3xl laptop:text-5xl font-bold">
          Product information and Review
        </h1>
        <p className="text-sm tabletmd:text-base">
          By placing your order, you agree to Spell Innovation’s{" "}
          <span className="text-[#5F2466] text-sm tabletmd:text-base font-bold">Privacy</span> and{" "}
          <span className="text-[#5F2466] text-sm tabletmd:text-base font-bold">Policy.</span>
        </p>
        <div className="bg-[#F7F7F7]  rounded-xl my-10">
        <div className="flex p-3 flex-row items-center gap-3 ">
              <ImWhatsapp className="w-10 h-10 text-[#5F2466]  text-2xl gap-3"/>
            <div className="flex flex-col ">
            <span className="text-2xl text-[#5F2466] font-medium">  WhatsApp Business</span>
            <p className="text-sm font-normal ">Plan details</p>
            </div>
          </div>
          <div className=" flex flex-col  gap-3">
            <p className="border-b-2 border-[#868686] "></p>
            <p className="mx-5">
            Drag the slider to choose the talk time
            <SliderComp/>
    
            </p>
          </div>
          <div className="bg-[#FFFFFF] grid grid-cols-3  mx-5 py-3 rounded border-1 border-[#000000] ">
            <div className="flex flex-col justify-center gap-2   items-center border-r-[1px] border-[#9F9F9F] border-dashed">
              <h1 className="text-sm selection:tablet:text-base font-normal text-[#000000]">
              Hours
              </h1>
              <p className="text-base tablet:text-2xl font-medium text-[#000000]">5</p>
            </div>
            <div className="flex  flex-col  justify-center gap-2   items-center  ">
              <h1 className="text-sm selection:tablet:text-base font-normal text-[#000000]">
              Cost per Hours
              </h1>
              <p className="text-base tablet:text-2xl font-medium text-[#000000]">Rs.20</p>
            </div>
            <div className="flex flex-col justify-center gap-2   items-center border-l-[1px] border-[#9F9F9F] border-dashed">
              <h1 className="text-sm selection:tablet:text-base font-normal text-[#000000]">
                Total Cost
              </h1>
              <p className="text-base tablet:text-2xl font-medium text-[#000000]">Rs.100</p>
            </div>
          </div>
          <div className="mx-12 my-3">
            <p className="text-xs	leading-[15px] font-normal ">
              Purchase <span className="text-[#F05327]">5 hours</span> talk-time
              for
              <span className="text-[#F05327]"> Rs.100</span> to approximately{" "}
              <span className="text-[#F05327]">5 hours</span>. Each message is
              estimated to cost around{" "}
              <span className="text-[#F05327]">Rs.20</span>, including the
              network deposit.
            </p>

            <p className="text-[#F05327] text-base flex justify-end font-normal ">
              Remove
            </p>
          </div>
        </div>
       
      </div>
      <div className="flex-1 flex-col justify-center items-center">
        <h3 className="text-[#5F2466] font-medium text-[15px] tablet:text-xl tabletmd:text-2xl">
          Payment Details
        </h3>
        <p className="text-[#000000] font-light text-xs tablet:text-sm mt-3">
          Complete your purchase by providing your payment details.
        </p>
        <div className="relative  flex flex-col my-3">
          <p className="text-[#5F2466] font-bold text-sm tablet:text-base">Email Address</p>
          <input
            className=" border-[#D0D7E2] font-light border-[1px] flex rounded-lg px-2 py-1 tablet:px-3 tablet:py-2"
            type="text"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#5F2466] font-bold text-sm tablet:text-base">
            Select Payment Method
          </h1>
          <div className="grid grid-cols-2 gap-3 mt-3 ">
            <div className=" gap-2 pt-4 pb-2 px-3 justify-start border-1 rounded-md border-[#646464]">
              <img className="h-7 object-contain" src={esewa} alt="" />
              <p className="mt-3 text-base font-normal">eSewa Mobile Wallet</p>
            </div>
            <div className=" gap-2 pt-4 pb-2 px-3 border-1 rounded-md border-[#646464]">
              <img  className="h-7 object-contain"  src={khalti} alt="" />
              <p className="mt-3 text-base font-normal">khalti Mobile Wallet</p>
            </div>
            <div className=" gap-2 pt-4 pb-2 px-3 border-1 rounded-md border-[#646464]">
              <img  className="h-7 object-contain"  src={visa} alt="" />
              <p className="mt-3 text-base font-normal">Credit/ Debit Card</p>
            </div>
            <div className="  gap-2 pt-4 pb-2 px-3 border-1 rounded-md border-[#646464]">
              <img  className="h-7 object-contain"  src={gbl} alt="" />
              <p className="mt-3 text-base font-normal">Mobile Banking</p>
            </div>
            
          </div>
        </div>
        <h2 className="text-[#5F2466] font-bold text-base mt-3">Card Details</h2>

        <div className="text-[#666666] flex flex-col font-light text-base my-3 gap-3">
          <input
            className=" border-[#D0D7E2] border-[1px] flex rounded-lg px-2 py-1 tablet:px-3 tablet:py-2"
            type="text"
            placeholder="Details of your card"
            required
          />
          <input
            className=" border-[#D0D7E2] border-[1px]  flex rounded-[8px] px-2 tablet:px-3 py-1 tablet:py-2"
            type="text"
            placeholder="8888 2255 5553 4454 1112"
            required
          />
        </div>
        <div className="flex flex-col gap-3 my-2">
          <p className="text-[#000000] text-sm font-light">Payment are securee and encrypted</p>
          <div className="flex justify-between">
            <h1 className="text-[#000000] text-sm font-light">Sub Total</h1>
            <p className="text-[#000000] text-sm font-bold">Rs. 1000</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[#000000] text-sm font-light">Discount</h1>
            <p className="text-[#000000] text-sm font-bold">Rs. 000</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[#000000] text-sm font-light">Total</h1>
            <p className="text-[#000000] text-sm font-bold">Rs. 1000</p>
          </div>

        </div>
        
        
        <div className="flex flex-col my-2">
          <button className="bg-[#5F2466] text-[#FFFFFF] font-bold text-base rounded-lg px-2 py-1 tablet:px-3 tablet:py-2">
            Pay Rs.1000
          </button>
        </div>
      </div>
    </div>
  );
};

export default  VideoCart;
