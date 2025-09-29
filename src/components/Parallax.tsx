'use client';

import { useEffect, useRef } from 'react';

type ParallaxProps = {
  children: React.ReactNode;
  speed?: number; // negative for inverse
  className?: string;
};

export default function Parallax({ children, speed = -0.1, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let rafId = 0;

    const onScroll = () => {
      if (frame) return;
      frame = 1;
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportMiddle = window.innerHeight / 2;
        const distanceFromCenter = rect.top + rect.height / 2 - viewportMiddle;
        const translateY = distanceFromCenter * speed;
        el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}


