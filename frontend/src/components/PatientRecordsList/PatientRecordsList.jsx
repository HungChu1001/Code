// src/components/PatientRecordsList/PatientRecordsList.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { patientsData } from "../../data/patientsData";

const PatientRecordsList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const patientId = queryParams.get("patientId");
  const navigate = useNavigate();

  const patient = patientsData.find((p) => p.id === patientId);

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-md relative">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-3 py-1 rounded"
        >
          &larr; Quay lại
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">
        Hồ Sơ Bệnh Án - {patient.name}
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm bệnh án"
          className="mb-4 p-2 border rounded w-full"
        />
      </div>
      <div className="bg-white shadow-md rounded">
        {patient.records.map((record) => (
          <div
            key={record.id}
            className="flex justify-between items-center p-4 border-b"
          >
            <div className="flex-1">
              <div className="text-lg font-bold">{record.id}</div>
              <div className="text-sm">{record.date}</div>
              <div className="text-sm">{record.summary}</div>
            </div>
            <div className="flex space-x-2">
              <Link to={`/record/details?recordId=${record.id}`}>
                <button className="bg-black text-white px-3 py-1 rounded">
                  Xem bệnh án
                </button>
              </Link>
              <Link to={`/record/images?recordId=${record.id}`}>
                <button className="bg-black text-white px-3 py-1 rounded">
                  Xem hình ảnh
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientRecordsList;
