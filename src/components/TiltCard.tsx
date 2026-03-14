'use client';

import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
};

export default function TiltCard({ children, className, intensity = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * intensity;
    const tiltY = (x - 0.5) * -intensity;
    el.style.transition = 'transform 0.08s linear';
    el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
