import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../component/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/api/v1/delete/${id}`);
      alert("Patient deleted successfully.");
      // Remove the deleted patient from the local state
      setPatients((prevPatients) => prevPatients.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting patient:", error);
      alert("Failed to delete patient. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
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
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.length > 0 ? (
                patients.map((patient) => (
                  <tr key={patient.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {patient.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {patient.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {patient.age}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {patient.blood}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {patient.prescription}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {patient.does}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {patient.fees}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {patient.urgency}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-4">
                      {/* Edit Button */}
                      <button
                        onClick={() => alert(`Edit functionality for ID: ${patient.id}`)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit size={18} />
                      </button>
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(patient.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
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
