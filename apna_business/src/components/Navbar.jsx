import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ username = "Vikas" }) {
  return (
    <nav className="w-full bg-orange-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Apna</span>
          <span className="text-gray-100">Business</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl" />
          <span className="hidden sm:inline">{username}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
