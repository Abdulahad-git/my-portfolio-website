"use client";

import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email Me",
      link: "mailto:your.email@example.com",
      text: "Let’s talk! (I promise I reply faster than your coffee cools.)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile",
      text: "Professional stalking? Totally fine here.",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/yourusername",
      text: "Where my ideas and caffeine collide.",
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "https://twitter.com/yourusername",
      text: "Occasional thoughts, code rants & memes.",
    },
  ];

  return (
    <section className="w-full font1 bg-transparent backdrop-blur border-gray-200/60 py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Let’s{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-white/10">
            Get in Touch
          </span>
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl">
          Have a question, project idea, or just want to share a cool tech meme?
          My inbox and DMs are always open — I might even respond with a GIF.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {contacts.map(({ icon: Icon, label, link, text }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-4 rounded-lg bg-white/10 shadow-sm backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-red-500 hover:text-white group"
            >
              <Icon className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-300" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-medium">{label}</span>
                <span className="text-xs text-gray-500 group-hover:text-white transition-colors duration-300">
                  {text}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Enquiry Form */}
        <div className="w-full mt-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg text-left">
          <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-white/10">
            Let’s Start a Conversation
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Got something on your mind? Whether it’s about tech, design, or your
            latest Netflix binge — type away. I read every message!
          </p>
          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 text-sm rounded-md bg-white/5 border border-red-400/40 focus:border-red-400 focus:ring-1 focus:ring-red-400 outline-none transition-all text-gray-500 placeholder-gray-400 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 text-sm rounded-md bg-white/5 border border-red-400/40 focus:border-red-400 focus:ring-1 focus:ring-red-400 outline-none transition-all text-gray-500 placeholder-gray-400 w-full"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="px-4 py-2 text-sm rounded-md bg-white/5 border border-red-400/40 focus:border-red-400 focus:ring-1 focus:ring-red-400 outline-none transition-all text-gray-500 placeholder-gray-400 resize-none w-full"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-md bg-gradient-to-r from-red-500 to-red-400 hover:opacity-90 transition-all text-white w-full"
            >
              <Send className="w-4 h-4" />
              Send Enquiry
            </button>
          </form>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[180px] h-[180px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[140px] h-[140px] bg-gradient-to-t from-red-500/15 to-red-50/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
