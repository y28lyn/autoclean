import AccueilBanner from "../components/header/AccueilBanner";
import NavBar from "../components/header/Navbar";

const Accueil = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <AccueilBanner
          title="Autoclean"
          content="Lorem ippsum autoclean lorem dolor da leo ipsum doremifasolasido"
          imageSrc="/banner-certif.jpg"
        />
      </main>
    </>
  );
};

export default Accueil;
