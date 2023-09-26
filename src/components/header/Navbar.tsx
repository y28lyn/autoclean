import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="/" title="" className="flex">
                <p>Autoclean</p>
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link
                to="/"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Accueil{" "}
              </Link>

              <Link
                to="/tarif"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Tarif{" "}
              </Link>

              <Link
                to="/contact"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Contact{" "}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
