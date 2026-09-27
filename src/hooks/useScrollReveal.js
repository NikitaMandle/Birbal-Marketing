import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref + boolean. Attach the ref to a section, and the boolean
 * flips to true once the section scrolls into view (once only).
 * Used to trigger CSS entrance animations (see .reveal-item / .reveal-section in index.css).
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
