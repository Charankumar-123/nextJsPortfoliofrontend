import Link from "next/link";

export default function ProjectsPage() {
  return (
    // <div className="min-h-screen bg-gray-900 text-white px-6 pt-60 w-screen">
    // <div className="min-h-screen animated-bg text-white px-6 pt-60 w-screen">
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-400 text-white px-6 pt-60 w-screen">


      <h1 className="text-5xl font-extrabold text-center mb-6">
        My <span className="text-blue-400">Projects</span>
      </h1>
      <p className="text-lg text-gray-400 text-center mb-10">
        Here are some of the projects I have worked on.
      </p>

      {/* Project List */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* E-Commerce Project */}
        <div className="group bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-400">E-Commerce Platform</h2>
          <p className="text-gray-300 mt-2">
            A full-stack e-commerce application where users can browse products, add them to the cart, place orders, and make payments. 
          </p>
          <p className="mt-2"><strong>Features:</strong></p>
          <ul className="list-disc list-inside text-gray-300">
            <li>JWT-based authentication</li>
            <li>Product listing and search</li>
            <li>Shopping cart and order history</li>
          </ul>
        </div>

        {/* Speech Emotion Recognition */}
        <div className="group bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-400">Speech Emotion Recognition</h2>
          <p className="text-gray-300 mt-2">
            A deep learning-based framework that detects emotions from speech recordings using neural networks.
          </p>
          <p className="mt-2"><strong>Features:</strong></p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Audio feature extraction using Librosa</li>
            <li>Deep learning model trained on speech datasets</li>
          </ul>
        </div>

        {/* Employee Management System */}
        <div className="group bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-400">Employee Management System</h2>
          <p className="text-gray-300 mt-2">
            A web-based system that helps organizations manage employee records, track attendance, and handle payroll processing.
          </p>
        </div>

        {/* YouTube Clone */}
        <div className="group bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-400">YouTube Clone</h2>
          <p className="text-gray-300 mt-2">
            A front-end project that replicates the UI of YouTube using HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <Link href="/">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-md transition-all">
            ⬅️ Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
