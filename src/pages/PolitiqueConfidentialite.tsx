const PolitiqueConfidentialite = () => {
  return (
    <>
      <div className="dark:bg-[#000302] bg-white dark:text-white text-[#101314] pb-10 pt-20 px-10 md:p-28">
        <h1 className="text-3xl font-bold">
          Politique de Confidentialité d'Autoclean
        </h1>
        <p className="text-sm">
          <strong>Date de la Dernière Mise à Jour :</strong> 03/10/2023
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Collecte de Données</h2>
          <p>
            Nous ne collectons aucune donnée personnelle identifiable sur notre
            site web. Vous pouvez naviguer sur notre site en toute
            confidentialité.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Cookies</h2>
          <p>
            Notre site web n'utilise pas de cookies pour suivre votre activité
            ou collecter des informations personnelles. Vous pouvez parcourir
            notre site sans vous soucier de la collecte de données par le biais
            de cookies.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Sécurité</h2>
          <p>
            Nous prenons la sécurité de notre site web au sérieux. Bien que nous
            ne collections pas de données personnelles, nous mettons en place
            des mesures de sécurité pour protéger votre expérience de
            navigation.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Contact</h2>
          <p>
            Si vous avez des questions ou des préoccupations concernant notre
            politique de confidentialité, n'hésitez pas à nous contacter à
            l'adresse autoclean.lyon@gmail.com ou en appelant 07 56 84 73 46.
          </p>
        </section>
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
