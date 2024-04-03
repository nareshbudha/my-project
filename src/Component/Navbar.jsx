import { useState } from "react";
import computer from "../Component/Image/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#F7F7F7]">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="logo-link">
          <img className="w-40 h-14 ms-1.5" src={computer} alt="Logo" />

        </Link>
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
          <ul className="flex flex-row relative mr-20 sm:gap-4 items-center text-left gap-8 ">
            <li>
              <Link
                to="sign"
                className="text-[#5F2466] font-Poppins font-bold flex flex-row"

              >
                Products  <svg
              className="mt-2 ml-2" width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50002 8.80001C8.80002 8.80001 8.10002 8.53001 7.57002 8.00001L1.05002 1.48001C0.76002 1.19001 0.76002 0.710015 1.05002 0.420015C1.34002 0.130015 1.82002 0.130015 2.11002 0.420015L8.63002 6.94001C9.11002 7.42001 9.89002 7.42001 10.37 6.94001L16.89 0.420015C17.18 0.130015 17.66 0.130015 17.95 0.420015C18.24 0.710015 18.24 1.19001 17.95 1.48001L11.43 8.00001C10.9 8.53001 10.2 8.80001 9.50002 8.80001Z" fill="#5F2466"/>
</svg>
              </Link>
             

            </li>
            <li>
              <Link to="#" className="text-[#5F2466] font-Poppins font-bold">
                Solution 
              </Link>
            </li>
            <li>
              <Link
                to="price"
                className="text-[#5F2466] font-Poppins font-bold"
                onClick={(event) => {
                  event.target.style.backgroundColor =
                    event.target.style.backgroundColor === "rgb(252, 101, 23)"
                      ? "#5F2466"
                      : "#FC6517";
                }}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to ={"about"}
                className="text-[#5F2466] font-Poppins font-bold"
                onClick={(event) => {
                  event.target.classList.toggle("text-[#F05327]");
                }}
              >
                About
              </Link>
            </li>
            <li className="flex flex-row gap-10">
              <Link to ={"contact"}
                className="text-[#5F2466] font-Poppins font-bold"
              >
                ContactUs
              </Link>
            </li>
            <li>
              <Link to={'/login'} className="login-button">
                <button className="bg-[#5F2466] text-[#FFFFFF] w-[100px] h-[56px] rounded-xl text-base font-bold py-[10px] px-[25px]">
                  Log In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    
    </nav>
  );
}

export default Navbar;
