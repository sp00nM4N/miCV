import { SectionShell } from './SectionShell'

export function AboutSection({ copy }) {
  return (
    <SectionShell eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="grid gap-4 md:grid-cols-2">
        {copy.highlights.map((item) => (
          <article
            key={item}
            className="rounded-4xl border border-slate-200/80 bg-white/85 p-6 text-base leading-7 text-ink shadow-card"
          >
            <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-accent">
              +
            </span>
            {item}
          </article>
        ))}
      </div>
    </SectionShell>
  )
}