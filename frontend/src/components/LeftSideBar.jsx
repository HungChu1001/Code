// src/components/LeftSidebar/LeftSidebar.jsx
import React from "react";

const LeftSidebar = () => {
  return (
    <div className="w-64 h-full fixed top-0 left-0 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-lg font-bold">Sidebar</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
