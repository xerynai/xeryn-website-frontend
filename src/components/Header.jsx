import { Link } from 'react-router-dom'

export default function Header() {
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
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <div
            className="d-flex align-items-center justify-content-center rounded"
            style={{ width: 32, height: 32, background: 'var(--brand-primary-light)' }}
          >
            <i className="bi bi-cpu text-white"></i>
          </div>
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
              to="/#contact"
              className="btn brand-gradient rounded-pill px-4 d-none d-sm-inline-flex align-items-center gap-2"
            >
            Get in Touch
            <i className="bi bi-arrow-right"></i>
          </Link>
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 32, height: 32, background: 'var(--brand-primary)' }}
          >
            <i className="bi bi-person text-white"></i>
          </div>
        </div>
      </div>
    </header>
  )
}