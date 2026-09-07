import { useEffect, useRef, useState } from 'react'
export default function BentoCard({ children, colSpan = 1, rowSpan = 1, bgImage, overlay = false, badgeText, className = '', ...props }) {
  const ref = useRef(null); const [visible, setVisible] = useState(false)
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: .08 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect() }, [])
  const style = { '--bento-col': colSpan, '--bento-row': rowSpan, ...(bgImage ? { backgroundImage: `url("${bgImage}")` } : {}) }
  return <article ref={ref} className={`bento-card reveal ${visible ? 'is-visible' : ''} ${bgImage ? 'bento-image-card' : ''} ${overlay ? 'has-overlay' : ''} ${className}`} style={style} {...props}>{badgeText && <span className="bento-badge">{badgeText}</span>}{children}</article>
}
