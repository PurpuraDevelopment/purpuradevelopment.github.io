"use client";

import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  PointElement, // Asegúrate de incluir PointElement
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  PointElement, // Registra PointElement
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);


export default function AdminIndex() {
  // Datos para el gráfico de líneas (visitas)
  const visitsData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Visitas Totales",
        data: [8000, 12000, 15000, 10000, 14000, 16000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Datos para el gráfico de barras (usuarios activos)
  const usersData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Usuarios Activos",
        data: [400, 500, 450, 600, 700, 750],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Datos para el gráfico de pastel (ingresos)
  const incomeData = {
    labels: ["Suscripciones", "Publicidad", "Ventas"],
    datasets: [
      {
        label: "Distribución de Ingresos",
        data: [4000, 2500, 1400],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Analíticas del Sitio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Gráfico de líneas */}
        <div className="p-4 border rounded-lg bg-white shadow">
          <h2 className="text-lg font-bold mb-4">Visitas Totales</h2>
          <Line data={visitsData} />
        </div>

        {/* Gráfico de barras */}
        <div className="p-4 border rounded-lg bg-white shadow">
          <h2 className="text-lg font-bold mb-4">Usuarios Activos</h2>
          <Bar data={usersData} />
        </div>

        {/* Gráfico de pastel */}
        <div className="p-4 border rounded-lg bg-white shadow">
          <h2 className="text-lg font-bold mb-4">Distribución de Ingresos</h2>
          <Pie data={incomeData} />
        </div>
      </div>
    </div>
  );
}
