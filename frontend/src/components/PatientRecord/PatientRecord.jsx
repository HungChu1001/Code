import React from "react";
import { useLocation } from "react-router-dom";

const PatientRecord = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const recordId = queryParams.get("recordId");

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold">
          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </h1>
        <p className="text-sm">Độc lập - Tự do - Hạnh phúc</p>
        <h2 className="text-2xl font-bold mt-4">BẢN TÓM TẮT HỒ SƠ BỆNH ÁN</h2>
      </div>
      <div className="flex justify-between mb-6">
        <div>
          <p>Cơ quan chủ quản:</p>
          <p>Cơ sở KB, CB:</p>
        </div>
        <div className="text-right">
          <p>MS: {recordId}</p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-lg">I. HÀNH CHÍNH</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Họ và tên: _______________________</p>
          </div>
          <div>
            <p>Ngày sinh: ______ / ______ / ______</p>
          </div>
        </div>
        <p>Giới tính: _______________________</p>
        <p>Địa chỉ: _______________________</p>
        <p>Ngày khám: _______________________</p>
        <p>Bác sĩ khám bệnh: _______________________</p>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-lg">II. CHẨN ĐOÁN</h3>
        <p>Triệu chứng bệnh: _______________________</p>
        <p>Chẩn đoán bệnh: _______________________</p>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-lg">III. PHÁC ĐỒ ĐIỀU TRỊ BỆNH</h3>
        <p>______________________________________________</p>
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-black text-white px-4 py-2 rounded">
          Cập nhật
        </button>
      </div>
    </div>
  );
};

export default PatientRecord;
