import React from "react";
import logoImage from "../Component/Image/logo.png";

function Navbar() {
  return (
    <nav className="bg-[#F7F7F7] w-full p-3 gap-3 sm:flex-row md:flex-row lg:flex-row fixed z-50">
      <div className=" mx-auto flex sm:flex-row md:flex-row lg:flex-row justify-between items-center">
        <a href="/" className="logo-link">
          <img className="ml-20" src={logoImage} alt="Logo" />
        </a>

        <ul className="flex flex-row mr-20  items-center text-left gap-8">
          <li>
            <a
              href="#"
              className="text-[#5F2466] font-Poppins font-bold"
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
          <li className="flex flex-row gap-10 ">
            <a href="contact" className="text-[#5F2466] font-Poppins font-bold">
              ContactUs
            </a>
          </li>
          <a href="/login" className="login-button">
            <button className="bg-[#5F2466] text-[#FFFFFF] w-[100px] h-[56px] rounded-xl text-base font-bold py-[10px] px-[25px]">
              Log In
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
