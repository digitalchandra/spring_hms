import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../component/Sidebar";

const AddAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    symptom: "",
    number: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v2/insert", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Appointment added successfully!");
        setFormData({ name: "", age: "", symptom: "", number: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error adding appointment:", error);
      setMessage("Failed to add appointment. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
        <Sidebar/>
        <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">Add Appointment</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-lg">
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                placeholder="Enter patient's name"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Age</label>
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                placeholder="Enter patient's age"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Symptom</label>
            <input
                type="text"
                name="symptom"
                value={formData.symptom}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                placeholder="Enter symptoms"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Contact Number</label>
            <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                placeholder="Enter contact number"
                required
            />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
            >
            Add Appointment
            </button>
        </form>
        {message && <p className="mt-4 text-center text-lg">{message}</p>}
        </div>
    </div>
 

  );
};

export default AddAppointment;
