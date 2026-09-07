import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// All MyPictures assets are represented here. HEIC originals use their generated JPG copy
// because browsers do not reliably support HEIC image decoding.
const slides = Array.from({ length: 8 }, (_, i) => ({
  file: `${i + 1}.jpg`,
  alt: `Shri Dental Care clinic home gallery view ${i + 1}`
}))

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive(i => (i + 1) % slides.length), 3500)
    return () => clearInterval(timer)
  }, [])

  const move = direction => setActive(i => (i + direction + slides.length) % slides.length)

  return (
    <div className="hero-carousel">
      <div className="carousel-image-wrap">
        {slides.map(({ file, alt }, i) => (
          <img
            key={file}
            className={i === active ? 'active' : ''}
            src={`/images/Home/${file}`}
            alt={alt}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={() => move(-1)} aria-label="Previous image">
          <ChevronLeft size={16} />
        </button>
        <div className="carousel-dots">
          {slides.map(({ file }, i) => (
            <button
              key={file}
              onClick={() => setActive(i)}
              className={i === active ? 'active' : ''}
              aria-label={`Show slide ${i + 1}`}
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

