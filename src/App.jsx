import { useEffect, useState } from 'react'
import {
  AboutSection,
  ContactSection,
  EducationSection,
  Experience,
  EvolutionSection,
  FocusSection,
  HeroSection,
  SkillsGrid,
} from './components'
import { LanguageToggle } from './components/LanguageToggle'
import { trackEvent } from './lib/analytics'
import { content, profileConfig } from './data/content'

const sectionIds = ['experience', 'skills', 'evolution', 'contact']

function App() {
  const [language, setLanguage] = useState('es')
  const copy = content[language]

  function handleLanguageChange(nextLanguage) {
    if (nextLanguage === language) {
      return
    }

    setLanguage(nextLanguage)
    trackEvent('cambio_idioma', { idioma: nextLanguage })
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = `${profileConfig.name} | ${copy.meta.title}`
  }, [copy.meta.title, language])

  return (
    <div className="min-h-screen bg-slate-25 text-ink">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[34rem] bg-hero" />

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-slate-25/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/80">
            {profileConfig.name}
          </a>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 md:flex">
              {sectionIds.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-sm font-medium text-muted transition hover:text-ink"
                >
                  {copy.nav[id]}
                </a>
              ))}
            </nav>
            <LanguageToggle language={language} onChange={handleLanguageChange} />
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <HeroSection copy={copy.hero} profileConfig={profileConfig} />
        <AboutSection copy={copy.about} />
        <FocusSection copy={copy.focus} />
        <SkillsGrid copy={copy.skills} />
        <Experience copy={copy.experience} />
        <EvolutionSection copy={copy.evolution} />
        <EducationSection copy={copy.education} />
        <ContactSection copy={copy.contact} language={language} profileConfig={profileConfig} />
      </main>
    </div>
  )
}

export default App
