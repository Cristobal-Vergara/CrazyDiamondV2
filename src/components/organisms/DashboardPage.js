// src/components/organisms/DashboardPage.js
import React from "react";
import DashboardWidgets from "./DashboardWidgets";

const DashboardPage = () => {
  return (
    <div>
      <h2 className="mb-4">Panel Principal</h2>
      <DashboardWidgets />
    </div>
  );
};

export default DashboardPage;
