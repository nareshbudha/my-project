import React from "react";

const ContactUs = () => {
  return (
    <div className="pt-28">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col ml-20">
          <h2 className="text-[#5F2466] font-bold text-[48px] leading-[56.25px]">
            Any problem, any sector. We’re ready to dive in.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            elit, odio dictumst dolor, egestas.{" "}
          </p>
          <p className="bg-[#F7F7F7] text-[#000000] flex rounded-xl">
            +977 01-5910781 +977 01-5910781 +977 01-5910781
          </p>
        </div>
        <div>
          <div className="text-[#000000] font-Poppins font-base  flex flex-col gap-5 ">
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Full Name
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Email Address
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
                type="text"
                placeholder="Email Address"
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
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Service{" "}
              </p>
              <select className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]    ">
                <option
                  className="text-[#000000] font-light text-[16px] leading-[28px]"
                  value=""
                >
                  Select
                </option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Inquiry for
              </p>
              <select className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]    ">
                <option
                  className="text-[#000000] font-light text-[16px] leading-[28px]"
                  value=""
                >
                  Select
                </option>
                <option className="" value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
                Inquiry for
              </p>
              <select className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]    ">
                <option
                  className="text-[#000000] font-light text-[16px] leading-[28px]"
                  value=""
                >
                  Select
                </option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="relative gap-3">
              <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2">
                Message
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 pb-20 w-[654px] h-[128px]"
                type="text"
                placeholder="I would like to.........."
              />
            </div>

            <button className="bg-[#5F2466]  text-[#FFFFFF]   rounded-xl w-fit  mt-1 mr-[800px]  py-[15px] px-[25px] m">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
