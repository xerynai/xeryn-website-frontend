export default function Footer() {
  return (
    <footer className="bg-light pt-5">
      <div className="container-xl pb-4">
        <div className="row g-4 mb-4">

          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded"
                style={{ width: 32, height: 32, background: 'var(--brand-primary-light)' }}
              >
                <i className="bi bi-cpu text-white"></i>
              </div>
              <span className="fw-semibold fs-5">Xeryn</span>
            </div>
            <p className="mb-2">Intelligent · Innovative · Impactful</p>
            <p className="text-secondary small" style={{ maxWidth: 320 }}>
              High-performance AI systems and proprietary engineering frameworks built for
              next-generation enterprises.
            </p>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <div className="small fw-semibold text-uppercase mb-3" style={{ letterSpacing: '0.05em' }}>Solutions</div>
            <div className="d-flex flex-column gap-2">
              <a href="#services" className="text-decoration-none text-secondary small">Web Dev</a>
              <a href="#services" className="text-decoration-none text-secondary small">Mobile Apps</a>
              <a href="#services" className="text-decoration-none text-secondary small">Machine Learning</a>
              <a href="#services" className="text-decoration-none text-secondary small">Custom AI</a>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <div className="small fw-semibold text-uppercase mb-3" style={{ letterSpacing: '0.05em' }}>Products</div>
            <div className="d-flex flex-column gap-2">
              <a href="#products" className="text-decoration-none text-secondary small">Neural Core API</a>
              <a href="#products" className="text-decoration-none text-secondary small">Cognitive Engine</a>
              <a href="#products" className="text-decoration-none text-secondary small">Telemetry Studio</a>
              <a href="#pricing" className="text-decoration-none text-secondary small">Cloud Access</a>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <div className="small fw-semibold text-uppercase mb-3" style={{ letterSpacing: '0.05em' }}>Company</div>
            <div className="d-flex flex-column gap-2">
              <a href="#about" className="text-decoration-none text-secondary small">About</a>
              <a href="#about" className="text-decoration-none text-secondary small">Careers</a>
              <a href="#home" className="text-decoration-none text-secondary small">Blog</a>
              <a href="#contact" className="text-decoration-none text-secondary small">Contact</a>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2" id="contact">
            <div className="small fw-semibold text-uppercase mb-3" style={{ letterSpacing: '0.05em' }}>Newsletter</div>
            <p className="text-secondary small mb-2">Get curated machine intelligence dispatch.</p>
            <form
              className="d-flex flex-column gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button type="submit" className="btn brand-gradient">Subscribe</button>
            </form>
          </div>

        </div>

        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 pt-4 border-top">
          <div className="d-flex gap-4">
            <a href="#home" className="text-decoration-none text-secondary small">Privacy Policy</a>
            <a href="#home" className="text-decoration-none text-secondary small">Terms of Service</a>
            <a href="#home" className="text-decoration-none text-secondary small">Security</a>
          </div>
          <div className="d-flex gap-3 text-secondary">
            <i className="bi bi-diagram-3"></i>
            <i className="bi bi-terminal"></i>
            <i className="bi bi-share"></i>
          </div>
          <p className="text-secondary small mb-0">© 2026 Xeryn Technologies Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}