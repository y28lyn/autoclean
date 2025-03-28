const AccueilArticle = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row text-left justify-center items-center h-auto md:h-[600px] max-w-6xl mx-auto">
        {/* Image section */}
        <div className="p-6 md:flex-1 h-full md:h-full relative">
          <div className="shadow rounded relative flex items-end px-4 pb-10 pt-40 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8 h-full">
            <div className="absolute inset-0 rounded">
              <img
                className="shadow rounded object-cover object-top w-full h-full"
                src="https://images.unsplash.com/photo-1550950546-89382964f920?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nettoyage"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded"></div>
            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 className="text-4xl font-bold text-white">
                  Toujours à votre <br className="hidden xl:block" />
                  service
                </h3>
                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Nettoyage à domicile
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Disponible 7j/7
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Lyon et sa périphérie
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      À partir de 25€
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Text section */}
        <div className="flex md:items-center md:justify-center px-4 py-6 sm:px-6 lg:px-8 sm:py-10 lg:py-16 md:flex-1 relative">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto md:text-left">
            <h2 className="text-3xl font-bold leading-tight dark:text-white text-[#101314] sm:text-4xl">
              Qui sommes-nous ?
            </h2>
            <p className="mt-2 text-base dark:text-white text-[#101314]">
              Entreprise de nettoyage
            </p>
            <div className="dark:text-slate-200 text-slate-800 mt-2">
              <p>
                Autoclean, spécialiste du nettoyage, vous accompagne pour
                redonner éclat et propreté à votre voiture, vitres et canapés.
                Notre engagement envers des services de qualité supérieure et
                sur mesure garantit votre entière satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccueilArticle;
