import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../assets/images/heroimg1.jpg";
import image2 from "../../../assets/images/heroimg2.jpg";
import image3 from "../../../assets/images/heroimg3.jpg";

const carouselItems = [
  {
    image: image1,
    heading: "Your Meds, Your Way!",
    text: "Order both Over The Counter and prescription medicines – delivered wherever you are.",
    link: "#",
  },
  {
    image: image2,
    heading: "Book a Doctor Visit",
    text: "Schedule a doctor’s home visit or consult online at your convenience.",
    link: "#",
  },
  {
    image: image3,
    heading: "Lab Tests Made Easy",
    text: "Book lab tests and get your reports without leaving your home.",
    link: "#",
  },
];

const HeroCaurosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const { image, heading, text, link } = carouselItems[currentIndex];

  return (
    <section className="relative h-[360px] bg-slate-800 rounded-2xl overflow-hidden mx-4 lg:mx-10 mb-10">
      <img
        src={image}
        alt="carousel"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-6 text-white max-w-xl">
        <h2 className="text-3xl font-bold mb-4">
          {heading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="relative inline-block">
            {heading.split(" ").slice(-1)}
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"></span>
          </span>
        </h2>
        <p>{text}</p>
        <a href={link}>
          <button className="mt-5 flex items-center gap-2 px-6 py-2 bg-teal-400 text-black rounded-full hover:bg-white transition-all">
            Get Started
            <FaArrowRight size={16} />
          </button>
        </a>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
      >
        ›
      </button>
    </section>
  );
};

export default HeroCaurosel;
