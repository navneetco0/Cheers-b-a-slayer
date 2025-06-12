import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-black font-bold text-lg">
                <img src={logo} className="h-10 rounded-lg" />
              </span>
            </div>
            <span className="text-xl font-bold text-white">
              Cheers be a Slayer
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              Create Event
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              Login
            </button>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
            >
              Events
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
            >
              Create Event
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
            >
              Login
            </a>
            <a
              href="#"
              className="block px-3 py-2 bg-yellow-500 text-black rounded-md font-medium"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
