// Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../../style.css";

const slides = ["/autoclean_icon.png", "/autoclean_icon.png"];

const AccueilCarousel = () => {
  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={"auto"}
      effect="coverflow"
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      <div className="swiper-wrapper z-50">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${slide})`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default AccueilCarousel;
