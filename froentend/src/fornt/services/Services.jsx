import React from "react";

const Services = () => {
  const services = [
    { title: "24/7 Emergency", description: "Always available for emergency services." },
    { title: "Pharmacy", description: "On-site pharmacy for quick access to medicines." },
    { title: "Lab Services", description: "Comprehensive lab tests and diagnostics." },
    { title: "Specialized Care", description: "Access to a range of specialists and expert care." },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
