import React, { useState,useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // ChevronDown for dropdown


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
   const dropdownRefDesktop = useRef(null);
  const dropdownRefMobile = useRef(null);
   const dropdownRef = useRef(null);

  const isLoggedIn = true; // Change this to false to hide profile section
  const userRole = "member"; // or "admin", "trainer", etc.

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/login");
  };

     // Handle outside click for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefDesktop.current &&
        !dropdownRefDesktop.current.contains(event.target)
      ) {
        setDropdownOpenDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle outside click for mobile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefMobile.current &&
        !dropdownRefMobile.current.contains(event.target)
      ) {
        setDropdownOpenMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    {/* Logo + Title */}
    <div className="flex items-center space-x-2">
      <img
        src="https://pngimg.com/uploads/dumbbell/dumbbell_PNG102652.png"
        alt="GymPro Logo"
        className="h-8 w-8"
      />
      <span className="text-xl font-bold text-gray-900">GymPro</span>
    </div>

    {/* Desktop Navigation Links */}
    <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
      <Link to="/" className="hover:text-blue-600 transition">Home</Link>
      <Link to="/classes" className="hover:text-blue-600 transition">Classes</Link>
      <Link to="/trainers" className="hover:text-blue-600 transition">Trainers</Link>
      <Link to="/membership" className="hover:text-blue-600 transition">Membership</Link>
      <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
    </div>

    {/* Desktop Profile or CTA */}
    <div className="hidden md:flex items-center space-x-4">
      {isLoggedIn ? (
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
              alt="Profile"
            />
            <ChevronDown size={18} />
          </button>

          { dropdownOpen && (
      <div
        ref={dropdownRef}
        className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg py-2 z-50"
      >
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={() => setDropdownOpen(false)}
        >
          Profile
        </Link>
        <Link
          to="/dashboard"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={() => setDropdownOpen(false)}
        >
          Dashboard
        </Link>
        <button
          onClick={() => {
            handleLogout();
            setDropdownOpen(false);
          }}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    )}
        </div>
      ) : (
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition"
        >
          Join Now
        </Link>
      )}
    </div>

    {/* Mobile Profile + Hamburger Menu */}
    <div className="flex md:hidden items-center space-x-3">
      {isLoggedIn && (
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
              alt="Profile"
            />
            <ChevronDown size={18} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg py-2 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/Dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-700"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu Content */}
  {menuOpen && (
    <div className="md:hidden px-4 pb-4 space-y-2">
      <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/classes" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Classes</Link>
      <Link to="/trainers" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Trainers</Link>
      <Link to="/membership" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Membership</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Contact</Link>

      {!isLoggedIn && (
        <Link
          to="/register"
          onClick={() => setMenuOpen(false)}
          className="block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center"
        >
          Join Now
        </Link>
      )}
    </div>
  )}
</nav>

  );
};

export default Navbar;
