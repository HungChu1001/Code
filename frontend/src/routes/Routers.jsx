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
import RecordImage from "../components/RecordImage/RecordImage";
import PatientSignUp from "../pages/Patients/PatientSignUp";
import AppointmentForm from "../pages/Appointment/AppointmentForm";
import AppointmentTable from "../pages/Patients/AppointmentTable";
import Takelist from "../pages/Doctors/Takelist";
import PersonalInfoForm from "../pages/Patients/PersonalnfoForm";
import DoctorInfoForm from "../pages/Doctors/DoctorInfoForm";

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
      <Route path="/patient/signup" element={<PatientSignUp />} />
      <Route path="/doctor/setappointment" element={<AppointmentForm />} />
      <Route path="/patient/appointmenttable" element={<AppointmentTable />} />
      <Route path="/patient/info" element={<PersonalInfoForm />} />
      <Route path="/doctor/info" element={<DoctorInfoForm />} />
      <Route path="/doctor/takelist" element={<Takelist />} />
      <Route path="/records" element={<PatientRecordsList />} />
      <Route path="/record/details" element={<PatientRecord />} />
      <Route path="/record/images" element={<RecordImage />} />
    </Routes>
  );
};

export default Routers;
