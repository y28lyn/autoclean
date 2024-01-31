const BannerArticle = () => {
  // Définition des données d'images et de légendes
  const images = [
    {
      src: "https://images.unsplash.com/photo-1639640163962-9e845bd7294a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photo d'une voiture citadine",
      caption: "Citadine",
    },
    {
      src: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photot d'un SUV",
      caption: "SUV",
    },
    {
      src: "https://images.unsplash.com/photo-1605410791216-3d9653a95667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photo d'un monospace",
      caption: "Monospace",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 justify-center flex">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nos gammes de lavages
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-8">
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
              <p className="mt-2 text-gray-200 font-bold">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerArticle;
