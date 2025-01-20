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
import AddDoctor from "./dashboard/pages/doctors/AddDoctor";

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
        <Route path="/adddoctor" elements ={<AddDoctor/>}/>


        {/* Patient Route */}
          <Route path="viewpatient" element={<ViewPatient/>}/>
        

        {/* Login Route */}
        <Route page="/login" element={<LoginPage/>}/>
      </Routes>


    </div>

    </BrowserRouter>
  );
}

export default App;
