import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 15, suffix: '+', label: 'Years Experience' },
  { target: 470, suffix: '+', label: 'Team Members' },
  { target: 1280, suffix: '+', label: 'Active Clients' },
  { target: 7, suffix: '', label: 'Global Offices' },
]

const MOBILE_BREAKPOINT = '(max-width: 768px)'

export default function Hero() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(() => {
    try {
      return window.matchMedia(MOBILE_BREAKPOINT).matches
    } catch (err) {
      return false
    }
  })
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_BREAKPOINT)
    const handleChange = (e) => setIsMobile(e.matches)

    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Reload the video element whenever the source switches (mobile <-> desktop)
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [isMobile])

  useEffect(() => {
    const contentElement = contentRef.current
    if (!contentElement) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.2 })

    observer.observe(contentElement)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const statsElement = statsRef.current
    if (!statsElement) return undefined

    let frameId
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      const startTime = performance.now()
      const duration = 1800

      const animateCounts = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)

        setCounts(stats.map(({ target }) => Math.round(target * easedProgress)))

        if (progress < 1) {
          frameId = requestAnimationFrame(animateCounts)
        }
      }

      frameId = requestAnimationFrame(animateCounts)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(statsElement)

    return () => {
      observer.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          src={isMobile ? '/home-mobile.mp4' : '/home.mp4'}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="hero-overlay" />
      </div>

      <div className={`container hero-content${isVisible ? ' is-visible' : ''}`} ref={contentRef}>
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>Profit setup in just 4 months</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-word">Book to</span>{' '}
          <span className="hero-word gold-text">BIRBAL</span>{' '}
          <span className="hero-word">hi</span><br />
          <span className="hero-word">banayega</span>
        </h1>

        <p className="hero-subtitle">
          Birbal Marketing is #1 in entire world for his surrogate marketing,
          We are Famous for our marketing in <span className="gold-text">Sports, Casino, Stocks</span> and <span className="gold-text">Matka</span>.
          Make your whole company Profitable with Birbal Bhai marketing. Message us today
        </p>

        <div className="hero-actions">
          <a className="btn-pill primary" href="#contact">Book Strategy Call</a>
          <button className="btn-pill secondary">Explore Services</button>
        </div>

        <div className="hero-stats" ref={statsRef}>
          {stats.map((stat, index) => (
            <div className="stat-item" key={stat.label}>
              <strong>{counts[index]}{stat.suffix}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}