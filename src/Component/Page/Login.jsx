import React from "react";
import lgi from "../Image/lgi.png";
const Login = () => {
  return (
    <div>
      <div className="flex flex-row justify-stretch   ">
        <img className="w-[510px] h-[511px] pt-28 ml-20" src={lgi} alt="" />

        <div className="mt-32 ml-16">
          <div className="flexflex-col ">
            <p className="text-[#5F2466] font-bold text-[40px] leading-[50px]">
              Welcome Back !{" "}
            </p>
            <span className="text-[#000000] font-light text-[16px] leading-[28px] mt-8">
              Sign in to continue to Spell CPasS.{" "}
            </span>
          </div>

          <div className="text-[#000000] font-Poppins font-base  w-[35%] flex flex-col gap-5 mt-10">
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Username
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="text"
                placeholder="Enter Username Or Email Address"
                required
              />
            </div>
            <div className="relative gap-3 ">
              <div className="flex flex-row justify-between whitespace-nowrap">
                <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                  Password
                </p>
                <span className="justify-end text-[#000000] leading-[28px] text-[16px] ml-[460px] font-light">
                  Forget Password?
                </span>
              </div>

              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="password"
                placeholder="Enter password "
                required
              />
            </div>

            <button
              className="bg-[#5F2466]  text-[#FFFFFF]   w-[654px] h-[56px] rounded-xl   mt-1 mr-[800px]  py-[15px] px-[25px] "
              onClick={(event) => {
                event.target.style.backgroundColor =
                  event.target.style.backgroundColor === "rgb(252, 101, 23)"
                    ? "#5F2466"
                    : "#FC6517";
              }}
            >
              Log In
            </button>
          </div>
          <p className="flex mt-3 ml-56">
            Don’t have an account ?{" "}
            <a href="sign" className="text-[#5F2466] font-Poppins font-bold">
              Signup now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
