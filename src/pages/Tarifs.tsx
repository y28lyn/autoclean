import TarifsArticle from "../components/article/TarifsArticle";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/Navbar";

const Tarifs = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main id="main" className="pt-10 pb-5 bg-[#000302]">
        <TarifsArticle />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Tarifs;
