import React from "react";
import sgup from "../Image/sgup.png";

const SignUp = () => {
  return (
    <div className="mobile:ml-10 laptop:mr-20">
      <div className="flex flex-row justify-stretch tablet:flex-col-reverse laptop:flex-row   ">
        <img className=" mobile:hidden tablet:block tablet:ml-40 tablet:w-96  tablet:h-96  tablet:pt-5 laptop:w-5/12 laptop:h-5/6 laptop:pt-36 laptop:mr-2 desktop:ml-2 desktop:w-2/5 desktop:-mt-16  " src={sgup} alt="" />

        <div className="tablet:mt-5  tablet:ml-5 laptop:mt-10
         laptop:mr-4 laptop:w-full desktop:mt-20">
          <div className="flex flex-col mobile:gap-4">
            <p className="text-[#5F2466] font-bold   mobile:text-2xl laptop:text-5xl laptop:leading-10">
              Register Account
            </p>
            <span className="text-[#000000] font-light mobile:text-base tablet:text-xl">
              Get your free Spell CPaaS account now.
            </span>
          </div>

          <div className="text-[#000000] flex flex-col mobile:gap-4 mobile:my-3 mt-10">
            <div className="relative gap-3 ">
              <p className="text-[#5F2466] font-bold mobile:text-sm mobile:leading-3 text-base leading-5 pb-2">
                Email
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-3 mobile:text-xs tablet:text-lg mobile:w-80 mobile:h-10 tablet:w-full tablet:h-14"
                type="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold mobile:text-sm mobile:leading-3 text-base leading-5 pb-2 ">
                Login Id{" "}
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-3 mobile:text-xs tablet:text-lg mobile:w-80 mobile:h-10 tablet:w-full tablet:h-14 "
                type="text"
                placeholder="Enter Login Id "
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466]  font-bold mobile:text-sm mobile:leading-3 text-base leading-5 pb-2 ">
                Name{" "}
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-3 mobile:text-xs tablet:text-lg mobile:w-80 mobile:h-10 tablet:w-full tablet:h-14 "
                type="text"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold mobile:text-sm mobile:leading-3 text-base leading-5 pb-2 ">
                Password
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-3 mobile:text-xs tablet:text-lg mobile:w-80 mobile:h-10 tablet:w-full tablet:h-14 "
                type="password"
                placeholder="Enter password "
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold mobile:text-sm mobile:leading-3 text-base leading-5 pb-2 ">
                Confirm Password
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-3 mobile:text-xs tablet:text-lg mobile:w-80 mobile:h-10 tablet:w-full tablet:h-14 "
                type="password"
                placeholder="Re Enter password"
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold mobile:text-sm mobile:leading-3 text-base leading-5 pb-2">
                Phone Number
              </p>

              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-3 mobile:text-xs tablet:text-lg mobile:w-80 mobile:h-10 tablet:w-full tablet:h-14 "
                type="text"
                placeholder="Enter phone number here"
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
              Register
            </button>
          </div>
          <p className="flex tablet:text-base tablet:font-light tablet:mt-3 tablet:ml-12">
            Already have an account ?
            <a href="login" className="text-[#5F2466] font-bold tablet:text-base">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
