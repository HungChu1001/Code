import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import { Routes, Route } from "react-router-dom";
import PatientList from "../components/PatientList/PatientList";
import PatientRecordsList from "../components/PatientRecordsList/PatientRecordsList";
import PatientRecord from "../components/PatientRecord/PatientRecord";
import PatientDetails from "../components/PatientDetails/PatientDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/patients" element={<PatientList />} />
      <Route path="/records" element={<PatientRecordsList />} />
      <Route path="/record/details" element={<PatientRecord />} />
      <Route path="/patient" element={<PatientDetails />} />
    </Routes>
  );
};

export default Routers;
