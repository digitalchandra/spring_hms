// Student Name: Shrstha  
// student ID m24w0199 
// ------------------------
// Student Name: Pandey 
// Student Id: m240213

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import Sidebar from '../../component/Sidebar';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import Edit and Delete icons
import { Link } from 'react-router-dom';
export default function ViewAppointment() {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from the API on component mount
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v2') // Replace with your API endpoint
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Handle edit action
  const handleEdit = (id) => {
    console.log(`Edit appointment with ID: ${id}`);
    // Implement edit functionality here (e.g., navigate to an edit page or show a modal)
  };

  // Handle delete action
  const handleDelete = (id) => {
    console.log(`Delete appointment with ID: ${id}`);
    // Optionally, make an API request to delete the appointment
    axios
      .delete(`http://localhost:8080/api/v2/${id}`) // Replace with your delete API endpoint
      .then(() => {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
        console.log(`Appointment with ID ${id} deleted`);
      })
      .catch((error) => {
        console.error(`Error deleting appointment with ID ${id}:`, error);
      });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-10">View Appointments</h1>

        {/* Appointments Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Age</th>
                <th className="px-4 py-2 border-b">Symptom</th>
                <th className="px-4 py-2 border-b">Contact Number</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-4 py-2 border-b">{appointment.name}</td>
                    <td className="px-4 py-2 border-b">{appointment.age}</td>
                    <td className="px-4 py-2 border-b">{appointment.symptom}</td>
                    <td className="px-4 py-2 border-b">{appointment.number}</td>
                    <td className="px-4 py-2 border-b text-center">
                      <button
                        className="text-blue-500 hover:text-blue-700 mr-4"
                        onClick={() => handleEdit(appointment.id)}
                      >
                        <Link to="/updateappoinment/id"> 
                            <FaEdit />
                        </Link>

                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(appointment.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center">
                    No appointments available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
