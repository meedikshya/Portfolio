import React from "react";
import Title from "./Title";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5"
    >
      <Title title="Projects" />
      <div className="flex flex-wrap justify-center gap-8 mt-14 px-4 mb-10">
        {/* Project Card 1 */}
        <div
          className="relative w-full sm:w-[30%] md:w-[50%] lg:w-[60%] text-justify mb-10 max-w-xs rounded-lg overflow-hidden shadow-xl bg-[#FFFFFF] transition-transform transform"
          style={{ height: "300px" }}
        >
          <img
            className="w-full h-56 object-cover"
            src={`${baseUrl}project1.png`}
            alt="Movie Booking System"
          />
          <div className="px-6 py-2 text-center">
            <div className="font-bold text-sm mt-4 text-[#bf9995]">
              Movie Booking System
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2 text-white">
                Movie Booking System
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Developed with React.js for user interfaces, React Query for
                state management, and React Router DOM for routing. Styled using
                Bootstrap, React Icons, and React Date Picker, with
                notifications via React Toastify and deployed on GitHub Pages.
              </p>
            </div>
            <div className="px-6 pt-2 pb-4 flex justify-center gap-4">
              <a
                href="https://meedikshya.github.io/Movie-Ticket-Booking/"
                className="bg-white text-gray-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-300"
              >
                Demo
              </a>
              <a
                href="https://github.com/meedikshya/Movie-Ticket-Booking"
                className="bg-white text-gray-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div
          className="relative w-full sm:w-[30%] md:w-[50%] lg:w-[60%] text-justify mb-10 max-w-xs rounded-lg overflow-hidden shadow-xl bg-[#FFFFFF] transition-transform transform"
          style={{ height: "300px" }}
        >
          <img
            className="w-full h-56 object-cover"
            src={`${baseUrl}project2.png`}
            alt="Single Page Web App"
          />
          <div className="px-6 py-2 text-center">
            <div className="font-bold text-sm mt-4 text-[#bf9995]">
              Single Page Web Application
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2 text-white">
                Single Page Web App
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Created with React.js for dynamic UIs, React Icons for
                iconography, React Toastify for notifications, and SCSS for CSS
                preprocessing.
              </p>
            </div>
            <div className="px-6 pt-2 pb-4 flex justify-center gap-4">
              <a
                href="https://meedikshya.github.io/single-page-webapplication/"
                className="bg-white text-gray-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-300"
              >
                Demo
              </a>
              <a
                href="https://github.com/meedikshya/single-page-webapplication"
                className="bg-white text-gray-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-6 w-full px-4">
        <a
          href="https://github.com/meedikshya"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center gap-2"
        >
          <FaGithub className="h-5 w-5" />
          View More
        </a>
      </div>
    </div>
  );
};
