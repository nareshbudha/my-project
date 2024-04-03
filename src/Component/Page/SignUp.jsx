import React from "react";
import sgup from "../Image/sgup.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-stretch tablet:flex-col-reverse laptop:flex-row mobile:px-5 tablet:px-8 laptop:px-12 desktop:px-14 mobile:pt-5 tablet:pt-10 laptop:pt-20 tablet:gap-8  laptop:gap-6 desktop:gap-12  ">
        <img className=" mobile:hidden tablet:block tablet:w-96  tablet:h-96 laptop:w-5/12 laptop:h-5/6 desktop:w-2/5   " src={sgup} alt="" />

        <div className="laptop:w-full">
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
            <Link to ="/login" className="text-[#5F2466] font-bold tablet:text-base">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
