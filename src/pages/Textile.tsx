import Banner from "../components/header/Banner";

const Textile = () => {
  return (
    <>
      <header>
        <Banner
          title="Lavage textile"
          subtitle="Revigorez vos tissus, confiez-les à notre expertise de lavage."
          backgroundImageUrl="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Contactez-nous"
          button1Link="/contact"
          button2Label="Lire plus"
        />
      </header>

      <main id="main"></main>
    </>
  );
};

export default Textile;
