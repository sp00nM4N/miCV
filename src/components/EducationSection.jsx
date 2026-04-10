import { motion } from 'framer-motion'
import { CheckCircle2, Clock3 } from 'lucide-react'
import { SectionShell } from './SectionShell'

export function EducationSection({ copy }) {
  return (
    <SectionShell eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="grid gap-6 md:grid-cols-2">
        {copy.items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-4xl border border-slate-200/80 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="flex items-start justify-between gap-5">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{item.type}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-2 shadow-sm">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="max-h-9 max-w-[2.25rem] object-contain opacity-95 contrast-125 transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold leading-tight text-ink sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium text-muted">{item.institution}</p>
                  </div>
                </div>
              </div>
              <StatusBadge status={item.status} />
            </div>

            <p className="mt-6 text-base leading-7 text-muted">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}

function StatusBadge({ status }) {
  const isCertified = status === 'Certificado' || status === 'Certification earned'
  const Icon = isCertified ? CheckCircle2 : Clock3
  const classes = isCertified
    ? 'border border-emerald-100 bg-emerald-50 text-emerald-600'
    : 'border border-blue-100 bg-blue-50 text-blue-600'

  return (
    <span
      className={`inline-flex flex-none items-center gap-2 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${classes}`}
    >
      <Icon size={14} strokeWidth={2} />
      {status}
    </span>
  )
}
