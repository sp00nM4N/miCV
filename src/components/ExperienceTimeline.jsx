import { SectionShell } from './SectionShell'

export function ExperienceTimeline({ copy }) {
  return (
    <SectionShell
      id="experience"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <div className="relative space-y-6 before:absolute before:left-[0.95rem] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-blue-200 before:via-blue-100 before:to-slate-200 md:before:left-1/2">
        {copy.roles.map((role, index) => (
          <article
            key={`${role.title}-${role.company}`}
            className={`relative grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
          >
            <div className="hidden md:block" />
            <div
              className={`absolute left-1 top-8 rounded-full border border-slate-25 bg-accent md:left-1/2 md:-translate-x-1/2 ${
                index === 0 ? 'h-8 w-8 border-[6px] shadow-[0_0_0_8px_rgba(37,99,235,0.10)]' : 'h-5 w-5 border-4'
              }`}
            />

            <div className="rounded-4xl border border-slate-200/80 bg-white/95 p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft md:mx-8">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{role.company}</p>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-ink sm:text-[1.95rem]">
                    {role.title}
                    {role.period ? <span className="ml-3 text-base font-medium text-muted">• {role.period}</span> : null}
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-sm leading-7 text-ink sm:text-base">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span className="font-medium text-ink">{role.summary}</span>
                </li>
                {role.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-sm leading-7 text-ink sm:text-base">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-accent/90" />
                    <span className="text-muted">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
