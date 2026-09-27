import { useEffect, useState } from 'react'

export default function Navbar() {
  const isPackagesPage = window.location.pathname === '/packages'
  const [isOpen, setIsOpen] = useState(false)

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)
  const contactHref = isPackagesPage ? '/#contact' : '#contact'

  return (
    <header className="navbar">
      <div className="brand">
        <img className="brand-logo" src="/assets/logo.png" alt="Logo" />
      </div>

      <div className="nav-right">
        <nav className={`nav-wrap ${isOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="/#home" onClick={closeMenu}>Home</a></li>
            <li><a href="/#services" onClick={closeMenu}>Services</a></li>
            <li><a href="/packages" onClick={closeMenu}>Packages</a></li>
            <li><a href="/#about" onClick={closeMenu}>About</a></li>
          </ul>

          <a className="btn-pill nav-mobile-cta" href={contactHref} onClick={closeMenu}>Book Call</a>
        </nav>

        <a className="btn-pill nav-desktop-cta" href={contactHref}>Book Call</a>

        <button
          type="button"
          className={`hamburger ${isOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}
    </header>
  )
}