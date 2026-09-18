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
                href="/contact"
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
                href="/contact"
                className="btn text-white rounded-3 px-4 py-2 d-inline-flex align-items-center gap-2"
                style={{ background: 'var(--brand-secondary)' }}
              >
                Build Mobile App <i className="bi bi-arrow-right"></i>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BLOCK 3: MACHINE LEARNING & PREDICTIVE ANALYTICS ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">
          <div className="row g-5 align-items-center">

            {/* Content column */}
            <div className="col-lg-6">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-3 shadow-sm"
                style={{ width: 48, height: 48 }}
              >
                <i className="bi bi-diagram-3 text-brand fs-4"></i>
              </div>
              <small className="text-brand fw-semibold text-uppercase d-block mb-2" style={{ letterSpacing: '0.05em' }}>
                Mathematical Rigor
              </small>
              <h2 className="fw-bold display-6 mb-3">Machine Learning &amp; Predictive Analytics</h2>
              <p className="text-secondary mb-4">
                Move past toy models into industrial-scale statistical learning. We architect
                self-updating predictive pipelines, automated feature stores, and deep learning
                architectures tailored to enterprise risk, pricing, and dynamic forecasting.
              </p>

              <div className="row g-2 mb-4">
                {['Bespoke Deep Learning Models', 'Predictive Time-Series Forecasting', 'Automated Feature Stores', 'Continuous MLOps Pipelines'].map((item) => (
                  <div className="col-sm-6 d-flex align-items-center gap-2" key={item}>
                    <i className="bi bi-check-circle-fill text-brand"></i>
                    <span className="small fw-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'MLflow', 'Ray Core'].map((tech) => (
                  <span key={tech} className="badge bg-light text-secondary fw-medium rounded-pill px-3 py-2">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="/contact"
                className="btn brand-gradient rounded-3 px-4 py-2 d-inline-flex align-items-center gap-2"
              >
                Consult ML Specialists <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* Visual column - loss curve dashboard */}
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-lg p-4">
                <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-graph-up text-brand"></i>
                    <span className="fw-semibold">Epoch Telemetry #420</span>
                  </div>
                  <span className="badge" style={{ background: '#eaddff', color: 'var(--brand-primary)' }}>
                    Val Loss: 0.0124
                  </span>
                </div>

                {/* Loss curve chart */}
                <div className="bg-light rounded-3 p-3 mb-3">
                  <div className="d-flex justify-content-between text-secondary mb-2" style={{ fontSize: '0.7rem' }}>
                    <span>Loss Convergence Curve (Train vs Validation)</span>
                    <span className="text-brand fw-bold">r² = 0.988</span>
                  </div>
                  <svg width="100%" height="128" viewBox="0 0 300 100">
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#ccc3d8" strokeDasharray="2 2" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="#ccc3d8" strokeDasharray="2 2" />
                    <line x1="0" y1="80" x2="300" y2="80" stroke="#ccc3d8" strokeDasharray="2 2" />
                    <path d="M0 90 Q 60 70, 120 30 T 300 15" fill="none" stroke="#7C3AED" strokeWidth="2.5" />
                    <path d="M0 95 Q 60 85, 120 40 T 300 22" fill="none" stroke="#2563EB" strokeDasharray="4 2" strokeWidth="2" />
                  </svg>
                </div>

                {/* Confusion matrix stats */}
                <div className="row g-2">
                  <div className="col-6">
                    <div className="bg-light rounded-3 p-2">
                      <div className="text-secondary" style={{ fontSize: '0.7rem' }}>True Positives</div>
                      <div className="fw-bold fs-5">99.4%</div>
                      <div className="text-brand" style={{ fontSize: '0.7rem' }}>+0.8% post-quantization</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-light rounded-3 p-2">
                      <div className="text-secondary" style={{ fontSize: '0.7rem' }}>F1 Micro Score</div>
                      <div className="fw-bold fs-5 text-primary">0.976</div>
                      <div className="text-secondary" style={{ fontSize: '0.7rem' }}>12.8M sampled tokens</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BLOCK 4: CUSTOM AI APPLICATIONS & LLM SYSTEMS ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="row g-5 align-items-center">

            {/* Visual column - agent reasoning trace (left on desktop) */}
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="bg-white rounded-4 shadow-lg p-3">

                <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="rounded-circle bg-brand" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
                    <span className="fw-semibold small">Multi-Agent Swarm Runtime</span>
                  </div>
                  <span className="badge bg-light text-secondary">LangGraph / Qdrant</span>
                </div>

                {/* Query message */}
                <div className="bg-light rounded-3 p-2 mb-2">
                  <div className="d-flex justify-content-between mb-1">
                    <small className="fw-bold">Client Orchestrator</small>
                    <small className="text-secondary">10:42:01 AM</small>
                  </div>
                  <p className="small mb-0">
                    Generate Q3 revenue forecast with semantic variance flags against SEC 10-K filings.
                  </p>
                </div>

                {/* Reasoning trace */}
                <div className="ps-3 border-start border-2 mb-2" style={{ borderColor: 'var(--brand-primary-light) !important' }}>
                  <div className="d-flex align-items-center gap-2 text-brand small mb-1">
                    <i className="bi bi-diagram-2"></i>
                    <span>Agent Alpha: Vector retrieve 4,200 chunks via Hybrid Sparse-Dense Search</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-primary small">
                    <i className="bi bi-shield-check"></i>
                    <span>Agent Beta: NeMo Guardrails check passed (Confidence: 0.998)</span>
                  </div>
                </div>

                {/* Output */}
                <div className="rounded-3 p-2" style={{ background: '#eae5ff' }}>
                  <div className="d-flex justify-content-between mb-1">
                    <small className="fw-bold text-brand">Synthesized Analysis</small>
                    <small className="text-secondary">Latency: 280ms</small>
                  </div>
                  <p className="small mb-0">
                    Consensus suggests 14.8% YoY margin expansion based on consolidated inventory
                    turnaround metrics in chunk doc_id: #891.
                  </p>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-white mb-3 shadow-sm"
                style={{ width: 48, height: 48 }}
              >
                <i className="bi bi-stars text-brand fs-4"></i>
              </div>
              <small className="text-brand fw-semibold text-uppercase d-block mb-2" style={{ letterSpacing: '0.05em' }}>
                Autonomous Cognition
              </small>
              <h2 className="fw-bold display-6 mb-3">Custom AI Applications &amp; LLM Systems</h2>
              <p className="text-secondary mb-4">
                We convert frontier foundational models into dependable enterprise workforce
                engines. Utilizing retrieval-augmented generation (RAG), autonomous multi-agent
                meshes, and domain fine-tuning, we eliminate hallucinations while preserving
                data sovereignty.
              </p>

              <div className="row g-2 mb-4">
                {['Enterprise RAG Pipelines', 'Multi-Agent Collaboration Frameworks', 'On-Premise Fine-Tuned Models', 'Strict Guardrails & Continuous Eval'].map((item) => (
                  <div className="col-sm-6 d-flex align-items-center gap-2" key={item}>
                    <i className="bi bi-check-circle-fill text-brand"></i>
                    <span className="small fw-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Gemini API', 'LangChain', 'LlamaIndex', 'Qdrant', 'ChromaDB', 'Hugging Face'].map((tech) => (
                  <span key={tech} className="badge bg-white text-secondary fw-medium rounded-pill px-3 py-2">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="/contact"
                className="btn brand-gradient rounded-3 px-4 py-2 d-inline-flex align-items-center gap-2"
              >
                Architect Custom AI <i className="bi bi-arrow-right"></i>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ENGAGEMENT MODELS SECTION ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">

          {/* Section header */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <span
              className="d-inline-flex align-items-center rounded-pill px-3 py-1 mb-3"
              style={{ background: '#dbe1ff', color: 'var(--brand-secondary)' }}
            >
              <small className="fw-semibold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                Engagement Modalities
              </small>
            </span>
            <h2 className="fw-bold display-6 mb-2">Tailored Delivery Frameworks</h2>
            <p className="text-secondary mb-0">
              Choose how our senior engineers embed into your technical organization.
            </p>
          </div>

          {/* 3 model cards */}
          <div className="row g-4 align-items-stretch">

            {/* Model 1: Dedicated Squad */}
            <div className="col-md-4">
              <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-3"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="bi bi-people text-brand"></i>
                  </div>
                  <h3 className="fs-5 fw-semibold mb-2">Dedicated Squad</h3>
                  <p className="text-secondary small mb-3">
                    Full-cycle engineering pods (Lead Architect, 2-4 Engineers, ML Researcher, QA)
                    working exclusively within your repo and sprint cadence.
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-2 small mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Direct Slack / GitHub Integration</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Bi-weekly Milestone Reviews</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Full Intellectual Property Handover</li>
                  </ul>
                </div>
                <a href="/contact" className="btn w-100 rounded-3" style={{ background: '#eaddff', color: 'var(--brand-primary)' }}>
                  Deploy Squad
                </a>
              </div>
            </div>

            {/* Model 2: Project-Based Sprint (highlighted "Popular") */}
            <div className="col-md-4">
              <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden">
                <span
                  className="position-absolute top-0 end-0 text-white small fw-semibold px-3 py-1"
                  style={{ background: 'var(--brand-secondary)', borderBottomLeftRadius: '0.5rem' }}
                >
                  POPULAR
                </span>
                <div>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-3"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="bi bi-lightning-charge text-primary"></i>
                  </div>
                  <h3 className="fs-5 fw-semibold mb-2">Project-Based Sprint</h3>
                  <p className="text-secondary small mb-3">
                    Fixed-scope, milestone-driven execution for new MVPs, pipeline re-architectures,
                    or specialized model deployments with guaranteed deadlines.
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-2 small mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-primary"></i> Strict Fixed-Bid Scoping</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-primary"></i> 60-Day Post-Launch SLA Warranty</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-primary"></i> Comprehensive Docs &amp; Runbooks</li>
                  </ul>
                </div>
                <a href="/contact" className="btn text-white w-100 rounded-3" style={{ background: 'var(--brand-secondary)' }}>
                  Kickoff Sprint
                </a>
              </div>
            </div>

            {/* Model 3: AI Advisory & Audit */}
            <div className="col-md-4">
              <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-3"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="bi bi-clipboard-data text-brand"></i>
                  </div>
                  <h3 className="fs-5 fw-semibold mb-2">AI Advisory &amp; Audit</h3>
                  <p className="text-secondary small mb-3">
                    Deep-dive technical evaluations of existing ML systems, latency profiling,
                    vector db retrieval audits, and enterprise security evaluations.
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-2 small mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Comprehensive Vulnerability Dossier</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Latency &amp; GPU Cost Optimizations</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> C-Level Tech Roadmap Presentation</li>
                  </ul>
                </div>
                <a href="/contact" className="btn btn-light w-100 rounded-3">
                  Request Architecture Audit
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA BANNER ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl">
          <div
            className="rounded-4 shadow-lg text-white p-4 p-md-5 position-relative overflow-hidden"
            style={{ background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-primary-light), var(--brand-secondary))' }}
          >
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <small className="text-uppercase fw-semibold d-block mb-2" style={{ letterSpacing: '0.05em', opacity: 0.85 }}>
                  Direct Engineering Line
                </small>
                <h2 className="fw-bold display-6 mb-3">Ready to build something defensible?</h2>
                <p className="fs-5 mb-0" style={{ opacity: 0.9 }}>
                  Schedule an introductory engineering consultation with one of our Principal
                  Architects. We do not do high-pressure sales calls—only rigorous technical
                  evaluations.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a
                  href="/contact"
                  className="btn btn-light rounded-3 px-4 py-3 fw-semibold d-inline-flex align-items-center gap-2"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Schedule Engineering Call <i className="bi bi-calendar-event"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}