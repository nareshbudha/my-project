import React, { useState } from "react";
import computer from "../Component/Image/logo.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#F7F7F7]">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="logo-link">
          <img className="w-16 h-16 ms-1.5" src={computer} alt="Logo" />
        </a>
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#5F2466] rounded-lg md:hidden hover:bg-[#F05327] focus:outline-none focus:ring-2 focus:ring-[#5F2466] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isDropdownOpen ? "true" : "false"}
          aria-controls="mega-menu-full"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between font-medium ${
            isDropdownOpen ? "block" : "hidden"
          } w-full hidden md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-row mr-20 sm:gap-4 items-center text-left gap-8 ">
            <li>
              <a
                href="#"
                className="text-[#5F2466] font-Poppins font-bold flex flex-row"
                onClick={(event) => {
                  event.target.style.backgroundColor =
                    event.target.style.backgroundColor === "rgb(252, 101, 23)"
                      ? "#5F2466"
                      : "#FC6517";
                }}
              >
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-[#5F2466] font-Poppins font-bold">
                Solution
              </a>
            </li>
            <li>
              <a
                href="price"
                className="text-[#5F2466] font-Poppins font-bold"
                onClick={(event) => {
                  event.target.style.backgroundColor =
                    event.target.style.backgroundColor === "rgb(252, 101, 23)"
                      ? "#5F2466"
                      : "#FC6517";
                }}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="about"
                className="text-[#5F2466] font-Poppins font-bold"
                onClick={(event) => {
                  event.target.classList.toggle("text-[#F05327]");
                }}
              >
                About
              </a>
            </li>
            <li className="flex flex-row gap-10">
              <a
                href="contact"
                className="text-[#5F2466] font-Poppins font-bold"
              >
                ContactUs
              </a>
            </li>
            <li>
              <a href="/login" className="login-button">
                <button className="bg-[#5F2466] text-[#FFFFFF] w-[100px] h-[56px] rounded-xl text-base font-bold py-[10px] px-[25px]">
                  Log In
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Removed unnecessary div */}
    </nav>
  );
}

export default Navbar;
