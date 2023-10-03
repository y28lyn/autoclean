import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const MentionLegales = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#000302] text-white pb-10 pt-20 px-10 md:p-28">
        <h1 className="text-3xl font-bold">Mentions Légales d'Autoclean</h1>
        <p className="text-sm">
          <strong>Date de la Dernière Mise à Jour :</strong> 03/10/2023
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Responsable du Site Web</h2>
          <p>Société Autoclean [Forme juridique]</p>
          <p>Numéro Siret : [Numéro siret]</p>
          <p>Responsable éditorial : Louaï Lageat</p>
          <p>Adresse de l'entreprise : [Adresse de l'entreprise]</p>
          <p>Téléphone : 07 56 84 73 46</p>
          <p>E-mail : autoclean.lyon@gmail.com</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">
            Aucune Collecte de Données Personnelles
          </h2>
          <p>
            Nous n'effectuons aucune collecte de données personnelles sur notre
            site web. Vous pouvez naviguer sur notre site en toute
            confidentialité sans que vos informations personnelles ne soient
            collectées ou stockées.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Aucun Usage de Cookies</h2>
          <p>
            Notre site web n'utilise pas de cookies pour collecter des
            informations sur les utilisateurs. Votre expérience de navigation
            est entièrement libre de tout suivi via des cookies.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Propriété Intellectuelle</h2>
          <p>
            Tous les contenus, textes, images et éléments graphiques présents
            sur ce site web sont la propriété exclusive d'Autoclean et sont
            protégés par les lois sur la propriété intellectuelle. Toute
            utilisation non autorisée de ces contenus est strictement interdite.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Contact</h2>
          <p>
            Si vous avez des questions ou des préoccupations concernant nos
            mentions légales, n'hésitez pas à nous contacter à l'adresse
            autoclean.lyon@gmail.com ou en appelant 07 56 84 73 46.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MentionLegales;
