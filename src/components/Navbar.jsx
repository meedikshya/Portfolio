import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full px-5 py-4 relative">
      {/* Logo Section */}
      <div className="text-white text-lg font-bold">
        <img
          src="/logo.png"
          className="h-16 w-20 md:h-14 md:w-15 rounded-full object-cover"
          alt="logo"
        />
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="text-[#98735B] cursor-pointer focus:outline-none"
        >
          <GiHamburgerMenu size={28} />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex md:flex-row md:items-center absolute md:static left-0 top-[60px] md:top-auto w-full md:w-auto md:ml-auto md:gap-8 justify-center md:bg-transparent p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row md:gap-8 gap-4 md:mx-0 mx-5 my-4 md:my-0 items-center text-base text-[#BC9F8B]">
          <li>
            <a href="#home" className="hover:text-[#deb89e]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#deb89e]">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#deb89e]">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#deb89e]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
