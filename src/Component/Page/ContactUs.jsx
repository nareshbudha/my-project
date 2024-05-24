import map from "../Image/map.png";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail, MdEditLocation } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col gap-20 tabletmd:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto py-24 ">
        <div className="flex flex-1 flex-col  gap-10 ">
          <h2 className="text-[#5F2466] font-bold  text-2xl tablet:text-4xl laptop:text-5xl">
            Any problem, any sector. We’re ready to dive in.
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            elit, odio dictumst dolor, egestas.
          </p>
          <div className=" flex  gap-10 flex-col ">
            <div className="bg-[#F7F7F7] flex flex-col rounded-lg py-6 px-2">
              <h1 className="text-base  flex gap-2 text-[#5F2466] font-bold ">
                <LuPhoneCall /> Phone
              </h1>
              <div className="flex flex-col tabletmd:flex-row tablet:mx-4 tablet:gap-6">
                <p className="font-light text-base">+977 01-5910781</p>
                <p className=" font-light text-base">+977 01-5910781</p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] flex rounded-lg flex-col py-6 px-2">
              <h1 className="text-base flex gap-2 text-[#5F2466] font-bold">
                <MdEmail className="" />
                Email
              </h1>
              <div className="flex flex-col tablet:mx-4 ">
                <p className="font-medium text-[12px] mobile:text-base mobile:font-light">
                  info@spellinnovation.com
                </p>
                <p className="font-medium text-[12px] mobile:text-base mobile:font-light">
                  Contact@spellinnovation.com
                </p>
              </div>
            </div>
            <div className="bg-[#F7F7F7] flex rounded-lg flex-col py-6 px-2 ">
              <h1 className="text-base flex text-[#5F2466] font-bold gap-2 ">
                {" "}
                <MdEditLocation /> Location
              </h1>
              <div className="flex flex-col mx-4 ">
                <p className=" font-light text-base">Pipal bot, Mid baneswor</p>
              </div>
            </div>
          </div>
        </div>
        <form className="flex-1">
          <div className="text-[#000000] gap-3 font-base   flex flex-col ">
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold text-base  ">
                Full Name
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] rounded-xl px-1 py-2  tabletmd:px-2 tabletmd:py-3"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold text-base  ">
                Email Address
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-xl px-1 py-2  tabletmd:px-2 tabletmd:py-3"
                type="text"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold text-base  ">
                Phone Number
              </p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-xl px-1 py-2  tabletmd:px-2 tabletmd:py-3"
                type="text"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col ">
              <p className="text-[#5F2466] font-bold text-base  ">
                Service
              </p>
              <select className=" border-[#D0D7E2] border-[1px] flex flex-col rounded-xl px-1 py-2  tabletmd:px-2 tabletmd:py-3">
                <option
                  className="text-[#000000] font-light text-base"
                  value=""
                >
                  Select
                </option>
                <option value="a"></option>
                <option value="b"></option>
                <option value="c"></option>
              </select>
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold text-base  ">
                Inquiry for
              </p>
              <select className=" border-[#D0D7E2] border-[1px] flex  rounded-xl px-1 py-2  tabletmd:px-2 tabletmd:py-3 ">
                <option
                  className="text-[#000000] font-light text-base"
                  value=""
                >
                  Select
                </option>
                <option className="" value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold text-base  ">
                Inquiry for
              </p>
              <select className=" border-[#D0D7E2] border-[1px] flex rounded-xl px-1 py-2  tabletmd:px-2 tabletmd:py-3">
                <option className="text-[#000000] font-light text-xl" value="">
                  Select
                </option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#5F2466] font-bold text-base ">Message</p>
              <input
                className=" border-[#D0D7E2] border-[1px] flex rounded-xl tablet:pr-96 px-2 pt-3 pb-40 "
                type="text"
                placeholder="I would like to.........."
              />
            </div>
            <div className="my-10">
              <button className="bg-[#5F2466] text-[#FFFFFF] rounded-xl w-fit px-3 py-2 mx-3">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <img
        className=" flex rounded-xl tablet:w-[80%] desktop:w-[65%] w-[90%] mx-auto"
        src={map}
        alt=""
      />
    </div>
  );
};

export default ContactUs;
