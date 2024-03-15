import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style.css";

const slideImages = ["/car_1.jpg", "/car_2.jpg", "/car_3.jpg", "/car_4.jpg"];

const Carousel = () => {
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-left">
        <div className="flex md:items-center md:justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24 md:min-h-screen overflow-hidden relative">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto md:text-left">
            <h2 className="text-3xl font-bold leading-tight dark:text-white text-[#101314] sm:text-4xl">
              Que faisons-nous ?
            </h2>
            <p className="mt-2 text-base dark:text-white text-[#101314]">
              Voici quelques résultats de nos lavages
            </p>
            <div className="dark:text-slate-200 text-slate-800 mt-2">
              <p>
                Chez Autoclean, nous vous offrons un lavage minutieux pour
                automobiles, vitres et canapés, avec l'utilisation de techniques
                de pointe et de produits écologiques. Notre priorité est de
                restaurer la propreté et la fraîcheur de vos biens, pour votre
                entière satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center p-10">
          <Swiper
            modules={[Pagination, Navigation]}
            className="text-base dark:text-white text-[#101314] w-full md:w-[80vw] h-auto md:h-[80vh] bg-transparent rounded shadow-2xl"
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            navigation={isPC}
          >
            {slideImages.map((imageSrc, index) => (
              <SwiperSlide key={index} className="image-container">
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel;
