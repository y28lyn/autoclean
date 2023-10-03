import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const PolitiqueAccessibilite = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#000302] text-white pb-10 pt-20 px-10 md:p-28">
        <h1 className="text-3xl font-bold">
          Politique d'Accessibilité d'Autoclean
        </h1>
        <p className="text-sm">
          <strong>Date de la Dernière Mise à Jour :</strong> 03/10/2023
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-bold">
            Engagement envers l'Accessibilité
          </h2>
          <p>
            Autoclean s'engage à offrir une expérience en ligne accessible à
            tous, y compris aux personnes handicapées. Nous croyons en
            l'importance de l'inclusion numérique et nous nous efforçons de
            rendre notre site web conforme aux normes d'accessibilité en
            vigueur, notamment les Web Content Accessibility Guidelines (WCAG)
            2.1 au niveau AA.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">
            Mesures Prises pour l'Accessibilité
          </h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Conception et Développement Accessibles :</strong> Notre
              site web est conçu et développé en tenant compte des meilleures
              pratiques d'accessibilité, en utilisant des technologies conformes
              aux normes en vigueur.
            </li>
            <li>
              <strong>Tests Réguliers :</strong> Nous effectuons régulièrement
              des tests d'accessibilité pour identifier et résoudre les
              problèmes d'accessibilité potentiels.
            </li>
            <li>
              <strong>Formation du Personnel :</strong> Notre personnel est
              formé sur les principes de l'accessibilité numérique et sur la
              manière de créer et de maintenir des contenus accessibles.
            </li>
            <li>
              <strong>Révision des Contenus :</strong> Nous révisons et adaptons
              continuellement nos contenus pour garantir qu'ils soient
              accessibles aux personnes handicapées, notamment en fournissant
              des alternatives textuelles pour les médias non textuels.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">
            Fournir des Solutions d'Accessibilité
          </h2>
          <p>
            Nous nous engageons à fournir des solutions d'accessibilité pour
            faciliter l'utilisation de notre site web par tous les visiteurs. Si
            vous rencontrez des problèmes d'accessibilité ou si vous avez des
            suggestions pour améliorer l'accessibilité de notre site, veuillez
            nous contacter à l'adresse autoclean.lyon@gmail.com ou en appelant
            07 56 84 73 46. Nous ferons de notre mieux pour répondre à vos
            besoins dans les meilleurs délais.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Améliorations Continuelles</h2>
          <p>
            Nous nous engageons à améliorer constamment l'accessibilité de notre
            site web. À cette fin, nous effectuerons régulièrement des audits
            d'accessibilité, prendrons en compte les commentaires des
            utilisateurs et mettrons en œuvre des modifications pour renforcer
            l'accessibilité de notre site.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Rétroaction et Contact</h2>
          <p>
            Si vous avez des questions, des préoccupations ou des commentaires
            concernant l'accessibilité de notre site web, veuillez nous
            contacter à l'adresse autoclean.lyon@gmail.com ou en appelant 07 56
            84 73 46. Votre retour d'information est précieux pour nous et nous
            aide à améliorer notre engagement envers l'accessibilité.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PolitiqueAccessibilite;
