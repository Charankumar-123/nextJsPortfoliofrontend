"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SkillsComponent() {
  const skills = [
    {
      category: "Frontend Development",
      description: "I have experience building responsive and interactive web applications.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
    },
    {
      category: "Backend Development",
      description: "I have experience developing robust backend systems and REST APIs.",
      technologies: ["Java", "Spring Framework", "Spring Boot"],
    },
    {
      category: "Database Management",
      description: "I have experience designing and managing relational databases.",
      technologies: ["MySQL"],
    },
    {
      category: "Testing",
      description: "I have learned manual testing methodologies and best practices.",
      technologies: ["Manual Testing"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500 px-6 py-12 w-screen">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-200"
      >
        My Skills
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-lg text-gray-200 text-center mb-10"
      >
        These are the technologies and tools I have worked with.
      </motion.p>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-300 text-transparent bg-clip-text">
              {skill.category}
            </h2>
            <p className="text-gray-300 mt-2">{skill.description}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {skill.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md transition-all cursor-pointer"
          >
            ⬅️ Go Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
