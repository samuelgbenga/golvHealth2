import React, { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import { TbUserEdit } from "react-icons/tb";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

import { ReactComponent as SideArrow } from "../../../assets/icons/sidearrow.svg";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOnclickBurgerMenu = () => {
    console.log("Burger Menu Clicked");
    setMobileMenu(!mobileMenu);
  };

  return (
    <section className="flex h-fit items-center justify-around pt-4 md:justify-start md:gap-x-[80px] xl:gap-x-[200px] relative">
      {/* Hamburger Icon */}
      {/* <div className="flex cursor-pointer lg:hidden">
        <img
          alt="HamBurger"
          src="/_next/static/media/burger.f7cc8341.svg"
          width="25"
          height="25"
        />
      </div> */}
      <BurgerMenuButton onClick={handleOnclickBurgerMenu} />

      {/* Logo for Mobile View */}
      <div className={`fixed inset-0 z-50 ${mobileMenu ? "block" : "hidden"}`}>
        <div className="absolute inset-y-0 left-0 w-full transform overflow-auto bg-white shadow-lg">
          <div className="sticky left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-white p-4 text-white">
            <a href="/">
              <Logo size={105} />
            </a>
            <button
              className="text-2xl font-bold text-black"
              onClick={handleOnclickBurgerMenu}
            >
              ×
            </button>
          </div>

          <div>
            {["Healthcare Services", "For Business", "About Us"].map((text) => (
              <ul key={text} className="p-4">
                <li className="group mb-2 flex cursor-pointer items-center space-x-2 text-black">
                  <span>{text}</span>
                  {/* <img
                    alt="dropdown"
                    src="/_next/static/media/dropdown.2f45e22d.svg"
                    width="10"
                    height="10"
                    className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                  /> */}
                  <SideArrow />
                </li>
              </ul>
            ))}

            <ul className="p-4">
              <li className="group mb-2 flex cursor-pointer items-center space-x-2 text-black">
                <a href="/contact-us">Contact Us</a>
                <div className="transform transition-transform duration-500 ease-in-out group-hover:rotate-45">
                  <SideArrow />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo for Desktop View */}
      <a href="/">
        <Logo size={250} />
      </a>
      <div className="lg:hidden block w-full absolute -bottom-6 justify-center">
        <div className="w-[80%] m-auto">
          <SearchBar />
        </div>
      </div>
      <br />
      {/* Search Bar */}
      {/* <div className=" block md:w-[50%] lg:w-[56%] lg:hidden xl:w-[45%] ">
        <SearchBar />
      </div> */}

      {/* Search Bar */}
      <div className="hidden items-center justify-start md:w-[50%] lg:flex lg:w-[56%] xl:w-[45%]">
        <SearchBar />
      </div>
      <div className="w-100"> </div>
    </section>
  );
}
