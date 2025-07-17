import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, } from "lucide-react"; // For hamburger icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = false;
  const userRole = "member";

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img src="https://pngimg.com/uploads/dumbbell/dumbbell_PNG102652.png" alt="GymPro Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-900">GymPro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/classes" className="hover:text-blue-600 transition">Classes</Link>
          <Link to="/trainers" className="hover:text-blue-600 transition">Trainers</Link>
          <Link to="/membership" className="hover:text-blue-600 transition">Membership</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* CTA Button (Desktop Only) */}
        <div className="hidden md:block">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/classes" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Classes</Link>
          <Link to="/trainers" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Trainers</Link>
          <Link to="/membership" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Membership</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center"
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
