import { FaUserAlt, FaPhoneAlt, FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import gg from "../Image/gg.png";

const Photo = () => {
  return (
    <div className="">
      <div className=" mx-auto flex flex-col gap-4 py-10 justify-center items-center w-[90%] mobile:flex-col md:flex-col tabletmd:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%]">
        <div className="flex flex-1 flex-col items-center laptop:items-start  ">
          <h2 className="text-[#5F2466] tabletmd:max-w-[350px] mobile:text-base mobile:font-normal mobile:w-full tablet:text-2xl tablet:font-semibold laptop:text-4xl laptop:font-bold">
            You’re at the start of something special.
          </h2>
          <p className="text-[#000000] flex mobile:text-xs tablet:text-base tablet:font-medium tablet:py-10 laptop:text-base">
            Try our cloud contact center software today.
          </p>
          <form className="flex flex-col w-full gap-2  mobile:gap-2 mobile:py-3 mobile:px-4  tablet:gap-3">
            <div className="flex gap-2 flex-col tablet:flex-row">
              <div className="flex-1 py-2 px-2 relative bg-[#E6E6E6] border-none flex items-center gap-2  rounded placeholder-[#000000] placeholder-opacity-75 outline-none  mobile:py-3 mobile:px-2">
                <FaUserAlt className="" />
                <input
                  className="bg-transparent "
                  type="text"
                  placeholder="Full Name*"
                />
              </div>
              <div className="flex-1 relative py-2 px-2 bg-[#E6E6E6] border-none flex items-center gap-2  rounded placeholder-[#000000] placeholder-opacity-75 outline-none  mobile:py-3 mobile:px-2">
                <FaPhoneAlt className=""/>
                <input
                  className="bg-transparent"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-col tablet:flex-row">
              <div className="flex-1 relative py-2 px-2 bg-[#E6E6E6] border-none flex items-center gap-2  rounded placeholder-[#000000] placeholder-opacity-75 outline-none  mobile:py-3 mobile:px-2">
                <FaUserPlus />
                <input
                  className="bg-transparent"
                  type="text"
                  placeholder="Number of users"
                />
              </div>

              <div className="flex-1 relative py-2 px-2 bg-[#E6E6E6] border-none flex items-center gap-2  rounded placeholder-[#000000] placeholder-opacity-75 outline-none  mobile:py-3 mobile:px-2">
                <MdEmail />
                <input
                  className="bg-transparent"
                  type="text"
                  placeholder="Business email address*"
                />
              </div>
            </div>

            <div className="flex ">
              <button className="bg-[#5F2466] py-2 px-2 text-[#FFFFFF] rounded-lg mobile:mt-2 mobile:py-3 mobile:px-2 tablet:rounded-xl tablet:mt-4 laptop:ml-3 ">
                Submit
              </button>
            </div>
          </form>
          <div className="flex flex-col  mobile:gap-6 mobile:py-3 mobile:px-4 tablet:w-full tablet:gap-7 tablet:py-2 tablet:mt-2 laptop:flex-row laptop:py-8">
            <div className="relative"></div>
            <div className="relative"></div>
          </div>
        </div>

        <div className="flex-1">
          <img
            className="hidden tabletmd:block tabletmd:w-[100%] tablet:rounded-xl "
            src={gg}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
