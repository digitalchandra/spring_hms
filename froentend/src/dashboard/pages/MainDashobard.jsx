import React from 'react';
import Sidebar from '../component/Sidebar';
import { Outlet } from 'react-router-dom'; // Renders child routes

const MainDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600">Total Patients</h3>
            <p className="text-3xl font-bold">500</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600">Total Doctors</h3>
            <p className="text-3xl font-bold">50</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600">Appointments Today</h3>
            <p className="text-3xl font-bold">200</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600">Completed Surgeries</h3>
            <p className="text-3xl font-bold">120</p>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-5">Recent Activities</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ul>
              <li className="flex justify-between mb-4">
                <span>John Doe admitted</span>
                <span className="text-gray-500">10 mins ago</span>
              </li>
              <li className="flex justify-between mb-4">
                <span>Dr. Smith completed surgery</span>
                <span className="text-gray-500">30 mins ago</span>
              </li>
              <li className="flex justify-between mb-4">
                <span>Jane Doe appointment booked</span>
                <span className="text-gray-500">1 hour ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Outlet for rendering child routes */}
      <Outlet />
    </div>
  );
};

export default MainDashboard;
