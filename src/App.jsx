// import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Work from "./Components/Work";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero / About Section */}
      <Hero />
      <About />
      <Work />

      {/*
        Future sections will go here:
        - About
        - Services
        - Portfolio
        - Testimonials
        - Contact
      */}
    </div>
  );
};

export default App;
