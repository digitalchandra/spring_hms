import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';  // Importing Ionicons

const Sidebar = () => {
  const [patientsOpen, setPatientsOpen] = useState(false);
  const [medicinesOpen, setMedicinesOpen] = useState(false);
  const [appointmentsOpen, setAppointmentsOpen] = useState(false);

  // Toggle functions
  const togglePatients = () => setPatientsOpen(!patientsOpen);
  const toggleMedicines = () => setMedicinesOpen(!medicinesOpen);
  const toggleAppointments = () => setAppointmentsOpen(!appointmentsOpen);

  return (
    <div className="bg-blue-800 text-white w-64 p-5">
      <h2 className="text-3xl font-bold mb-10">KCGI HM System</h2>
      <ul>
        <li className="mb-5">
          <Link to="/dashboard" className="text-lg hover:text-gray-300">Dashboard</Link>
        </li>
        <li className="mb-5">
          <span
            className="text-lg font-semibold cursor-pointer flex items-center"
            onClick={togglePatients}
          >
            <span>Patients</span>
            {patientsOpen ? (
              <IoIosArrowDown className="ml-2" />
            ) : (
              <IoIosArrowForward className="ml-2" />
            )}
          </span>
          {/* Patients Dropdown */}
          {patientsOpen && (
            <ul className="ml-4">
              <li><Link to="/patients/add" className="text-lg hover:text-gray-300">Add Patient</Link></li>
              <li><Link to="/patients/view" className="text-lg hover:text-gray-300">View Patient</Link></li>
              <li><Link to="/patients/update" className="text-lg hover:text-gray-300">Update Patient</Link></li>
            </ul>
          )}
        </li>
        <li className="mb-5">
          <span
            className="text-lg font-semibold cursor-pointer flex items-center"
            onClick={toggleMedicines}
          >
            <span>Medicines</span>
            {medicinesOpen ? (
              <IoIosArrowDown className="ml-2" />
            ) : (
              <IoIosArrowForward className="ml-2" />
            )}
          </span>
          {/* Medicines Dropdown */}
          {medicinesOpen && (
            <ul className="ml-4">
              <li><Link to="/medicines/add" className="text-lg hover:text-gray-300">Add Medicine</Link></li>
              <li><Link to="/medicines/view" className="text-lg hover:text-gray-300">View Medicine</Link></li>
            </ul>
          )}
        </li>
        <li className="mb-5">
          <span
            className="text-lg font-semibold cursor-pointer flex items-center"
            onClick={toggleAppointments}
          >
            <span> <Link to="/viewappoinment" className="text-lg hover:text-gray-300">Appointments </Link></span>
            {appointmentsOpen ? (
              <IoIosArrowDown className="ml-2" />
            ) : (
              <IoIosArrowForward className="ml-2" />
            )}
          </span>
          {/* Appointments Dropdown */}
          {appointmentsOpen && (
            <ul className="ml-4">
              <li><Link to="/addappoinment" className="text-lg hover:text-gray-300">Add Appointment</Link></li>
              <li><Link to="/appointments/view" className="text-lg hover:text-gray-300">View Appointment</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
