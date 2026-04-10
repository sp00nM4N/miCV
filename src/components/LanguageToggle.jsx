const options = [
  { value: 'es', label: 'ES', Flag: ArgentinaFlag },
  { value: 'en', label: 'EN', Flag: UsaFlag },
]

export function LanguageToggle({ language, onChange }) {
  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white/90 p-1 shadow-card">
      {options.map(({ value, label, Flag }) => {
        const active = language === value

        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition sm:px-4 ${
              active ? 'bg-ink text-white shadow-soft' : 'text-slate-500 hover:text-ink'
            }`}
            aria-pressed={active}
          >
            <Flag active={active} />
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}

function ArgentinaFlag({ active }) {
  return (
    <svg
      viewBox="0 0 28 20"
      aria-hidden="true"
      className={`h-[14px] w-5 rounded-[3px] border ${
        active ? 'border-white/20 opacity-100' : 'border-slate-300/70 opacity-85'
      }`}
    >
      <rect width="28" height="20" rx="2.5" fill="#FFFFFF" />
      <rect width="28" height="6.67" y="0" rx="2.5" fill="#7CCBFF" />
      <rect width="28" height="6.67" y="13.33" rx="2.5" fill="#7CCBFF" />
      <circle cx="14" cy="10" r="2.1" fill="#F4B740" />
    </svg>
  )
}

function UsaFlag({ active }) {
  return (
    <svg
      viewBox="0 0 28 20"
      aria-hidden="true"
      className={`h-[14px] w-5 rounded-[3px] border ${
        active ? 'border-white/20 opacity-100' : 'border-slate-300/70 opacity-85'
      }`}
    >
      <rect width="28" height="20" rx="2.5" fill="#FFFFFF" />
      <rect width="28" height="2.86" y="0" fill="#EF4444" />
      <rect width="28" height="2.86" y="5.72" fill="#EF4444" />
      <rect width="28" height="2.86" y="11.44" fill="#EF4444" />
      <rect width="28" height="2.86" y="17.16" fill="#EF4444" />
      <rect width="12.5" height="10" rx="1.5" fill="#1D4ED8" />
      <circle cx="3.2" cy="3" r="0.75" fill="#FFFFFF" />
      <circle cx="6.2" cy="3" r="0.75" fill="#FFFFFF" />
      <circle cx="9.2" cy="3" r="0.75" fill="#FFFFFF" />
      <circle cx="4.7" cy="5.3" r="0.75" fill="#FFFFFF" />
      <circle cx="7.7" cy="5.3" r="0.75" fill="#FFFFFF" />
      <circle cx="3.2" cy="7.6" r="0.75" fill="#FFFFFF" />
      <circle cx="6.2" cy="7.6" r="0.75" fill="#FFFFFF" />
      <circle cx="9.2" cy="7.6" r="0.75" fill="#FFFFFF" />
    </svg>
  )
}
