/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          25: '#f8fafc',
        },
        ink: '#0F172A',
        muted: '#64748B',
        accent: '#2563EB',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, 0.08)',
        card: '0 12px 40px rgba(15, 23, 42, 0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.18), transparent 32%), radial-gradient(circle at 80% 0%, rgba(148, 163, 184, 0.2), transparent 28%)',
      },
    },
  },
  plugins: [],
}
