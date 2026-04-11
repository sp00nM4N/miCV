import { motion } from 'framer-motion'
import { Copy, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function HeroSection({ copy, profileConfig }) {
  const [shareOpen, setShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const shareRef = useRef(null)
  const baseUrl = import.meta.env.BASE_URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareMessage = `${copy.shareMessage}\n\n${currentUrl}`
  const emailSubject = encodeURIComponent(copy.shareEmailSubject)
  const emailBody = encodeURIComponent(`${copy.shareEmailBody}\n\n${currentUrl}`)
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`

  useEffect(() => {
    function handlePointerDown(event) {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setShareOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setShareOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (!copied) {
      return undefined
    }

    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setShareOpen(false)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl">{profileConfig.name}</h1>

          <p className="max-w-3xl text-xl text-slate-700 lg:text-2xl">
            {copy.headlineBefore}
            <span className="font-semibold text-blue-600">{copy.headlineHighlight}</span>
            {copy.headlineAfter}
          </p>

          <p className="max-w-3xl text-base text-slate-500">{copy.seniorityLine}</p>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600">{copy.subheadline}</p>

          <div className="flex flex-wrap gap-3">
            {copy.impactItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-blue-700"
              href="#experience"
            >
              {copy.ctaExperience}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-300 hover:bg-slate-50"
              href="#contact"
            >
              {copy.ctaContact}
            </a>
            <div className="relative" ref={shareRef}>
              <button
                type="button"
                aria-label={copy.shareCta}
                aria-expanded={shareOpen}
                aria-haspopup="menu"
                onClick={() => setShareOpen((open) => !open)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Share2 size={16} />
                <span>{copy.shareCta}</span>
              </button>

              {shareOpen ? (
                <div
                  role="menu"
                  className="absolute left-0 top-[calc(100%+0.75rem)] z-30 min-w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
                >
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    <Copy size={16} />
                    <span>{copy.shareOptions.copy}</span>
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    <MessageCircle size={16} />
                    <span>{copy.shareOptions.whatsapp}</span>
                  </a>
                  <a
                    href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    <Mail size={16} />
                    <span>{copy.shareOptions.email}</span>
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    <Linkedin size={16} />
                    <span>{copy.shareOptions.linkedin}</span>
                  </a>
                </div>
              ) : null}

              {copied ? (
                <div className="absolute left-0 top-[calc(100%+0.75rem)] z-30 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 shadow-sm">
                  {copy.shareCopied}
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg lg:p-8"
        >
          <div className="flex items-center gap-3">
            <img
              src={`${baseUrl}fotos/perfil3.jpg`}
              alt={profileConfig.name}
              className="mb-4 h-20 w-20 rounded-full border border-slate-200 object-cover object-[center_18%] shadow-sm"
            />
            <p className="text-xs uppercase tracking-[0.18em] text-blue-600">{copy.panelTitle}</p>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{copy.currentRoleLabel}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{copy.currentRole}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{copy.domainLabel}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{copy.domain}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{copy.evolutionFocusLabel}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{copy.evolutionFocus}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{copy.contributionLabel}</p>
              <ul className="mt-3 space-y-3">
                {copy.contributionItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{copy.positioningLabel}</p>
            <p className="mt-3 text-sm text-slate-600">{copy.positioning}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
