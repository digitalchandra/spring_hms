import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../component/Sidebar";

const AddDoctors = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    designation: "",
    education: "",
  });
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.department || !formData.designation || !formData.education || !image) {
      setErrorMessage("All fields are required, including an image.");
      return;
    }

    // Prepare form data
    const data = new FormData();
    data.append("name", formData.name);
    data.append("department", formData.department);
    data.append("designation", formData.designation);
    data.append("education", formData.education);
    data.append("image", image);

    try {
      const response = await axios.post("http://localhost:8080/api/v4/insert", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setSuccessMessage("Doctor added successfully!");
        setFormData({
          name: "",
          department: "",
          designation: "",
          education: "",
        });
        setImage(null);
      }
    } catch (error) {
      setErrorMessage("Failed to add doctor. Please try again.");
    }
  };

  return (
      <div className="flex min-h-screen">
          <Sidebar/>
   <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-5">
        Add Doctor
      </h1>
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
          {errorMessage}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter doctor's name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter department"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter designation"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="education" className="block text-sm font-medium text-gray-700">
            Education
          </label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter education details"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Doctor
        </button>
      </form>
    </div>
      </div>
 
  );
};

export default AddDoctors;
