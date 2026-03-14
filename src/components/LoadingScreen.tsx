'use client';

import { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function scramble(target: string, progress: number): string {
  const revealed = Math.floor(progress * target.length);
  return target.split('').map((char, i) => {
    if (char === ' ') return ' ';
    if (i < revealed) return char;
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }).join('');
}

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);       // 0–1 fill bar
  const [textProgress, setTextProgress] = useState(0); // 0–1 scramble
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const [line1, setLine1] = useState('2ND STORY');
  const [line2, setLine2] = useState('AGENCY');

  useEffect(() => {
    // Block scroll while loading
    document.body.style.overflow = 'hidden';

    const TOTAL = 2200; // ms total loading time
    const start = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / TOTAL, 1);

      // Ease the progress bar (fast start, slow end)
      const easedBar = t < 0.85 ? t / 0.85 : 1;
      setProgress(easedBar);

      // Text scramble starts at 20% and finishes at 80%
      const textT = Math.max(0, Math.min((t - 0.1) / 0.6, 1));
      setTextProgress(textT);
      setLine1(scramble('2ND STORY', textT));
      setLine2(scramble('AGENCY', textT));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // Start exit animation
        setLeaving(true);
        document.body.style.overflow = '';
        setTimeout(() => setGone(true), 900);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-background"
      style={{
        transition: leaving ? 'opacity 0.7s ease, transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
        opacity: leaving ? 0 : 1,
        transform: leaving ? 'translateY(-6%)' : 'translateY(0)',
      }}
    >
      {/* Logo / brand */}
      <div className="text-center select-none">
        <p
          className="font-mono text-[11px] tracking-[.4em] text-[color:var(--muted)] mb-4"
          style={{
            opacity: textProgress > 0.05 ? 1 : 0,
            transition: 'opacity 0.4s',
          }}
        >
          {line2}
        </p>
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.03em] font-mono">
          {line1}
        </h1>
      </div>

      {/* Progress bar */}
      <div className="mt-16 w-48 h-[1px] bg-border/40 rounded-full overflow-hidden">
        <div
          className="h-full bg-foreground rounded-full"
          style={{
            width: `${progress * 100}%`,
            transition: 'width 0.05s linear',
          }}
        />
      </div>

      {/* Percentage */}
      <p
        className="mt-4 font-mono text-[11px] tracking-widest text-[color:var(--muted)] tabular-nums"
      >
        {String(Math.round(progress * 100)).padStart(3, '0')}
      </p>
    </div>
  );
}
