import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="bg-blue-600 text-white w-full shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:opacity-80">
          My Website
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link to="/" className={location.pathname === "/" ? "underline font-bold" : "hover:underline"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "underline font-bold" : "hover:underline"}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === "/services" ? "underline font-bold" : "hover:underline"}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "underline font-bold" : "hover:underline"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
