import AccueilBanner from "../components/header/AccueilBanner";
import NavBar from "../components/header/Navbar";

const Accueil = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <AccueilBanner />
      </main>

      <footer className="bg-black"></footer>
    </>
  );
};

export default Accueil;
