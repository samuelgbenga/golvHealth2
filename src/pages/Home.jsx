import React from "react";
import ChatBanner from "../components/sections/ChatBanner";
import Navbar from "../components/sections/navbar/Navbar";
import Navigation from "../components/sections/navbar/Navigation";
import Hero from "../components/sections/herosection/Hero";
import HeroLearnMore from "../components/sections/herosection/HeroLearnMore";
import HeroDoctor from "../components/sections/herosection/HeroDoctor";
import HeroCheckoutCaurosel from "../components/sections/herosection/HeroCheckoutCaurosel";
import TakeGolvHealthWithYou from "../components/sections/herosection/HeroMeetWithGolvHealth";
import HeroJoinCommunity from "../components/sections/herosection/HeroJoinCommunity";
import Footer from "../components/sections/Footer";

export const Home = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col">
        <ChatBanner />
        <Navbar />
        <Navigation />
        <Hero />
        <HeroLearnMore />
        <HeroDoctor />
        <HeroCheckoutCaurosel />
        <TakeGolvHealthWithYou />
        <HeroJoinCommunity />
        <Footer />
      </div>
    </div>
  );
};
