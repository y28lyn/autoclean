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

      <footer className="bg-black h-[100vh]"></footer>
    </>
  );
};

export default Accueil;
