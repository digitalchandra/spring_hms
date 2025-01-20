// Student Name: Shrstha Chandra Bahadur 
// student ID m24w0199 
// ------------------------
// Student Name: Anju Pandey 
// Student Id: m240213

import React from "react";

const Features = () => {
  const features = [
    { title: "Patient Management", description: "Easily track patient records and appointments." },
    { title: "Appointment Scheduling", description: "Simplify scheduling for doctors and patients." },
    { title: "Billing System", description: "Seamlessly manage hospital billing processes." },
    { title: "Staff Management", description: "Organize and manage staff efficiently." },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-blue-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
