import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Title from "./title";

const sliderArrowStyle = `
  .slick-prev::before,
  .slick-next::before {
    color: #CAB3A4;
    font-size: 18px; 
  }

  .slick-prev:hover::before,
  .slick-next:hover::before {
    color: #deb89e; 
  }
`;

export const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: (i) => <div className="w-2 h-2 bg-[#ffffff] rounded-full" />,
  };

  return (
    <div>
      <style>{sliderArrowStyle}</style>
      <div
        id="about"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5"
      >
        <Title title="About Me" />
        <div className="flex flex-col md:flex-row items-center justify-center mt-14  bg-gray-100 p-5">
          <div className="relative md:w-1/2 flex justify-center md:mb-0">
            <Slider {...sliderSettings} className="w-64 h-30 md:w-80 md:h-96">
              <div className="relative">
                <img
                  src="/Dikshya.jpg"
                  alt="Dikshya"
                  className="object-cover w-full h-full rounded-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-base md:text-lg font-semibold p-4">
                  <p className="text-center">
                    Hello, I'm Dikshya. Get to know more about me.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/project.jpg"
                  alt="Project"
                  className="object-cover w-full h-full rounded-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-base md:text-lg font-semibold p-4">
                  <p className="text-center">
                    I love to get involved in Innovative Projects
                  </p>
                </div>
              </div>
            </Slider>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="text-base md:text-lg text-gray-800 p-6 md:p-8 max-w-lg text-center md:text-justify md:ml-12">
              I am a dedicated software developer with a passion for crafting
              innovative and impactful digital solutions. I am passionate about
              building applications that not only solve problems but also create
              lasting value.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-14 bg-gray-100 p-5">
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="text-base md:text-lg text-gray-800 p-6 md:p-8 max-w-lg text-center md:text-justify md:ml-24">
              Outside of development, I am an avid reader and a curious learner,
              constantly seeking new horizons. My work is fueled by a deep
              commitment to excellence and a desire to make a meaningful
              difference through technology.
            </p>
          </div>
          <div className="relative md:w-1/2 flex justify-center md:mb-0">
            <Slider
              {...sliderSettings}
              className="w-64 h-30 md:w-80 md:h-96 mb-20"
            >
              <div className="relative">
                <img
                  src="/me.jpg"
                  alt="Me"
                  className="object-cover w-full h-full rounded-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-base md:text-lg font-semibold p-4">
                  <p className="text-center">
                    Passionate about coding and reading books
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/book.jpg"
                  alt="Book"
                  className="object-cover w-full h-full rounded-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-base md:text-lg font-semibold p-4">
                  <p className="text-center">
                    Avid Reader & Learner and explorer of new horizons
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
