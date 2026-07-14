import { Menu, X, BrainCircuit } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Features", path: "#features" },
    { name: "Roadmaps", path: "#roadmaps" },
    { name: "Companies", path: "#companies" },
    { name: "FAQ", path: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BrainCircuit className="text-blue-500" size={34} />
          <div>
            <h1 className="font-bold text-xl text-white">
              Placement Navigator
            </h1>
            <p className="text-xs text-gray-400">
              AI Career Guide
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="hover:text-blue-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="block text-gray-300"
            >
              {item.name}
            </a>
          ))}

          <Link to="/login" className="block">
            Login
          </Link>

          <Link to="/signup" className="block">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}