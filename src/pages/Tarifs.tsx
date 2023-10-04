import TarifsArticle from "../components/article/TarifsArticle";
import Footer from "../components/footer/Footer";
import Banner from "../components/header/AccueilBanner";
import NavBar from "../components/header/Navbar";

const Tarifs = () => {
  return (
    <>
      <header>
        <NavBar />
        <Banner
          title="Tarifs"
          subtitle="Découvrez nos tarifs de lavage automobile, une gamme complète de
          services de nettoyage pour votre véhicule, à des prix compétitifs."
          backgroundImageUrl="https://images.unsplash.com/photo-1550565076-b2371ea1a324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          button1Label="Nous contacter"
          button1Link="/contact"
          button2Label="Voir les tarifs"
          button2Link="#main"
        />
      </header>

      <main id="main" className="pt-10 pb-5 bg-[#000302]">
        <TarifsArticle />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Tarifs;
