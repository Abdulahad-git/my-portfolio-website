"use client";

export default function WhatIDo() {
  return (
    <section className="w-full font1 bg-white/5 backdrop-blur  border-gray-200/60 py-8  px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        {/* PROFILE IMAGE */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" // replace with your image path
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ABOUT HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          About{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-2xl text-gray-700 text-base md:text-lg leading-relaxed">
          I’m a software developer with{" "}
          <span className="font-semibold text-gray-900">1.5+ years </span>
          of experience building high-performance full-stack applications using
          the MERN stack. Passionate about crafting seamless user experiences,
          designing robust backend systems, and blending technology with
          creativity through filmmaking, Photoshop, and video editing.
        </p>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
