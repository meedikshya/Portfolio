import React from "react";
import { logoNew } from "/logoNew.png";

export const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-center mb-32 min-h-full px-5 py-10"
    >
      <div className="text-center ml-10 mt-20 md:text-center md:w-1/2 mb-8 md:mb-10 text-[#98735b]">
        <h1 className="text-4xl font-bold mb-4">Dikshya Sharma</h1>
        <p className="text-lg">
          Software developer dedicated to building innovative applications.
        </p>
      </div>
      <div className="flex md:w-1/2 justify-center">
        <img
          src={logoNew}
          alt="Dikshya"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-[#c5ae9f]"
        />
      </div>
    </div>
  );
};
