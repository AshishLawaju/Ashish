import React from "react";
import workboy from "./workboy.webp";
import Image from "next/image";
import { FaArrowRightLong, FaRegEnvelope } from "react-icons/fa6";
const WorkTogether = () => {
  return (
    <section className="bg-[#ebebeb] pb-12  dark:bg-[#0C0202] container  flex flex-col justify-center items-center rounded-3xl">
      <div className="text-primary-dark dark:text-[#fafafa] text-[160px] font-semibold px-3 ">
        <h2 className=" text-center">
          LET&apos;S W
          <div className="w-[118px] h-[118px] inline-block animate-pulse">
            <Image alt="work" src={workboy}></Image>
          </div>
          RK
        </h2>
        <h2 className="text-center leading-[90px] ">TOGETHER</h2>
      </div>

      <h3 className="text-2xl text-slate-500 dark:text-slate-300 mt-14 font-light">
        Lets make something beautiful and blow your audience&apos; mind.
      </h3>
      <div className="flex justify-around w-full lg:w-[70%] mt-6">
        <div className="flex  items-center gap-2  ">
          {" "}
          <FaRegEnvelope className="text-[18px]"/>
          <div className="border-b border-black dark:border-main-white my-2">Write an Email</div>
        </div>

        <h1 className="text-primary text-3xl">ashishlawaju143@gmail.com</h1>
        <button type="button" className="bg-white px-7 py-[10px] rounded-3xl flex items-center gap-2 dark:bg-btn dark:main-white">Contact Via Form <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default WorkTogether;
