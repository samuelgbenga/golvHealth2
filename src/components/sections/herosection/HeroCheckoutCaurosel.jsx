import React from "react";
import image1 from "../../../assets/images/heroimg1.jpg";

const carouselItems = [
  {
    image: image1,
    heading: "Meet your 24/7 health buddy!",
    description:
      "Get timely drug refills and personalised healthcare at your convenience.",
    buttonText: "Get Started",
    buttonLink:
      "https://api.whatsapp.com/send/?phone=+254756551551&text=Hi&type=phone_number&app_absent=0whatsapp",
    buttonColor: "rgba(255, 255, 255, 0.898)",
    textColor: "rgba(255, 255, 255, 0.898)",
  },
  {
    image: image1,
    heading: "Zuri Women's Health",
    description:
      "Supporting women’s health from puberty to menopause with care and knowledge.",
    buttonText: "Learn More",
    buttonLink: "/zuri-women-health",
    buttonColor: "#CE8BBC",
    textColor: "rgb(36, 5, 14)",
  },
  {
    image: image1,
    heading: "Niko na Choice: Find your perfect contraceptive.",
    description:
      "From pills to patches, find the contraceptive that fits your lifestyle.",
    buttonText: "Chat with a Doctor",
    buttonLink: "/niko-na-choice",
    buttonColor: "rgb(36, 5, 14)",
    textColor: "rgb(36, 5, 14)",
  },
  {
    image: image1,
    heading: "Struggling with alcohol dependency?",
    description:
      "You're not alone. Take the first step towards recovery by chatting with our in-house therapist today.",
    buttonText: "Let’s Talk",
    buttonLink:
      "https://api.whatsapp.com/send/?phone=+254756551551&text=Hi&type=phone_number&app_absent=0whatsapp",
    buttonColor: "rgb(6, 32, 35)",
    textColor: "rgb(6, 32, 35)",
  },
  {
    image: image1,
    heading: "Know Your Status: Get Tested Today!",
    description:
      "Take charge of your sexual health with our comprehensive STI tests. Quick, reliable, and discreet.",
    buttonText: "Book a Lab Test",
    buttonLink: "/lab",
    buttonColor: "rgb(206, 245, 245)",
    textColor: "rgb(36, 5, 14)",
  },
  {
    image: image1,
    heading: "Start Your Health Journey Now!",
    description:
      "Join the community of people improving their health with expert care and support.",
    buttonText: "Start Now",
    buttonLink: "/start",
    buttonColor: "rgb(0, 153, 255)",
    textColor: "rgb(0, 102, 204)",
  },
];

const HeroCheckoutCarousel = () => {
  return (
    <section className="w-full bg-gradient-to-r from-teal-200 via-white to-teal-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold font-nunito mb-8 text-center">
          Check{" "}
          <span className="border-b-4 border-teal-500 inline-block">These</span>{" "}
          Out...
        </h1>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] h-[380px] relative rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute top-8 left-6 right-6 z-10">
                <h2
                  className="text-xl md:text-2xl font-bold mb-2"
                  style={{ color: item.textColor }}
                >
                  {item.heading}
                </h2>
                <p
                  className="text-sm md:text-base"
                  style={{ color: item.textColor }}
                >
                  {item.description}
                </p>
              </div>

              <a
                href={item.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="absolute bottom-10 left-6 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    backgroundColor: item.buttonColor,
                    color: index === 1 ? "#fff" : "#000",
                  }}
                >
                  {item.buttonText}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCheckoutCarousel;
