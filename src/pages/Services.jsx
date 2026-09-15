export default function Services() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="pt-5 mt-5 pb-5 bg-white position-relative overflow-hidden">
        <div className="container-xl py-4">
          <div style={{ maxWidth: 700 }}>

            {/* Page badge */}
            <span
              className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-1 mb-4"
              style={{ background: '#eaddff', color: 'var(--brand-primary)' }}
            >
              <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
              <small className="fw-semibold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                Our Core Capabilities
              </small>
            </span>

            <h1 className="fw-bold display-4 mb-3">End-to-End Engineering for the AI Era</h1>

            <p className="text-secondary fs-5">
              From scalable cloud architectures to state-of-the-art neural networks, we build
              mission-critical digital systems that transform raw data streams into defensible
              competitive advantage.
            </p>

            {/* Stat row */}
            <div className="row g-4 pt-4 mt-2">
              {[
                { value: '99.99%', label: 'System Availability SLA', color: 'text-brand' },
                { value: '42ms', label: 'Median Inference Latency', color: 'text-primary' },
                { value: '140+', label: 'Production Models Shipped', color: 'text-dark' },
                { value: 'ISO/SOC2', label: 'Compliant Pipelines', color: 'text-brand' },
              ].map((stat) => (
                <div className="col-6 col-sm-3" key={stat.label}>
                  <div className={`fw-bold fs-3 ${stat.color}`}>{stat.value}</div>
                  <div className="text-secondary text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ===== BLOCK 1: WEB DEVELOPMENT & CLOUD SYSTEMS ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">
          <div className="row g-5 align-items-center">

            {/* Content column */}
            <div className="col-lg-6">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-3 shadow-sm"
                style={{ width: 48, height: 48 }}
              >
                <i className="bi bi-terminal text-brand fs-4"></i>
              </div>
              <small className="text-brand fw-semibold text-uppercase d-block mb-2" style={{ letterSpacing: '0.05em' }}>
                High-Throughput Foundation
              </small>
              <h2 className="fw-bold display-6 mb-3">Web Development &amp; Cloud Systems</h2>
              <p className="text-secondary mb-4">
                We architect robust modern web ecosystems designed for massive concurrency,
                lightning-fast interactivity, and zero downtime. Every front-end surface is
                tightly married to resilient reactive data services, ensuring responsive
                experiences across complex SaaS workflows.
              </p>

              {/* Checklist */}
              <div className="row g-2 mb-4">
                {['Cloud-Native Microservices', 'High-Concurrency APIs', 'Next.js & React Architectures', 'Real-Time WebSockets'].map((item) => (
                  <div className="col-sm-6 d-flex align-items-center gap-2" key={item}>
                    <i className="bi bi-check-circle-fill text-brand"></i>
                    <span className="small fw-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech pills */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['React', 'Next.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'Bootstrap'].map((tech) => (
                  <span key={tech} className="badge bg-light text-secondary fw-medium rounded-pill px-3 py-2">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="/#contact"
                className="btn brand-gradient rounded-3 px-4 py-2 d-inline-flex align-items-center gap-2"
              >
                Discuss Web Project <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* Visual / mockup column */}
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-lg p-3">
                {/* Faux browser header */}
                <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="rounded-circle bg-danger" style={{ width: 10, height: 10, opacity: 0.4 }}></span>
                    <span className="rounded-circle bg-secondary" style={{ width: 10, height: 10, opacity: 0.4 }}></span>
                    <span className="rounded-circle bg-primary" style={{ width: 10, height: 10, opacity: 0.4 }}></span>
                    <small className="text-secondary ms-2">api.xeryn.internal/v2/stream</small>
                  </div>
                  <span className="badge bg-light text-brand">Live 200 OK</span>
                </div>

                {/* Code block */}
                <div className="bg-light rounded-3 p-3 font-monospace small">
                  <div className="d-flex justify-content-between text-secondary mb-2" style={{ fontSize: '0.75rem' }}>
                    <span>// Event Bus Subscriber</span>
                    <span className="text-primary">Cluster: US-East-01</span>
                  </div>
                  <div><span className="text-brand fw-semibold">export async function</span> handleNeuralDispatch(req: Request) {'{'}</div>
                  <div className="ps-3 text-secondary">const socket = await initEdgeStream({'{ timeout: 120 }'});</div>
                  <div className="ps-3">await telemetry.emit(<span className="text-primary">'connection:ready'</span>, {'{ latency: 1.4 }'});</div>
                  <div className="ps-3 text-brand fw-semibold">return new Response(socket.pipeThrough(new TransformStream()));</div>
                  <div>{'}'}</div>
                </div>

                {/* Metrics */}
                <div className="row g-2 mt-2">
                  <div className="col-4">
                    <div className="bg-light rounded-3 p-2">
                      <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Throughput</div>
                      <div className="fw-bold text-brand">1.2M req/s</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-light rounded-3 p-2">
                      <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Memory Footprint</div>
                      <div className="fw-bold text-primary">384 MB</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-light rounded-3 p-2">
                      <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Sync Drift</div>
                      <div className="fw-bold">&lt; 2ms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ===== BLOCK 2: MOBILE APP DEVELOPMENT ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="row g-5 align-items-center">

            {/* Visual column - phone mockups (left on desktop) */}
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="d-flex justify-content-center position-relative py-4">

                {/* Secondary offset phone (behind) */}
                <div
                  className="d-none d-sm-flex flex-column position-absolute bg-white rounded-4 shadow p-2"
                  style={{ width: 200, height: 340, top: 20, right: '20%', opacity: 0.7, zIndex: 0 }}
                >
                  <div className="mx-auto bg-light rounded-pill mb-2" style={{ width: 60, height: 10 }}></div>
                  <div className="d-flex flex-column gap-2">
                    <div className="bg-light rounded-3 d-flex align-items-center gap-2 p-2">
                      <span className="rounded-circle bg-primary" style={{ width: 8, height: 8 }}></span>
                      <div className="bg-white rounded" style={{ width: '60%', height: 8 }}></div>
                    </div>
                    <div className="bg-light rounded-3 d-flex align-items-center gap-2 p-2">
                      <span className="rounded-circle bg-secondary" style={{ width: 8, height: 8 }}></span>
                      <div className="bg-white rounded" style={{ width: '70%', height: 8 }}></div>
                    </div>
                  </div>
                </div>

                {/* Main phone (front) */}
                <div
                  className="bg-white rounded-4 shadow-lg p-3 position-relative"
                  style={{ width: 240, height: 400, zIndex: 1 }}
                >
                  <div className="mx-auto bg-light rounded-pill mb-3" style={{ width: 70, height: 14 }}></div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fw-semibold">Core Fleet</span>
                    <i className="bi bi-broadcast text-brand"></i>
                  </div>

                  <div className="bg-light rounded-3 p-2 mb-2">
                    <div className="d-flex justify-content-between text-secondary mb-1" style={{ fontSize: '0.7rem' }}>
                      <span>Edge Nodes Synced</span>
                      <span className="text-brand fw-bold">24 / 24</span>
                    </div>
                    <div className="progress" style={{ height: 5 }}>
                      <div className="progress-bar brand-gradient" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="bg-light rounded-3 p-2 d-flex flex-column gap-2" style={{ height: 180 }}>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{ width: 32, height: 32, background: '#ede0ff' }}
                      >
                        <i className="bi bi-lock text-brand"></i>
                      </div>
                      <div>
                        <div className="small fw-semibold">Biometrics Verified</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Zero-Knowledge Enclave</div>
                      </div>
                    </div>
                    <svg width="100%" height="64" viewBox="0 0 100 40">
                      <path d="M0 35 Q 25 10, 50 25 T 100 15" fill="none" stroke="#0051d5" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-white mb-3 shadow-sm"
                style={{ width: 48, height: 48 }}
              >
                <i className="bi bi-phone text-primary fs-4"></i>
              </div>
              <small className="text-primary fw-semibold text-uppercase d-block mb-2" style={{ letterSpacing: '0.05em' }}>
                Universal Handheld Intelligence
              </small>
              <h2 className="fw-bold display-6 mb-3">Mobile App Development</h2>
              <p className="text-secondary mb-4">
                We design and ship high-retention mobile software capable of functioning under
                spotty connectivity, handling encrypted on-device telemetry, and executing
                edge-level machine intelligence with fluid 120Hz performance.
              </p>

              <div className="row g-2 mb-4">
                {['Native iOS (Swift) & Android (Kotlin)', 'Cross-Platform Flutter/React Native', 'Offline-First Vector Synchronization', 'Biometric Auth & Enclave Storage'].map((item) => (
                  <div className="col-sm-6 d-flex align-items-center gap-2" key={item}>
                    <i className="bi bi-check-circle-fill text-primary"></i>
                    <span className="small fw-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Swift', 'Kotlin', 'Flutter', 'React Native', 'Firebase', 'CoreML'].map((tech) => (
                  <span key={tech} className="badge bg-white text-secondary fw-medium rounded-pill px-3 py-2">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="/#contact"
                className="btn text-white rounded-3 px-4 py-2 d-inline-flex align-items-center gap-2"
                style={{ background: 'var(--brand-secondary)' }}
              >
                Build Mobile App <i className="bi bi-arrow-right"></i>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}