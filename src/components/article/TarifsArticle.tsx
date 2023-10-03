const TarifsArticle = () => {
  return (
    <>
      <section className="py-10 bg-[#000302] text-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Tarifs
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed">
              Découvrez nos tarifs de lavage automobile, une gamme complète de
              services de nettoyage pour votre véhicule, à des prix compétitifs.
            </p>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            {/*  Citadine  */}
            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-autoclean_blue">
                  Citadine
                </h3>

                <div className="mt-9">
                  {/*  Intérieur standard  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Intérieur standard
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">35€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Aspirateur, plastiques, vitres intérieures
                  </p>
                </div>

                <div className="mt-8">
                  {/*  Intérieur complet  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Intérieur complet
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">65€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Standard + shampoing sièges, tapis, moquette
                  </p>
                </div>

                <div className="mt-8">
                  {/*  Nettoyage extérieur  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Nettoyage extérieur
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">25€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Carrosserie, jantes, vitres, pneus, intérieur des roues
                  </p>
                </div>
              </div>
            </div>

            {/*  Berline / SUV  */}
            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-autoclean_blue">
                  Berline / SUV
                </h3>

                <div className="mt-9">
                  {/*  Intérieur standard  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Intérieur standard
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">40€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Aspirateur, plastiques, vitres intérieures
                  </p>
                </div>

                <div className="mt-8">
                  {/*  Intérieur complet  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Intérieur complet
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">75€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Standard + shampoing sièges, tapis, moquette
                  </p>
                </div>

                <div className="mt-8">
                  {/*  Nettoyage extérieur  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Nettoyage extérieur
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">30€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Carrosserie, jantes, vitres, pneus, intérieur des roues
                  </p>
                </div>
              </div>
            </div>

            {/*  Monospace  */}
            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-autoclean_blue">
                  Monospace
                </h3>

                <div className="mt-9">
                  {/*  Intérieur standard  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Intérieur standard
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">50€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Aspirateur, plastiques, vitres intérieures
                  </p>
                </div>

                <div className="mt-8">
                  {/*  Intérieur complet  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Intérieur complet
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">90€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Standard + shampoing sièges, tapis, moquette
                  </p>
                </div>

                <div className="mt-8">
                  {/*  Nettoyage extérieur  */}
                  <h4 className="text-base font-semibold text-gray-900">
                    Nettoyage extérieur
                  </h4>
                  <p className="text-2xl font-bold text-black mt-3">40€</p>
                  <p className="mt-3 text-base text-gray-600">
                    Carrosserie, jantes, vitres, pneus, intérieur des roues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TarifsArticle;
