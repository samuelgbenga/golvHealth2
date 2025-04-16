import React from "react";
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { MdLocalPharmacy, MdScience } from 'react-icons/md';

export const HeroService = () => {
  return (
    <section className="px-4 mb-5">
      <h2 className="text-2xl font-bold font-nunito mb-6 text-center">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <ServiceCard
          icon={<MdLocalPharmacy size={32} className="text-teal-600" />}
          name="Pharmacy"
          link="/pharmacy"
        />
        <ServiceCard
          icon={<MdScience size={32} className="text-teal-600" />}
          name="Labs & Diagnostics"
          link="/lab"
        />
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, name, link }) => (
  <a
    href={link}
    className="block bg-gray-100 rounded-2xl p-6 w-52 hover:shadow-lg transition"
  >
    <div className="flex flex-col items-start space-y-4 relative">
      <div className="self-end">{icon}</div>
      <p className="text-lg font-semibold">{name}</p>
      <div className="absolute bottom-4 right-4 text-pink-600">
        <FaArrowRight />
      </div>
    </div>
  </a>
);
