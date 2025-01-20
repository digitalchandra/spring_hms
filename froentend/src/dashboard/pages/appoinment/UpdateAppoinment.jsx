// Student Name: Shrstha  
// student ID m24w0199 
// ------------------------
// Student Name: Pandey 
// Student Id: m240213

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../component/Sidebar";
import { useParams, useNavigate } from "react-router-dom"; // To get route parameters

const AppointmentForm = () => {
  const { id } = useParams(); // Extract appointment ID from the URL if present
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    symptom: "",
    number: "",
  });
  const [message, setMessage] = useState("");

  // Fetch existing data if updating
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/v2/${id}`) // Fetch appointment details by ID
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching appointment details:", error);
        });
    }
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing appointment
        const response = await axios.put(
          `http://localhost:8080/api/v2/update/${id}`,
          formData
        );
        if (response.status === 200) {
          setMessage("Appointment updated successfully!");
        }
      } else {
        // Add new appointment
        const response = await axios.post(
          "http://localhost:8080/api/v2/insert",
          formData
        );
        if (response.status === 200 || response.status === 201) {
          setMessage("Appointment added successfully!");
          setFormData({ name: "", age: "", symptom: "", number: "" }); // Reset form
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Failed to process request. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">
          {id ? "Update Appointment" : "Add Appointment"}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 max-w-lg"
        >
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
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Number
            </label>
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
            {id ? "Update Appointment" : "Add Appointment"}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-lg">{message}</p>}
        <button
          onClick={() => navigate(-1)} // Navigate back
          className="mt-4 text-blue-500 underline"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
