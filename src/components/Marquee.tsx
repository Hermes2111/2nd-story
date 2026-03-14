type Props = {
  items: string[];
};

export default function Marquee({ items }: Props) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border/80 py-3 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-6 text-[11px] uppercase tracking-[.22em] text-[color:var(--muted)]">
            {item}
            <span className="w-[3px] h-[3px] rounded-full bg-[color:var(--muted)] opacity-40" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
