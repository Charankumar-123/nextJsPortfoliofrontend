import Link from "next/link";
import Image from "next/image";
import { ColourfulText } from "./ui/colourful-text";
import AboutComponent from "./Aboutpage";
import SkillsComponent from "./Skillspage";
import Education from "@/app/education/page";

export default function Home() {
  return (

    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-400 text-white px-6 pt-550  w-screen">
    {/* <div className="pt-16 text-white bg-gray-900 min-h-screen w-screen"> */}
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center p-10">
        <Image 
          // src='img/profile.png'
          src='data:image/jpeg;base64,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' // ✅ Corrected Image Path
          alt="Profile Image" 
          width={150} 
          height={150} 
          className="rounded-full shadow-lg" 
        />
        <h1 className="text-4xl font-bold mt-4">
          Hi, I'm <ColourfulText text="Chelikam Charan Kumar" /> 👋
        </h1>
        <p className="text-lg mt-2 text-gray-300">
          A Passionate Web Developer | Next.js | React | Spring Boot
        </p>
        <div className="mt-4 flex space-x-4">
          <Link href="/projectt">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition cursor-pointer">
              See Projects
            </button>
          </Link>
          <Link href="/user">
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition cursor-pointer">
              Connect With Me
            </button>
            </Link>
            <Link href="/contact">
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition cursor-pointer">
              Hire Me
            </button>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Next.js</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">React.js</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Spring Boot</span>
        </div>
      </section>
      <section id="skills" className="pt-40">
        <SkillsComponent />
      </section>

      <section id="skills">
        <Education />
      </section>
    </div>
  );
}
