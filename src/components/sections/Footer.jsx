import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import logo from "../../assets/images/golvhealth4.png";
import Logo from "./navbar/Logo";

const Footer = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <div className="flex w-full flex-col justify-center bg-[#04B8BC] bg-footer-bg bg-cover px-10 md:px-20">
        <div className="md:z-40 my-12 flex w-full max-w-[1440px] flex-col justify-between text-white md:flex-row md:items-start">
          <div className="mb-10 mr-10">
            <Logo />
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col pb-8 text-start">
              <h3 className="mb-3 text-lg font-semibold">Golvhealth</h3>
              <a href="#">
                <p className="py-2 text-sm">Chat with a Doctor</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Video Consultation</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Book a Lab test</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Order medicine</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Search for clinics</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Consult a doctor</p>
              </a>
            </div>

            <div className="flex flex-col pb-8 text-start">
              <h3 className="mb-3 text-lg font-semibold">Company</h3>
              <a href="#">
                <p className="py-2 text-sm">About Us</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Corporate Services</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Wellness Packages</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Continuous Care Programme</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Contact Us</p>
              </a>
            </div>

            <div className="flex flex-col pb-8 text-start">
              <h3 className="mb-3 text-lg font-semibold">Resources</h3>
              <a href="#">
                <p className="py-2 text-sm">Blog</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Press</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Golv Care</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Careers</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Support</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Privacy Policy</p>
              </a>
              <a href="#">
                <p className="py-2 text-sm">Terms of Use</p>
              </a>
            </div>

            <div className="flex flex-col pb-8 text-start">
              <h3 className="mb-3 text-lg font-semibold">Social</h3>
              <a href="#">
                <FaFacebook className="py-2 text-sm" />
              </a>
              <a href="#">
                <FaTwitter className="py-2 text-sm" />
              </a>
              <a href="#">
                <FaLinkedin className="py-2 text-sm" />
              </a>
              <a href="#">
                <FaYoutube className="py-2 text-sm" />
              </a>
              <a href="#">
                <FaTiktok className="py-2 text-sm" />
              </a>
            </div>
          </div>

          <div className="flex h-full flex-col">
            <p className="mb-4">Download Golvhealth App On:</p>
            <div className="flex flex-row items-center">
              <a href="#">
                <FaGooglePlay className="mr-2" size={40} />
              </a>
              <a href="#">
                <FaApple size={40} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-2 w-full max-w-[1440px] rounded-full border px-4 text-white" />

        <div className="my-4 flex w-full max-w-[1440px] flex-col-reverse justify-between text-white md:flex-row md:items-center">
          <div className="mt-4 text-white md:mb-0">
            <p>Copyright © 2025 Golvhealth</p>
          </div>

          <div className="w-full max-w-[200px]">
            <div className="flex w-full flex-row items-center gap-4">
              <a href="#">
                <FaLinkedin size={20} />
              </a>
              <a href="#">
                <FaFacebook size={20} />
              </a>
              <a href="#">
                <FaTiktok size={20} />
              </a>
              <a href="#">
                <FaTwitter size={20} />
              </a>
              <a href="#">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
