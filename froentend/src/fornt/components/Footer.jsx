// Student Name: Shrstha Chandra Bahadur 
// student ID m24w0199 
// ------------------------
// Student Name: Anju Pandey 
// Student Id: m240213

import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hospital Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
