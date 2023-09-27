import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../style.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent py-4 absolute flex justify-center items-center p-6 z-50 h-fit">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          Autoclean
        </Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div
          className={`lg:flex space-x-4 justify-center ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/" className="text-white">
            Accueil
          </Link>
          <Link to="/tarifs" className="text-white">
            Tarifs
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a className="text-white" href="#">
            <i className="fab fa-twitter"></i>Twitter
          </a>
          <a className="text-white" href="#">
            <i className="fab fa-facebook"></i>Facebook
          </a>
          <a className="text-white" href="#">
            <i className="fab fa-instagram"></i>Insta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
