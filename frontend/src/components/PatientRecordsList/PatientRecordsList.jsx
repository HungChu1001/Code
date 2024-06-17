import React from "react";
import { Link, useLocation } from "react-router-dom";

const PatientRecordsList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const patientId = queryParams.get("patientId");

  const records = [
    { id: "REC-001", date: "2023-01-01", summary: "Summary 1" },
    { id: "REC-002", date: "2023-02-01", summary: "Summary 2" },
    { id: "REC-003", date: "2023-03-01", summary: "Summary 3" },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Hồ Sơ Bệnh Án - {patientId}</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm bệnh án"
          className="mb-4 p-2 border rounded w-full"
        />
      </div>
      <div className="bg-white shadow-md rounded">
        {records.map((record) => (
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
