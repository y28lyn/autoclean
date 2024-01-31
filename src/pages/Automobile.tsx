import BannerArticle from "../components/article/BannerArticle";
import ComparisonSlider from "../components/article/ComparaisonSlider";
import TarifList from "../components/article/TarifList";
import Banner from "../components/header/Banner";

const Automobile = () => {
  return (
    <>
      <header>
        <Banner
          title="Lavage automobile"
          subtitle="Redonnez vie à votre voiture avec notre lavage professionnel."
          backgroundImageUrl="https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Réserver"
          button1Link="/tarifs"
          button2Label="Lire plus"
        />
      </header>

      <main id="main" className="bg-[#000302] py-10">
        <section className="flex flex-col justify-center items-center md:grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="container xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto px-4 md:px-6 text-left md:mb-0 mb-6">
            <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nos lavages automobiles
            </h2>
            <div className="text-slate-200 mt-2">
              <p>
                Pour seulement 25€, offrez à votre voiture une propreté
                impeccable avec Autoclean. Nos techniques de pointe et nos
                produits écologiques garantissent un résultat optimal.
              </p>
            </div>
          </div>
          <ComparisonSlider topImage="/before.jpg" bottomImage="/after.jpg" />
        </section>
        <BannerArticle />
        <TarifList />
      </main>
    </>
  );
};

export default Automobile;
