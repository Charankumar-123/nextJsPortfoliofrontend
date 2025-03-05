"use client";

import { ColourfulText } from "@/components/ui/colourful-text";
import { motion } from "framer-motion";

export default function AboutComponent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl bg-white p-8 rounded-lg shadow-lg text-gray-800 mx-auto mt-10"
    >
      {/* Colorful Animated Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        <ColourfulText text="About Me" />
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed text-center">
        Hello! I'm a passionate <strong>frontend developer</strong> specializing in{" "}
        <strong>Next.js, React, and Tailwind CSS</strong>. I love creating modern, responsive, and 
        beautiful web applications. With experience in <strong>JavaScript, TypeScript, and UI/UX design</strong>, 
        I am always eager to learn and implement the latest technologies.
      </p>

      {/* Skills Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          <ColourfulText text="My Skills" />
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Next.js & React.js</li>
          <li>TypeScript & JavaScript</li>
          <li>Tailwind CSS & Material UI</li>
          <li>Backend: Node.js, Express, MongoDB, Spring Boot</li>
          <li>API Integration & Authentication</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          <ColourfulText text="My Experience" />
        </h2>
        <p className="text-gray-700">
          - Built multiple e-commerce applications with React and Spring Boot.<br />
          - Worked on UI/UX enhancements using Tailwind CSS and Material UI.<br />
          - Developed full-stack applications integrating REST APIs and database management.
        </p>
      </div>

      {/* View Projects Button */}
      <div className="mt-6 text-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/projectt"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg transition"
        >
          View My Projects
        </motion.a>
      </div>
    </motion.section>
  );
}
