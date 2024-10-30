import React, { useState } from "react";
import { MdSort } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white p-4 shadow-lg relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">

        
        <a href="#" className="text-3xl font-bold">Shazi</a>

        {/* Centered Menu (Desktop) */}
        <ul className="hidden lg:flex space-x-6 items-center justify-center flex-1 text-lg">
          <li><a href="/add" className="hover:text-blue-200">Home</a></li>
          <li><a href="#" className="hover:text-blue-200">Courses</a></li>
          <li><a href="#" className="hover:text-blue-200">School</a></li>
          <li><a href="#" className="hover:text-blue-200">Lectures</a></li>
          <li><a href="#" className="hover:text-blue-200">Syllabus</a></li>
          <li><a href="#" className="hover:text-blue-200">Strength</a></li>
        </ul>

        {/* Login/SignUp Buttons */}
        <div className="hidden lg:flex space-x-4 absolute top-4 right-4">
          <a href="#" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Login</a>
          <a href="#" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">SignUp</a>
        </div>

        {/* Mobile Menu Icon */}
        {!isMenuOpen && (
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <MdSort size={28} />
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-600 text-white space-y-4 py-2 px-4 w-64 absolute top-1 right-16 rounded-lg shadow-lg z-18">
          {/* Close button for mobile menu */}
          <div className="flex justify-start" onClick={toggleMenu}>
            <AiOutlineClose size={28} className="cursor-pointer" />
          </div>

          {/* Centered Menu (Mobile) */}
          <ul className="space-x-2 space-y-3">
            <li><a href="/add" className="hover:text-blue-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-300">Courses</a></li>
            <li><a href="#" className="hover:text-blue-300">School</a></li>
            <li><a href="#" className="hover:text-blue-300">Lectures</a></li>
            <li><a href="#" className="hover:text-blue-300">Syllabus</a></li>
            <li><a href="#" className="hover:text-blue-300">Strength</a></li>
          </ul>

          {/* Login/SignUp Buttons for Mobile */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="px-4 py-2 bg-blue-400 rounded hover:bg-blue-800">Login</a>
            <a href="#" className="px-4 py-2 bg-blue-400 rounded hover:bg-blue-800">SignUp</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
