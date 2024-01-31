interface Plan {
  title: string;
  iconColor: string;
  features: string[];
  description: string;
  price: string;
}

const plans: Plan[] = [
  {
    title: "Nettoyage simple",
    iconColor: "text-green-500",
    features: [
      "Access to basic features",
      "24/7 customer support",
      "1GB storage",
    ],
    description: "Affordable options for those on a tight budget.",
    price: "$19.99/month",
  },
  {
    title: "Nettoyage complet",
    iconColor: "text-yellow-500",
    features: [
      "Access to all features",
      "Priority customer support",
      "10GB storage",
    ],
    description: "A balance between cost and quality.",
    price: "$49.99/month",
  },
  {
    title: "Extras",
    iconColor: "text-red-500",
    features: [
      "Access to all features",
      "Dedicated customer support",
      "Unlimited storage",
    ],
    description: "High-end options for those seeking the best quality.",
    price: "$99.99/month",
  },
];

const TarifList: React.FC = () => {
  return (
    <>
      <h2 className="text-center text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Nos tarifs
      </h2>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
          >
            <DollarSignIcon className={`w-12 h-12 ${plan.iconColor} mb-4`} />
            <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
            <ul className="text-left mb-4">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="text-gray-600 text-center">{plan.description}</p>
            <p className="text-2xl font-bold mt-4">{plan.price}</p>
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
