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
        <section className="h-fit first-letter:md:h-screen bg-[#000302] flex flex-col md:items-center justify-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Que faisons-nous ?
          </h2>
          <AccueilCarousel />
        </section>
        <AccueilAvis />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Accueil;
