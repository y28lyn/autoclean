import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="pb-10 pt-1 dark:bg-[#000302] bg-white">
        <div className="w-[95%] md:w-[98%] dark:bg-white bg-[#000302] h-[1px] px-2 mx-auto"></div>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="md:pt-10 pt-6">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
                <ul className="flex flex-col md:flex-row justify-center items-center md:items-start gap-x-8 gap-y-2 md:mb-[2px]">
                  <li>
                    <Link
                      to="/politique_confidentialite"
                      className="text-[12px] md:text-sm dark:text-white text-[#101314] transition-all duration-200 hover:text-blue-500"
                    >
                      Politique de confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mention_legales"
                      className="text-[12px] md:text-sm dark:text-white text-[#101314] transition-all duration-200 hover:text-blue-500"
                    >
                      Mentions légales
                    </Link>
                  </li>
                </ul>
                <ul className="flex flex-row justify-center items-center md:items-start gap-x-8 gap-y-2 md:mb-[2px] md:mt-2 mt-4">
                  <li>
                    <a
                      href="https://www.instagram.com/autoclean.lyon/"
                      target="blank"
                      className="flex flex-row gap-x-1 dark:text-white text-[#101314] transition-all duration-200 hover:text-blue-500"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex flex-row gap-x-1 dark:text-white text-[#101314] transition-all duration-200 hover:text-blue-500"
                      href="https://www.facebook.com/profile.php?id=61552207017452"
                      target="blank"
                    >
                      <svg
                        fill="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                        viewBox="-5.5 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-sm dark:text-white text-[#101314] md:text-base text-center lg:mt-0">
                © 2024 Autoclean
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
