// import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Show from "./Components/Show";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero / About Section */}
      <Hero />
       <About />
       <Show />
      <Contact /> 
    </div>
  );
};

export default App;
