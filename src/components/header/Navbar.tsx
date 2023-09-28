import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-transparent fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="autoclean_icon.png"
                className="h-8 mr-3"
                alt="Autoclean Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Autoclean
              </span>
            </Link>
          </div>
          <div className="flex md:order-2">
            <a className="text-white md:block hidden" href="#">
              07 56 84 73 46
            </a>
            <a className="text-white ml-2 md:block hidden" href="#">
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
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Ouvrir le menu</span>
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
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              menuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
                  aria-current="page"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/tarifs"
                  className="block py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-white">
        <div className="bg-cover bg-center min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              loading="lazy"
              className="w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1550565076-b2371ea1a324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              role="presentation"
              aria-hidden="true"
            />
          </div>

          <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

          <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

          <div className="container mx-auto text-center z-50">
            <h1 className="text-5xl font-extrabold mb-4">Autoclean</h1>
            <p className="text-lg opacity-80 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              esse eius aliquid.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-black p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Réserver
              </button>
              <button className="outline p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Lire plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
