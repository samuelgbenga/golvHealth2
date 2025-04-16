import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import image from "../../../assets/images/golvhealthsignupmobile.png";

const TakeGolvHealthWithYou = () => {
  return (
    <div className="mt-10 w-full max-w-screen-xl mx-auto overflow-hidden rounded-md bg-gray-100">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center px-6 py-8">
        {/* Text Section */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-3xl font-bold">
            Take GolvHealth with you <br />
            <span className="text-teal-600">Anywhere, Anytime.</span>
          </h1>
          <p className="text-lg text-gray-700">
            Access video consultation with top doctors on the GolvHealth App. <br />
            Connect with doctors online, available 24/7, from the comfort of
            your home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://apps.apple.com/us/app/zuri-health/id1554395747"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md">
                <FaApple size={20} />
                iOS Download
              </button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.zurihealth_patient&hl=en&gl=US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md">
                <FaGooglePlay size={20} />
                Android Download
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center lg:mt-0">
          <img
            alt="GolvHealth App"
            src={image}
            className="w-100 h-100 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TakeGolvHealthWithYou;
