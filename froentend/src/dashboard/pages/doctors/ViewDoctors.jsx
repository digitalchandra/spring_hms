import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../component/Sidebar';

const ViewDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch doctors from the backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v4'); // Update the endpoint if necessary
        setDoctors(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch doctors.');
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-600 font-bold">Loading doctors...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 font-bold">{error}</div>;
  }

  return (

    <div className="flex min-h-screen">
        <Sidebar/>

    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5 text-blue-800">Doctors List</h1>
      {doctors.length === 0 ? (
        <p className="text-center text-gray-500">No doctors found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-200 shadow-lg">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Designation</th>
                <th className="px-4 py-2 text-left">Education</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{doctor.id}</td>
                  <td className="px-4 py-2">{doctor.name}</td>
                  <td className="px-4 py-2">{doctor.department}</td>
                  <td className="px-4 py-2">{doctor.designation}</td>
                  <td className="px-4 py-2">{doctor.education}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>

  );
};

export default ViewDoctors;
