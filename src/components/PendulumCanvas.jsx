import React, { useRef, useEffect } from 'react';

export default function PendulumCanvas({ L, playing }) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const animationRef = useRef(null);

  const A = Math.PI / 6; // 30°
  const g = 9.8;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (playing) {
        timeRef.current += 0.02;

        const omega = Math.sqrt(g / L);
        const theta = A * Math.cos(omega * timeRef.current);

        const originX = canvas.width / 2;
        const originY = 40;

        const x = originX + L * Math.sin(theta);
        const y = originY + L * Math.cos(theta);

        // Rod
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Bob
        ctx.fillStyle = '#a855f7';
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [L, playing]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={320}
      className="border border-gray-400 rounded-lg bg-slate-800"
    />
  );
}
