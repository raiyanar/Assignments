import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className=" bg-gray-800 text-white py-4 space-between">
        <div className=" md:hidden text-lg font-bold flex justify-between items-center max-w-7xl mx-auto px-4">
          <button className="cursor-pointer text-white focus:outline-none ml-4" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {!isMenuOpen ? <Link to="/">Ostad</Link> : ""}
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white py-4 text-center">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gray-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center px-4">
          <div className="text-lg font-bold">
            <Link to="/">Ostad</Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gray-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
