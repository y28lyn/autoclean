import Banner from "../components/header/Banner";

const Vitrage = () => {
  return (
    <>
      <header>
        <Banner
          title="Lavage de vitres"
          subtitle="Vitres impeccables, clarté assurée, choisissez notre expertise !"
          backgroundImageUrl="https://images.unsplash.com/photo-1563693998336-93c10e5d8f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Réserver"
          button1Link="/tarifs"
          button2Label="Lire plus"
        />
      </header>

      <main id="main"></main>
    </>
  );
};

export default Vitrage;
