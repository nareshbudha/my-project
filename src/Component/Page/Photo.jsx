import React from "react";
import { FaUserAlt, FaPhone, FaUserFriends } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import gg from "../Image/gg.png";

const Photo = () => {
  return (
    <div>
      <div className=" flex flex-col py-10 justify-center items-center mobile:flex-row mobile:gap-10 tablet:gap-5 ">
        <div className="flex flex-col items-center laptop:items-start  ">
          <h2 className="text-[#5F2466] mobile:text-base mobile:font-normal mobile:w-full tablet:text-2xl tablet:font-semibold laptop:text-4xl laptop:font-bold">
            You’re at the start of something special.
          </h2>
          <p className="text-[#000000] flex mobile:text-xs tablet:text-base tablet:font-medium tablet:py-10 laptop:text-base">
            Try our cloud contact center software today.
          </p>
          <div className="flex flex-col  mobile:gap-2 mobile:py-3 mobile:px-4 tablet:w-full tablet:gap-4 tablet:py-2 laptop:flex-row">
            <div className="relative">
              <input
                className="bg-[#E6E6E6] border-none flex rounded placeholder-[#000000] placeholder-opacity-75 outline-none w-full mobile:py-3 mobile:px-10"
                type="text"
                placeholder="Full Name*"
              />
              <FaUserAlt className="absolute  top-4 left-1 " />
            </div>
            <div className="relative">
              <input
                className="bg-[#E6E6E6] border-none flex rounded  placeholder-[#000000] placeholder-opacity-75 outline-none w-full mobile:py-3 mobile:px-10"
                type="text"
                placeholder="Phone number"
              />
              <svg
                className="-mt-8 ml-1"
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.67188 8.74609C9.17969 9.00391 9.63672 9.32031 10.043 9.69531C10.4492 10.0703 10.8008 10.4922 11.0977 10.9609C11.3945 11.4297 11.6172 11.9297 11.7656 12.4609C11.9141 12.9922 11.9922 13.5469 12 14.125H10.5C10.5 13.5078 10.3828 12.9258 10.1484 12.3789C9.91406 11.832 9.58984 11.3555 9.17578 10.9492C8.76172 10.543 8.28516 10.2227 7.74609 9.98828C7.20703 9.75391 6.625 9.63281 6 9.625C5.38281 9.625 4.80078 9.74219 4.25391 9.97656C3.70703 10.2109 3.23047 10.5352 2.82422 10.9492C2.41797 11.3633 2.09766 11.8398 1.86328 12.3789C1.62891 12.918 1.50781 13.5 1.5 14.125H0C0 13.5547 0.078125 13.0039 0.234375 12.4727C0.390625 11.9414 0.613281 11.4414 0.902344 10.9727C1.19141 10.5039 1.53906 10.082 1.94531 9.70703C2.35156 9.33203 2.8125 9.01172 3.32812 8.74609C2.75781 8.32422 2.3125 7.79297 1.99219 7.15234C1.67188 6.51172 1.50781 5.83594 1.5 5.125C1.5 4.50781 1.61719 3.92578 1.85156 3.37891C2.08594 2.83203 2.41016 2.35547 2.82422 1.94922C3.23828 1.54297 3.71484 1.22266 4.25391 0.988281C4.79297 0.753906 5.375 0.632812 6 0.625C6.61719 0.625 7.19922 0.742188 7.74609 0.976562C8.29297 1.21094 8.76953 1.53516 9.17578 1.94922C9.58203 2.36328 9.90234 2.83984 10.1367 3.37891C10.3711 3.91797 10.4922 4.5 10.5 5.125C10.5 5.83594 10.3398 6.51172 10.0195 7.15234C9.69922 7.79297 9.25 8.32422 8.67188 8.74609ZM3 5.125C3 5.53906 3.07812 5.92578 3.23438 6.28516C3.39062 6.64453 3.60547 6.96094 3.87891 7.23438C4.15234 7.50781 4.46875 7.72266 4.82812 7.87891C5.1875 8.03516 5.57812 8.11719 6 8.125C6.40625 8.125 6.79297 8.04688 7.16016 7.89062C7.52734 7.73438 7.84375 7.51953 8.10938 7.24609C8.375 6.97266 8.58984 6.65625 8.75391 6.29688C8.91797 5.9375 9 5.54688 9 5.125C9 4.71875 8.92188 4.33203 8.76562 3.96484C8.60938 3.59766 8.39453 3.28125 8.12109 3.01562C7.84766 2.75 7.52734 2.53516 7.16016 2.37109C6.79297 2.20703 6.40625 2.125 6 2.125C5.58594 2.125 5.19922 2.20312 4.83984 2.35938C4.48047 2.51562 4.16406 2.73047 3.89062 3.00391C3.61719 3.27734 3.40234 3.59766 3.24609 3.96484C3.08984 4.33203 3.00781 4.71875 3 5.125ZM24 0.625V2.125H13.5V0.625H24ZM13.5 6.625H24V8.125H13.5V6.625ZM13.5 12.625H24V14.125H13.5V12.625Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col  mobile:gap-5 mobile:py-3 mobile:px-4 tablet:w-full tablet:gap-4 tablet:py-2 laptop:flex-row laptop:py-8">
            <div className="relative">
              <input
                className="bg-[#E6E6E6] border-none flex rounded  placeholder-[#000000] placeholder-opacity-75 outline-none  w-full mobile:py-3 mobile:px-10 "
                type="text"
                placeholder="Business email address*"
              />
              <svg
                className="-mt-8 ml-1"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0.625H2C1.60218 0.625 1.22064 0.783035 0.93934 1.06434C0.658035 1.34564 0.5 1.72718 0.5 2.125V14.125C0.5 14.5228 0.658035 14.9044 0.93934 15.1857C1.22064 15.467 1.60218 15.625 2 15.625H20C20.3978 15.625 20.7794 15.467 21.0607 15.1857C21.342 14.9044 21.5 14.5228 21.5 14.125V2.125C21.5 1.72718 21.342 1.34564 21.0607 1.06434C20.7794 0.783035 20.3978 0.625 20 0.625ZM18.35 2.125L11 7.21L3.65 2.125H18.35ZM2 14.125V2.8075L10.5725 8.74C10.698 8.8271 10.8472 8.87377 11 8.87377C11.1528 8.87377 11.302 8.8271 11.4275 8.74L20 2.8075V14.125H2Z"
                  fill="black"
                />
              </svg>

            </div>
            <div className="relative">
              <input
                className="bg-[#E6E6E6] border-none flex rounded  placeholder-[#000000] placeholder-opacity-75 outline-none w-full mobile:py-3 mobile:px-10"
                type="text"
                placeholder="Phone number"
              />
              <svg
                className="-mt-8 ml-1"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19.125V17.125C1 16.0641 1.42143 15.0467 2.17157 14.2966C2.92172 13.5464 3.93913 13.125 5 13.125H9C10.0609 13.125 11.0783 13.5464 11.8284 14.2966C12.5786 15.0467 13 16.0641 13 17.125V19.125M14 1.255C14.8604 1.4753 15.623 1.9757 16.1676 2.67731C16.7122 3.37892 17.0078 4.24183 17.0078 5.13C17.0078 6.01817 16.7122 6.88108 16.1676 7.58269C15.623 8.2843 14.8604 8.7847 14 9.005M19 19.125V17.125C18.9949 16.2422 18.6979 15.3858 18.1553 14.6894C17.6126 13.993 16.8548 13.4957 16 13.275M3 5.125C3 6.18587 3.42143 7.20328 4.17157 7.95343C4.92172 8.70357 5.93913 9.125 7 9.125C8.06087 9.125 9.07828 8.70357 9.82843 7.95343C10.5786 7.20328 11 6.18587 11 5.125C11 4.06413 10.5786 3.04672 9.82843 2.29657C9.07828 1.54643 8.06087 1.125 7 1.125C5.93913 1.125 4.92172 1.54643 4.17157 2.29657C3.42143 3.04672 3 4.06413 3 5.125Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>


            </div>
          </div>

          <button
            className="bg-[#5F2466] text-[#FFFFFF] rounded-lg mobile:my-2 mobile:py-3 mobile:px-2 tablet:rounded-xl laptop:ml-3" >
            Submit
          </button>
        </div>

        <div className="">
          <img className="mobile:hidden tablet:block tablet:w-full tablet:h-auto tablet:rounded-xl " src={gg} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Photo;
