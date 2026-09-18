import { useState } from 'react'

export default function Contact() {

  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyStage, setCompanyStage] = useState('enterprise')
  const [services, setServices] = useState(['ml', 'llm-agents'])
  const [budget, setBudget] = useState('50k-100k')
  const [projectOverview, setProjectOverview] = useState('')
  const [ndaCheck, setNdaCheck] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const toggleService = (value) => {
    setServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="pt-5 mt-5 pb-4 bg-white text-center">
        <div className="container-xl py-4">
          <div className="mx-auto" style={{ maxWidth: 750 }}>

            {/* Badge */}
            <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-2 mb-4 shadow-sm">
              <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
              <small className="text-brand fw-semibold text-uppercase">Get In Touch</small>
            </span>

            <h1 className="fw-bold display-4 mb-3">Let's Engineer Something Exceptional</h1>

            <p className="text-secondary fs-5 mb-0">
              Speak directly with our technical principals. No high-pressure sales reps—just
              direct architectural feasibility, compute planning, and precise scoping.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT: FORM (LEFT) + WIDGETS (RIGHT, coming in Step 4) ===== */}
      <section className="pb-5 bg-white">
        <div className="container-xl">
          <div className="row g-4">
            <div className="col-lg-7">

              {/* ===== TECHNICAL DISCOVERY FORM ===== */}
              <div className="bg-white border rounded-4 shadow-sm p-4 p-lg-5">

                <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom flex-wrap gap-2">
                  <div>
                    <small className="text-brand text-uppercase fw-semibold" style={{ letterSpacing: '0.05em' }}>
                      Protocol Scope 01
                    </small>
                    <h2 className="fs-3 fw-bold mb-0">Technical Discovery Form</h2>
                  </div>
                  <span className="badge bg-light text-secondary d-flex align-items-center gap-2">
                    <i className="bi bi-shield-lock"></i> 256-Bit TLS Scoped
                  </span>
                </div>

                {submitted ? (
                  <div className="bg-light rounded-3 p-3 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-brand fs-4"></i>
                    <span>Inquiry dispatched. Lead architect will reach out within 8 hours.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">

                    {/* Name & Email */}
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label className="form-label small fw-semibold">Full Name <span className="text-brand">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Dr. Elena Rostova"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label small fw-semibold">Business Email <span className="text-brand">*</span></label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="elena@company.com"
                          required
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Company & Stage */}
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label className="form-label small fw-semibold">Company / Organization <span className="text-brand">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Vanguard Cognitive"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label small fw-semibold">Maturity / Stage</label>
                        <select
                          className="form-select"
                          value={companyStage}
                          onChange={(e) => setCompanyStage(e.target.value)}
                        >
                          <option value="seed">Seed Funding Stage</option>
                          <option value="series-a">Series A - C High Scale</option>
                          <option value="enterprise">Enterprise / Fortune 500</option>
                          <option value="agency">Agency / Strategic Partner</option>
                        </select>
                      </div>
                    </div>

                    {/* Services multi-select pills */}
                    <div>
                      <label className="form-label small fw-semibold d-block">
                        Technical Capabilities Required <span className="text-brand">*</span>
                      </label>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          { value: 'web-dev', label: 'Web Dev Systems', icon: 'bi-terminal' },
                          { value: 'mobile', label: 'Mobile Apps', icon: 'bi-phone' },
                          { value: 'ml', label: 'Machine Learning', icon: 'bi-cpu' },
                          { value: 'in-house-ai', label: 'In-House AI Products', icon: 'bi-box' },
                          { value: 'llm-agents', label: 'Custom LLM / Autonomous Agents', icon: 'bi-robot' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => toggleService(opt.value)}
                            className={`btn btn-sm rounded-3 px-3 py-2 d-inline-flex align-items-center gap-2 ${
                              services.includes(opt.value) ? 'brand-gradient' : 'btn-light'
                            }`}
                          >
                            <i className={`bi ${opt.icon}`}></i> {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget radio pills */}
                    <div>
                      <label className="form-label small fw-semibold d-block">
                        Target Allocation / Budget Envelope <span className="text-brand">*</span>
                      </label>
                      <div className="row g-2">
                        {['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((range) => (
                          <div className="col-6 col-sm-3" key={range}>
                            <button
                              type="button"
                              onClick={() => setBudget(range)}
                              className={`btn w-100 rounded-3 small py-2 ${
                                budget === range ? 'text-white' : 'btn-light'
                              }`}
                              style={budget === range ? { background: 'var(--brand-secondary)' } : {}}
                            >
                              {range}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project overview textarea */}
                    <div>
                      <div className="d-flex justify-content-between">
                        <label className="form-label small fw-semibold">
                          System Parameters &amp; Project Overview <span className="text-brand">*</span>
                        </label>
                        <small className="text-secondary">Min. 30 chars</small>
                      </div>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Describe technical scope, dataset scales, throughput constraints, and expected deployment timelines..."
                        required
                        minLength={30}
                        value={projectOverview}
                        onChange={(e) => setProjectOverview(e.target.value)}
                      />
                    </div>

                    {/* NDA checkbox */}
                    <label className="d-flex align-items-center gap-2 bg-light rounded-3 p-3" style={{ cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        className="form-check-input m-0"
                        checked={ndaCheck}
                        onChange={(e) => setNdaCheck(e.target.checked)}
                      />
                      <span className="small">Send mutual NDA prior to technical discovery workshop</span>
                    </label>

                    {/* Submit */}
                    <div>
                      <button type="submit" className="btn brand-gradient w-100 py-3 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2">
                        Send Architecture Inquiry <i className="bi bi-arrow-right"></i>
                      </button>
                      <div className="text-center text-secondary small mt-2 d-flex align-items-center justify-content-center gap-2">
                        <i className="bi bi-patch-check text-brand"></i>
                        Guaranteed response within 1 business day under standard confidentiality.
                      </div>
                    </div>

                  </form>
                )}
              </div>

            </div>
            {/* col-lg-5 for right-column widgets goes here in Step 4 */}
          </div>
        </div>
      </section>


      {/* ===== ENTERPRISE ONBOARDING STANDARD ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">

          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <small className="text-brand text-uppercase fw-semibold" style={{ letterSpacing: '0.05em' }}>
              Commercial Assurance
            </small>
            <h2 className="fw-bold display-6 mt-2 mb-2">Enterprise Onboarding Standard</h2>
            <p className="text-secondary mb-0">
              Every engagement is bounded by institutional security, airtight provenance, and
              non-negotiable architectural autonomy.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: 'bi-patch-check',
                title: '100% IP Handover',
                desc: 'Full source repositories, training weights, deployment manifests, and model documentation belong completely to your entity from day one.',
                footer: 'Perpetual License',
              },
              {
                icon: 'bi-shield-check',
                title: 'SOC2 Type II Certified Process',
                desc: 'Encrypted build runners, strict air-gapped staging setups, and continuous pipeline audits adhering to tier-1 enterprise compliance standards.',
                footer: 'Continuous Compliance',
              },
              {
                icon: 'bi-unlock',
                title: 'Zero Vendor Lock-in',
                desc: 'Standard Kubernetes runtimes, open PyTorch pipelines, and agnostic cloud infrastructure. Run on your own AWS, GCP, or on-prem cluster.',
                footer: 'Modular Portability',
              },
            ].map((badge) => (
              <div className="col-md-4" key={badge.title}>
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-3" style={{ width: 48, height: 48 }}>
                    <i className={`bi ${badge.icon} text-brand fs-4`}></i>
                  </div>
                  <h3 className="fs-5 fw-bold mb-2">{badge.title}</h3>
                  <p className="text-secondary small mb-3">{badge.desc}</p>
                  <div className="d-flex align-items-center gap-2 pt-3 border-top text-primary small fw-semibold">
                    <span>{badge.footer}</span>
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== ENTERPRISE ONBOARDING STANDARD ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">

          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <small className="text-brand text-uppercase fw-semibold" style={{ letterSpacing: '0.05em' }}>
              Commercial Assurance
            </small>
            <h2 className="fw-bold display-6 mt-2 mb-2">Enterprise Onboarding Standard</h2>
            <p className="text-secondary mb-0">
              Every engagement is bounded by institutional security, airtight provenance, and
              non-negotiable architectural autonomy.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: 'bi-patch-check',
                title: '100% IP Handover',
                desc: 'Full source repositories, training weights, deployment manifests, and model documentation belong completely to your entity from day one.',
                footer: 'Perpetual License',
              },
              {
                icon: 'bi-shield-check',
                title: 'SOC2 Type II Certified Process',
                desc: 'Encrypted build runners, strict air-gapped staging setups, and continuous pipeline audits adhering to tier-1 enterprise compliance standards.',
                footer: 'Continuous Compliance',
              },
              {
                icon: 'bi-unlock',
                title: 'Zero Vendor Lock-in',
                desc: 'Standard Kubernetes runtimes, open PyTorch pipelines, and agnostic cloud infrastructure. Run on your own AWS, GCP, or on-prem cluster.',
                footer: 'Modular Portability',
              },
            ].map((badge) => (
              <div className="col-md-4" key={badge.title}>
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-3" style={{ width: 48, height: 48 }}>
                    <i className={`bi ${badge.icon} text-brand fs-4`}></i>
                  </div>
                  <h3 className="fs-5 fw-bold mb-2">{badge.title}</h3>
                  <p className="text-secondary small mb-3">{badge.desc}</p>
                  <div className="d-flex align-items-center gap-2 pt-3 border-top text-primary small fw-semibold">
                    <span>{badge.footer}</span>
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



    </>
  )
}