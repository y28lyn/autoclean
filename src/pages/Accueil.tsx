import AccueilArticle from "../components/article/AccueilArticle";
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

      <footer className="h-screen bg-black"></footer>
    </>
  );
};

export default Accueil;
