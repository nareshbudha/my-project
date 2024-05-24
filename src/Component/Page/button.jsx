function button() {
  return (
    <div className="text-[#FFFFFF]  flex flex-row justify-start items-center gap-3">
      <button
        className="  bg-[#5F2466] hover:bg-[#FC6517] text-[#FFFFFF] mobile:rounded-md mobile:px-3 mobile:py-2  tablet:rounded-xl tablet:px-3 tablet:py-4 laptop:py-3 laptop:px-4 "

      >
        Learn More
      </button>
      <div>
        <a href="price">
          <button
            className=" bg-[#5F2466] hover:bg-[#FC6517] text-[#FFFFFF] mobile:rounded-md mobile:px-3 mobile:py-2 tablet:px-3 tablet:py-4 tablet:rounded-xl laptop:py-3 laptop:px-4 "

          >
            pricing
          </button>
        </a>
      </div>
    </div>
  );
}

export default button;
