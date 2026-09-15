export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="pt-5 mt-5 pb-5 bg-white position-relative overflow-hidden">
        <div className="container-xl text-center py-5">

          {/* Telemetry badges */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-1 shadow-sm">
              <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
              <small className="text-brand fw-semibold">99.4% Model Accuracy</small>
            </span>
            <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-1 shadow-sm">
              <i className="bi bi-shield-check text-primary"></i>
              <small className="text-secondary">SOC2 Type II Certified</small>
            </span>
            <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-1 shadow-sm">
              <i className="bi bi-lightning-charge text-primary"></i>
              <small className="text-secondary">&lt;14ms Inference</small>
            </span>
            <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-1 shadow-sm">
              <i className="bi bi-patch-check text-brand"></i>
              <small className="text-brand fw-semibold">Production Enterprise Ready</small>
            </span>
          </div>

          {/* Headline */}
          <h1 className="fw-bold display-4 mb-3">
            Intelligent Software.<br />
            <span
              style={{
                background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-primary-light), var(--brand-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Real Impact.
            </span>
          </h1>

          <p className="text-secondary fs-5 mx-auto mb-4" style={{ maxWidth: 700 }}>
            We engineer bespoke web applications, mobile platforms, enterprise machine learning
            pipelines, and proprietary AI agents that accelerate growth.
          </p>

          {/* CTA buttons */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <a href="#contact" className="btn brand-gradient rounded-3 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2">
              Schedule a Consultation <i className="bi bi-arrow-right"></i>
            </a>
            <a href="#products" className="btn bg-white shadow-sm rounded-3 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 border">
              <i className="bi bi-terminal text-secondary"></i> Explore In-House Products
            </a>
          </div>

          {/* Dashboard mockup card */}
          <div className="bg-white rounded-4 shadow-lg p-2 p-sm-3 mx-auto" style={{ maxWidth: 960 }}>
            <div className="bg-light rounded-3 p-4">

              <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle bg-danger" style={{ width: 10, height: 10, opacity: 0.7 }}></span>
                  <span className="rounded-circle bg-secondary" style={{ width: 10, height: 10, opacity: 0.5 }}></span>
                  <span className="rounded-circle bg-primary" style={{ width: 10, height: 10, opacity: 0.4 }}></span>
                  <small className="text-secondary ms-2">xeryn-cluster-telemetry // v4.2.0-prod</small>
                </div>
                <span className="badge rounded-pill text-brand bg-white border d-flex align-items-center gap-1">
                  <span className="rounded-circle" style={{ width: 6, height: 6, background: 'var(--brand-primary)' }}></span>
                  Live Node Mesh
                </span>
              </div>

              <div className="row g-3 mb-3">
                {[
                  { label: 'Throughput (Req/s)', value: '42,890', sub: '+18.4% vs baseline' },
                  { label: 'Avg. Tensor Latency', value: '11.8 ms', sub: 'p99 = 24.2 ms' },
                  { label: 'Context Retrieval', value: '99.98%', sub: 'Dense RAG Embed' },
                  { label: 'Active Agents', value: '1,280', sub: 'Distributed Mesh' },
                ].map((m) => (
                  <div className="col-6 col-md-3" key={m.label}>
                    <div className="bg-white rounded-3 p-3 h-100 text-start">
                      <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{m.label}</div>
                      <div className="fw-bold fs-5 mt-1">{m.value}</div>
                      <div className="text-brand" style={{ fontSize: '0.75rem' }}>{m.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-3 p-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <small className="fw-semibold">Neural Orchestration Pipeline</small>
                    <span className="badge bg-light text-brand" style={{ fontSize: '0.65rem' }}>Autonomous</span>
                  </div>
                  <small className="text-secondary">Cluster: us-east-multi-region</small>
                </div>

                <div className="row g-3">
                  {[
                    { step: '1. INGESTION', icon: 'bi-broadcast', desc: 'Multi-Modal Streams', color: 'text-brand', pct: '82%' },
                    { step: '2. SYNAPSE RAG', icon: 'bi-diagram-3', desc: 'Vector Hyper-Search', color: 'text-primary', pct: '0.984' },
                    { step: '3. REASONING', icon: 'bi-cpu', desc: 'Transformer Core', color: 'text-brand', pct: '9.2 ms' },
                    { step: '4. ACTION / REST', icon: 'bi-box-arrow-up-right', desc: 'Microservice Webhook', color: 'text-primary', pct: '200 OK' },
                  ].map((n) => (
                    <div className="col-6 col-md-3" key={n.step}>
                      <div className="bg-light rounded-3 p-3 text-start h-100">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <small className={`fw-semibold ${n.color}`}>{n.step}</small>
                          <i className={`bi ${n.icon} ${n.color}`}></i>
                        </div>
                        <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{n.desc}</div>
                        <div className="progress mt-3" style={{ height: 5 }}>
                          <div className="progress-bar brand-gradient" style={{ width: '100%' }}></div>
                        </div>
                        <div className="d-flex justify-content-between mt-1" style={{ fontSize: '0.7rem' }}>
                          <span className="text-secondary">Status</span>
                          <span className="fw-semibold">{n.pct}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW SECTION ===== */}
      <section id="services" className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="row align-items-end mb-5 gy-3">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
                <small className="text-brand fw-semibold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                  Core Capabilities
                </small>
              </div>
              <h2 className="fw-bold display-6">High-Performance Engineering Services</h2>
            </div>
            <div className="col-lg-5">
              <p className="text-secondary mb-0">
                From microsecond reactive web frontends to scalable enterprise neural agent
                pipelines, we build software that drives compounding leverage.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              { icon: 'bi-terminal', title: 'Web Development', desc: 'Full-stack cloud architectures, sub-second reactive micro-frontends, robust GraphQL/REST backends, and modular serverless scaling.', link: 'Explore Engineering', color: 'text-brand' },
              { icon: 'bi-phone', title: 'Mobile Platforms', desc: 'High-fidelity native iOS and Android apps, cross-platform Flutter/React Native codebases, offline-first sync, and on-device ML execution.', link: 'Explore Mobile', color: 'text-primary' },
              { icon: 'bi-diagram-3', title: 'Machine Learning', desc: 'Predictive models, multi-modal computer vision, domain-specific NLP pipelines, synthetic data engines, and hardened MLOps orchestration.', link: 'Explore Machine Learning', color: 'text-brand' },
              { icon: 'bi-robot', title: 'Custom AI Agents', desc: 'Autonomous multi-agent swarms, customized enterprise RAG implementations, fine-tuned foundational LLMs, and guardrailed workflows.', link: 'Explore AI Agents', color: 'text-primary' },
            ].map((service) => (
              <div className="col-md-6 col-lg-3" key={service.title}>
                <div className="bg-white rounded-4 shadow-sm h-100 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-4" style={{ width: 48, height: 48 }}>
                      <i className={`bi ${service.icon} ${service.color} fs-4`}></i>
                    </div>
                    <h3 className="fs-5 fw-semibold mb-2">{service.title}</h3>
                    <p className="text-secondary small mb-3">{service.desc}</p>
                  </div>
                  <a href="#services" className={`text-decoration-none fw-semibold small ${service.color} d-inline-flex align-items-center gap-1`}>
                    {service.link} <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <section id="products" className="py-5 bg-white">
        <div className="container-xl py-4">
          <div className="row align-items-end mb-5 gy-3">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="rounded-circle bg-primary" style={{ width: 8, height: 8 }}></span>
                <small className="text-primary fw-semibold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                  Proprietary Technology
                </small>
              </div>
              <h2 className="fw-bold display-6">In-House AI Infrastructure &amp; Tools</h2>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#products" className="text-decoration-none fw-semibold text-dark d-inline-flex align-items-center gap-1">
                View all products <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="d-flex flex-column gap-4">

            <div className="bg-light rounded-4 shadow-sm p-4 p-lg-5">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge rounded-pill" style={{ background: '#ede0ff', color: 'var(--brand-primary)' }}>Developer Platform</span>
                    <small className="text-secondary">v3.4.1 Released</small>
                  </div>
                  <h3 className="fw-bold fs-3 mb-3">Xeryn Copilot</h3>
                  <p className="text-secondary mb-3">
                    Autonomous enterprise code assistant and engineering workflow orchestrator.
                    Connects natively to internal repositories, runs static security evaluations,
                    and creates unit-tested PRs directly.
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Context-aware repository analysis across 40+ languages</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Zero zero-day exposure with on-prem deployment options</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Automated regression testing &amp; synthetic benchmark generation</li>
                  </ul>
                  <a href="#products" className="btn text-white rounded-3 px-4 py-2 d-inline-flex align-items-center gap-2" style={{ background: 'var(--brand-primary-light)' }}>
                    Explore Xeryn Copilot <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
                <div className="col-lg-7">
                  <div className="bg-white rounded-3 shadow-sm p-3">
                    <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                      <small className="text-secondary">copilot-agent // repo: core-payment-service</small>
                      <small className="text-brand fw-semibold">Active Run #892</small>
                    </div>
                    <div className="d-flex flex-column gap-2 small">
                      <div className="bg-light rounded p-2">
                        <span className="fw-semibold text-brand">AGENT:</span> Analyzing test coverage for <code className="text-brand">process_webhook()</code>...
                      </div>
                      <div className="bg-light rounded p-2 text-secondary font-monospace" style={{ fontSize: '0.8rem' }}>
                        &gt; Found 3 uncovered edge cases in idempotent token evaluation.<br />
                        &gt; Generating synthetic tests with mocking framework...<br />
                        &gt; Verification status: 14/14 tests PASSED (0.42s).
                      </div>
                      <div className="rounded p-2 d-flex align-items-center justify-content-between" style={{ background: '#eae5ff' }}>
                        <span className="fw-semibold text-primary">PROPOSAL: Pull Request #412 ready</span>
                        <span className="badge bg-white text-secondary border">Review PR →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light rounded-4 shadow-sm p-4 p-lg-5">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge rounded-pill" style={{ background: '#dbe1ff', color: 'var(--brand-secondary)' }}>Knowledge Retrieval</span>
                    <small className="text-secondary">Production Engine</small>
                  </div>
                  <h3 className="fw-bold fs-3 mb-3">SynapseRAG</h3>
                  <p className="text-secondary mb-3">
                    High-throughput multi-modal semantic search and document reasoning engine.
                    Designed for Fortune 500 unstructured data stores requiring ultra-low latency
                    context injection.
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-primary"></i> Hybrid BM25 + dense neural embedding vector search</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-primary"></i> Sub-15ms semantic indexing on datasets exceeding 50M docs</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-primary"></i> Native table parsing, PDF segmentation, and schema inference</li>
                  </ul>
                  <a href="#products" className="btn text-white rounded-3 px-4 py-2 d-inline-flex align-items-center gap-2" style={{ background: 'var(--brand-secondary)' }}>
                    Explore SynapseRAG <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
                <div className="col-lg-7">
                  <div className="bg-white rounded-3 shadow-sm p-3">
                    <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                      <small className="text-secondary">Vector Index: FinTech-Regulations-v2</small>
                      <small className="text-primary fw-semibold">Live Cosine Mesh</small>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between bg-light rounded p-2">
                        <span className="d-flex align-items-center gap-2 small"><i className="bi bi-file-earmark-text text-primary"></i> Basel_III_Capital_Requirements.pdf</span>
                        <small className="text-primary fw-semibold">Similarity: 0.992</small>
                      </div>
                      <div className="d-flex align-items-center justify-content-between bg-light rounded p-2">
                        <span className="d-flex align-items-center gap-2 small"><i className="bi bi-table text-primary"></i> Liquidity_Coverage_Matrix_2024.xlsx</span>
                        <small className="text-primary fw-semibold">Similarity: 0.978</small>
                      </div>
                      <div className="rounded p-2 small" style={{ background: '#eae5ff' }}>
                        <span className="fw-semibold text-brand">GENERATED GROUNDED CONTEXT:</span> Tier-1 capital requirement exceeds 8.0% baseline under regulatory mandate Section 4A...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light rounded-4 shadow-sm p-4 p-lg-5">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge rounded-pill" style={{ background: '#ede0ff', color: 'var(--brand-primary)' }}>Visual Orchestration</span>
                    <small className="text-secondary">Enterprise Node Studio</small>
                  </div>
                  <h3 className="fw-bold fs-3 mb-3">NeuroFlow</h3>
                  <p className="text-secondary mb-3">
                    Drag-and-drop LLM orchestration canvas. Design multi-step agent graphs, inject
                    conditional fallback branches, run parallel model benchmarks, and deploy
                    straight to Kubernetes.
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Visual node editor with real-time token execution tracing</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Multi-provider routing: Google Gemini, Claude, local Ollama</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> One-click packaging into Docker &amp; Helm chart deployments</li>
                  </ul>
                  <a href="#products" className="btn text-white rounded-3 px-4 py-2 d-inline-flex align-items-center gap-2" style={{ background: 'var(--brand-primary-light)' }}>
                    Explore NeuroFlow <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
                <div className="col-lg-7">
                  <div className="bg-white rounded-3 shadow-sm p-3">
                    <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                      <small className="text-secondary">Pipeline: Support-Triage-Agent-Graph</small>
                      <small className="text-brand fw-semibold">Graph Validated</small>
                    </div>
                    <div className="row g-2 text-center">
                      <div className="col-4">
                        <div className="bg-light rounded p-2 small">
                          <div className="fw-semibold text-brand">TRIGGER</div>
                          <div className="text-secondary">Zendesk Inbound</div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="bg-light rounded p-2 small">
                          <div className="fw-semibold text-primary">CLASSIFY</div>
                          <div className="text-secondary">Sentiment &amp; Intent</div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="bg-light rounded p-2 small">
                          <div className="fw-semibold text-brand">DISPATCH</div>
                          <div className="text-secondary">Resolution Hook</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mt-2 small text-secondary">
                      <span>Average Execution Cost: $0.0018 / session</span>
                      <span className="text-primary fw-semibold">Latency: 280ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section id="process" className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
              <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
              <small className="text-brand fw-semibold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                Methodical Execution
              </small>
            </div>
            <h2 className="fw-bold display-6 mb-2">How We Deliver Enterprise Velocity</h2>
            <p className="text-secondary mb-0">
              A disciplined engineering cadence engineered to remove friction, de-risk AI
              investments, and produce production results in weeks.
            </p>
          </div>

          <div className="row g-4">
            {[
              { num: '01', title: 'Discovery & Architecture', desc: 'Rigorous technical scoping, security compliance analysis, data audit, and zero-trust systems design before writing a single line.', sprint: 'Sprint 1 - 2', color: 'text-brand', bg: '#eaddff' },
              { num: '02', title: 'Rapid Prototyping', desc: 'Proof-of-concept modeling, initial model evaluation, fine-tuning data pipelines, and reactive client demo applications.', sprint: 'Sprint 3 - 4', color: 'text-primary', bg: '#dbe1ff' },
              { num: '03', title: 'Enterprise Deployment', desc: 'Hardened cloud rollout, CI/CD automated test suites, Kubernetes scaling configurations, and SOC2 compliant logging.', sprint: 'Sprint 5 - 8', color: 'text-brand', bg: '#eaddff' },
              { num: '04', title: 'Monitoring & Tuning', desc: 'Drift telemetry, automated continuous retraining pipelines, SLA-backed maintenance, and iterative feature augmentation.', sprint: 'Continuous Evolution', color: 'text-primary', bg: '#dbe1ff' },
            ].map((step) => (
              <div className="col-md-6 col-lg-3" key={step.num}>
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                  <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold fs-5 mb-4 ${step.color}`} style={{ width: 56, height: 56, background: step.bg }}>
                    {step.num}
                  </div>
                  <h3 className="fs-5 fw-semibold mb-2">{step.title}</h3>
                  <p className="text-secondary small mb-3">{step.desc}</p>
                  <small className={`fw-semibold ${step.color}`}>{step.sprint}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <small className="text-secondary text-uppercase fw-semibold" style={{ letterSpacing: '0.05em' }}>
              Built With Modern Standards
            </small>
            <h2 className="fw-bold fs-2 mt-2 mb-0">Battle-Tested Engineering Stack</h2>
          </div>

          <div className="row g-3">
            {[
              { icon: 'bi-code-slash', name: 'Python', sub: 'Core ML & API', color: 'text-brand' },
              { icon: 'bi-lightning-charge', name: 'FastAPI', sub: 'Async Microservices', color: 'text-primary' },
              { icon: 'bi-diagram-3', name: 'PyTorch', sub: 'Deep Learning', color: 'text-brand' },
              { icon: 'bi-display', name: 'Next.js & React', sub: 'Reactive UX', color: 'text-primary' },
              { icon: 'bi-cpu', name: 'Gemini 1.5', sub: 'LLM Foundations', color: 'text-brand' },
              { icon: 'bi-cloud', name: 'Google Cloud', sub: 'Enterprise Infra', color: 'text-primary' },
              { icon: 'bi-code-square', name: 'TypeScript', sub: 'Type-Safe Logic', color: 'text-brand' },
              { icon: 'bi-box-seam', name: 'Docker', sub: 'Containers', color: 'text-primary' },
              { icon: 'bi-hurricane', name: 'Kubernetes', sub: 'Mesh Orchestration', color: 'text-brand' },
              { icon: 'bi-palette', name: 'Bootstrap', sub: 'Design Systems', color: 'text-primary' },
              { icon: 'bi-database', name: 'PostgreSQL', sub: 'pgvector & Relational', color: 'text-brand' },
              { icon: 'bi-shield-lock', name: 'SOC2 Controls', sub: 'Zero Trust Policy', color: 'text-primary' },
            ].map((tech) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={tech.name}>
                <div className="bg-light rounded-3 p-3 d-flex align-items-center gap-2 h-100">
                  <i className={`bi ${tech.icon} ${tech.color} fs-4`}></i>
                  <div>
                    <div className="small fw-semibold">{tech.name}</div>
                    <div className="text-secondary" style={{ fontSize: '0.7rem' }}>{tech.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <small className="text-brand text-uppercase fw-semibold" style={{ letterSpacing: '0.05em' }}>
              Transparent Partnership
            </small>
            <h2 className="fw-bold display-6 mt-2 mb-2">Flexible Engineering Engagements</h2>
            <p className="text-secondary mb-0">
              High-cadence team pods built to plug into your roadmap or deliver standalone
              enterprise software.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="fw-semibold mb-1">Starter Pod</div>
                  <p className="text-secondary small mb-3">Targeted proof-of-concepts & scoped features.</p>
                  <div className="d-flex align-items-baseline gap-1 mb-4">
                    <span className="fw-bold display-6">$4,500</span>
                    <span className="text-secondary small">/ month</span>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Dedicated Senior Full-Stack Engineer</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Bi-weekly Sprint Milestones</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Standard Slack & GitHub sync</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Full IP transfer on delivery</li>
                  </ul>
                </div>
                <a href="#contact" className="btn btn-light w-100 rounded-3">Get Started</a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white rounded-4 shadow-lg p-4 h-100 d-flex flex-column justify-content-between position-relative" style={{ border: '2px solid var(--brand-primary)' }}>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill brand-gradient px-3 py-2">
                  Most Popular
                </span>
                <div>
                  <div className="fw-semibold text-brand mb-1">Growth AI Pod</div>
                  <p className="text-secondary small mb-3">Dedicated team to build & deploy production models.</p>
                  <div className="d-flex align-items-baseline gap-1 mb-4">
                    <span className="fw-bold display-6">$8,500</span>
                    <span className="text-secondary small">/ month</span>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> 1 Lead ML Architect + 2 Full-Stack Engineers</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Weekly sprint reviews & live demos</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Custom RAG & fine-tuning infrastructure</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Priority 4-hour SLA support</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-brand"></i> Full CI/CD & Kubernetes deployment</li>
                  </ul>
                </div>
                <a href="#contact" className="btn brand-gradient w-100 rounded-3">Get Started with Growth</a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="fw-semibold mb-1">Enterprise Core</div>
                  <p className="text-secondary small mb-3">Autonomous squads for large-scale enterprise transformation.</p>
                  <div className="d-flex align-items-baseline gap-1 mb-4">
                    <span className="fw-bold display-6">Custom</span>
                    <span className="text-secondary small">/ bespoke quote</span>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-primary"></i> Full multidisciplinary engineering pods</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-primary"></i> On-prem / air-gapped private model deployment</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-primary"></i> SOC2, HIPAA & ISO-compliant governance</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-lg text-primary"></i> Dedicated VP of Engineering liaison</li>
                  </ul>
                </div>
                <a href="#contact" className="btn btn-light w-100 rounded-3">Contact Enterprise Sales</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="#pricing" className="text-decoration-none fw-semibold text-brand d-inline-flex align-items-center gap-1">
              View full pricing breakdowns, SLA terms & custom quotes <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="about" className="py-5 bg-white">
        <div className="container-xl py-4">
          <div className="row align-items-end mb-5 gy-3">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
                <small className="text-brand fw-semibold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                  Client Outcomes
                </small>
              </div>
              <h2 className="fw-bold display-6">Trusted by Technology Leaders</h2>
            </div>
            <div className="col-lg-5">
              <p className="text-secondary mb-0">
                Executive perspectives from founders and engineering heads who scale on Xeryn architectures.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              { quote: 'Xeryn turned our fragmented data lakes into a live RAG semantic index in under 7 weeks. Our analysts now query complex credit risk documents with zero hallucinations.', name: 'Elena Rostova', role: 'CTO, Meridian FinTech', initials: 'ER' },
              { quote: "The speed and architectural rigor of Xeryn's engineering pod is unmatched. They delivered our core mobile telemetry app ahead of schedule with 99.99% uptime.", name: 'Marcus Vance', role: 'VP Engineering, HealthAI Labs', initials: 'MV' },
              { quote: 'NeuroFlow replaced our brittle internal orchestration scripts. We slashed our inference cloud bills by 38% while doubling multi-agent throughput.', name: 'Sarah Lin', role: 'Founder & CEO, OmniLogistics', initials: 'SL' },
            ].map((t) => (
              <div className="col-md-4" key={t.name}>
                <div className="bg-light rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                  <div className="mb-4">
                    <div className="text-brand mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill me-1"></i>
                      ))}
                    </div>
                    <p className="fst-italic mb-0">"{t.quote}"</p>
                  </div>
                  <div className="d-flex align-items-center gap-3 pt-3 border-top">
                    <div className="rounded-circle d-flex align-items-center justify-content-center text-white fw-semibold" style={{ width: 48, height: 48, background: 'var(--brand-primary-light)' }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="fw-semibold small">{t.name}</div>
                      <div className="text-secondary" style={{ fontSize: '0.8rem' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL CTA BANNER ===== */}
      <section className="pb-5 bg-white">
        <div className="container-xl">
          <div
            className="rounded-4 shadow-lg text-white text-center p-5 position-relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--brand-primary-light), var(--brand-primary), var(--brand-secondary))' }}
          >
            <span className="badge rounded-pill mb-3" style={{ background: 'rgba(255,255,255,0.15)' }}>
              Transform Your Product Roadmap
            </span>
            <h2 className="fw-bold display-5 mb-3">
              Ready to build the next generation of intelligent software?
            </h2>
            <p className="fs-5 mx-auto mb-4" style={{ maxWidth: 650, opacity: 0.9 }}>
              Partner with elite AI architects and full-stack software engineers to build systems
              that scale without compromises.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a
                href="#contact"
                className="btn btn-light rounded-3 px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                style={{ color: 'var(--brand-primary)' }}
              >
                Start Your Project Today <i className="bi bi-arrow-right"></i>
              </a>
              <a
                href="#contact"
                className="btn rounded-3 px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2 text-white"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <i className="bi bi-calendar-event"></i> Book Technical Discovery
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}