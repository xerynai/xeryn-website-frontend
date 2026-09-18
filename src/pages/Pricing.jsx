import { useState } from 'react'

export default function Pricing() {
  const [billing, setBilling] = useState('monthly') // 'monthly' | 'quarterly'
  const [workload, setWorkload] = useState('audit')
  const [isAirGapped, setIsAirGapped] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const estimateRanges = {
  audit: { cloud: '$9,000 - $12,000', airgapped: '$14,000 - $18,000' },
  rag: { cloud: '$18,000 - $24,000', airgapped: '$24,000 - $32,000' },
  finetune: { cloud: '$28,000 - $36,000', airgapped: '$38,000 - $48,000' },
  fullstack: { cloud: '$34,000 - $44,000', airgapped: '$45,000 - $60,000' },
    }
    const estimateRange = estimateRanges[workload][isAirGapped ? 'airgapped' : 'cloud']

  return (
    <>
      {/* ===== HERO + BILLING TOGGLE ===== */}
      <section className="pt-5 mt-5 pb-4 bg-white text-center">
        <div className="container-xl py-4">
          <div className="mx-auto" style={{ maxWidth: 750 }}>

            {/* Badge */}
            <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-2 mb-4 shadow-sm">
              <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
              <small className="text-brand fw-semibold">Transparent Engineering Engagements</small>
            </span>

            <h1 className="fw-bold display-4 mb-3">
              Predictable Investment.<br />
              <span
                style={{
                  background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-primary-light), var(--brand-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Compounding Impact.
              </span>
            </h1>

            <p className="text-secondary fs-5 mb-4">
              Flexible pricing models designed for venture-backed startups and scaling
              enterprises alike. No hidden licensing surprises or locked IP.
            </p>

            {/* Billing toggle */}
            <div className="d-inline-flex bg-light rounded-3 p-1 shadow-inner mb-4">
              <button
                type="button"
                onClick={() => setBilling('monthly')}
                className={`btn rounded-3 px-4 py-2 fw-medium ${
                  billing === 'monthly' ? 'bg-white text-dark shadow-sm' : 'text-secondary'
                }`}
                style={{ border: 'none' }}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBilling('quarterly')}
                className={`btn rounded-3 px-4 py-2 fw-medium d-inline-flex align-items-center gap-2 ${
                  billing === 'quarterly' ? 'bg-white text-dark shadow-sm' : 'text-secondary'
                }`}
                style={{ border: 'none' }}
              >
                Quarterly Retainer
                <span className="badge rounded-pill" style={{ background: '#eaddff', color: 'var(--brand-primary)' }}>
                  Save 15%
                </span>
              </button>
            </div>

            {/* Micro indicators */}
            <div className="d-flex flex-wrap justify-content-center gap-3 text-secondary small">
              <span className="d-flex align-items-center gap-1"><i className="bi bi-patch-check text-brand"></i> Zero Setup Fees</span>
              <span>•</span>
              <span className="d-flex align-items-center gap-1"><i className="bi bi-clock text-brand"></i> 14-Day Sprint Cycles</span>
              <span>•</span>
              <span className="d-flex align-items-center gap-1"><i className="bi bi-arrow-counterclockwise text-brand"></i> Cancel with 30-Day Notice</span>
            </div>

          </div>
        </div>
      </section>



      {/* ===== PRICING TIER CARDS ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">
          <div className="row g-4 align-items-stretch">

            {/* TIER 1: Starter Pod */}
            <div className="col-lg-4">
              <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <small className="text-secondary text-uppercase fw-semibold">Tier 01</small>
                    <div className="d-flex align-items-center justify-content-center rounded-3 bg-light" style={{ width: 36, height: 36 }}>
                      <i className="bi bi-terminal text-brand"></i>
                    </div>
                  </div>
                  <h3 className="fs-4 fw-bold mb-2">Starter Pod</h3>
                  <p className="text-secondary small mb-3" style={{ minHeight: 40 }}>
                    Targeted MVP builds, targeted feature modules, and production prototypes.
                  </p>

                  <div className="mb-4">
                    <div className="d-flex align-items-baseline gap-1">
                      <span className="fw-bold display-6">
                        {billing === 'quarterly' ? '$3,825' : '$4,500'}
                      </span>
                      <span className="text-secondary">/ month</span>
                    </div>
                    <small className="text-secondary">
                      {billing === 'quarterly' ? 'Billed quarterly ($11,475/qtr); 15% saved.' : 'Billed monthly; pause anytime.'}
                    </small>
                  </div>

                  <small className="text-uppercase fw-semibold text-secondary d-block mb-2">Pod Architecture:</small>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span><strong>1 Dedicated</strong> Senior Full-Stack Engineer</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span>Bi-weekly Sprint Milestones &amp; staged builds</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span>Direct Slack Connect &amp; GitHub repository integration</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span>100% intellectual property ownership from day 1</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span>Standard Next-Business-Day SLA support</span></li>
                  </ul>
                </div>
                <button type="button" className="btn btn-light w-100 rounded-3 py-2">Select Starter Pod</button>
              </div>
            </div>

            {/* TIER 2: Growth AI Pod (Featured) */}
            <div className="col-lg-4">
              <div
                className="bg-white rounded-4 shadow-lg p-4 h-100 d-flex flex-column justify-content-between position-relative"
                style={{ border: '2px solid var(--brand-primary)' }}
              >
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill brand-gradient px-3 py-2 text-uppercase">
                  Most Popular Pod
                </span>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2 mt-2">
                    <small className="text-brand text-uppercase fw-bold">Tier 02 · Full Pod</small>
                    <div className="d-flex align-items-center justify-content-center rounded-3" style={{ width: 36, height: 36, background: '#eaddff' }}>
                      <i className="bi bi-cpu text-brand"></i>
                    </div>
                  </div>
                  <h3 className="fs-4 fw-bold mb-2">Growth AI Pod</h3>
                  <p className="text-secondary small mb-3" style={{ minHeight: 40 }}>
                    Scaled web/mobile applications, production-grade RAG, and domain fine-tuned LLMs.
                  </p>

                  <div className="mb-4">
                    <div className="d-flex align-items-baseline gap-1">
                      <span className="fw-bold display-6 text-brand">
                        {billing === 'quarterly' ? '$7,225' : '$8,500'}
                      </span>
                      <span className="text-secondary">/ month</span>
                    </div>
                    <small className="text-brand">
                      {billing === 'quarterly' ? 'Billed quarterly ($21,675/qtr); 15% saved.' : 'Billed monthly; flexible scaling.'}
                    </small>
                  </div>

                  <small className="text-uppercase fw-semibold text-secondary d-block mb-2">Pod Architecture:</small>
                  <ul className="list-unstyled d-flex flex-column gap-2 small mb-4">
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-brand mt-1"></i> <span><strong>1 Lead Architect</strong> + <strong>2 Full-Stack/ML Engineers</strong></span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-brand mt-1"></i> <span>Weekly live sprint reviews &amp; interactive staging deploys</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-brand mt-1"></i> <span>Dedicated vector database (Pinecone/Qdrant) + Cloud infra</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-brand mt-1"></i> <span>Priority 4-hour SLA support with incident resolution team</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-brand mt-1"></i> <span>Automated CI/CD pipelines &amp; benchmark model testing</span></li>
                  </ul>
                </div>
                <button type="button" className="btn brand-gradient w-100 rounded-3 py-2">Get Started with Growth</button>
              </div>
            </div>

            {/* TIER 3: Enterprise Core */}
            <div className="col-lg-4">
              <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <small className="text-secondary text-uppercase fw-semibold">Tier 03</small>
                    <div className="d-flex align-items-center justify-content-center rounded-3 bg-light" style={{ width: 36, height: 36 }}>
                      <i className="bi bi-hdd-network text-brand"></i>
                    </div>
                  </div>
                  <h3 className="fs-4 fw-bold mb-2">Enterprise Core</h3>
                  <p className="text-secondary small mb-3" style={{ minHeight: 40 }}>
                    Multi-system enterprise migrations, on-premise foundation models, and regulated workflows.
                  </p>

                  <div className="mb-4">
                    <div className="d-flex align-items-baseline gap-1">
                      <span className="fw-bold display-6">
                        {billing === 'quarterly' ? '$15,300' : '$18,000'}
                      </span>
                      <span className="text-secondary">/ mo base</span>
                    </div>
                    <small className="text-secondary">
                      {billing === 'quarterly' ? 'Billed quarterly ($45,900/qtr); 15% saved.' : 'Custom scoped per enterprise topology.'}
                    </small>
                  </div>

                  <small className="text-uppercase fw-semibold text-secondary d-block mb-2">Pod Architecture:</small>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span><strong>Full Multidisciplinary Pod</strong> (Lead Architect, 2 ML Researchers, Senior Engineers, QA)</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span>Air-gapped on-premise model training &amp; fine-tuning</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span>Dedicated Solutions Architect &amp; VP of Engineering liaison</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span>SOC2, HIPAA, &amp; ISO 27001 compliance audit trails</span></li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle-fill text-primary mt-1"></i> <span>24/7/365 dedicated engineering response SLA</span></li>
                  </ul>
                </div>
                <button type="button" className="btn btn-light w-100 rounded-3 py-2">Schedule Enterprise Scoping</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CUSTOM PROJECTS CALLOUT + COST ESTIMATOR ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="bg-white rounded-4 shadow-sm p-4 p-lg-5">
            <div className="row g-4 align-items-center">

              {/* Left: text content */}
              <div className="col-lg-6">
                <div className="d-flex align-items-center gap-2 text-primary small fw-semibold mb-2">
                  <i className="bi bi-diagram-3"></i>
                  <span>Fixed-Scope &amp; Advisory Engagements</span>
                </div>
                <h2 className="fw-bold fs-2 mb-3">
                  Need a specialized fixed-price milestone or architecture audit?
                </h2>
                <p className="text-secondary mb-3">
                  Not ready for a recurring pod? We conduct deep-dive 2-week architectural code
                  &amp; model audits, rapid proof-of-concept incubations, and production readiness
                  certifications.
                </p>
                <a href="/contact" className="text-decoration-none fw-semibold text-brand d-inline-flex align-items-center gap-1">
                  Request a Custom Proposal <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              {/* Right: estimator */}
              <div className="col-lg-6">
                <div className="bg-light rounded-4 p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <small className="text-uppercase fw-semibold text-secondary">Project Scope Estimator</small>
                    <small className="text-brand fw-semibold">Interactive</small>
                  </div>

                  <label className="form-label small text-secondary">Primary Workload</label>
                  <select
                    className="form-select mb-3"
                    value={workload}
                    onChange={(e) => setWorkload(e.target.value)}
                  >
                    <option value="audit">Architecture &amp; Security Audit (2 Weeks)</option>
                    <option value="rag">Enterprise RAG Pipeline PoC (4 Weeks)</option>
                    <option value="finetune">Domain Model Fine-Tuning (6 Weeks)</option>
                    <option value="fullstack">MVP App + AI Engine (8 Weeks)</option>
                  </select>

                  <label className="form-label small text-secondary">Deployment Target</label>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={() => setIsAirGapped(false)}
                        className={`btn w-100 rounded-3 small py-2 ${!isAirGapped ? 'brand-gradient' : 'btn-white border'}`}
                      >
                        Cloud Native (AWS/GCP)
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={() => setIsAirGapped(true)}
                        className={`btn w-100 rounded-3 small py-2 ${isAirGapped ? 'brand-gradient' : 'btn-white border'}`}
                      >
                        Air-Gapped / On-Prem
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-3 p-3 d-flex align-items-center justify-content-between">
                    <span className="text-secondary small">Estimated Budget Range:</span>
                    <span className="fw-bold text-brand">{estimateRange}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ===== FEATURE COMPARISON MATRIX ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">

          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <small className="text-primary text-uppercase fw-semibold" style={{ letterSpacing: '0.05em' }}>
              Granular Comparison
            </small>
            <h2 className="fw-bold fs-2 mt-2 mb-2">Every Deliverable, Fully Transparent</h2>
            <p className="text-secondary mb-0">
              Evaluate deliverables side-by-side to find the ideal operational scale for your team.
            </p>
          </div>

          <div className="table-responsive bg-white rounded-4 shadow-sm">
            <table className="table align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="p-3">Capability &amp; Deliverable</th>
                  <th className="p-3 text-center">Starter Pod</th>
                  <th className="p-3 text-center text-brand" style={{ background: '#f6f1ff' }}>Growth AI Pod</th>
                  <th className="p-3 text-center">Enterprise Core</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: 'Codebase Ownership',
                    sub: 'IP assignments, clean repository transfers, git history',
                    starter: '100% Client Owned',
                    growth: '100% Client Owned',
                    enterprise: '100% Client Owned',
                  },
                  {
                    label: 'Model Weights & Training IP',
                    sub: 'Trained embeddings, fine-tuned checkpoints, prompts',
                    starter: 'Standard API Wrappers',
                    growth: 'Full Model Weights & Vectors',
                    enterprise: 'Proprietary Custom Base Weights',
                  },
                  {
                    label: 'Dedicated Infrastructure',
                    sub: 'Terraform / Pulumi IAC scripts & environment isolation',
                    starter: 'Client-managed Cloud',
                    growth: 'Automated Dedicated Staging + Prod',
                    enterprise: 'Multi-Region & Air-Gapped Clusters',
                  },
                  {
                    label: 'Code Review & Incident SLA',
                    sub: 'PR turnaround times and priority bug fix response',
                    starter: '24 Hours',
                    growth: '4 Hours Priority',
                    enterprise: '1 Hour 24/7/365 Critical',
                  },
                  {
                    label: 'Cloud Partner Credits',
                    sub: 'Xeryn enterprise partner credits for AWS/GCP/Anthropic',
                    starter: '$1,000 credit match',
                    growth: 'Up to $10,000 partner pool',
                    enterprise: 'Up to $50,000+ Tier 1 tiering',
                  },
                  {
                    label: 'Security & Compliance Auditing',
                    sub: 'Penetration testing oversight and compliance readiness',
                    starter: '—',
                    growth: 'Automated Static SAST/DAST',
                    enterprise: 'SOC2 & HIPAA Continuous Audit',
                  },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="p-3">
                      <div className="fw-semibold small">{row.label}</div>
                      <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{row.sub}</div>
                    </td>
                    <td className="p-3 text-center text-secondary small">{row.starter}</td>
                    <td className="p-3 text-center text-brand fw-semibold small" style={{ background: '#f6f1ff' }}>{row.growth}</td>
                    <td className="p-3 text-center small fw-medium">{row.enterprise}</td>
                  </tr>
                ))}

                {/* Slack Connect row (uses check icons instead of text) */}
                <tr>
                  <td className="p-3">
                    <div className="fw-semibold small">Slack Connect Collaboration</div>
                    <div className="text-secondary" style={{ fontSize: '0.75rem' }}>Daily asynchronous standups and team syncs</div>
                  </td>
                  <td className="p-3 text-center"><i className="bi bi-check-lg text-primary fs-5"></i></td>
                  <td className="p-3 text-center" style={{ background: '#f6f1ff' }}><i className="bi bi-check-lg text-brand fs-5"></i></td>
                  <td className="p-3 text-center"><i className="bi bi-check-lg text-primary fs-5"></i></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>


      {/* ===== FAQ ACCORDION ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="mx-auto" style={{ maxWidth: 800 }}>

            <div className="text-center mb-5">
              <small className="text-brand text-uppercase fw-semibold" style={{ letterSpacing: '0.05em' }}>
                Clear Terms
              </small>
              <h2 className="fw-bold fs-2 mt-2 mb-2">Frequently Asked Questions</h2>
              <p className="text-secondary mb-0">
                Straightforward answers regarding contracts, IP, transitions, and speed of delivery.
              </p>
            </div>

            <div className="d-flex flex-column gap-3">
              {[
                {
                  q: 'How does Xeryn handle intellectual property (IP)?',
                  a: 'You retain 100%, unencumbered client ownership of all written code, architecture diagrams, datasets, embeddings, and fine-tuned model checkpoints upon delivery. We operate under explicit work-for-hire assignment agreements, ensuring your cap table and patent rights remain completely uncompromised.',
                },
                {
                  q: 'Can we transition our in-house team onto the codebase?',
                  a: 'Absolutely. Our pods write strictly standardized, fully documented code (TypeScript, Python, Go) accompanied by comprehensive architectural decision records (ADRs). Every engagement includes recorded video walkthroughs, system topology maps, and co-programming transition sprints to seamlessly onboard internal hires.',
                },
                {
                  q: 'What cloud and model environments do you support?',
                  a: 'We deploy across AWS, Google Cloud Platform, Microsoft Azure, Cloudflare Workers, and specialized AI hardware providers like Lambda Labs and RunPod. For enterprise clients with stringent sovereignty requirements, we engineer completely isolated, air-gapped on-premise inference and training clusters.',
                },
                {
                  q: 'How quickly can an engineering pod spin up?',
                  a: 'Our pre-assembled senior engineering pods typically kickoff within 5 business days after contract execution. We handle initial environment staging, repository scoping, Slack Connect provisioning, and initial backlog grooming during this immediate setup window.',
                },
              ].map((faq, index) => (
                <div key={faq.q} className="bg-white rounded-4 shadow-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-100 bg-white border-0 p-4 d-flex align-items-center justify-content-between text-start"
                  >
                    <span className="fs-6 fw-semibold">{faq.q}</span>
                    <i className={`bi ${openFaq === index ? 'bi-dash-lg' : 'bi-plus-lg'} text-secondary fs-5`}></i>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-secondary mb-0">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ===== DISCOVERY CALL CTA BANNER ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">
          <div
            className="rounded-4 shadow-lg text-white p-4 p-lg-5 position-relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #302e44, #1b192e)' }}
          >
            <div className="row align-items-center g-4 position-relative">
              <div className="col-lg-7">
                <span
                  className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-1 mb-3"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  <span className="rounded-circle bg-secondary" style={{ width: 8, height: 8 }}></span>
                  <small>Available pods starting this month</small>
                </span>
                <h2 className="fw-bold display-6 mb-3">
                  Ready to accelerate your technical roadmap?
                </h2>
                <p className="fs-5 mb-0" style={{ opacity: 0.85 }}>
                  Schedule a 30-minute technical discovery call with our VP of Engineering to
                  evaluate technical pod feasibility and model architectures.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
                  <a
                    href="/contact"
                    className="btn brand-gradient rounded-3 px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    Book Discovery Call <i className="bi bi-calendar-event"></i>
                  </a>
                  <a
                    href="/contact"
                    className="btn text-white rounded-3 px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    Speak with an Architect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}