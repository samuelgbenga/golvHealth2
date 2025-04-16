import React from "react";
import { FaRegEnvelope } from "react-icons/fa"; // Importing email icon from react-icons

const HeroJoinCommunity = () => {
  return (
    <div className="mt-10 flex h-[240px] items-center justify-center bg-[#F8EEF0] md:h-[340px]">
      <div className="flex items-center justify-center">
        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold font-nunito">
            Join Our{" "}
            <span className="relative">
              Community
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-500"></span>
            </span>
          </h1>
          <p className="text-lg my-2 text-grey-700">
            Join our community to stay up to date on healthy living
          </p>
          <div className="flex flex-row justify-center items-center">
            <div>
              <input
                type="email"
                required
                className="h-[50px] rounded-md px-2 lg:w-[547px] bg-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mx-2">
              <button className="h-[50px] w-[141px] rounded-md bg-[#EA526F] text-white flex items-center justify-center">
                <FaRegEnvelope size={20} className="mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroJoinCommunity;
