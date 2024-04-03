import React from "react";
import lgi from "../Image/lgi.png";
const Login = () => {
  return (
    <div className="mobile:ml-10">
      <div className="flex justify-stretch  laptop:flex-row    ">
        <img className="mobile:hidden tablet:block tablet:w-80 tablet:h-80 tablet:pt-5 laptop:w-96 laptop:h-96 laptop:mr-14 desktop:ml-2 desktop:w-full desktop:h-full
        " src={lgi} alt="" />

        <div className="tablet:mt-5  tablet:ml-5 laptop:mt-10
         laptop:mr-4 laptop:w-full desktop:mt-20">
          <div className="flex flex-col mobile:gap-4 ">
            <p className="text-[#5F2466] font-bold  laptop:text-5xl laptop:leading-10 mobile:text-2xl">
              Welcome Back 
            </p>
            <span className="text-[#000000] font-light mobile:text-base tablet:text-xl ">
              Sign in to continue to Spell CPasS.
            </span>
          </div>

          <div className="text-[#000000] flex flex-col mobile:gap-4 mobile:my-3 mt-10">
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold mobile:text-sm mobile:leading-3 text-base leading-5 pb-2 ">
                Username
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-3 mobile:text-xs tablet:text-lg mobile:w-80 mobile:h-10 tablet:w-full tablet:h-14 "
                type="text"
                placeholder="Enter Username Or Email Address"
                required
              />
            </div>
            <div className="relative gap-3 ">
              <div className="flex flex-row justify-between whitespace-nowrap">
                <p className="text-[#5F2466] font-bold mobile:text-sm mobile:leading-3 text-base leading-5 pb-2 ">
                  Password
                </p>
                <span className="text-[#000000] mobile:mr-2 mobile:-mt-2 tablet:mr-2  ">
                  Forget Password?
                </span>
              </div>

              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-3 mobile:text-xs tablet:text-lg mobile:w-80 mobile:h-10 tablet:w-full tablet:h-14 "
                type="password"
                placeholder="Enter password "
                required
              />
            </div>

            <button
              className="bg-[#5F2466]  text-[#FFFFFF] mobile:rounded-lg mobile:w-20 mobile:ml-1 mobile:px-1 mobile:py-2 mobile:-mt-1 tablet:w-full tablet:h-14"
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
          <p className="flex tablet:text-base tablet:font-light tablet:mt-3 tablet:ml-12 ">
            Don’t have an account ?{" "}
            <a href="sign" className="text-[#5F2466]  font-bold tablet:text-base">
              Signup now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
