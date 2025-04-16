import { FaChevronDown } from "react-icons/fa"; // Importing react-icons for dropdown
import PrescriptionUploadButton from "../../common/PrescriptionUploadButton";
import Dropdown from "../../common/DropDown";

const menuBlog = [
  { type: "link", label: "How it works", to: "how-it-works" },
  { type: "link", label: "Medical Blogs", to: "services" },
  { type: "link", label: "Technical Blogs", to: "services" },
  { type: "link", label: "Advicory Blogs", to: "services" },
  { type: "link", label: "Consultancy Blogs", to: "services" },
];

const menuItemsAbout = [
  { type: "link", label: "About us", to: "aboutus" },
  { type: "link", label: "Meet Our Team", to: "team" },
  { type: "link", label: "Testimonials", to: "testimonials" },
  { type: "link", label: "Vision and Mission", to: "vision-mission" },
  { type: "link", label: "Our Partners", to: "partners" },
];

const menuItemsService = [
  { type: "link", label: "Consultancy", to: "consultancy" },
  { type: "link", label: "Get Records", to: "records" },
];

const menuItemsContacts = [
  { type: "link", label: "FAQs", to: "faqs" },
  { type: "link", label: "Contact Form", to: "contacts" },
  { type: "link", label: "News Letter", to: "news-letter" },
  { type: "link", label: "Social Links", to: "social-links" },
];

const Navigation = () => {
  return (
    <section className="hidden items-center justify-center pb-3 text-[14px] md:gap-x-4 lg:flex lg:gap-x-12 xl:gap-x-16">
      <div>
        <ul className="flex space-x-8">
          {/* Healthcare Services */}
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium">
            <div className="flex items-center space-x-2">
              <span>Healthcare Services</span>
              <FaChevronDown className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
            </div>

            {/* You can replace this with your <Dropdown /> component */}
            <Dropdown items={menuItemsService} />
          </li>

          {/* For Business */}
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium">
            <span>Blogs</span>
            <FaChevronDown className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
            {/* You can replace this with your <Dropdown /> component */}
            <Dropdown items={menuBlog}/>
          </li>

          {/* About Us */}
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium">
            <span>About Us</span>
            <FaChevronDown className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
            {/* You can replace this with your <Dropdown /> component */}
            <Dropdown items={menuItemsAbout} />
          </li>

          {/* Contact Us */}
          <li className="group relative flex cursor-pointer items-center space-x-2 font-medium">
            <span>Contact Us</span>
            <FaChevronDown className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
            {/* You can replace this with your <Dropdown /> component */}
            <Dropdown items={menuItemsContacts} />
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
