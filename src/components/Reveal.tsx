'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delayMs?: number;
  y?: number; // translateY in px
};

export default function Reveal({ children, as = 'div', className, delayMs = 0, y = 20 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current as Element | null;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const Component: any = as;
  const classes = [
    'transition-all duration-700 will-change-transform will-change-opacity',
    visible ? 'opacity-100 translate-y-0' : 'opacity-0',
    className || ''
  ].join(' ').trim();
  return (
    <Component
      ref={ref as any}
      className={classes}
      style={{ transform: visible ? 'translateY(0px)' : `translateY(${y}px)` }}
    >
      {children}
    </Component>
  );
}


