import React from "react";

const Buttom = () => {
  return (
    <div className="text-[#FFFFFF]   flex flex-row justify-start items-center  gap-4 mt-3 ">
      <button
        className="  bg-[#5F2466] text-[#FFFFFF]  mr-32 rounded-lg py-2 px-1 sm:ml-8 xm:py-3 xm:px-2 md:-ml-20  md:rounded-xl lg:-ml-6 xl:mr-[432px] xl:py-3 xl:px-4"
        onClick={(event) => {
          event.target.style.backgroundColor =
            event.target.style.backgroundColor === "rgb(252, 101, 23)"
              ? "#5F2466"
              : "#FC6517";
        }}
      >
        Learn More
      </button>
      <div>
        <a href="price">
          <button
            className=" bg-[#5F2466] text-[#FFFFFF]   -ml-32 rounded-lg py-2 px-1 sm:ml-8 xm:py-3 xm:px-2 md:-ml-20  md:rounded-xl lg:ml-6  xl:py-3 xl:px-4 xl:-ml-[436px]"
            onClick={(event) => {
              event.target.style.backgroundColor =
                event.target.style.backgroundColor === "rgb(252, 101, 23)"
                  ? "#5F2466"
                  : "#FC6517";
            }}
          >
            Pricing
          </button>
        </a>
      </div>
    </div>
  );
};

export default Buttom;
