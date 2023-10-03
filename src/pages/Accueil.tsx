import AccueilArticle from "../components/article/AccueilArticle";
import AccueilAvis from "../components/article/AccueilAvis";
import AccueilCarousel from "../components/article/AccueilCarousel";
import Footer from "../components/footer/Footer";
import AccueilBanner from "../components/header/AccueilBanner";
import NavBar from "../components/header/Navbar";

const Accueil = () => {
  return (
    <>
      <header>
        <NavBar />
        <AccueilBanner />
      </header>

      <main id="main">
        <AccueilArticle />
        <AccueilCarousel />
        <AccueilAvis />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Accueil;
