import React from "react";
import sgup from "../Image/sgup.png";

const SignUp = () => {
  return (
    <div>
      <div className="flex flex-row justify-stretch   ">
        <img className="w-[714px] h-[920px] pt-28 ml-20" src={sgup} alt="" />

        <div className="mt-32 ml-16">
          <div className="flexflex-col ">
            <p className="text-[#5F2466] font-bold text-[40px] leading-[50px]">
              Register Account
            </p>
            <span className="text-[#000000] font-light text-[16px] leading-[28px] mt-8">
              Get your free Spell CPaaS account now.
            </span>
          </div>

          <div className="text-[#000000] font-Poppins font-base  w-[35%] flex flex-col gap-5 mt-10">
            <div className="relative gap-3 ">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Email
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Login Id{" "}
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="text"
                placeholder="Enter Login Id "
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Name{" "}
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="text"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Password
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="password"
                placeholder="Enter password "
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Confirm Password
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="password"
                placeholder="Re Enter password"
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Phone Number
              </p>

              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="text"
                placeholder="Enter phone number here"
                required
              />
            </div>

            <button className="bg-[#5F2466]  text-[#FFFFFF]   w-[654px] h-[56px] rounded-xl   mt-1 mr-[800px]  py-[15px] px-[25px] ">
              Register
            </button>
          </div>
          <p className="flex mt-3 ml-56">
            Already have an account ?{" "}
            <a href="login" className="text-[#5F2466] font-Poppins font-bold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
