import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../style.css";

const slideImages = ["/car_1.jpg", "/car_2.jpg"];

const AccueilCarousel = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex md:items-center md:justify-center px-4 py-10 bg-[#000302] sm:px-6 lg:px-8 sm:py-16 lg:py-24 md:min-h-screen overflow-hidden relative">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Que faisons-nous ?
            </h2>
            <p className="mt-2 text-base text-white">
              Voici quelques résultats de nos lavages
            </p>
            <div className="text-slate-200 mt-2 md:block hidden">
              <p>
                Nous proposons un lavage minutieux pour automobiles et canapés,
                utilisant des techniques de pointe et des produits écologiques.
                Notre objectif est de restaurer la propreté et la fraîcheur de
                vos biens.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center bg-[#000302] px-10 pb-16">
          <Swiper
            modules={[Pagination]}
            className="mySwiper text-base text-white w-full md:w-[80vw] h-[35vh] md:h-[80vh] bg-transparent rounded shadow-2xl"
            pagination={{ clickable: true }}
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

export default AccueilCarousel;
