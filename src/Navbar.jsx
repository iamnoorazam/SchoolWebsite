import React, { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold"
      : "px-4 py-2 hover:bg-blue-600 rounded-lg";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-500 text-white shadow-md">
      <div className="flex items-center justify-between px-6 h-20">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <GraduationCap size={36} />
          <div>
            <h1 className="text-2xl font-bold">Bright Future School</h1>
            <p className="text-sm">Excellence in Education</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/about" className={getLinkClass("/about")}>About Us</Link>
          <Link to="/classes" className={getLinkClass("/classes")}>Classes</Link>
          <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
        </div>

        {/* Login Buttons (Desktop Only) */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-medium">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg text-lg font-medium">
            Register
          </Link>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-blue-600 overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen pb-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 text-lg">

          <Link to="/" className={getLinkClass("/")} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className={getLinkClass("/about")} onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/classes" className={getLinkClass("/classes")} onClick={() => setOpen(false)}>Classes</Link>
          <Link to="/contact" className={getLinkClass("/contact")} onClick={() => setOpen(false)}>Contact</Link>

          <Link to="/login" className="px-4 py-2 bg-green-600 rounded-lg" onClick={() => setOpen(false)}>
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-blue-800 rounded-lg" onClick={() => setOpen(false)}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
