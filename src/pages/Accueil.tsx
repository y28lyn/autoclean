import AccueilBanner from "../components/header/AccueilBanner";
import NavBar from "../components/header/Navbar";

const Accueil = () => {
  return (
    <>
      <header>
        <NavBar />
        <AccueilBanner />
      </header>

      <main id="main" className="h-screen bg-autoclean_blue">
        a
      </main>

      <footer className="h-screen bg-black">a</footer>
    </>
  );
};

export default Accueil;
