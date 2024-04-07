function Buttom() {
  return (
    <div className="text-[#FFFFFF]  flex flex-row justify-start items-center gap-3">
      <button
        className="  bg-[#5F2466] text-[#FFFFFF] mobile:rounded-md mobile:px-3 mobile:py-2  tablet:rounded-xl tablet:px-3 tablet:py-4 laptop:py-3 laptop:px-4 "
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
            className=" bg-[#5F2466] text-[#FFFFFF] mobile:rounded-md mobile:px-3 mobile:py-2 tablet:px-3 tablet:py-4 tablet:rounded-xl laptop:py-3 laptop:px-4 "
            onClick={(event) => {
              event.target.style.backgroundColor =
                event.target.style.backgroundColor === "rgb(252, 101, 23)"
                  ? "#5F2466"
                  : "#FC6517";
            }}
          >
            pricing
          </button>
        </a>
      </div>
    </div>
  );
}

export default Buttom;
