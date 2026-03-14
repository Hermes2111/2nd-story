'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function ScrambleText({ text, className, delay = 0, duration = 1400 }: Props) {
  const [display, setDisplay] = useState(text);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const revealed = Math.floor(progress * text.length);
        const result = text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < revealed) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('');
        setDisplay(result);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, duration]);

  return <span className={className}>{display}</span>;
}
