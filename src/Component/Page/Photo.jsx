import React from "react";
import { FaUserAlt, FaPhone, FaUserFriends } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import gg from "../Image/gg.png";

const Photo = () => {
  return (
    <div>
      <div className="flex md:flex-col sm:flex-col xl:flex-row justify-center items-center py-[100px] px-[50px] ">
        <div className="flex flex-col justify-items-center items-center">
          <h2 className="text-[#5F2466] text-4xl  font-bold leading-[50px]">
            You’re at the start of something special.
          </h2>
          <p className="text-[#000000]  text-base mb-6 mt-6">
            Try our cloud contact center software today.
          </p>

          <div className="text-[#000000] font-Poppins font-base  grid grid-cols-2 gap-4 mr-8  ">
            <div className="relative">
              <input
                className="bg-[#E6E6E6] border-none flex rounded-md outline-none px-9 py-3 w-full"
                type="text"
                placeholder="Full Name*"
              />
              <FaUserAlt className="absolute  top-4 left-1 " />
            </div>

            <div className="relative">
              <input
                className="bg-[#E6E6E6] flex rounded-md border-none outline-none px-9 py-3 w-full"
                type="text"
                placeholder="Phone number"
              />
              <FaPhone className="absolute top-4 left-1" />
            </div>

            <div className="relative">
              <input
                className="bg-[#E6E6E6] flex rounded-md border-none outline-none px-9 py-3 w-full"
                type="text"
                placeholder="Business email address*"
              />
              <MdOutlineMarkEmailUnread className="absolute top-4 left-1" />
            </div>
            <div className="relative">
              <input
                className="bg-[#E6E6E6] flex rounded-md border-none outline-none px-9 py-3  w-full"
                type="text"
                placeholder="Number of users"
              />
              <FaUserFriends className="absolute top-4 left-1" />
            </div>
            <button
              className="bg-[#5F2466] text-[#FFFFFF] rounded-xl w-fit mt-1 mr-[800px] py-[15px] px-[25px] m"
              onClick={(event) => {
                event.target.style.backgroundColor =
                  event.target.style.backgroundColor === "rgb(252, 101, 23)"
                    ? "#5F2466"
                    : "#FC6517";
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <img className="flex rounded-xl" src={gg} alt="Logo" />
      </div>
    </div>
  );
};

export default Photo;
