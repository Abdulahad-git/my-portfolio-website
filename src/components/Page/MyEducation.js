"use client";

import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      title: "B.Sc. Computer Science",
      school: "The New College",
      year: "2021 - 2023",
      icon: GraduationCap,
    },
    {
      title: "Higher Secondary Certificate",
      school: "St. Joseph High School",
      year: "2018 - 2020",
      icon: BookOpen,
    },
    {
      title: "Secondary School Leaving Certificate",
      school: "St. Joseph High School",
      year: "2017 - 2018",
      icon: School,
    },
  ];

  return (
    <section className="w-full font1 bg-transparent backdrop-blur border-gray-200/60 py-16 px-6 md:px-12 relative  ">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-white/10">
            Education
          </span>
        </h2>

        {/* Education List */}
        <div className="flex flex-col gap-4 w-full">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="flex items-center border border-red-100/ bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-red-500">
                  <Icon size={13} />
                </div>

                {/* Text */}
                <div className="ml-4 flex-1">
                  <h3 className="text-xs font-semibold">{edu.title}</h3>
                  <p className="text-xs opacity-80">{edu.school}</p>
                </div>

                {/* Year */}
                <span className="text-xs opacity-70">{edu.year}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gradient-to-t from-red-500/50 to-red-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-30 w-[450px] h-[450px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
