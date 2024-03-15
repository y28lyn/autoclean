import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface PlanFeature {
  name: string;
  subname: {
    first?: string;
    second?: string;
    third?: string;
  };
  prices: {
    first?: string;
    second?: string;
    third?: string;
  };
}

interface Plan {
  title: string;
  iconColor: string;
  features: PlanFeature[];
  description?: string[];
}

interface PlanListProps {
  plans: Plan[];
}

const PlanList: React.FC<PlanListProps> = ({ plans }) => {
  return (
    <>
      <div className="px-10 md:px-0">
        <h2 className="text-left md:text-center text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nos tarifs
        </h2>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-center p-8">
        <Swiper
          modules={[Pagination]}
          className="text-base text-white bg-transparent rounded shadow-2xl h-full"
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
        >
          {plans.map((plan, planIndex) => (
            <SwiperSlide key={planIndex}>
              <div
                key={planIndex}
                className="flex flex-col items-center justify-center bg-[#101314] text-white shadow-md rounded w-auto h-[60vh] p-6 md:w-1/2"
              >
                <DollarSignIcon
                  className={`w-12 h-12 ${plan.iconColor} mb-4`}
                />
                <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                <ul className="text-center mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mt-6">
                      <div className="text-center font-semibold">
                        <p className="underline">{feature.name}</p>
                        {plan.description && plan.description[featureIndex] && (
                          <p className="text-gray-200 text-center">
                            {plan.description[featureIndex]}
                          </p>
                        )}
                        <div className="flex justify-around mt-2">
                          <div>
                            <p className="text-md">{feature.subname.first}</p>
                            <p className="text-xl font-bold">
                              {feature.prices.first}
                            </p>
                          </div>
                          <div>
                            <p className="text-md">{feature.subname.second}</p>
                            <p className="text-xl font-bold">
                              {feature.prices.second}
                            </p>
                          </div>
                          <div>
                            <p className="text-md">{feature.subname.third}</p>
                            <p className="text-xl font-bold">
                              {feature.prices.third}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PC */}
      <div className="container mx-auto p-8 hidden md:flex flex-col md:flex-row gap-8">
        {plans.map((plan, planIndex) => (
          <div
            key={planIndex}
            className="flex flex-col items-center bg-[#101314] text-white shadow-md rounded p-6 w-auto md:w-1/2"
          >
            <DollarSignIcon className={`w-12 h-12 ${plan.iconColor} mb-4`} />
            <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
            <ul className="text-center mb-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="mt-6">
                  <div className="text-center font-semibold">
                    <p className="underline">{feature.name}</p>
                    {plan.description && plan.description[featureIndex] && (
                      <p className="text-gray-200 text-center">
                        {plan.description[featureIndex]}
                      </p>
                    )}
                    <div className="flex justify-around mt-2">
                      <div>
                        <p className="text-md">{feature.subname.first}</p>
                        <p className="text-xl font-bold">
                          {feature.prices.first}
                        </p>
                      </div>
                      <div>
                        <p className="text-md">{feature.subname.second}</p>
                        <p className="text-xl font-bold">
                          {feature.prices.second}
                        </p>
                      </div>
                      <div>
                        <p className="text-md">{feature.subname.third}</p>
                        <p className="text-xl font-bold">
                          {feature.prices.third}
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

export default PlanList;
