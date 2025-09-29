'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${fullName || '2nd Story website'}`);
    const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@mij.ai?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm text-[color:var(--muted)] mb-1">Full name</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full rounded-xl bg-transparent border border-border/80 px-4 py-3 outline-none focus:border-foreground transition"
            placeholder="Jane Appleseed"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-[color:var(--muted)] mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl bg-transparent border border-border/80 px-4 py-3 outline-none focus:border-foreground transition"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-[color:var(--muted)] mb-1">Project details</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full rounded-xl bg-transparent border border-border/80 px-4 py-3 outline-none focus:border-foreground transition resize-y"
            placeholder="Scope, timeline, goals"
          />
        </div>
        <div className="flex items-center gap-3 pt-2">
          <button type="submit" className="rounded-full px-5 py-3 text-sm font-medium border border-border hover:border-foreground transition">Send email</button>
          <a href="mailto:hello@mij.ai" className="text-sm text-[color:var(--muted)] hover:text-foreground transition">hello@mij.ai</a>
        </div>
      </div>
    </form>
  );
}


