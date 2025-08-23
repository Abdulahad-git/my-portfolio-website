"use client";

export default function Copyright() {
  return (
    <footer className="w-full mt-16 py-6 bg-white/5 backdrop-blur-md border-t border-white/20 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Abdulahad. All rights reserved.</p>
    </footer>
  );
}
