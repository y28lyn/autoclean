import BannerArticle from "../components/article/BannerArticle";
import ComparisonSlider from "../components/article/ComparaisonSlider";
import PlanList from "../components/article/PlanList";
import Banner from "../components/header/Banner";

const Textile = () => {
  const plans = [
    {
      title: "Nettoyage simple",
      iconColor: "text-green-500",
      features: [
        {
          name: "Nettoyage standard",
          subname: {},
          prices: {
            second: "50€",
          },
        },
      ],
      description: ["4 places ou moins"],
    },
    {
      title: "Nettoyage complet",
      iconColor: "text-yellow-500",
      features: [
        {
          name: "Nettoyage complet",
          subname: {},
          prices: {
            second: "60€",
          },
        },
      ],
      description: ["5 places ou plus"],
    },
  ];

  const exemples = [
    {
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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

      <main id="main" className="dark:bg-[#000302] bg-white">
        <section className="flex flex-col justify-center items-center md:grid grid-cols-1 lg:grid-cols-2 gap-2 mb-8 pt-10">
          <div className="container xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto px-10 md:px-6 text-left md:mb-0 mb-6">
            <h2 className="text-3xl dark:text-white text-[#101314] font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nos lavages textiles
            </h2>
            <div className="dark:text-gray-200 text-slate-800 mt-2">
              <p>
                Pour seulement 50€, redonnez à votre canapé tout son éclat
                d'origine avec Autoclean. Nos spécialistes du nettoyage de
                textile sont équipés des dernières techniques et utilisent des
                produits doux pour garantir un résultat impeccable tout en
                préservant la qualité de votre précieux canapé.
              </p>
            </div>
          </div>
          <ComparisonSlider
            topImage="https://images.unsplash.com/photo-1565873741541-59207da8b88d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            bottomImage="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </section>
        <PlanList plans={plans} />
        <BannerArticle images={exemples} title="Voici quelques exemples" />
      </main>
    </>
  );
};

export default Textile;
