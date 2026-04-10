import { SectionShell } from './SectionShell'

export function EvolutionSection({ copy }) {
  return (
    <SectionShell
      id="evolution"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="pb-8"
    >
      <div className="grid gap-5 lg:grid-cols-4">
        {copy.stages.map((stage, index) => (
          <article
            key={stage.title}
            className="group relative overflow-hidden rounded-4xl border border-slate-200/80 bg-white/90 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            {index < copy.stages.length - 1 ? (
              <div className="pointer-events-none absolute right-0 top-10 hidden h-px w-10 bg-gradient-to-r from-blue-200 via-blue-100 to-transparent lg:block" />
            ) : null}

            <span className="text-4xl font-semibold leading-none tracking-tight text-accent/30 sm:text-5xl">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="mt-4 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-accent to-blue-100" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-accent">
                {stage.eyebrow}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">{stage.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{stage.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
