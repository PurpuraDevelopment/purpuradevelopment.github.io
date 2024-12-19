// components/AnalyticsPage.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnalyticsPage: React.FC = () => {
  const data = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Tráfico Diario',
        data: [12, 19, 3, 5, 2, 3, 15],
        borderColor: '#6A0DAD',
        backgroundColor: 'rgba(106, 13, 173, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-[#6A0DAD] mb-4">Análisis de Tráfico</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsPage;
