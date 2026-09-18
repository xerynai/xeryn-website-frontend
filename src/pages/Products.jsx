import { useState } from 'react'


export default function Products() {
    const [activeFilter, setActiveFilter] = useState('all')
    return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="pt-5 mt-5 pb-4 bg-white text-center">
        <div className="container-xl py-4">
          <div className="mx-auto" style={{ maxWidth: 800 }}>

            {/* Badge */}
            <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-2 mb-4 shadow-sm">
              <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
              <small className="text-brand fw-semibold text-uppercase">Proprietary AI Suite</small>
              <span className="text-secondary">•</span>
              <small className="text-secondary fw-medium">Production v4.2 Mesh</small>
            </span>

            <h1 className="fw-bold display-4 mb-3">
              Software Built In-House,{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-primary-light), var(--brand-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Proven in Production
              </span>
            </h1>

            <p className="text-secondary fs-5 mb-4">
              Explore the high-performance AI tools and orchestration engines engineered by
              Xeryn for modern enterprises, deployed across critical infrastructure worldwide.
            </p>

            {/* Metric bar */}
            <div className="bg-white rounded-4 shadow p-2">
              <div className="row g-2">
                {[
                  { value: '99.98%', label: 'Cluster Uptime', color: 'text-brand' },
                  { value: '< 250ms', label: 'P95 Inference', color: 'text-primary' },
                  { value: '14.2B+', label: 'Tokens Processed/Mo', color: 'text-brand' },
                  { value: 'Zero-Log', label: 'Data Air-Gapped', color: 'text-primary' },
                ].map((stat) => (
                  <div className="col-6 col-sm-3" key={stat.label}>
                    <div className="bg-light rounded-3 py-3">
                      <div className={`fw-bold fs-5 ${stat.color}`}>{stat.value}</div>
                      <div className="text-secondary text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.03em' }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

            {/* ===== CATEGORY FILTER BAR ===== */}
      <section
        className="bg-light py-2 shadow-sm sticky-top"
        style={{ top: 80, zIndex: 20 }}
      >
        <div className="container-xl d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex flex-wrap gap-1 bg-white rounded-pill p-1 shadow-sm">
            {[
              { key: 'all', label: 'All Products (6)' },
              { key: 'assistants', label: 'AI Assistants & Agents (2)' },
              { key: 'automation', label: 'Enterprise Automation (2)' },
              { key: 'data', label: 'Data & Search (2)' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-medium ${
                  activeFilter === tab.key ? 'text-white brand-gradient' : 'text-secondary bg-white'
                }`}
                style={{ border: 'none' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="d-none d-lg-flex align-items-center gap-2 text-secondary small">
            <i className="bi bi-shield-check text-brand"></i>
            <span>Certified Production Grade Releases</span>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID (Cards 1-2) ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">
          <div className="row g-4">
            
            {/* CARD 1: Xeryn Copilot */}
            {(activeFilter === 'all' || activeFilter === 'assistants') && (
              <div className="col-lg-6">
                <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column">

                  {/* Card header */}
                  <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center rounded-3 bg-light" style={{ width: 48, height: 48 }}>
                        <i className="bi bi-terminal text-brand fs-4"></i>
                      </div>
                      <div>
                        <h2 className="fs-4 fw-bold mb-0 d-flex align-items-center gap-2">
                          Xeryn Copilot <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '0.9rem' }}></i>
                        </h2>
                        <small className="text-brand fw-semibold text-uppercase">AI Assistants &amp; Ops</small>
                      </div>
                    </div>
                    <span className="badge rounded-pill d-flex align-items-center gap-1" style={{ background: '#eaddff', color: 'var(--brand-primary)' }}>
                      <span className="rounded-circle bg-brand" style={{ width: 6, height: 6, background: 'var(--brand-primary)' }}></span>
                      v2.4 Active
                    </span>
                  </div>

                  <p className="text-secondary mb-3">
                    Autonomous developer assistant providing codebase-aware context generation,
                    recursive vulnerability auditing, and zero-touch pull request workflows.
                  </p>

                  {/* Mockup */}
                  <div className="bg-light rounded-3 p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-1">
                        <span className="rounded-circle bg-danger" style={{ width: 8, height: 8 }}></span>
                        <span className="rounded-circle bg-warning" style={{ width: 8, height: 8 }}></span>
                        <span className="rounded-circle bg-success" style={{ width: 8, height: 8 }}></span>
                        <small className="text-secondary ms-2">pr-audit-pipeline.ts — Git Stream</small>
                      </div>
                      <span className="badge bg-white text-primary">CI/CD Sync</span>
                    </div>
                    <div className="bg-white rounded-3 p-2 font-monospace" style={{ fontSize: '0.75rem' }}>
                      <div className="d-flex justify-content-between text-secondary mb-1">
                        <span>PR #1409 · <span className="text-brand fw-semibold">auth_token_refresh.rs</span></span>
                        <span className="text-success fw-semibold">+42 -11 lines</span>
                      </div>
                      <div className="bg-light rounded p-2">
                        <div className="text-secondary">// Xeryn Copilot: Automated Memory Safety Assert</div>
                        <div className="text-success">+ if let Ok(ref mut session) = self.store.acquire_lock().await {'{'}</div>
                        <div className="text-success">+ session.rotate_crypto_nonce(&amp;tenant_id)?;</div>
                        <div className="text-secondary">+ {'}'}</div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mt-2">
                        <i className="bi bi-stars text-brand"></i>
                        <span className="text-brand fw-medium">Confidence 99.4% · Automated sandbox unit tests passed.</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Efficiency Impact</div>
                        <div className="fw-bold text-brand">3.2x faster</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Mean engineering review time</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Code Coverage</div>
                        <div className="fw-bold text-primary">94.8%</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Synthetic test generations</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4 flex-grow-1">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Self-hosted on AWS, GCP, Azure or Air-Gapped Bare Metal</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Multi-repo cross-indexing with millisecond AST lookup</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Strict non-training privacy contract (SOC2 compliant)</li>
                  </ul>

                  {/* CTAs */}
                  <div className="d-flex gap-2">
                    <a href="/contact" className="btn brand-gradient flex-fill rounded-3">Request Demo</a>
                    <a href="/contact" className="btn btn-light flex-fill rounded-3">Read Specs</a>
                  </div>
                </div>
              </div>
            )}

            {/* CARD 2: SynapseRAG */}
            {(activeFilter === 'all' || activeFilter === 'data') && (
              <div className="col-lg-6">
                <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column">

                  <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center rounded-3 bg-light" style={{ width: 48, height: 48 }}>
                        <i className="bi bi-diagram-3 text-brand fs-4"></i>
                      </div>
                      <div>
                        <h2 className="fs-4 fw-bold mb-0 d-flex align-items-center gap-2">
                          SynapseRAG <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '0.9rem' }}></i>
                        </h2>
                        <small className="text-primary fw-semibold text-uppercase">Data &amp; Semantic Search</small>
                      </div>
                    </div>
                    <span className="badge rounded-pill d-flex align-items-center gap-1" style={{ background: '#dbe1ff', color: 'var(--brand-secondary)' }}>
                      <span className="rounded-circle" style={{ width: 6, height: 6, background: 'var(--brand-secondary)' }}></span>
                      Enterprise Ready
                    </span>
                  </div>

                  <p className="text-secondary mb-3">
                    Ultra-low latency semantic retrieval engine with hybrid vector-graph indexing,
                    instant cross-database embeddings, and verifiable token citations.
                  </p>

                  {/* Mockup */}
                  <div className="bg-light rounded-3 p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <small className="text-secondary">Knowledge Graph Embeddings · Shard #04</small>
                      <span className="badge bg-success-subtle text-success">18ms Query</span>
                    </div>
                    <div className="bg-white rounded-3 p-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <svg width="80" height="24" viewBox="0 0 80 24">
                            <path d="M0 18 L15 12 L30 16 L45 4 L60 9 L75 2" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <small className="text-secondary font-monospace" style={{ fontSize: '0.7rem' }}>Cosine: 0.9842</small>
                        </div>
                        <small className="text-brand fw-semibold">1,024 Dim Vectors</small>
                      </div>
                      <div className="bg-light rounded p-2" style={{ fontSize: '0.75rem' }}>
                        <div className="d-flex justify-content-between">
                          <span className="text-brand fw-medium">Source: SEC_Form_10K_Q3.pdf</span>
                          <span className="text-secondary font-monospace">p.44 §C</span>
                        </div>
                        <p className="text-secondary fst-italic mb-0 mt-1">
                          "Net cloud compute margin expanded by 412 bps year-over-year..."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Query Precision</div>
                        <div className="fw-bold text-brand">99.8%</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Top-3 recall accuracy</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Index Throughput</div>
                        <div className="fw-bold text-primary">2.4M docs/hr</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Distributed graph ingest</div>
                      </div>
                    </div>
                  </div>

                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4 flex-grow-1">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Native connectors for Snowflake, Databricks, PostgreSQL &amp; S3</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Automatic granular RBAC document permissions inheritance</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Real-time citation verifier eliminates hallucination drift</li>
                  </ul>

                  <div className="d-flex gap-2">
                    <a href="/contact" className="btn brand-gradient flex-fill rounded-3">Request Demo</a>
                    <a href="/contact" className="btn btn-light flex-fill rounded-3">Read Specs</a>
                  </div>
                </div>
              </div>
            )}

            {/* CARD 3: NeuroFlow */}
            {(activeFilter === 'all' || activeFilter === 'automation') && (
              <div className="col-lg-6">
                <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column">

                  <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center rounded-3 bg-light" style={{ width: 48, height: 48 }}>
                        <i className="bi bi-diagram-2 text-brand fs-4"></i>
                      </div>
                      <div>
                        <h2 className="fs-4 fw-bold mb-0 d-flex align-items-center gap-2">
                          NeuroFlow <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '0.9rem' }}></i>
                        </h2>
                        <small className="text-brand fw-semibold text-uppercase">Enterprise Automation</small>
                      </div>
                    </div>
                    <span className="badge rounded-pill d-flex align-items-center gap-1" style={{ background: '#eaddff', color: 'var(--brand-primary)' }}>
                      <span className="rounded-circle" style={{ width: 6, height: 6, background: 'var(--brand-primary)' }}></span>
                      v3.1 Deployed
                    </span>
                  </div>

                  <p className="text-secondary mb-3">
                    Visual drag-and-drop LLM orchestration canvas. Design multi-agent workflows,
                    test adversarial prompt variants, and enforce token budget caps.
                  </p>

                  {/* Mockup */}
                  <div className="bg-light rounded-3 p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <small className="text-secondary">Pipeline: Fraud-Triage-Cascade</small>
                      <small className="text-brand fw-semibold">Active Run #928</small>
                    </div>
                    <div className="bg-white rounded-3 p-2">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 font-monospace" style={{ fontSize: '0.7rem' }}>
                        <span className="bg-light rounded px-2 py-1 d-flex align-items-center gap-1">
                          <span className="rounded-circle" style={{ width: 6, height: 6, background: 'var(--brand-secondary)' }}></span> Ingest Node
                        </span>
                        <span className="text-secondary">⟶</span>
                        <span className="rounded px-2 py-1 d-flex align-items-center gap-1" style={{ background: '#eaddff', color: 'var(--brand-primary)' }}>
                          <span className="rounded-circle" style={{ width: 6, height: 6, background: 'var(--brand-primary)' }}></span> Guardrail Model
                        </span>
                        <span className="text-secondary">⟶</span>
                        <span className="bg-light rounded px-2 py-1 d-flex align-items-center gap-1">
                          <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }}></span> Emit Action
                        </span>
                      </div>
                      <div className="d-flex justify-content-between text-secondary border-top pt-2 mt-2" style={{ fontSize: '0.7rem' }}>
                        <span>Tokens Allocated: <strong>480 / 1,000</strong></span>
                        <span className="text-primary font-monospace">Cost: $0.0014</span>
                      </div>
                    </div>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Token Spend Cut</div>
                        <div className="fw-bold text-brand">-48%</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Prompt caching &amp; pruning</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Deployment Speed</div>
                        <div className="fw-bold text-primary">10 mins</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Zero-code model swapping</div>
                      </div>
                    </div>
                  </div>

                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4 flex-grow-1">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Visual node debugger with time-travel replay execution</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Instant fallback to backup models during third-party outages</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Autonomous prompt red-teaming and leakage prevention filters</li>
                  </ul>

                  <div className="d-flex gap-2">
                    <a href="/contact" className="btn brand-gradient flex-fill rounded-3">Request Demo</a>
                    <a href="/contact" className="btn btn-light flex-fill rounded-3">Read Specs</a>
                  </div>
                </div>
              </div>
            )}

            {/* CARD 4: AuraVoice */}
            {(activeFilter === 'all' || activeFilter === 'assistants') && (
              <div className="col-lg-6">
                <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column">

                  <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center rounded-3 bg-light" style={{ width: 48, height: 48 }}>
                        <i className="bi bi-mic text-brand fs-4"></i>
                      </div>
                      <div>
                        <h2 className="fs-4 fw-bold mb-0 d-flex align-items-center gap-2">
                          AuraVoice <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '0.9rem' }}></i>
                        </h2>
                        <small className="text-primary fw-semibold text-uppercase">AI Assistants &amp; Voice</small>
                      </div>
                    </div>
                    <span className="badge rounded-pill d-flex align-items-center gap-1" style={{ background: '#dbe1ff', color: 'var(--brand-secondary)' }}>
                      <span className="rounded-circle" style={{ width: 6, height: 6, background: 'var(--brand-secondary)' }}></span>
                      Sub-250ms Live
                    </span>
                  </div>

                  <p className="text-secondary mb-3">
                    Next-generation conversational voice agent engine capable of natural speech
                    synthesis, interruption handling, and dynamic emotion conditioning.
                  </p>

                  {/* Mockup */}
                  <div className="bg-light rounded-3 p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <small className="text-secondary">Live Call Channel #192</small>
                      <small className="text-brand fw-semibold font-monospace">218ms RTT</small>
                    </div>
                    <div className="bg-white rounded-3 p-2">
                      {/* Waveform */}
                      <div className="d-flex align-items-end justify-content-center gap-1 mb-2" style={{ height: 32 }}>
                        {[12, 20, 28, 32, 24, 16, 8, 20, 28, 12].map((h, i) => (
                          <span
                            key={i}
                            className="rounded-pill"
                            style={{ width: 4, height: h, background: i % 2 === 0 ? 'var(--brand-primary-light)' : 'var(--brand-secondary)' }}
                          ></span>
                        ))}
                      </div>
                      <div className="bg-light rounded p-2 font-monospace" style={{ fontSize: '0.75rem' }}>
                        <div className="d-flex justify-content-between">
                          <span className="text-brand fw-semibold">Aura Agent:</span>
                          <span className="text-secondary" style={{ fontSize: '0.65rem' }}>Natural Pause Recognized</span>
                        </div>
                        <p className="text-secondary mb-0 mt-1">
                          "Your flight to Zurich is confirmed for 08:30 AM. Would you like me to
                          send gate alerts to your mobile?"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>End-to-End Latency</div>
                        <div className="fw-bold text-brand">218ms</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Voice-to-voice complete cycle</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Language Support</div>
                        <div className="fw-bold text-primary">42 Languages</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Real-time accent adaptation</div>
                      </div>
                    </div>
                  </div>

                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4 flex-grow-1">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Instant conversational barge-in with sub-50ms pause detection</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> SIP/VoIP enterprise phone integration with WebRTC client SDK</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> PCI-DSS compliant live DTMF key-tone masking</li>
                  </ul>

                  <div className="d-flex gap-2">
                    <a href="/contact" className="btn brand-gradient flex-fill rounded-3">Request Demo</a>
                    <a href="/contact" className="btn btn-light flex-fill rounded-3">Read Specs</a>
                  </div>
                </div>
              </div>
            )}

            {/* CARD 5: DataPrism AI */}
            {(activeFilter === 'all' || activeFilter === 'data') && (
              <div className="col-lg-6">
                <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column">

                  <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center rounded-3 bg-light" style={{ width: 48, height: 48 }}>
                        <i className="bi bi-search text-brand fs-4"></i>
                      </div>
                      <div>
                        <h2 className="fs-4 fw-bold mb-0 d-flex align-items-center gap-2">
                          DataPrism AI <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '0.9rem' }}></i>
                        </h2>
                        <small className="text-brand fw-semibold text-uppercase">Data &amp; Search</small>
                      </div>
                    </div>
                    <span className="badge rounded-pill d-flex align-items-center gap-1" style={{ background: '#eaddff', color: 'var(--brand-primary)' }}>
                      <span className="rounded-circle" style={{ width: 6, height: 6, background: 'var(--brand-primary)' }}></span>
                      v1.9 Enterprise
                    </span>
                  </div>

                  <p className="text-secondary mb-3">
                    Automated tabular anomaly detection, synthetic privacy data generation, and
                    telemetry drift forecasting for high-scale data warehouses.
                  </p>

                  {/* Mockup */}
                  <div className="bg-light rounded-3 p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <small className="text-secondary">Anomaly Scan: Payment_Gateway_EU</small>
                      <span className="badge bg-danger-subtle text-danger">Flagged: Drift</span>
                    </div>
                    <div className="bg-white rounded-3 p-2">
                      <div className="d-flex align-items-end justify-content-between gap-1 mb-2" style={{ height: 48 }}>
                        {[16, 28, 20, 36, 48, 44, 24, 16].map((h, i) => (
                          <span
                            key={i}
                            className="w-100 rounded-top"
                            style={{
                              height: h,
                              background: i === 4 ? 'var(--brand-primary-light)' : i === 5 ? '#dc3545' : '#dbe1ff',
                            }}
                          ></span>
                        ))}
                      </div>
                      <div className="d-flex justify-content-between font-monospace" style={{ fontSize: '0.7rem' }}>
                        <span className="text-secondary">Synthetic Parity: 99.4%</span>
                        <span className="text-danger fw-semibold">Z-Score 3.82 Outlier</span>
                      </div>
                    </div>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Detection Precision</div>
                        <div className="fw-bold text-brand">99.1%</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>True positive anomaly alert</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Synthetic Scaling</div>
                        <div className="fw-bold text-primary">100M Rows</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Under 4 minutes synthesis</div>
                      </div>
                    </div>
                  </div>

                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4 flex-grow-1">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Differential privacy parameters mathematically certified (ε, δ)</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Automated continuous schema drift &amp; semantic anomaly alerting</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Export directly into clean ML training splits and test harnesses</li>
                  </ul>

                  <div className="d-flex gap-2">
                    <a href="/contact" className="btn brand-gradient flex-fill rounded-3">Request Demo</a>
                    <a href="/contact" className="btn btn-light flex-fill rounded-3">Read Specs</a>
                  </div>
                </div>
              </div>
            )}

            {/* CARD 6: DocuMorph */}
            {(activeFilter === 'all' || activeFilter === 'automation') && (
              <div className="col-lg-6">
                <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column">

                  <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center rounded-3 bg-light" style={{ width: 48, height: 48 }}>
                        <i className="bi bi-file-earmark-text text-brand fs-4"></i>
                      </div>
                      <div>
                        <h2 className="fs-4 fw-bold mb-0 d-flex align-items-center gap-2">
                          DocuMorph <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '0.9rem' }}></i>
                        </h2>
                        <small className="text-primary fw-semibold text-uppercase">Enterprise Automation</small>
                      </div>
                    </div>
                    <span className="badge rounded-pill d-flex align-items-center gap-1" style={{ background: '#dbe1ff', color: 'var(--brand-secondary)' }}>
                      <span className="rounded-circle" style={{ width: 6, height: 6, background: 'var(--brand-secondary)' }}></span>
                      SOC2 Certified
                    </span>
                  </div>

                  <p className="text-secondary mb-3">
                    Multi-modal document parser transforming unformatted PDFs, invoices, and
                    hand-marked agreements into verified structured JSON records.
                  </p>

                  {/* Mockup */}
                  <div className="bg-light rounded-3 p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <small className="text-secondary">Tax_Agreement_2025_signed.pdf</small>
                      <small className="text-primary fw-semibold">100% Extracted</small>
                    </div>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="bg-white rounded-3 p-2 font-monospace" style={{ fontSize: '0.7rem' }}>
                          <div className="text-secondary text-uppercase mb-1" style={{ fontSize: '0.6rem' }}>Spatial Mapping</div>
                          <div className="text-brand" style={{ borderLeft: '2px solid var(--brand-primary)', paddingLeft: 4 }}>
                            bbox: [120, 44, 380, 72]
                          </div>
                          <div className="fw-medium text-truncate">Vendor: "Novartis Corp AG"</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="bg-white rounded-3 p-2 font-monospace" style={{ fontSize: '0.7rem' }}>
                          <div className="text-secondary text-uppercase mb-1" style={{ fontSize: '0.6rem' }}>Structured Payload</div>
                          <div className="text-success">"total_due": 428190.00</div>
                          <div className="text-secondary">"currency": "EUR"</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Extraction Accuracy</div>
                        <div className="fw-bold text-brand">99.7%</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Complex multi-column tables</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-2">
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Processing Latency</div>
                        <div className="fw-bold text-primary">1.2s</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>Avg. per 20-page document</div>
                      </div>
                    </div>
                  </div>

                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4 flex-grow-1">
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Automatic redlining of high-risk compliance clauses</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Exports direct schema definitions into SAP, NetSuite &amp; Workday</li>
                    <li className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill text-brand"></i> Native handwritten signature detection and cross-validation</li>
                  </ul>

                  <div className="d-flex gap-2">
                    <a href="/contact" className="btn brand-gradient flex-fill rounded-3">Request Demo</a>
                    <a href="/contact" className="btn btn-light flex-fill rounded-3">Read Specs</a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ===== SECURITY & COMPLIANCE BANNER ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="bg-white rounded-4 shadow-lg p-4 p-lg-5">
            <div className="row g-4 align-items-center">

              {/* Text content */}
              <div className="col-lg-7">
                <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-1 mb-3">
                  <i className="bi bi-shield-lock text-primary"></i>
                  <small className="text-secondary text-uppercase fw-semibold" style={{ letterSpacing: '0.03em' }}>
                    Zero-Trust Architecture
                  </small>
                </span>
                <h3 className="fw-bold fs-2 mb-3">
                  Built for Highly Regulated, Mission-Critical Environments
                </h3>
                <p className="text-secondary mb-4">
                  Every product in the Xeryn AI Suite is engineered with absolute data boundary
                  isolation. Your customer records, proprietary code repositories, and
                  operational embeddings are never retained, never mixed, and never utilized for
                  foundation model retraining.
                </p>
                <div className="d-flex flex-wrap gap-4 text-secondary small">
                  <span className="d-flex align-items-center gap-2">
                    <i className="bi bi-lock-fill text-brand"></i> Hardware Security Modules (HSM)
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <i className="bi bi-hdd-network text-brand"></i> VPC Peering &amp; On-Premise Airgap
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <i className="bi bi-database-lock text-brand"></i> Client-Managed Encryption Keys (CMEK)
                  </span>
                </div>
              </div>

              {/* Compliance badges */}
              <div className="col-lg-5">
                <div className="row g-3">
                  {[
                    { icon: 'bi-patch-check', title: 'SOC 2 Type II', sub: 'Continuous Real-time Audit', color: 'text-brand' },
                    { icon: 'bi-heart-pulse', title: 'HIPAA Ready', sub: 'BAA Signed for Enterprise', color: 'text-primary' },
                    { icon: 'bi-file-earmark-lock', title: 'GDPR & CCPA', sub: 'Full Data Sovereignty', color: 'text-primary' },
                    { icon: 'bi-shield-check', title: 'ISO 27001', sub: 'Information Security Standard', color: 'text-brand' },
                  ].map((badge) => (
                    <div className="col-6" key={badge.title}>
                      <div className="bg-light rounded-3 p-3 text-center h-100">
                        <i className={`bi ${badge.icon} fs-2 ${badge.color} mb-2 d-block`}></i>
                        <div className="fw-bold small">{badge.title}</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>{badge.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== BESPOKE ARCHITECTURE CTA ===== */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container-xl py-4">
          <div className="text-center mx-auto" style={{ maxWidth: 700 }}>

            <div
              className="d-inline-flex align-items-center justify-content-center rounded-4 mb-4 shadow"
              style={{ width: 64, height: 64, background: 'linear-gradient(135deg, var(--brand-primary-light), var(--brand-secondary))' }}
            >
              <i className="bi bi-diagram-3 text-white fs-2"></i>
            </div>

            <h2 className="fw-bold display-6 mb-3">
              Need a Custom Edition Tailored to Your Infrastructure?
            </h2>

            <p className="text-secondary fs-5 mb-4">
              We engineer proprietary model fine-tunes, custom air-gapped clusters, and custom
              connectors directly integrated with your enterprise data lakes.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
              <a
                href="/contact"
                className="btn brand-gradient rounded-3 px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
              >
                Talk to Solutions Architect <i className="bi bi-arrow-right"></i>
              </a>
              <a
                href="/contact"
                className="btn btn-light rounded-3 px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
              >
                Review Whitepapers &amp; Benchmarks
              </a>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-4 text-secondary small">
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-clock text-brand"></i> Direct 30-min engineering scoping
              </span>
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-file-earmark-text text-brand"></i> Standard NDA provided on request
              </span>
            </div>

          </div>
        </div>
      </section>

      
    </>
  )
}