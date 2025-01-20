// Student Name: Shrstha  
// student ID m24w0199 
// ------------------------
// Student Name: Pandey 
// Student Id: m240213

import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-blue-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to the Hospital Management System
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Manage patients, appointments, and staff efficiently with our system.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
