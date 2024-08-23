import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#F5EDED] fonts">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
