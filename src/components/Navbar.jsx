export default function Navbar() {
  const isPackagesPage = window.location.pathname === '/packages'

  return (
    <header className="navbar">
      <div className="brand">
        <img className="brand-logo" src="/assets/logo.png" alt="Logo" />
      </div>

      <div className="nav-right">
        <nav className="nav-wrap" aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="/#home">Home</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </nav>

        <a className="btn-pill" href={isPackagesPage ? '/#contact' : '#contact'}>Book Call</a>
      </div>
    </header>
  )
}
