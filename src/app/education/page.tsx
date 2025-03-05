"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Education() {
  const educationData = [
    {
      title: "Bachelor of Technology (B.Tech)",
      stream: "Computer Science & Engineering",
      institution: "XYZ University",
      year: "2020 - 2024",
      img: "/img/btech-marks-memo.jpg",
    },
    {
      title: "Intermediate (12th Grade)",
      stream: "Science Stream",
      institution: "ABC Junior College",
      year: "2018 - 2020",
      img: "/img/btech-marks-memo.jpg",
    },
    {
      title: "High School (10th Grade)",
      stream: "Secondary Education",
      institution: "XYZ High School",
      year: "2016 - 2018",
      img: "/img/btech-marks-memo.jpg",
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500 px-6 py-12">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-200 mb-10"
      >
        My Education
      </motion.h1>

      {/* Education Cards */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg flex flex-col items-center md:flex-row gap-6 transition-all duration-300"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                width={180}
                height={180}
                src={edu.img}
                alt={`${edu.title} Marks Memo`}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="text-left flex-1">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-300 text-transparent bg-clip-text">
                {edu.title}
              </h2>
              <p className="text-gray-300">{edu.stream}</p>
              <p className="text-gray-400">{edu.institution} | {edu.year}</p>
            </div>
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
            ⬅️ Go Back
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
