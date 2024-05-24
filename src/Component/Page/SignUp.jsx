import React from "react";
import sgup from "../Image/sgup.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-10 tabletmd:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto tabletmd:py-24">
        <div className="flex-1">
          <img className="hidden tabletmd:block  " src={sgup} alt="" />
        </div>

        <form className="flex-1 gap-1 mt-5">
          <div className="flex flex-col gap-1">
            <p className="text-[#5F2466] font-bold text-xl tablet:text-2xl tabletmd:text-3xl">
              Register Account
            </p>
            <span className="text-[#000000] font-light mobile:text-base tablet:text-xl">
              Get your free Spell CPaaS account now.
            </span>
          </div>
          <div className="text-[#000000] flex flex-col gap-4 mt-3 tabletmd:mt-5">
            <div className="relative gap-1 flex flex-col ">
              <p className="text-[#5F2466] font-bold">Email</p>
              <input
                className=" border-[#D0D7E2]  border-2 rounded-lg px-3 py-2  "
                type="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466]  font-bold ">Login Id</p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 "
                type="text"
                placeholder="Enter Login Id "
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466]  font-bold">Name </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 "
                type="text"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold">Password</p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2"
                type="password"
                placeholder="Enter password "
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold ">Confirm Password</p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 "
                type="password"
                placeholder="Re Enter password"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold ">Phone Number</p>

              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 "
                type="text"
                placeholder="Enter phone number here"
                required
              />
            </div>
            <button className="bg-[#5F2466]  text-[#FFFFFF] mobile:rounded-lg px-2 py-2 mt-2">
              Register
            </button>
          </div>
          <p className=" text-center mt-2 ">
             <span> Already have an account ?             </span>
            <Link to="/login" className="text-[#5F2466] font-bold ">
            Login
            </Link>
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
