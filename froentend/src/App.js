import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainDashboard from "./dashboard/pages/MainDashobard";
import ViewAppointment from "./dashboard/pages/appoinment/ViewAppoinment";
import AddAppointment from "./dashboard/pages/appoinment/AddAppoinment";
import UpdatePatient from "./dashboard/pages/patient/UpdatePatient";


function App() {
  return (
  <BrowserRouter>

    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<MainDashboard/>}/>

        {/* Appointment route  */}
        <Route path="/viewappoinment" element={<ViewAppointment/>}/>
        <Route path="addappoinment" element={<AddAppointment/>}/>
        <Route path="updateappoinment/:id" element={<UpdatePatient/>}/>

        
      </Routes>


    </div>

    </BrowserRouter>
  );
}

export default App;
