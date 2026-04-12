import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { trackSectionView } from '../lib/analytics'

export function SectionShell({ id, eyebrow, title, description, children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView || !id) {
      return
    }

    trackSectionView(id)
  }, [id, isInView])

  return (
    <section id={id} ref={ref} className={`mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  )
}
