import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#CAB3A4] text-white py-4 text-center relative">
      <p>© 2024 Dikshya Sharma. All rights reserved.</p>
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 bg-[#F6EDED] hover:bg-[#ffffff] text-[#CAB3A4] p-2 rounded-full"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Footer;
