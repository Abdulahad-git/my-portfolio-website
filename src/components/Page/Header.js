"use client";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/constants/color";
import { getGreetingByIST } from "@/helper/greeting";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [mounted, setMounted] = useState(false); // 👈 flag to wait for hydration

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setMounted(true); // component is now hydrated

    const interval = setInterval(() => {
      const now = new Date();
      setTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
      setGreeting(getGreetingByIST());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={` sticky top-0 left-0 z-[100]  px-6 py-2`}>
      <div className="relative bg-transparent backdrop-blur px-10 rounded-full font1  transition-all border-b border-gray-200 flex items-center justify-between py-4 p-3">
        <div className="text-xs md:text-sm m-0 font-semibold primary-text-color">
          {mounted && greeting}
          <div className="text-[6px] md:text-[10px] font-normal text-gray-700">
            {mounted && `${days[new Date().getDay()]}, ${time} IST`}
          </div>
        </div>
        <div className="items-center font1 hidden md:flex">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <div
              key={item}
              className="text-xs secondary-text-color px-4 py-1.5 rounded-full transition-all hover:bg-gray-200 select-none cursor-pointer mr-1"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  );
}
