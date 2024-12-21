import React from "react";
import Analytics from "./Analytics";
import Settings from "./Settings";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h2>
      <Analytics />
      <Settings />
    </div>
  );
};

export default Dashboard;
