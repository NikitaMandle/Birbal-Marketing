import { useEffect, useState } from 'react'

export default function Navbar() {
  const isPackagesPage = window.location.pathname === '/packages'
  const [isOpen, setIsOpen] = useState(false)

  // Lock background scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const contactHref = isPackagesPage ? '/#contact' : '#contact'

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="brand">
        <img
          className="brand-logo"
          src="/assets/logo.png"
          alt="Birbal Marketing Logo"
        />
      </div>

      <div className="nav-right">

        {/* Navigation */}
        <nav
          className={`nav-wrap ${isOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >

          <ul className="nav-links">

            <li>
              <a href="/#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="/#services" onClick={closeMenu}>
                Services
              </a>
            </li>

            <li>
              <a href="/packages" onClick={closeMenu}>
                Packages
              </a>
            </li>

            <li>
              <a href="/#about" onClick={closeMenu}>
                About
              </a>
            </li>

          </ul>

          {/* Mobile Book Call */}
          <a
            className="btn-pill nav-mobile-cta"
            href={contactHref}
            onClick={closeMenu}
          >
            Book Call
          </a>

        </nav>

        {/* Desktop Book Call */}
        <a
          className="btn-pill nav-desktop-cta"
          href={contactHref}
        >
          Book Call
        </a>

        {/* Hamburger / Close */}
        <button
          type="button"
          className={`hamburger ${isOpen ? 'active' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

    </header>
  )
}