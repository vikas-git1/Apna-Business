import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-orange-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-white">Apna</span>
          <span className="text-gray-100">Business</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <FaUserCircle className="text-2xl" />
              <span className="hidden sm:inline">Vikas</span>
            </>
          ) : (
            <>
              <button
                className="cursor-pointer bg-white text-orange-500 px-5 py-2 rounded-xl w-35 text-xl font-bold"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <span className="text-3xl font-extrabold"> /</span>
              <button
                className="cursor-pointer bg-white text-orange-500 px-5 py-2 rounded-xl w-35 text-xl font-bold"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
