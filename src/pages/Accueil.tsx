import AccueilArticle from "../components/article/AccueilArticle";
import AccueilAvis from "../components/article/AccueilAvis";
import Carousel from "../components/article/Carousel";
import Banner from "../components/header/Banner";

const Accueil = () => {
  return (
    <>
      <header>
        <Banner
          title="Autoclean"
          subtitle="L'excellence dans chaque goutte d'eau."
          backgroundImageUrl="https://images.unsplash.com/photo-1710246265730-d4f722ec11cc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Automobile"
          button1Link="/automobile"
          button2Label="Lire plus"
        />
      </header>

      <main id="main" className="bg-[#000302]">
        <AccueilArticle />
        <Carousel />
        <AccueilAvis />
      </main>
    </>
  );
};

export default Accueil;
