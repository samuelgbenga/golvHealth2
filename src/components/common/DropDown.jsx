import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-scroll";

const menuItems = [
  { type: "link", label: "Profile", href: "/profile" },
  { type: "link", label: "Settings", href: "/settings" },
];

const Dropdown = ({ items = menuItems }) => {
  return (
    <>
      {
        <div className="invisible absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-white p-2 text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
          <div className="py-0">
            {items.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={index}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      }
    </>
  );
};

export default Dropdown;
