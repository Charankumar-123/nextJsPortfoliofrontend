"use client"; // Ensures this component runs in a client environment

import { useState } from "react";
import { motion } from "framer-motion";

export default function UserComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/storing-users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Full Backend Response:", responseData);

      const responseBody = responseData.body;

      if (!responseBody || typeof responseBody.status === "undefined") {
        throw new Error("Invalid response format from the backend");
      }

      if (!responseBody.status) {
        setErrorMessage(responseBody.message || "Something went wrong.");
        alert(responseBody.message || "Something went wrong.");
        return;
      }

      alert(responseBody.message || "Details submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrorMessage("");

    } catch (error) {
      console.error("Error in fetch or processing response:", error);
      setErrorMessage("An error occurred while submitting the form.");
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 w-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
      >
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Submit Your Details
        </h1>

        {/* Error Message */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-red-400 text-center bg-red-900/20 p-2 rounded-lg"
          >
            {errorMessage}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-gray-300 text-lg font-medium">Name</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-300 text-lg font-medium">Email</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-300 text-lg font-medium">Message</label>
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-400"
              required
            ></motion.textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold p-3 rounded-lg transition-all duration-300 shadow-lg"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
