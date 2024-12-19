import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Configuración de ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Datos para la gráfica
const data: ChartData<'line'> = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
  datasets: [
    {
      label: "Visitas",
      data: [65, 59, 80, 81, 56, 55],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      tension: 0.4, // Suaviza las líneas
    },
  ],
};

// Configuración de opciones de la gráfica
const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", // Asegúrate de que esté correctamente tipado
    },
    title: {
      display: true,
      text: "Visitas por Mes",
    },
  },
  scales: {
    x: {
      type: "linear",  // Asegúrate de usar 'linear' para la escala X
      grid: {
        color: "#e5e5e5",
      },
    },
    y: {
      type: "linear",  // Asegúrate de usar 'linear' para la escala Y
      beginAtZero: true,
      grid: {
        color: "#e5e5e5",
      },
    },
  },
};

// Componente principal
const AdminPage: React.FC = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">Panel de Analíticas</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AdminPage;
