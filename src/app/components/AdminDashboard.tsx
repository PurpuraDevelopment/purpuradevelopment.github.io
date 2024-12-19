import React from "react";
import Analiticas from "../components/Analiticas";

const AdminDashboard: React.FC = () => {
  // Lógica de autenticación de usuario (si es necesario)

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-semibold text-[#6A0DAD] mb-6">
          Panel de Administración
        </h1>
        <Analiticas />
      </div>
    </div>
  );
};

export default AdminDashboard;
