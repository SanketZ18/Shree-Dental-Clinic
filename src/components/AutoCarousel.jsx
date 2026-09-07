import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * AutoCarousel – cycles through `images` automatically.
 * Each image object may include an optional `name` and `role` field.
 * When `name` is present on the active slide, it is shown in the caption
 * overlay, replacing the static `caption` prop so the name changes with
 * each image transition.
 *
 * Props:
 *   images      – Array of { src, alt, name?, role? }
 *   caption     – Fallback caption when no slide-level name is available
 *   subcaption  – Fixed sub-line below the name/caption
 *   className   – Extra CSS class for the root element
 */
export default function AutoCarousel({
  images,
  className = '',
  caption = 'Shri Dental Care',
  subcaption = 'Compassionate care, every visit',
}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setActive(current => (current + 1) % images.length),
      3500
    )
    return () => clearInterval(timer)
  }, [images.length])

  const move = direction =>
    setActive(current => (current + direction + images.length) % images.length)

  const activeSlide = images[active] || {}
  const displayName    = activeSlide.name || caption
  const displaySubcap  = activeSlide.role  || subcaption

  return (
    <div className={`hero-carousel ${className}`}>
      <div className="carousel-image-wrap">
        {images.map(({ src, alt }, index) => (
          <img
            key={src}
            className={index === active ? 'active' : ''}
            src={src}
            alt={alt}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={() => move(-1)} aria-label="Previous image">
          <ChevronLeft size={16} />
        </button>
        <div className="carousel-dots">
          {images.map(({ src }, index) => (
            <button
              key={src}
              onClick={() => setActive(index)}
              className={index === active ? 'active' : ''}
              aria-label={`Show slide ${index + 1}`}
            >
              <span />
            </button>
          ))}
        </div>
        <button onClick={() => move(1)} aria-label="Next image">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
