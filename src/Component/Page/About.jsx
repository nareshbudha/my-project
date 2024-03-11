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
    <div className="pt-28">
      <div className="flex flex-row justify-between items-center ">
        <img className="ml-20" src={ab} alt="logo" />
        <div className="flex flex-col ml-10  ">
          <h2 className="text-[#5F2466] font-bold  text-[40px] leading-[50px]">
            Nepal's Swift and Secure <span className="text-red-500">CPaaS</span>
            <p> Provider</p>
          </h2>
          <p className="justify-center text-justify w-[85%] text-[#000000] text-[16px] leading-[26px] font-light mt-8">
            SPELL CPaaS is a leading platform in Nepal, offering comprehensive
            Communication Platform as a Service solutions. Backed by technical
            expertise, industry experience, and a commitment to quality support,
            SPELL CPaaS is a flagship product of{" "}
            <span className="text-[#5F2466]">SPELL INNOVATION,</span>
            <span>a pioneering Information Technology company.</span>
            <p className="mt-5">
              Our in-house development team is dedicated to crafting a
              user-friendly and technologically robust CPaaS platform,
              empowering clients to deploy efficient communication solutions
              seamlessly.
            </p>
          </p>
          <a href="contact">
            <button
              className="bg-[#5F2466] mt-8 text-[#FFFFFF] w-[129px] h-[56px] py-[10px] px-[25px] rounded-[10px]"
              onClick={(event) => {
                event.target.style.backgroundColor =
                  event.target.style.backgroundColor === "rgb(252, 101, 23)"
                    ? "#5F2466"
                    : "#FC6517";
              }}
            >
              Contact Us
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h2 className="text-[#5F2466] text-[40px] font-bold leading-[50px]">
          Why choose us?
        </h2>
        <p className="text-[#000000] font-normal leading-[26px] mt-6 text-[16px]">
          We are about quality and trust
        </p>
      </div>
      <div className="flex flex-row w-[200px] h-[200px] mt-16 gap-7 ml-60">
        <img src={a} alt="" />
        <img src={b} alt="" />
        <img src={c} alt="" />
        <img src={d} alt="" />
      </div>
      <Frequtly />
      <Photo />
    </div>
  );
};

export default About;
