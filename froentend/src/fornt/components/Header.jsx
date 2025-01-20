import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">Hospital Management System</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#footer" className="hover:underline">Contact</a></li>
            {/* Login button */}
            <li>
                
                <Link to="/login"
                    
                    className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300"
                >
                    Login
               

                </Link>
             
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
