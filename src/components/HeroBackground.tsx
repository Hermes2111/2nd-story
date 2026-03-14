'use client';

import { useEffect, useRef } from 'react';

type Blob = {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  r: number; g: number; b: number; a: number;
};

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const blobs: Blob[] = [
      { x: 0.25, y: 0.3,  vx:  0.00025, vy:  0.00015, radius: 0.55, r: 11,  g: 92,  b: 255, a: 0.18 },
      { x: 0.75, y: 0.2,  vx: -0.00018, vy:  0.00022, radius: 0.45, r: 11,  g: 92,  b: 255, a: 0.10 },
      { x: 0.5,  y: 0.85, vx:  0.00012, vy: -0.00018, radius: 0.60, r: 80,  g: 140, b: 255, a: 0.07 },
      { x: 0.1,  y: 0.7,  vx:  0.00020, vy: -0.00012, radius: 0.35, r: 11,  g: 92,  b: 255, a: 0.08 },
    ];

    let frame: number;
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      blobs.forEach(blob => {
        blob.x += blob.vx;
        blob.y += blob.vy;
        if (blob.x < 0 || blob.x > 1) blob.vx *= -1;
        if (blob.y < 0 || blob.y > 1) blob.vy *= -1;

        const grd = ctx.createRadialGradient(
          blob.x * w, blob.y * h, 0,
          blob.x * w, blob.y * h, blob.radius * Math.max(w, h),
        );
        grd.addColorStop(0, `rgba(${blob.r},${blob.g},${blob.b},${blob.a})`);
        grd.addColorStop(1, `rgba(${blob.r},${blob.g},${blob.b},0)`);
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      });

      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
