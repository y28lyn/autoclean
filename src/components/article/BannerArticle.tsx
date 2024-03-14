import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style.css";

interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

interface Props {
  images: ImageData[];
  title: string;
}

const BannerArticle: React.FC<Props> = ({ images, title }) => {
  return (
    <>
      <section className="hidden md:flex w-full py-12 justify-center">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <div className="grid grid-cols-3 p-6 md:p-0 gap-4 mt-8">
            {images.map((image, index) => (
              <div key={index}>
                <img
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded"
                  src={image.src}
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <p className="md:py-2 py-4 text-gray-200 font-bold">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col md:hidden text-center items-center justify-center bg-[#000302] px-10 pb-16">
        <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <Swiper
          modules={[Pagination, Navigation]}
          className="text-base text-white w-full md:w-[80vw] h-auto bg-transparent rounded shadow-2xl mt-8"
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: "swiper-pagination-bullet", // Classe pour les bullets
            bulletActiveClass: "swiper-pagination-bullet-active", // Classe pour le bullet actif
          }}
          navigation={true}
        >
          {images.map((imageSrc, index) => (
            <SwiperSlide key={index} className="image-container">
              <img
                src={imageSrc.src}
                alt={imageSrc.alt}
                className="h-full w-full object-cover"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default BannerArticle;
