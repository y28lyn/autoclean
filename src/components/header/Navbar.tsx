import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 top-0 left-0 text-white">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="autoclean_icon.png"
              className="h-8 mr-3"
              alt="Autoclean Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Autoclean
            </span>
          </Link>
        </div>
        <div className="flex md:order-2">
          <p className="text-white md:block hidden">07 56 84 73 46</p>
          <a
            className="text-white ml-2 md:block hidden"
            href="https://www.instagram.com/autoclean.lyon/"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Ouvrir le menu</span>
            {menuOpen ? (
              // Afficher la croix lorsque le menu est ouvert
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Afficher les lignes lorsque le menu est fermé
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          {menuOpen && (
            // Afficher le menu mobile sous forme de carré blanc en bas de la croix
            <div
              className="absolute bottom-0 left-0 top-16 w-full h-fit bg-transparent p-4 z-50"
              id="navbar-sticky"
            >
              <ul className="flex flex-col font-medium bg-white rounded shadow-sm">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-black md:link md:link-underline md:link-underline-black"
                    aria-current="page"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tarifs"
                    className="block py-2 pl-3 pr-4 text-black md:link md:link-underline md:link-underline-black"
                  >
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 pl-3 pr-4 text-black md:link md:link-underline md:link-underline-black"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
