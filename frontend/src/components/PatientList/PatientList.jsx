// src/PatientList/PatientList.jsx
import React, { useState } from "react";
import PatientCard from "./PatientCard";

const patientsData = [
  { id: "FIG-123", name: "Task 1", recordLink: "Click", infoLink: "Click" },
  { id: "FIG-122", name: "Task 2", recordLink: "Click", infoLink: "Click" },
  // Add more patient data here
];

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patientsData.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Tìm kiếm bệnh nhân"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="bg-white shadow-md rounded">
        {filteredPatients.map((patient) => (
          <PatientCard
            key={patient.id}
            id={patient.id}
            name={patient.name}
            recordLink={patient.recordLink}
            infoLink={patient.infoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
