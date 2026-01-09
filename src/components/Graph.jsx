import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { displacement, velocity, calculateOmega } from '../utils/shmPhysics';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

export default function Graph({ m, k, A, isPendulum, L, playing }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Displacement',
        data: [],
        borderColor: '#facc15',
        tension: 0.3,
      },
      {
        label: 'Velocity',
        data: [],
        borderColor: '#34d399',
        tension: 0.3,
      },
    ],
  });

  const timeRef = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!playing) return;

    function animate() {
      timeRef.current += 0.02;

      const omega = isPendulum
        ? Math.sqrt(9.8 / L)
        : calculateOmega(k, m);

      const x = displacement(A, omega, timeRef.current);
      const v = velocity(A, omega, timeRef.current);

      setChartData(prev => ({
        labels: [...prev.labels, timeRef.current.toFixed(2)],
        datasets: [
          {
            ...prev.datasets[0],
            data: [...prev.datasets[0].data, x],
          },
          {
            ...prev.datasets[1],
            data: [...prev.datasets[1].data, v],
          },
        ],
      }));

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [playing, m, k, L, A, isPendulum]);

  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <h2 className="text-cyan-400 mb-2">📈 Motion Graph</h2>
      <Line data={chartData} />
    </div>
  );
}
