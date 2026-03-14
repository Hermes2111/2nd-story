'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const progress = doc.scrollTop / (doc.scrollHeight - doc.clientHeight);
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-[var(--accent)] origin-left"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />
    </div>
  );
}
