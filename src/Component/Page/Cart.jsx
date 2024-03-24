import poo from "../Image/poo.png";
import pop from "../Image/pop.png";
import qqq from "../Image/qqq.png";

const Cart = () => {
  return (
    <div className="flex flex-row pt-28">
      <div className="flex flex-col w-[35%] ml-28 ">
        <h1 className=" text-[#5F2466] text-[48px] font-bold leading-[56.25px]">
          Product information and Review
        </h1>
        <p>
          By placing your order, you agree to Spell Innovation’s{" "}
          <span className="text-[#5F2466] font-bold">Privacy</span> and{" "}
          <span className="text-[#5F2466] font-bold">Policy.</span>
        </p>
        <div className="bg-[#F7F7F7] flex flex-col my-10 rounded-xl w-full ">
          <div className=" flex flex-row">
            <svg
              className="ml-3 mt-5"
              width="26"
              height="32"
              viewBox="0 0 26 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3745 14.875C25.3745 14.5766 25.256 14.2905 25.045 14.0795C24.834 13.8685 24.5479 13.75 24.2495 13.75C23.9511 13.75 23.665 13.8685 23.454 14.0795C23.243 14.2905 23.1245 14.5766 23.1245 14.875C23.1245 17.5603 22.0578 20.1356 20.159 22.0345C18.2602 23.9333 15.6848 25 12.9995 25C10.3142 25 7.73886 23.9333 5.84006 22.0345C3.94125 20.1356 2.87451 17.5603 2.87451 14.875C2.87451 14.5766 2.75599 14.2905 2.54501 14.0795C2.33403 13.8685 2.04788 13.75 1.74951 13.75C1.45114 13.75 1.165 13.8685 0.954017 14.0795C0.743038 14.2905 0.624512 14.5766 0.624512 14.875C0.628597 17.9605 1.78416 20.9334 3.86497 23.2117C5.94578 25.49 8.80202 26.9096 11.8745 27.1926V29.5H6.24951C5.95114 29.5 5.665 29.6185 5.45402 29.8295C5.24304 30.0405 5.12451 30.3266 5.12451 30.625C5.12451 30.9234 5.24304 31.2095 5.45402 31.4205C5.665 31.6315 5.95114 31.75 6.24951 31.75H19.7495C20.0479 31.75 20.334 31.6315 20.545 31.4205C20.756 31.2095 20.8745 30.9234 20.8745 30.625C20.8745 30.3266 20.756 30.0405 20.545 29.8295C20.334 29.6185 20.0479 29.5 19.7495 29.5H14.1245V27.1926C17.197 26.9096 20.0532 25.49 22.1341 23.2117C24.2149 20.9334 25.3704 17.9605 25.3745 14.875Z"
                fill="#5F2466"
              />
              <path
                d="M12.9995 22.75C15.0874 22.7476 17.089 21.9172 18.5653 20.4408C20.0417 18.9645 20.8721 16.9628 20.8745 14.875V8.125C20.8745 6.03642 20.0448 4.03338 18.568 2.55653C17.0911 1.07969 15.0881 0.25 12.9995 0.25C10.9109 0.25 8.9079 1.07969 7.43105 2.55653C5.9542 4.03338 5.12451 6.03642 5.12451 8.125V14.875C5.12689 16.9628 5.95734 18.9645 7.43368 20.4408C8.91001 21.9172 10.9117 22.7476 12.9995 22.75ZM7.37451 8.125C7.37451 6.63316 7.96714 5.20242 9.02204 4.14752C10.0769 3.09263 11.5077 2.5 12.9995 2.5C14.4914 2.5 15.9221 3.09263 16.977 4.14752C18.0319 5.20242 18.6245 6.63316 18.6245 8.125V14.875C18.6245 16.3668 18.0319 17.7976 16.977 18.8525C15.9221 19.9074 14.4914 20.5 12.9995 20.5C11.5077 20.5 10.0769 19.9074 9.02204 18.8525C7.96714 17.7976 7.37451 16.3668 7.37451 14.875V8.125Z"
                fill="#5F2466"
              />
            </svg>

            <h1 className="text-[#5F2466] font-medium text-2xl leading-[38.83px] ml-3 mt-2">
              Voice Broadcast{" "}
              <p className="text-[#000000] text-[12px] font-normal leading-[15px]">
                Plan details
              </p>
            </h1>
          </div>
          <div className=" flex flex-col">
            <p className="border-b-2 w-[95%] ml-2 mt-3 border-[#868686] "></p>
            <p className="mt-3 ml-3">
              Drag the slider to choose the credit sizes
            </p>

            <img className="mt-5" src={pop} alt="" />
            <p className="text-xs	leading-[15px] font-normal mt-8">
              Purchase <span className="text-[#F05327]">5 hours</span> talk-time
              for
              <span className="text-[#F05327]"> Rs.100</span> to approximately{" "}
              <span className="text-[#F05327]">5 hours</span>. Each message is
              estimated to cost around{" "}
              <span className="text-[#F05327]">Rs.20</span>, including the
              network deposit.
            </p>

            <p className="text-[#F05327] text-[16px] flex	leading-[25.9px] mt-6 justify-end font-normal ">
              Remove
            </p>
          </div>
        </div>
      </div>
      <div className="flexflex-col gap-10 w-[55%] justify-center items-center ml-28">
        <h3 className="text-[#5F2466] font-medium text-[24px] leading-[38.83px]">
          Payment Details
        </h3>
        <p className="text-[#000000] font-light text-[16px] leading-[25.89px]">
          Complete your purchase by providing your payment details.
        </p>
        <div className="relative gap-6 mt-9">
          <p className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] pb-2 ">
            Email Address
          </p>
          <input
            className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
            type="text"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col mt-10">
          <h1 className="text-[#5F2466] font-bold text-[16px] leading-[18.75px]">
            Select Payment Method
          </h1>
          <img className="w-[505px] h-[263px] mt-6" src={poo} alt="" />
        </div>
        <h2 className="text-[#5F2466] font-bold text-[16px] leading-[18.75px] my-6">
          Card Details
        </h2>

        <div className="text-[#666666] font-light text-[16px] leading-[28px]">
          <input
            className=" border-[#D0D7E2] border-[1px] flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
            type="text"
            placeholder="Details of your card"
            required
          />
          <input
            className=" border-[#D0D7E2] border-[1px] mt-5 flex rounded-[8px] px-3 py-3 w-[654px] h-[56px]"
            type="text"
            placeholder="8888 2255 5553 4454 1112"
            required
          />
        </div>
        <img className="py-6" src={qqq} alt="" />
        <button className="bg-[#5F2466] rounded-[10px] w-[654px] h-[56px] py-[10px] px-[25px]">
          <p className="text-[#FFFFFF] font-bold text-[16px] leading-[18.75px]">
            Pay Rs.1000
          </p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
