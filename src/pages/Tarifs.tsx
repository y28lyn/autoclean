import TarifsArticle from "../components/article/TarifsArticle";
import Banner from "../components/header/Banner";

const Tarifs = () => {
  return (
    <>
      <header>
        <Banner
          title="Tarifs"
          subtitle="Découvrez nos tarifs de lavage automobile, une gamme complète de
          services de nettoyage pour votre véhicule, à des prix compétitifs."
          backgroundImageUrl="https://images.unsplash.com/photo-1674651174927-7ae82986e5c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          button1Label="Nous contacter"
          button1Link="/contact"
          button2Label="Voir les tarifs"
        />
      </header>

      <main id="main" className="bg-[#000302] py-10">
        <TarifsArticle />
      </main>
    </>
  );
};

export default Tarifs;
