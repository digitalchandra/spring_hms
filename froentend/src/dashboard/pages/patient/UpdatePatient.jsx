import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../component/Sidebar';

const UpdatePatient = () => {
  const [formData, setFormData] = useState({
    id: '', // Patient ID for identifying the patient to update
    name: '',
    age: '',
    bloodGroup: '',
    prescription: '',
    dosage: '',
    fees: '',
    urgency: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.id) {
      alert('Patient ID is required for updating.');
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/update/${formData.id}`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert('Patient updated successfully!');
      console.log(response.data);
      resetForm();
    } catch (error) {
      console.error('Error updating patient:', error);
      alert('Failed to update patient. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      age: '',
      bloodGroup: '',
      prescription: '',
      dosage: '',
      fees: '',
      urgency: '',
    });
  };

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
          <form
            className="bg-white p-8 rounded shadow-lg max-w-2xl w-full"
            onSubmit={handleUpdate}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Update Patient</h2>
            {[
              { label: 'Patient ID (Required)', name: 'id', type: 'text' },
              { label: 'Name', name: 'name', type: 'text' },
              { label: 'Age', name: 'age', type: 'number' },
              { label: 'Blood Group', name: 'bloodGroup', type: 'text' },
              { label: 'Prescription', name: 'prescription', type: 'text' },
              { label: 'Dosage', name: 'dosage', type: 'text' },
              { label: 'Fees', name: 'fees', type: 'number' },
              { label: 'Urgency', name: 'urgency', type: 'text' },
            ].map((field) => (
              <div className="mb-4" key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-gray-700 font-medium mb-2"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={field.name === 'id'} // Only Patient ID is mandatory
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Update Patient
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePatient;
