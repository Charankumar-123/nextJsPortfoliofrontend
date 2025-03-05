// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50">
//       <ul className="flex justify-center space-x-6 text-lg text-white">
//         <li><Link href="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link></li>
//         <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link></li>
//         <li><Link href="/projectt" className="hover:text-blue-400 transition-colors duration-300">Projects</Link></li>
//         <li><Link href="/skills" className="hover:text-blue-400 transition-colors duration-300">Skills</Link></li>
//         <li><Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
//         <li><Link href="/user" className="hover:text-blue-400 transition-colors duration-300">User Details</Link></li>

//       </ul>
//     </nav>
//   );
// }


// import { Roboto } from 'next/font/google';
// import Link from "next/link";

// // Load Roboto font
// const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

// export default function Navbar() {
//   return (
//     <nav className={`fixed top-0 left-0 w-full p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50 ${roboto.className}`}>
//       <ul className="flex justify-center space-x-6 text-lg text-white">
//         <li><Link href="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link></li>
//         <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link></li>
//         <li><Link href="/projectt" className="hover:text-blue-400 transition-colors duration-300">Projects</Link></li>
//         <li><Link href="/skills" className="hover:text-blue-400 transition-colors duration-300">Skills</Link></li>
//         <li><Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
//         <li><Link href="/user" className="hover:text-blue-400 transition-colors duration-300">User Details</Link></li>
//       </ul>
//     </nav>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Home, Info, Folder, Code, Mail, User } from "lucide-react"; // Importing icons
import Link from "next/link";

const navLinks = [
  { href: "/", icon: <Home size={22} />, label: "Home" },
  { href: "/about", icon: <Info size={22} />, label: "About" },
  { href: "/projectt", icon: <Folder size={22} />, label: "Projects" },
  { href: "/skills", icon: <Code size={22} />, label: "Skills" },
  { href: "/contact", icon: <Mail size={22} />, label: "Contact" },
  { href: "/user", icon: <User size={22} />, label: "User Details" },
  { href: "/education", icon: <User size={22} />, label: "Education" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full p-4 z-50 bg-transparent"
    >
      {/* Background Animation */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30"
      ></motion.div>

      {/* Navbar Items */}
      <ul className="relative flex justify-center space-x-8 text-lg text-white backdrop-blur-md bg-white/10 rounded-xl py-3 px-6 shadow-lg">
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={link.href}
              className="flex items-center gap-2 transition-all duration-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 font-semibold"
            >
              {link.icon} {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}




