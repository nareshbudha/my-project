import React from "react";
import pss from "../Image/pss.png";

const Pricing = () => {
  return (
    <div>
      <div className="flex flex-row justify-between pt-28">
        <div className="flex flex-col  ml-24 gap-8 mt-20">
          <h3 className="text-[#5F2466] text-[40px] leading-[50px] font-bold	">
            Plans & Pricing
          </h3>
          <p className="text-[#000000] text-[16px] leading-[25.89px] w-[82%] font-light items-center justify-center	">
            Our video call feature allows you to connect with customers on a
            more personal level, fostering stronger relationships and increasing
            customer satisfaction.
          </p>
        </div>
        <img className="w-2/4 px-12 py-12 mr-24" src={pss} alt="Logo" />
      </div>
      <div className="flex flex-row justify-center items-center gap-10 ">
        <div className="flex flex-col items-center">
          <div className="w-[343px] h-[500px] bg-[#5F2466]">
            <h1 className="bg-[#1E56A8] rounded-md	flex text-[40px] font-bold leading-[50px] px-3 py-3 mx-2 mt-2 text-[#FFFFFF] items-center justify-center">
              Essential
            </h1>
            <p className="text-[#1E56A8] font-poppins rounded-md	flex flex-col text-[48px] font-normal leading-[50px] mx-2 mt-10  items-center justify-center">
              Rs.17.95
            </p>
            <p className="text-[#1E56A8] font-poppins rounded-md	flex flex-col text-[20px] mx-2 mt-2  items-center justify-center">
              Per Month
            </p>
          </div>
          <div
            class="w-[343px] h-[300px]
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent"
          ></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[343px] h-[500px] bg-[#5F2466]"></div>
          <div
            class="w-[343px] h-[300px]
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent"
          ></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[343px] h-[500px] bg-[#5F2466]"></div>
          <div
            class="w-[343px] h-[300px]
          border-l-[170px] border-l-transparent
          border-t-[110px] border-t-[#5F2466]
          border-r-[170px] border-r-transparent"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
