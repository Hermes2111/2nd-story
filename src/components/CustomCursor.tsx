'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer:fine devices (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.documentElement.classList.add('custom-cursor-active');

    const mouse = { x: -200, y: -200 };
    const ring = { x: -200, y: -200 };
    let raf: number;
    let isHovering = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onEnter = () => { isHovering = true; };
    const onLeave = () => { isHovering = false; };

    const animate = () => {
      ring.x += (mouse.x - ring.x) * 0.1;
      ring.y += (mouse.y - ring.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
        dotRef.current.style.opacity = isHovering ? '0' : '1';
      }
      if (ringRef.current) {
        const scale = isHovering ? 1.8 : 1;
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.opacity = isHovering ? '0.4' : '1';
      }

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', (e) => {
      if ((e.target as HTMLElement).closest('a, button')) onEnter();
      else onLeave();
    });

    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-white rounded-full pointer-events-none z-[9999] transition-opacity duration-150"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-white/50 rounded-full pointer-events-none z-[9999] transition-[opacity,transform] duration-300"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
