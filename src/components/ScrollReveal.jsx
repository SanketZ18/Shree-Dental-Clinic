import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TARGET_SELECTORS = [
  // Bento Hero on Home Page
  '.bento-hero-section .hero-copy',
  '.bento-hero-section .carousel-card',
  '.bento-hero-section .metric-card',
  
  // Editorial Heroes (About, Services, Team, Contact)
  '.editorial-hero-grid > div',
  '.contact-hero-panel',
  '.editorial-image',
  '.team-lead-image',
  '.services-hero-image',
  
  // Section Headings & Intros across all pages
  '.bento-heading',
  '.section-heading',
  '.directory-heading',
  '.catalog-intro',
  '.service-catalog-heading',
  
  // Grid & Strip Items across all pages
  '.services-bento > *',
  '.image-wall > *',
  '.staff-strip > *',
  '.reviews-bento > *',
  '.recognition-bento > *',
  '.stat-band-grid > div',
  '.about-story-grid > *',
  '.about-service-grid > article',
  '.value-cards > article',
  '.core-service-grid > article',
  '.category-grid > article',
  '.service-catalog > article',
  '.legacy-service-grid > article',
  '.team-intro-grid > *',
  '.team-directory-grid > article',
  '.doctor-profile',
  '.team-note-inner > div',
  
  // Contact page elements
  '.contact-details',
  '.enquiry-card',
  '.contact-route-card',
  '.contact-detail-card',
  '.contact-hours',
  '.contact-map-strip > .shell',
  
  // CTA banners & Footers
  '.cta-inner',
  '.bento-bottom-cta .shell',
  '.footer-grid > .footer-column',

  // Fallbacks
  '.reveal',
  '.scroll-reveal-target'
]

const STAGGER_PARENTS = [
  'bento-grid',
  'services-bento',
  'image-wall',
  'staff-strip',
  'reviews-bento',
  'recognition-bento',
  'stat-band-grid',
  'about-service-grid',
  'value-cards',
  'core-service-grid',
  'category-grid',
  'service-catalog',
  'team-directory-grid',
  'footer-grid',
  'hero-bento'
]

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const selector = TARGET_SELECTORS.join(', ')

    // Observer instance with smooth intersection parameters
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    })

    const attachReveal = () => {
      const elements = document.querySelectorAll(selector)

      elements.forEach((el) => {
        if (!el.classList.contains('scroll-reveal')) {
          el.classList.add('scroll-reveal')

          // Compute stagger delay for grid/row siblings
          const parent = el.parentElement
          if (parent) {
            const isStaggerContainer = STAGGER_PARENTS.some(cls => parent.classList.contains(cls))
            if (isStaggerContainer) {
              const siblings = Array.from(parent.children)
              const idx = siblings.indexOf(el)
              if (idx > 0) {
                const delay = Math.min(idx * 75, 450)
                el.style.setProperty('--reveal-delay', `${delay}ms`)
              }
            }
          }
        }

        if (!el.classList.contains('scroll-reveal-visible')) {
          // If already in viewport on mount, reveal with short delay for smooth entrance
          const rect = el.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
              el.classList.add('scroll-reveal-visible')
            }, 60)
          } else {
            observer.observe(el)
          }
        }
      })
    }

    // Run immediately and slightly deferred to allow DOM to finish rendering
    attachReveal()
    const timer = setTimeout(attachReveal, 100)

    // Mutation observer to handle any dynamic changes
    const mutationObserver = new MutationObserver(() => {
      attachReveal()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [pathname])

  return null
}
