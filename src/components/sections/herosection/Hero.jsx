

import HeroCaurosel from './HeroCaurosel';
import { HeroService } from './HeroService';

const Hero = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Text */}
      <section className="text-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-nunito">
          Take a step towards a{' '}
          <span className="relative inline-block">
            healthier
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-500"></span>
          </span>
          , happier you!
        </h1>
        <p className="mt-4 max-w-3xl mx-auto italic text-gray-700">
          Chat with our friendly doctors, order meds, book lab tests, schedule a doctor's home visit, and explore our healthcare plans – just the way you like it!
        </p>
      </section>

      {/* Call to Action Section */}
      {/* <section className="relative h-[360px] bg-slate-800 rounded-2xl overflow-hidden mx-4 lg:mx-10 mb-10">
        <img
          src={image1}
          alt="meds"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-6 text-white max-w-xl">
          <h2 className="text-3xl font-bold mb-4">
            Your Meds, Your <span className="relative inline-block">Way!
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"></span>
            </span>
          </h2>
          <p>
            Order both Over The Counter and prescription medicines – delivered wherever you are.
          </p>
          <a href="/pharmacy">
            <button className="mt-5 flex items-center gap-2 px-6 py-2 bg-teal-400 text-black rounded-full hover:bg-white transition-all">
              Get Started
              <FaArrowRight size={16} />
            </button>
          </a>
        </div>
      </section> */}
      <HeroCaurosel />

      {/* Services Section */}
     <HeroService />
    </div>
  );
};



export default Hero;
