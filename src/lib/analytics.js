const viewedSections = new Set()

function getGtag() {
  if (typeof window === 'undefined') {
    return null
  }

  return typeof window.gtag === 'function' ? window.gtag : null
}

export function trackEvent(eventName, params = {}) {
  const gtag = getGtag()

  if (!gtag) {
    return
  }

  gtag('event', eventName, params)
}

export function trackSectionView(sectionId) {
  if (!sectionId || viewedSections.has(sectionId)) {
    return
  }

  viewedSections.add(sectionId)
  trackEvent('seccion_visible', { section: sectionId })
}
