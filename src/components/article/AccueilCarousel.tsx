import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../style.css";
import { Navigation } from "swiper/modules";

const slideImages = [
  "https://images.unsplash.com/photo-1615041611611-e53c16da999b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyd2FzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1575844611093-ed16474b4f44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyd2FzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1565689876115-23f4019e888d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcndhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
];

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                repellat esse sint illum exercitationem quibusdam voluptatibus
                eius ipsam voluptatem recusandae eveniet sequi maiores
                consectetur, doloribus totam sapiente! Ullam, voluptatum
                architecto?
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#000302] pr-10 md:px-10">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper text-base text-white w-[80vw] h-[60vh] md:h-[80vh] bg-transparent rounded-xl"
          >
            {slideImages.map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <img src={imageSrc} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AccueilCarousel;
