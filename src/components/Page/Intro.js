"use client";

import { FileText } from "lucide-react";

export default function Intro() {
  return (
    <div className="font1 py-20 md:py-30 max-w-7xl  mx-auto relative fade-in-delay w-full flex bg-transparent flex-col   bg-gray-200">
      <div className="in-w-[350px] w-[70%] text-gray-900 leading-[1.5] flex flex-col   mx-10 md:mx-auto  md:items-center md:justify-center  font-light select-none ">
        <div className=" text-4xl    flex-wrap text-left md:text-6xl">
          Hi, I'm{" "}
          <a className="font-semibold text-red-500 whitespace-nowrap text-left ">
            Abdul ahad
          </a>
        </div>
        <div className="mt-3">
          <a className="font-bold text-4xl  text-start md:text-7xl ">
            Software Developer{" "}
          </a>
        </div>
        <p className="mt-5 text-md md:text-xl font1">
          I build scalable, high-performance web applications using the MERN
          stack and deploy them using AWS, Jenkins, and industry-grade CI/CD
          pipelines.
        </p>

        <div className="w-full flex md:items-center   md:justify-center  mt-4 py-4">
          <button className="contrast-bg flex items-center hover:bg-gray-100 gap-2 cursor-pointer text-xs text-white px-4 py-2 rounded">
            <FileText color="white" size={"16"} />
            <span className="text-sm md:text-sm font1">Dowload CV</span>
          </button>
        </div>
      </div>

      <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-t z-[-1] from-red-500/30 to-red-50/30 absolute top-0 left-10 rounded-full blur-2xl"></div>
      <div className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-to-t z-[-1] from-red-500/30 to-red-50/30 absolute top-0 right-10 rounded-full blur-2xl"></div>
    </div>
  );
}
