import React, { useRef, useEffect } from 'react';
import { calculateOmega, displacement, velocity } from '../utils/shmPhysics';

export default function SHMCanvas({ m, k, playing, setEnergy }) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const animationRef = useRef(null);

  const A = 100; // amplitude

  // 🔥 Reset time whenever Play starts or params change
  useEffect(() => {
    if (playing) {
      timeRef.current = 0;
    }
  }, [playing, m, k]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const omega = calculateOmega(k, m);
      const x = displacement(A, omega, timeRef.current);
      const v = velocity(A, omega, timeRef.current);

      // ⏱️ Update time ONLY when playing
      if (playing) {
        timeRef.current += 0.02;

        if (setEnergy) {
          setEnergy({
            PE: 0.5 * k * x * x,
            KE: 0.5 * m * v * v,
          });
        }
      }

      // 🌀 SPRING
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(50, 100);
      ctx.lineTo(250 + x, 100);
      ctx.stroke();

      // 📦 MASS
      ctx.fillStyle = '#a855f7';
      ctx.fillRect(250 + x, 80, 40, 40);

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [m, k, playing, setEnergy]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={200}
      className="border border-gray-400 rounded-lg bg-slate-800"
    />
  );
}
