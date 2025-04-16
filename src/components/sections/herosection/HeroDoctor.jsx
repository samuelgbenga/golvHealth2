import { FaArrowRight } from "react-icons/fa";
import doctorImage from "../../../assets/images/heroimg1.jpg";

const HeroDoctor = () => {
  return (
    <section className="py-5 md:py-10 w-full flex justify-center items-center">
      <div className="w-full max-w-screen-xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={doctorImage}
            alt="Medical Professionals"
            className="max-h-[70vh] 2xl:max-h-[50vh] object-contain object-center rounded-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-5 text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight font-nunito">
            Experience a Doctor's Care <br /> At Your Own Convenience
          </h1>

          <p className="text-base text-gray-700">
            Get low cost doctor's consultation with certified specialists on
            SMS, WhatsApp, App or Web
          </p>

          <div className="flex justify-center md:justify-start">
            <a href="#">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border-2 border-teal-400 bg-white px-6 py-2 text-sm text-black transition-all hover:gap-3 hover:bg-teal-400 hover:bg-opacity-75"
              >
                Learn More <FaArrowRight size={16} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDoctor;
