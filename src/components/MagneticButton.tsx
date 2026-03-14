'use client';

import { useRef } from 'react';

type Props = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function MagneticButton({ href, onClick, className, children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    el.style.transition = 'transform 0.1s linear';
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    el.style.transform = 'translate(0, 0)';
  };

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ display: 'inline-block', willChange: 'transform' }}
    >
      {children}
    </a>
  );
}
