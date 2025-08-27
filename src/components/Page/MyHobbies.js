"use client";

import { Camera, Video, Palette, Brain, Laptop, Film } from "lucide-react";

export default function Hobbies() {
  const hobbies = [
    { icon: Palette, text: "Photoshop & Creative Design" },
    { icon: Camera, text: "Photography" },
    { icon: Film, text: "Mobile Cinematic Videography" },
    { icon: Video, text: "Video Editing" },
    { icon: Brain, text: "Exploring AI Development" },
    { icon: Laptop, text: "Java Desktop App Projects" },
  ];

  return (
    <section className="w-full font1 bg-transparent backdrop-blur border-gray-200/60 py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-white/10">
            Hobbies & Interests
          </span>
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl">
          Outside of work, I love spending my time exploring creative and
          technical passions — from photography to coding personal projects.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {hobbies.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 shadow-sm backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              <Icon className="w-5 h-5  hover:text-white group-hover:text-white transition-colors duration-300" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[180px] h-[180px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[140px] h-[140px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
