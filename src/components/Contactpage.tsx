import Link from "next/link";

export default function Contactpage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 to-blue-400 text-white px-6 pt-60 w-screen">
    {/* // <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 pt-16 w-screen"> */}
      <h1 className="text-5xl font-extrabold text-center mb-4">
        Contact <span className="text-blue-400">Me</span>
      </h1>
      <p className="text-lg text-gray-400 mb-8 text-center">
        Let's connect! Feel free to reach out.
      </p>

      {/* Contact Card */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <div className="space-y-4">
          <p className="text-lg">
            📧 Email: 
            <a href="mailto:chelikamcharankumar@gmail.com" className="text-blue-400 hover:text-blue-300 transition">
              your.email@example.com
            </a>
          </p>
          <p className="text-lg">
            💼 LinkedIn: 
            <a href="https://www.linkedin.com/in/chelikam-charan-kumar-327122200/" className="text-blue-400 hover:text-blue-300 transition">
              linkedin.com/in/yourprofile
            </a>
          </p>
          <p className="text-lg">
            🔗 GitHub: 
            <a href="https://github.com/Charankumar-123" className="text-blue-400 hover:text-blue-300 transition">
              github.com/yourgithub
            </a>
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="mt-6 text-center">
          <a
            href="/resume.pdf"  // Make sure "resume.pdf" is placed inside the "public" folder
            download="Your_Name_Resume.pdf"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition-all inline-block"
          >
            📄 Download My Resume
          </a>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Link href="/">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-md transition-all cursor-pointer">
            ⬅️ Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
