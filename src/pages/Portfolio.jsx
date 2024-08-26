import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Qualification from "../components/Qualifications";
import SkillsCard from "../components/Skills";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#F5EDED] fonts">
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <SkillsCard />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
