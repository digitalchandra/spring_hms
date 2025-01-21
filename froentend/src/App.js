// Student Name: Shrstha Chandra Bahadur 
// student ID m24w0199 
// ------------------------
// Student Name: Anju Pandey 
// Student Id: m240213


import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainDashboard from "./dashboard/pages/MainDashobard";
import ViewAppointment from "./dashboard/pages/appoinment/ViewAppoinment";
import AddAppointment from "./dashboard/pages/appoinment/AddAppoinment";
import UpdatePatient from "./dashboard/pages/patient/UpdatePatient";
import ViewDoctors from "./dashboard/pages/doctors/ViewDoctors";
import AddDoctors from "./dashboard/pages/doctors/AddDoctors";
import AddPatient from "./dashboard/pages/patient/AddPatient";


import ViewPatient from "./dashboard/pages/patient/ViewPatient";
import Homepage from "./fornt/Homepage";

import LoginPage from "./fornt/auth/LoginPage";


function App() {
  return (
  <BrowserRouter>

    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<MainDashboard/>}/>

        {/* Appointment route  */}
        <Route path="/viewappoinment" element={<ViewAppointment/>}/>
        <Route path="/addappoinment" element={<AddAppointment/>}/>
        <Route path="/updateappoinment/:id" element={<UpdatePatient/>}/>

      {/* Route for Doctors */}
        <Route path="/viewdoctors" element={<ViewDoctors/>}/>
    
        <Route path="/adddoctor" element={<AddDoctors />} />

        {/* Patient Route */}
          <Route path="viewpatient" element={<ViewPatient/>}/>
          <Route path="addpatient" element={<AddPatient/>}/>
        

        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>


    </div>

    </BrowserRouter>
  );
}

export default App;
