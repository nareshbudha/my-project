import React from "react";
import ab from "../Image/abs.png";
import a from "../Image/a.png";
import b from "../Image/b.png";
import c from "../Image/c.png";
import d from "../Image/d.png";
import Frequtly from "./Frequtly";
import Photo from "./Photo";

const About = () => {
  return (
    <div>
      <div className="flex tablet:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto my-10 tablet:my-20">
        <div className="flex mobile:flex-col-reverse gap-10 laptop:flex-row laptop:justify-between laptop:items-center ">
          <img className="hidden tabletmd:block tabletmd:w-[650px] tabletmd:h-80" src={ab} alt="logo" />
          <div className="flex flex-col gap-3 tablet:gap-5  ">
            <h2 className="text-[#5F2466] font-bold mobile:text-2xl laptop:text-4xl">
              Nepal's Swift and Secure <span className="text-red-500">CPaaS</span>
              <p> Provider</p>
            </h2>
            <p className="justify-center text-justify w- text-[#000000] text-base  font-light ">
              SPELL CPaaS is a leading platform in Nepal, offering comprehensive
              Communication Platform as a Service solutions. Backed by technical
              expertise, industry experience, and a commitment to quality support,
              SPELL CPaaS is a flagship product of{" "}
              <span className="text-[#5F2466]">SPELL INNOVATION,</span>
              <span>a pioneering Information Technology company.</span>
              <p className="
            ">
                Our in-house development team is dedicated to crafting a
                user-friendly and technologically robust CPaaS platform,
                empowering clients to deploy efficient communication solutions
                seamlessly.
              </p>
            </p>
            <a href="contact">
              <button
                className="bg-[#5F2466]  text-[#FFFFFF] p-2 tablet:py-3 tablet:px-4 rounded-lg"

              >
                Contact Us
              </button>
            </a>
          </div>
        </div>
      
      </div>
        <div className="flex flex-col tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto">
        <div className="flex flex-col justify-center items-center mobile:gap-3 mobile:py-10 laptop:py-20  ">
          <h2 className="text-[#5F2466] text-4xl font-bold ">
            Why choose us?
          </h2>
          <p className="text-[#000000] font-normal  text-base">
            We are about quality and trust
          </p>
        </div>
        <div className="grid grid-cols-1 justify-center items-center gap-2 mobile:grid-cols-2 tabletmd:grid-cols-4 mobile:py-5 mobile:gap-2 tablet:gap-5 laptop:gap-5 ">
          <img className="w-full" src={a} alt="" />
          <img className="w-full" src={b} alt="" />
          <img className="w-full" src={c} alt="" />
          <img className="w-full" src={d} alt="" />
        </div>
        </div>



      <Frequtly />
      <Photo />
    </div>
  );
};

export default About;
