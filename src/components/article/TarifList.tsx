interface Plan {
  title: string;
  iconColor: string;
  features: {
    name: string;
    prices: {
      citadine: string;
      suv: string;
      monospace: string;
    };
  }[];
  description?: string[];
}

const plans: Plan[] = [
  {
    title: "Nettoyage simple",
    iconColor: "text-green-500",
    features: [
      {
        name: "Intérieur standard",
        prices: {
          citadine: "35€",
          suv: "40€",
          monospace: "50€",
        },
      },
      {
        name: "Avec nettoyage extérieur",
        prices: {
          citadine: "45€",
          suv: "50€",
          monospace: "60€",
        },
      },
    ],
    description: [
      "Aspirateur, plastiques, vitres intérieures",
      "Standard + shampoing sièges, tapis, moquette",
      "Carrosserie, jantes, vitres, pneus, intérieur des roues",
    ],
  },
  {
    title: "Nettoyage complet",
    iconColor: "text-yellow-500",
    features: [
      {
        name: "Intérieur complet",
        prices: {
          citadine: "40€",
          suv: "50€",
          monospace: "60€",
        },
      },
      {
        name: "Avec nettoyage extérieur",
        prices: {
          citadine: "50€",
          suv: "60€",
          monospace: "70€",
        },
      },
    ],
    description: [
      "Carrosserie, jantes, vitres, pneus",
      "Complet + shampoing sièges, tapis, moquette",
    ],
  },
  {
    title: "Extras",
    iconColor: "text-red-500",
    features: [
      {
        name: "Soin du cuir",
        prices: {
          citadine: "5€",
          suv: "6€",
          monospace: "8€",
        },
      },
      {
        name: "Poils d'animaux",
        prices: {
          citadine: "10€",
          suv: "12€",
          monospace: "14€",
        },
      },
    ],
    description: [
      "Nettoyage et traitement spécial pour le cuir",
      "Élimination des poils d'animaux",
    ],
  },
];

const TarifList: React.FC = () => {
  return (
    <>
      <h2 className="text-center text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Nos tarifs
      </h2>
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, planIndex) => (
          <div
            key={planIndex}
            className="flex flex-col items-center bg-white shadow-md rounded p-6"
          >
            <DollarSignIcon className={`w-12 h-12 ${plan.iconColor} mb-4`} />
            <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
            <ul className="text-center mb-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="mt-6">
                  {/* <div className="h-[1px] bg-[#000302] my-6"></div> */}
                  <div className="text-center font-semibold">
                    <p className="underline">{feature.name}</p>
                    {plan.description && plan.description[featureIndex] && (
                      <p className="text-gray-600 text-center">
                        {plan.description[featureIndex]}
                      </p>
                    )}
                    <div className="flex justify-around mt-2">
                      <div>
                        <p className="text-md">Citadine</p>
                        <p className="text-xl font-bold">
                          {feature.prices.citadine}
                        </p>
                      </div>
                      <div>
                        <p className="text-md">SUV</p>
                        <p className="text-xl font-bold">
                          {feature.prices.suv}
                        </p>
                      </div>
                      <div>
                        <p className="text-md">Monospace</p>
                        <p className="text-xl font-bold">
                          {feature.prices.monospace}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

interface DollarSignIconProps extends React.SVGProps<SVGSVGElement> {
  className: string;
}

const DollarSignIcon: React.FC<DollarSignIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
};

export default TarifList;
