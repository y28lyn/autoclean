import ContactForm from "../components/article/ContactForm";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/Navbar";

const Contact = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main id="main" className="bg-[#000302] text-white pt-10">
        <ContactForm />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
