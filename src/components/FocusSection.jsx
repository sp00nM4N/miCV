import { SectionShell } from './SectionShell'

export function FocusSection({ copy }) {
  return (
    <SectionShell eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="grid gap-6 lg:grid-cols-3">
        {copy.items.map((item) => (
          <article key={item.title} className="rounded-4xl border border-slate-200/80 bg-white/90 p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{item.kicker}</p>
            <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}