import React from "react";

const Buttom = () => {
  return (
    <div className="text-[#FFFFFF]   flex flex-row justify-start items-center  gap-4 mt-3 ">
      <button
        className="   bg-[#5F2466] w-fit  rounded-xl px-6 py-3 "
        onClick={(event) => {
          event.target.style.backgroundColor =
            event.target.style.backgroundColor === "rgb(252, 101, 23)"
              ? "#5F2466"
              : "#FC6517";
        }}
      >
        Learn More
      </button>
      <button
        className=" bg-[#5F2466] w-fit  rounded-xl px-6 py-3 "
        onClick={(event) => {
          event.target.style.backgroundColor =
            event.target.style.backgroundColor === "rgb(252, 101, 23)"
              ? "#5F2466"
              : "#FC6517";
        }}
      >
        Price
      </button>
    </div>
  );
};

export default Buttom;
