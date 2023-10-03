import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../style.css";
import { Navigation } from "swiper/modules";

const slideImages = [
  "https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyd2FzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1605164598708-25701594473e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcndhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1616804087352-0d82fc0c37bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcndhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  // Ajoutez les URL de vos images ici
];

const AccueilCarousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-6 text-base text-white w-[80vw] h-[40vh] md:h-[80vh] bg-transparent rounded-xl"
      >
        {slideImages.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <img src={imageSrc} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default AccueilCarousel;
