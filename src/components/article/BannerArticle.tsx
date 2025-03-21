import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "../../style.css";

interface ImageData {
  src: string;
  alt?: string;
  caption?: string;
  link?: string;  // Ajout de la propriété link
}

interface Props {
  images: ImageData[];
  title: string;
}

const BannerArticle: React.FC<Props> = ({ images, title }) => {
  return (
    <>
      {/* Section pour les écrans larges */}
      <section className="hidden md:flex w-full py-12 justify-center">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl dark:text-white text-[#101314] font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <div className="grid grid-cols-3 p-6 md:p-0 gap-4 mt-8">
            {images.map((image, index) => (
              <div key={index}>
                {/* Si un lien est fourni, enveloppe l'image dans une balise <a> */}
                {image.link ? (
                  <a href={image.link} target="_blank" rel="noopener noreferrer">
                    <img
                      alt={image.alt}
                      className="w-full h-64 object-cover rounded-md md:shadow"
                      src={image.src}
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </a>
                ) : (
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
                )}
                <p className="md:py-2 py-4 dark:text-gray-200 text-slate-800 font-bold">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section pour les écrans plus petits */}
      <section className="flex flex-col md:hidden text-center items-center justify-center px-10 pb-16">
        <h2 className="text-3xl dark:text-white text-[#101314] font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          className="text-base dark:text-white text-[#101314] w-full md:w-[80vw] h-auto bg-transparent rounded shadow mt-8"
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {images.map((imageSrc, index) => (
            <SwiperSlide key={index} className="image-container">
              {/* Si un lien est fourni, enveloppe l'image dans une balise <a> */}
              {imageSrc.link ? (
                <a href={imageSrc.link} target="_blank" rel="noopener noreferrer">
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
                </a>
              ) : (
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
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default BannerArticle;
