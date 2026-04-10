import { SectionShell } from './SectionShell'

export function SkillsGrid({ copy }) {
  return (
    <SectionShell id="skills" eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="grid gap-6 lg:grid-cols-2">
        {copy.groups.map((group) => (
          <article key={group.title} className="rounded-4xl border border-slate-200/80 bg-white/90 p-7 shadow-card">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {group.caption}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}