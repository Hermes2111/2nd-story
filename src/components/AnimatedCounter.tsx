'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export default function AnimatedCounter({ to, suffix = '', prefix = '', duration = 1800 }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setValue(Math.round(eased * to));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{prefix}{value}{suffix}</span>;
}
