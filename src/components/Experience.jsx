import { SectionShell } from './SectionShell'

export function Experience({ copy }) {
  return (
    <SectionShell id="experience" eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="relative space-y-8 before:absolute before:left-[0.7rem] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-blue-200 before:via-slate-200 before:to-slate-200 md:before:left-1/2">
        {copy.roles.map((role, index) => {
          const isCurrent = index === 0

          return (
            <article
              key={`${role.title}-${role.company}`}
              className={`relative grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
            >
              <div className="hidden md:block" />

              <div
                className={`absolute left-0 top-8 rounded-full border border-slate-25 bg-blue-500 md:left-1/2 md:-translate-x-1/2 ${
                  isCurrent ? 'h-6 w-6 border-4 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]' : 'h-3.5 w-3.5 border-2'
                }`}
              />

              <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:mx-8 lg:p-8">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{role.company}</p>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {role.title}
                    {role.period ? <span className="ml-2 text-sm font-medium text-slate-500">• {role.period}</span> : null}
                  </h3>
                  <p className="text-sm text-slate-600">{role.summary}</p>
                </div>

                <ul className="mt-5 space-y-3">
                  {role.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
