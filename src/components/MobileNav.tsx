'use client';

import { useState } from 'react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
      >
        <span className={`block w-5 h-px bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/80 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base text-[color:var(--muted)] hover:text-foreground transition"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-sm rounded-full px-4 py-2 border border-border hover:border-foreground transition text-center"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </div>
  );
}
