import React from "react";
import SliderComp from "./SliderComp";
import pop from "../Image/pop.png";
import poo from "../Image/poo.png";
import ppp from "../Image/ppp.png";

const SpellBulkSMSCart = () => {
  return (
    <div className="flex flex-row pt-28">
      <div className="flex flex-col w-[35%] ml-28 ">
        <h1 className=" text-[#5F2466] text-[48px] font-bold leading-[56.25px]">
          Product information and Review
        </h1>
        <p>
          By placing your order, you agree to Spell Innovation’s{" "}
          <span className="text-[#5F2466] font-bold">Privacy</span> and{" "}
          <span className="text-[#5F2466] font-bold">Policy.</span>
        </p>
        <div className="bg-[#F7F7F7] flex flex-col my-10 rounded-xl w-full ">
          <div className=" flex flex-row">
            <svg
              className="ml-3 mt-6"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="13.6449"
                cy="15.75"
                rx="1.07071"
                ry="1.125"
                fill="#5F2466"
              />
              <ellipse
                cx="17.9276"
                cy="15.75"
                rx="1.07071"
                ry="1.125"
                fill="#5F2466"
              />
              <ellipse
                cx="22.2106"
                cy="15.75"
                rx="1.07071"
                ry="1.125"
                fill="#5F2466"
              />
              <path
                d="M12.5742 4.5C7.86309 4.5 4.00854 8.55 4.00854 13.5V27V32.625C7.97016 29.025 13.0025 27 18.249 27H23.2813C27.9924 27 31.847 22.95 31.847 18V13.5C31.847 8.55 27.9924 4.5 23.2813 4.5H12.5742Z"
                stroke="#5F2466"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h1 className="text-[#5F2466] font-medium text-2xl leading-[38.83px] ml-3 mt-2">
              Bulk SMS
              <p className="text-[#000000] text-[12px] font-normal leading-[15px]">
                Plan details
              </p>
            </h1>
          </div>
          <div className=" flex flex-col">
            <p className="border-b-2 w-[95%] ml-2 mt-3 border-[#868686] "></p>
            <p className="mt-3 ml-3">
              Drag the slider to choose the credit sizes
            </p>
            <SliderComp />
            <img className="mt-5" src={pop} alt="" />
            <p className="text-xs	leading-[15px] font-normal mt-8">
              Purchase <span className="text-[#F05327]">1000</span> credits for
              <span className="text-[#F05327]"> Rs.1000 </span> to send
              approximately <span className="text-[#F05327]"> 1000 </span>{" "}
              messages. Each message is estimated to cost around
              <span className="text-[#F05327]"> 22.73c </span>, including the
              network deposit.
            </p>

            <p className="text-[#F05327] text-[16px] flex	leading-[25.9px] mt-6 justify-end font-normal ">
              Remove
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] my-2 flex flex-col py-3">
          <div className="flex">
            <svg
              className="ml-3 mt-3"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_423_2345)">
                <path
                  d="M8.70694 33.4311C11.4884 35.1049 14.6687 35.9871 17.9363 35.9871C27.838 35.9871 36 27.9072 36 17.9934C36 8.09116 27.8495 0 17.9363 0C8.05325 0 0.012909 8.07193 0.012909 17.9934C0.012909 21.3047 0.895386 24.5091 2.56888 27.2928L0 36L8.70694 33.4311ZM2.12173 17.9934C2.12173 9.23456 9.21616 2.10855 17.9363 2.10855C26.7339 2.10855 33.8914 9.23456 33.8914 17.9934C33.8914 26.7525 26.7339 33.8783 17.9363 33.8783C14.909 33.8783 11.9671 33.0208 9.42957 31.3981L9.02417 31.1391L3.11874 32.8815L4.8609 26.9758L4.6019 26.5707C2.97922 24.0326 2.12173 21.0668 2.12173 17.9934Z"
                  fill="#5F2466"
                />
                <path
                  d="M8.76304 14.678C9.1113 16.507 10.1451 20.0248 13.1551 23.0348C16.1651 26.0447 19.6829 27.0788 21.5121 27.4271C23.6067 27.8259 26.6804 27.886 28.1825 26.3839L29.0199 25.5465C29.4426 25.1238 29.6755 24.5616 29.6755 23.9636C29.6755 23.3657 29.4426 22.8038 29.0199 22.3811L25.671 19.0322C25.248 18.6092 24.6861 18.3765 24.0881 18.3765C23.4902 18.3765 22.9283 18.6092 22.5053 19.0322L21.6681 19.8693C21.1567 20.3807 20.1913 20.3829 19.676 19.8756L16.3356 16.3952C16.3307 16.3899 16.3258 16.3847 16.3205 16.3798C15.8083 15.8675 15.8083 15.034 16.3205 14.5217L17.1577 13.6846C18.0328 12.8095 18.0328 11.3936 17.1577 10.5189L13.8088 7.16994C12.9362 6.29736 11.5162 6.29736 10.6433 7.16994L9.80619 8.00738V8.0071C8.60731 9.20626 8.20768 11.7622 8.76304 14.678ZM11.2973 9.4985C12.1762 8.63964 12.1292 8.62316 12.2262 8.62316C12.2594 8.62316 12.2927 8.6358 12.3179 8.66106C15.8467 12.2088 15.705 12.0004 15.705 12.102C15.705 12.1374 15.6921 12.1684 15.6671 12.1937L14.8297 13.0309C13.4962 14.3643 13.491 16.5229 14.8212 17.8624L18.1635 21.3451C18.1687 21.35 18.1737 21.3552 18.1789 21.3604C19.5121 22.6936 21.8217 22.698 23.1592 21.3604L23.9964 20.5233C24.0469 20.4727 24.1293 20.4727 24.1799 20.5233C27.7087 24.0708 27.567 23.8623 27.567 23.9639C27.567 23.9996 27.5541 24.0304 27.5291 24.0557L26.6916 24.8928C26.1179 25.4666 24.2903 25.8099 21.9065 25.3559C20.3157 25.0527 17.2568 24.1545 14.6462 21.5439C12.0356 18.9333 11.1375 15.8744 10.8345 14.2836C10.3802 11.8998 10.7235 10.072 11.2973 9.4985Z"
                  fill="#5F2466"
                />
              </g>
              <defs>
                <clipPath id="clip0_423_2345">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h1 className=" text-[#5F2466] ml-3 text-[24px] font-medium	 leading-[38.83px]">
              WhatsApp Business
            </h1>
          </div>
          <p className="ml-14 pb-1 ">Plan details</p>
        </div>
      </div>
      <div className="flexflex-col gap-10 w-[55%] justify-center items-center ml-28">
        <h3 className="text-[#5F2466] font-medium text-[24px] leading-[38.83px]">
          Payment Details
        </h3>
        <p className="text-[#000000] font-light text-[16px] leading-[25.89px]">
          Complete your purchase by providing your payment details.
        </p>
        <div className="relative gap-6 mt-9">
          <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
            Email Address
          </p>
          <input
            className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
            type="text"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col mt-10">
          <h1 className="text-[#5F2466] font-bold text-[16px] leading-[18.75px]">
            Select Payment Method
          </h1>
          <img className="w-[505px] h-[263px] mt-6" src={poo} alt="" />
        </div>
        <h2 className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] my-6">
          Card Details
        </h2>

        <div className="text-[#666666] font-light text-[16px] leading-[28px]">
          <input
            className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
            type="text"
            placeholder="Details of your card"
            required
          />
          <input
            className=" border-[#D0D7E2] border-[1px] mt-5 flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
            type="text"
            placeholder="8888 2255 5553 4454 1112"
            required
          />
        </div>
        <img className="py-6" src={ppp} alt="" />
        <button className="bg-[#5F2466] rounded-[10px] w-[654px] h-[56px] py-[10px] px-[25px]">
          <p className="text-[#FFFFFF] font-bold text-[16px] leading-[18.75px]">
            Pay Rs.1000
          </p>
        </button>
      </div>
    </div>
  );
};

export default SpellBulkSMSCart;
