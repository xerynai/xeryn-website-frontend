import logo from '../assets/logo.png'

export default function Header() {
    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Products', href: '#products' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <header className="fixed-top bg-white shadow-sm" style={{ zIndex: 1030 }}>
            <div className="container-xl d-flex align-items-center justify-content-between" style={{ height: '80px' }}>
                {/* Brand */}
                <a href="#home" className="d-flex align-items-center gap-2 text-decoration-none">
                    <img src={logo} alt="Xeryn logo" style={{ height: 32, width: 'auto' }} />
                    <span className="fw-semibold fs-5 text-dark">Xeryn</span>
                </a>

                {/* Nav links - desktop */}
                <nav className="d-none d-md-flex align-items-center gap-1">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`px-3 py-2 text-decoration-none small fw-medium ${i === 0 ? 'nav-link-active' : 'text-secondary'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right side */}
                <div className="d-flex align-items-center gap-3">
                    <a
                        href="#contact"
                        className="btn brand-gradient rounded-pill px-4 d-none d-sm-inline-flex align-items-center gap-2"
                    >
                        Get in Touch
                        <i className="bi bi-arrow-right"></i>
                    </a>
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