import { FaChevronDown } from "react-icons/fa"; // Importing react-icons for dropdown
import PrescriptionUploadButton from "../../common/PrescriptionUploadButton";

const Navigation = () => {
  return (
    <section className="hidden items-center justify-center py-3 text-[14px] md:gap-x-4 lg:flex lg:gap-x-12 xl:gap-x-16">
      <div>
        <ul className="flex space-x-8">
          {/* Healthcare Services */}
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium">
            <span>Healthcare Services</span>
            <FaChevronDown className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
          </li>

          {/* For Business */}
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium">
            <span>For Business</span>
            <FaChevronDown className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
          </li>

          {/* About Us */}
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium">
            <span>About Us</span>
            <FaChevronDown className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
          </li>

          {/* Contact Us */}
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium">
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium ">
            <PrescriptionUploadButton />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navigation;
