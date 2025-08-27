"use client";

import { FileText } from "lucide-react";

export default function Intro() {
  return (
    <div className="font1   py-30 max-w-7xl overflow-auto mx-auto relative fade-in-delay w-full flex primary-bg flex-col items-center justify-center bg-gray-200">
      <div className="in-w-[350px] w-[70%] text-gray-900 leading-[1.5] flex flex-col  items-center justify-center  text-center font-light select-none ">
        <div className=" text-2xl md:text-6xl">
          Hi, I'm <a className="font-semibold text-red-500 ">Abdul ahad</a>
        </div>
        <div className="mt-1">
          <a className="font-bold text-3xl whitespace-nowrap md:text-7xl ">
            Software Developer{" "}
          </a>
        </div>
        <p className="mt-5 text-xs md:text-xl font1">
          I build scalable, high-performance web applications using the MERN
          stack and deploy them using AWS, Jenkins, and industry-grade CI/CD
          pipelines.
        </p>
      </div>

      <div className="w-full flex items-center justify-center  mt-4 p-4">
        <button className="contrast-bg flex items-center hover:bg-gray-100 gap-2 cursor-pointer text-xs text-white px-4 py-2 rounded">
          <FileText color="white" size={"16"} />
          <span className=" font1">Dowload CV</span>
        </button>
      </div>

      <div className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-t z-[-1] from-red-500/30 to-red-50/30 absolute top-0 left-10 rounded-full blur-2xl"></div>
      <div className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-to-t z-[-1] from-red-500/30 to-red-50/30 absolute top-0 right-10 rounded-full blur-2xl"></div>
    </div>
  );
}
