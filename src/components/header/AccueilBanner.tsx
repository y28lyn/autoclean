import { Link } from "react-router-dom";

const AccueilBanner = () => {
  return (
    <div className="text-white bg-cover bg-center min-h-screen flex items-center overflow-hidden relative">
      <div className="absolute inset-0">
        <img
          loading="lazy"
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1550565076-b2371ea1a324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="container mx-auto text-center relative">
        <h1 className="text-5xl font-extrabold mb-4">Autoclean</h1>
        <p className="text-xl opacity-80 mb-8">
          L'excellence dans chaque goutte d'eau.
        </p>
        <div className="space-x-4">
          <button className="w-28 bg-white text-black p-1 rounded transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300">
            <Link to="/tarifs">Réserver</Link>
          </button>
          <button className="w-28 outline p-1 rounded transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300">
            <a href="#main">Lire plus</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccueilBanner;
