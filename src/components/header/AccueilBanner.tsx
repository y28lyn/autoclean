import { Link } from "react-router-dom";

interface BannerProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  button1Label: string;
  button1Link: string;
  button2Label: string;
  button2Link: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  button1Label,
  button1Link,
  button2Label,
  button2Link,
}) => {
  return (
    <div className="text-white bg-cover bg-center min-h-screen flex items-center overflow-hidden relative">
      <div className="absolute inset-0">
        <img
          loading="lazy"
          className="w-full h-full object-cover object-center"
          src={backgroundImageUrl}
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="container mx-auto text-center relative">
        <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-xl opacity-80 mb-8 px-6 md:px-64">{subtitle}</p>
        <div className="space-x-4">
          <button className="w-25 bg-white text-black p-1 rounded transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300">
            <Link to={button1Link} className="p-5">
              {button1Label}
            </Link>
          </button>

          <button className="w-25 outline p-1 rounded transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300">
            <a href={button2Link} className="p-5">
              {button2Label}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
