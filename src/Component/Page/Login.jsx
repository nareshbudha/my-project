import React from "react";
import lgi from "../Image/lgi.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex flex-col gap-10 tabletmd:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto tabletmd:py-24">
      <div className="flex-1">
        <img
          className="hidden tabletmd:block 
        "
          src={lgi}
          alt=""
        />
      </div>

      <div className=" flex-1 mt-4 ">
        <div className="flex flex-col gap-3 ">
          <h3 className="text-[#5F2466] flex flex-col font-bold  text-xl tablet:text-2xl tabletmd:text-4xl ">Welcome Back </h3>
          <span className="text-[#000000] font-light text-base ">
            Sign in to continue to Spell CPasS.
          </span>
          
        </div>

        <form className="text-[#000000] gap-4 flex flex-col mt-4">
          <div className="relative gap-1 flex flex-col">
            <p className="text-[#5F2466] font-bold text-base ">
              Username
            </p>
            <input
              className=" border-[#D0D7E2] border-2  rounded-lg px-3 py-2"
              type="text"
              placeholder="Enter Username Or Email Address"
              required
            />
          </div>
          <div className="relative gap-1 flex flex-col ">
            <div className="flex flex-row justify-between whitespace-nowrap">
              <p className="text-[#5F2466] font-bold ">Password</p>
              <Link to={"/sign"} className="text-[#000000]">
                Forget Password?
              </Link>
            </div>

            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2"
              type="password"
              placeholder="Enter password "
              required
            />
          </div>

          <button className="bg-[#5F2466]  text-[#FFFFFF] mobile:rounded-lg px-2 py-2">
            Log In
          </button>
        </form>
        <p className=" text-center mt-2 text-base font-light">
          Don’t have an account ?{" "}
          <Link
            to={"/sign"}
            className="text-[#5F2466]  font-bold tablet:text-base"
          >
            Signup now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
