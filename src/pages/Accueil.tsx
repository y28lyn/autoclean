import AccueilArticle from "../components/article/AccueilArticle";
import AccueilAvis from "../components/article/AccueilAvis";
import AccueilCarousel from "../components/article/AccueilCarousel";
import Banner from "../components/header/Banner";

const Accueil = () => {
  return (
    <>
      <header>
        <Banner
          title="Autoclean"
          subtitle="L'excellence dans chaque goutte d'eau."
          backgroundImageUrl="https://images.unsplash.com/photo-1550565076-b2371ea1a324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          button1Label="Réserver"
          button1Link="/tarifs"
          button2Label="Lire plus"
        />
      </header>

      <main id="main">
        <AccueilArticle />
        <AccueilCarousel />
        <AccueilAvis />
      </main>
    </>
  );
};

export default Accueil;
