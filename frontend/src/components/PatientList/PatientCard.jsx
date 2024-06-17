import React from "react";
import { Link } from "react-router-dom";

const PatientCard = ({ id, name }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex-1">
        <div className="text-lg font-bold">{id}</div>
        <div className="text-sm">{name}</div>
      </div>
      <div className="flex space-x-2">
        <Link to={`/records?patientId=${id}`}>
          <button className="bg-black text-white px-3 py-1 rounded">
            Xem bệnh án
          </button>
        </Link>
        <Link to={`/patient/${id}`}>
          <button className="bg-black text-white px-3 py-1 rounded">
            Thông tin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PatientCard;
