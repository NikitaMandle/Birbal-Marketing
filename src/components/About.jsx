import { useScrollReveal } from '../hooks/useScrollReveal.js'

const locations = [
  {
    name: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85',
    className: 'location-card location-london',
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85',
    className: 'location-card location-dubai',
    isHq: true,
  },
  {
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1000&q=85',
    className: 'location-card location-new-york',
  },
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=85',
    className: 'location-card location-maldives',
  },
  {
    name: 'Sri Lanka',
    image: 'https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: 'location-card location-sri-lanka',
  },
]

const platforms = ['Meta Ads', 'Google Ads', 'WhatsApp API', 'SMS & RCS Blaster', 'Poster and Design', 'AI Video']

export default function About() {
  const [gridRef, gridVisible] = useScrollReveal()
  const [platformsRef, platformsVisible] = useScrollReveal()

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-heading">
          <div className="eyebrow">Our Presence</div>
          <p>Established offices worldwide with Dubai as the headquarters</p>
        </div>

        <div className={`presence-grid reveal-section ${gridVisible ? 'is-visible' : ''}`} ref={gridRef}>
          {locations.map((location, i) => (
            <article
              className={`${location.className} reveal-item`}
              style={{ transitionDelay: `${i * 100}ms` }}
              key={location.name}
            >
              <img src={location.image} alt={`${location.name} office`} />
              {location.isHq && <span className="hq-badge">HQ</span>}
              <span className="location-name">{location.name}</span>
            </article>
          ))}
        </div>

        <div className="platforms-block">
          <h2>Platforms We Scale Every Day</h2>
          <div className={`platform-list reveal-section ${platformsVisible ? 'is-visible' : ''}`} ref={platformsRef}>
            {platforms.map((platform, i) => (
              <span
                className="platform-pill reveal-item"
                style={{ transitionDelay: `${i * 80}ms` }}
                key={platform}
              >
                <span className="platform-mark">✦</span>
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
