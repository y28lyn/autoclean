import AccueilArticle from "../components/article/AccueilArticle";
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

      <main id="main" className="h-screen">
        <AccueilArticle />
      </main>

      <footer className="h-screen bg-slate-900">
        <section className="flex items-center justify-center">
          <AccueilCarousel />
        </section>
      </footer>
    </>
  );
};

export default Accueil;
