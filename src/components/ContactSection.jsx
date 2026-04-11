import { BarChart3, Bot, Brain, Clock3, Settings2, TrendingUp } from 'lucide-react'
import { SectionShell } from './SectionShell'

export function ContactSection({ copy, language, profileConfig }) {
  const baseUrl = import.meta.env.BASE_URL
  const selectedCvPath = profileConfig.cvPaths?.[language] ?? profileConfig.cvPaths?.es ?? ''
  const cvHref = profileConfig.cvAvailable && selectedCvPath ? `${baseUrl}${selectedCvPath}` : '#contact'
  const impactIcons = [TrendingUp, Brain, Settings2, Clock3, BarChart3, Bot]

  return (
    <SectionShell
      id="contact"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="pt-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <article className="rounded-4xl border border-slate-200/80 bg-ink p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">{copy.primaryLabel}</p>
          <h3 className="mt-4 text-3xl font-semibold">{copy.primaryHeadline}</h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{copy.primaryBody}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a className="btn-light" href={`mailto:${profileConfig.email}`}>
              {copy.ctaEmail}
            </a>
            <a className="btn-dark" href={profileConfig.linkedinUrl} target="_blank" rel="noreferrer">
              {copy.ctaLinkedin}
            </a>
            <a className="btn-dark" href={cvHref} download={Boolean(profileConfig.cvAvailable && selectedCvPath)}>
              {language === 'es' ? 'Descargar CV' : 'Download resume'}
            </a>
          </div>
        </article>

        <article className="rounded-4xl border border-slate-200/80 bg-white/90 p-8 shadow-card">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{copy.impactLabel}</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{copy.impactTitle}</h3>
            </div>

            <ul className="space-y-4">
              {copy.impactItems.map((item, index) => {
                const Icon = impactIcons[index] ?? TrendingUp

                return (
                  <li key={item} className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 flex-none text-slate-400" strokeWidth={1.9} />
                    <span className="text-sm leading-6 text-slate-600">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </article>
      </div>
    </SectionShell>
  )
}
