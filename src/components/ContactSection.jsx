import { SectionShell } from './SectionShell'

export function ContactSection({ copy, language, profileConfig }) {
  const cvLabel = profileConfig.cvAvailable ? copy.cvReady : copy.cvPending
  const cvHref = profileConfig.cvAvailable ? profileConfig.cvPath : '#contact'

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
          </div>
        </article>

        <article className="rounded-4xl border border-slate-200/80 bg-white/90 p-8 shadow-card">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted">{copy.emailLabel}</p>
              <a className="mt-2 inline-block text-lg font-semibold text-ink hover:text-accent" href={`mailto:${profileConfig.email}`}>
                {profileConfig.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-muted">{copy.linkedinLabel}</p>
              <a className="mt-2 inline-block text-lg font-semibold text-ink hover:text-accent" href={profileConfig.linkedinUrl} target="_blank" rel="noreferrer">
                {profileConfig.linkedinDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-muted">{copy.cvLabel}</p>
              <a className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-ink hover:text-accent" href={cvHref} download={Boolean(profileConfig.cvAvailable)}>
                {language === 'es' ? 'Descargar CV' : 'Download resume'}
              </a>
              <p className="mt-2 text-sm leading-6 text-muted">{cvLabel}</p>
            </div>
          </div>
        </article>
      </div>
    </SectionShell>
  )
}