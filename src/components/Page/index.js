"use client";

import { PRIMARY_COLOR } from "@/constants/color";
import Header from "./Header";
import Intro from "./Intro";
import WhatIDo from "./WhatIDo";
import Skills from "./MySkills";
import Projects from "./ProjectsIhaveWorked";
import Education from "./MyEducation";
import EagerToLearn from "./MyHobbies";
import Contact from "./GetInTouch";
import Copyright from "./Footer";

export default function Page() {
  return (
    <div className="relative w-screen h-screen overflow-y-scroll bg-gray-50  ">
      {/* 🔗 Main content */}
      <Header />
      <Intro />

      <WhatIDo />
      <Skills />
      <Projects />
      <Education />
      <EagerToLearn />
      <Contact />
      {/* <Copyright /> */}
    </div>
  );
}
