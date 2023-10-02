import AccueilArticle from "../components/article/AccueilArticle";
import AccueilAvis from "../components/article/AccueilAvis";
import AccueilCarousel from "../components/article/AccueilCarousel";
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

      <footer className="h-[100vh] bg-slate-900 p-6 text-white">Footer</footer>
    </>
  );
};

export default Accueil;
