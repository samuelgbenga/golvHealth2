import { FaArrowRight } from "react-icons/fa";
import image4 from "../../../assets/images/heroimg4.jpg";

const HeroLearnMore = () => {
  return (
    <section className=" py-5 md:py-10 w-full flex justify-center items-center ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 items-center max-w-screen-xl w-full px-4 mx-auto">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-5 h-full">
          <h1 className="text-4xl font-bold leading-tight font-nunito">
            Leading the Charge in
            <br />
            <span className="relative inline-block">
              Affordable
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-500"></span>
            </span>{" "}
            and{" "}
            <span className="relative inline-block">
              Accessible
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-500"></span>
            </span>
            <br />
            Healthcare Services
          </h1>

          <p className="text-base text-gray-700">
            Launched in January 2021, our journey began with a vision to provide
            quality, affordable, on-demand healthcare accessible with a simple
            swipe. We've crafted an all-inclusive service for everyone with a
            mobile device, no matter where you are, your health history, or
            social status. Your well-being is at the heart of our mission.
            Intrigued? Hit up the Learn more button and vibe with who we are!
          </p>

          <a href="/about-us">
            <button
              type="button"
              className="flex items-center gap-2 self-start rounded-full bg-teal-400 px-6 py-2 text-sm text-black transition-all hover:gap-3 hover:bg-opacity-80"
            >
              Learn More <FaArrowRight size={16} />
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={image4}
            alt="Medical Professionals"
            className="max-h-[70vh] 2xl:max-h-[50vh] object-contain object-center rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroLearnMore;
