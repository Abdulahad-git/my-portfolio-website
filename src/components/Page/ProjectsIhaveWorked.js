"use client";

export default function Projects() {
  const projects = [
    {
      title: "EdTech Platform",
      description:
        "A modern learning platform with real-time quizzes and progress tracking.",
      image:
        "https://cdn.dribbble.com/userupload/12346892/file/original-31585598a3835cd12d5046bb9beeb2ae.png?resize=2048x1536&vertical=center",
      tech: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Jewellery Billing Software",
      description:
        "An offline-first billing & stock management system for jewelers.",
      image:
        "https://cdn.dribbble.com/userupload/31176887/file/original-fe66240ebbfc5ba49331d7f5b25d634e.png?format=webp&resize=640x480&vertical=center",
      tech: ["React.js", "Electron.js", "SQLite"],
    },
    {
      title: "Chat App",
      description:
        "A real-time messaging app with group chat and file sharing support.",
      image:
        "https://cdn.dribbble.com/userupload/12561819/file/original-3c141198e254a39a8ea556829d76088f.png?resize=2048x1536&vertical=center",
      tech: ["Socket.IO", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section className="w-full font1 bg-transparent backdrop-blur border-gray-200/60 py-14 px-6 md:px-12 relative  ">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Projects{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
            I Have Worked On
          </span>
        </h2>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-500 hover:bg-red-500 hover:text-white"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg md:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm opacity-80">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
