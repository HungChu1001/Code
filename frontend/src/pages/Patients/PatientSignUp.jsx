import React, { useState } from "react";

const PatientSignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    dateOfBirth: "",
    insuranceNumber: "",
    gender: "Nam",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-gray-200 p-8 rounded-md shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">ĐĂNG KÝ</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Họ và Tên</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Placeholder"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Số Điện Thoại</label>
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Placeholder"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ngày sinh</label>
          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Placeholder"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Số thẻ BHYT</label>
          <input
            type="text"
            name="insuranceNumber"
            value={form.insuranceNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Placeholder"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Giới tính</label>
          <div className="flex items-center mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={form.gender === "Nam"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Nam</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={form.gender === "Nữ"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Nữ</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tỉnh/ Thành phố</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Placeholder"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Placeholder"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-black text-white p-2 rounded-md">
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientSignUp;
