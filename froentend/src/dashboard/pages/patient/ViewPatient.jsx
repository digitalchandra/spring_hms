// Student Name: Shrstha Chandra Bahadur 
// student ID m24w0199 
// ------------------------
// Student Name: Anju Pandey 
// Student Id: m240213

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../component/Sidebar";

const ViewPatient = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1");
        setPatients(response.data);
      } catch (err) {
        setError("Failed to fetch patients. Please try again later.");
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Patient List</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Blood Group</th>
              <th className="border border-gray-300 px-4 py-2">Prescription</th>
              <th className="border border-gray-300 px-4 py-2">Does</th>
              <th className="border border-gray-300 px-4 py-2">Fees</th>
              <th className="border border-gray-300 px-4 py-2">Urgency</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{patient.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{patient.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{patient.age}</td>
                  <td className="border border-gray-300 px-4 py-2">{patient.blood}</td>
                  <td className="border border-gray-300 px-4 py-2">{patient.prescription}</td>
                  <td className="border border-gray-300 px-4 py-2">{patient.does}</td>
                  <td className="border border-gray-300 px-4 py-2">{patient.fees}</td>
                  <td className="border border-gray-300 px-4 py-2">{patient.urgency}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                >
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>

  );
};

export default ViewPatient;
