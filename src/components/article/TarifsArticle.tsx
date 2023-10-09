const TarifsArticle = () => {
  return (
    <section className="pt-10 md:pt-0 pb-5 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 mt-1 lg:grid-cols-3 lg:mt-6">
          {/* Citadine */}
          <div className="bg-white border-2 border-gray-100 rounded-sm overflow-hidden shadow-lg">
            <div className="p-8 xl:px-12">
              <h3 className="text-xl font-semibold text-autoclean_blue">
                Citadine
              </h3>

              <div className="mt-1">
                <h4 className="text-base font-semibold text-gray-900">
                  Intérieur standard
                </h4>
                <p className="text-2xl font-bold text-black mt-3">35€</p>
                <p className="mt-3 text-base text-gray-600">
                  Aspirateur, plastiques, vitres intérieures
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-base font-semibold text-gray-900">
                  Intérieur complet
                </h4>
                <p className="text-2xl font-bold text-black mt-3">65€</p>
                <p className="mt-3 text-base text-gray-600">
                  Standard + shampoing sièges, tapis, moquette
                </p>
              </div>

              <div className="mt-6">
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

          {/* Berline / SUV */}
          <div className="bg-white border-2 border-gray-100 rounded-sm overflow-hidden shadow-lg">
            <div className="p-8 xl:px-12">
              <h3 className="text-xl font-semibold text-autoclean_blue">
                Berline / SUV
              </h3>

              <div className="mt-1">
                <h4 className="text-base font-semibold text-gray-900">
                  Intérieur standard
                </h4>
                <p className="text-2xl font-bold text-black mt-3">40€</p>
                <p className="mt-3 text-base text-gray-600">
                  Aspirateur, plastiques, vitres intérieures
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-base font-semibold text-gray-900">
                  Intérieur complet
                </h4>
                <p className="text-2xl font-bold text-black mt-3">75€</p>
                <p className="mt-3 text-base text-gray-600">
                  Standard + shampoing sièges, tapis, moquette
                </p>
              </div>

              <div className="mt-6">
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

          {/* Monospace */}
          <div className="bg-white border-2 border-gray-100 rounded-sm overflow-hidden">
            <div className="p-8 xl:px-12">
              <h3 className="text-xl font-semibold text-autoclean_blue">
                Monospace
              </h3>

              <div className="mt-1">
                <h4 className="text-base font-semibold text-gray-900">
                  Intérieur standard
                </h4>
                <p className="text-2xl font-bold text-black mt-3">50€</p>
                <p className="mt-3 text-base text-gray-600">
                  Aspirateur, plastiques, vitres intérieures
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-base font-semibold text-gray-900">
                  Intérieur complet
                </h4>
                <p className="text-2xl font-bold text-black mt-3">90€</p>
                <p className="mt-3 text-base text-gray-600">
                  Standard + shampoing sièges, tapis, moquette
                </p>
              </div>

              <div className="mt-6">
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

        {/* Autres */}
        <div className="flex flex-col md:flex-row md:gap-6 mt-4">
          {/* Supplément */}
          <div className="bg-white border-2 border-gray-100 rounded-sm w-full md:w-1/2 overflow-hidden">
            <div className="p-8 xl:px-8">
              <h3 className="text-xl font-semibold text-autoclean_blue">
                Supplément
              </h3>
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="mt-1">
                  <h4 className="text-base font-semibold text-gray-900">
                    Soin cuir
                  </h4>
                  <p className="text-2xl font-bold text-black md:text-center mt-3">
                    5€
                  </p>
                </div>
                <div className="mt-1">
                  <h4 className="text-base font-semibold text-gray-900 mt-6 md:mt-0">
                    Cire pour carrosserie
                  </h4>
                  <p className="text-2xl font-bold text-black md:text-center mt-3">
                    5€
                  </p>
                </div>
                <div className="mt-1">
                  <h4 className="text-base font-semibold text-gray-900 mt-6 md:mt-0">
                    Voiture de luxe
                  </h4>
                  <p className="text-2xl font-bold text-black md:text-center mt-3">
                    5€
                  </p>
                </div>
                <div className="mt-1">
                  <h4 className="text-base font-semibold text-gray-900 mt-6 md:mt-0">
                    Poils de chiens
                  </h4>
                  <p className="text-2xl font-bold text-black md:text-center mt-3">
                    10€
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Canapé et tapis */}
          <div className="bg-white border-2 border-gray-100 rounded-sm w-full md:w-1/2 overflow-hidden mt-4 md:mt-0">
            <div className="p-8 xl:px-8">
              <h3 className="text-xl font-semibold text-autoclean_blue">
                Canapé et tapis
              </h3>
              <h4 className="text-base font-semibold text-gray-900">
                Sur devis
              </h4>
              <p className="text-2xl font-bold text-black mt-3">
                Prix variable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarifsArticle;
