import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Products', to: '/products' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="fixed-top bg-white shadow-sm" style={{ zIndex: 1030 }}>
      <div className="container-xl d-flex align-items-center justify-content-between" style={{ height: '80px' }}>
        {/* Brand */}
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Xeryn logo" style={{ height: 32, width: 'auto' }} />
          <span className="fw-semibold fs-5 text-dark">Xeryn</span>
        </Link>

        {/* Nav links - desktop */}
        <nav className="d-none d-md-flex align-items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="px-3 py-2 text-decoration-none small fw-medium text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="d-flex align-items-center gap-3">
          <Link
            to="/contact"
            className="btn brand-gradient rounded-pill px-4 d-none d-sm-inline-flex align-items-center gap-2"
          >
            Get in Touch
            <i className="bi bi-arrow-right"></i>
          </Link>
          <div
            className="d-none d-md-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 32, height: 32, background: 'var(--brand-primary)' }}
          >
            <i className="bi bi-person text-white"></i>
          </div>

          {/* Hamburger button - mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-light d-md-none d-flex align-items-center justify-content-center rounded-3"
            style={{ width: 40, height: 40 }}
            aria-label="Toggle menu"
          >
            <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'} fs-5`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="d-md-none bg-white border-top shadow-sm">
          <nav className="d-flex flex-column p-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 text-decoration-none fw-medium text-dark rounded-3"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn brand-gradient rounded-pill mt-2 d-inline-flex align-items-center justify-content-center gap-2"
            >
              Get in Touch
              <i className="bi bi-arrow-right"></i>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}