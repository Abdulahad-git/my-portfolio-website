"use client";

export default function Skills() {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "AWS (EC2, S3)",
    "Docker",
    "Jenkins",
    "Socket.IO",
    "Photoshop",
  ];

  return (
    <section className="w-full font1 bg-transparent backdrop-blur   border-gray-200/60 py-24 px-6 md:px-12 relative ">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* HEADING */}
        <h2 className="text-4xl  md:text-5xl font-bold tracking-tight">
          Technologies{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-white/10">
            I Have Mastered
          </span>
        </h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-5 text-sm whitespace-nowrap  py-4 rounded-lg bg-white/10 text-gray-800 shadow-sm backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-30 right-20 w-[500px] h-[500px] bg-gradient-to-t from-red-500/20 to-red-50/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}
