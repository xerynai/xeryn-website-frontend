export default function About() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="pt-5 mt-5 pb-4 bg-white text-center">
        <div className="container-xl py-4">
          <div className="mx-auto" style={{ maxWidth: 800 }}>

            {/* Badge */}
            <span className="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-3 py-2 mb-4 shadow-sm">
              <span className="rounded-circle" style={{ width: 8, height: 8, background: 'var(--brand-primary)' }}></span>
              <small className="text-brand fw-semibold text-uppercase">Our Mission &amp; Story</small>
              <span className="text-secondary">|</span>
              <small className="text-secondary">EST. 2021</small>
            </span>

            <h1 className="fw-bold display-4 mb-3">
              Bridging Frontier Intelligence with{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-primary-light), var(--brand-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Mission-Critical Engineering
              </span>
            </h1>

            <p className="text-secondary fs-5 mb-5">
              Founded by senior systems architects and AI researchers, Xeryn was created to
              solve the gap between experimental AI prototypes and resilient, high-throughput
              enterprise software.
            </p>
          </div>

          {/* Node network mockup */}
          <div className="bg-white rounded-4 shadow p-4 mx-auto mb-5" style={{ maxWidth: 900 }}>
            <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="rounded-circle" style={{ width: 10, height: 10, background: '#eaddff' }}></span>
                <span className="rounded-circle" style={{ width: 10, height: 10, background: '#dbe1ff' }}></span>
                <span className="rounded-circle" style={{ width: 10, height: 10, background: '#ccc3d8' }}></span>
                <small className="text-secondary ms-2">node_mesh_status: synchronised</small>
              </div>
              <small className="text-brand d-flex align-items-center gap-1"><i className="bi bi-broadcast"></i> Realtime Verified</small>
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-md-4">
                <div className="bg-light rounded-3 p-3 text-start">
                  <small className="text-secondary">Core Cluster</small>
                  <div className="fw-bold">H100 NVLink Mesh</div>
                  <div className="progress mt-2" style={{ height: 5 }}>
                    <div className="progress-bar brand-gradient" style={{ width: '94%' }}></div>
                  </div>
                  <small className="text-brand">94% Efficiency Factor</small>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <svg width="144" height="80" viewBox="0 0 144 80">
                  <path d="M10 40C35 40 45 15 72 15C99 15 109 65 134 65" fill="none" stroke="#eaddff" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                  <circle cx="10" cy="40" r="4" fill="#eaddff" />
                  <circle cx="72" cy="15" r="5" fill="#0051d5" />
                  <circle cx="134" cy="65" r="4" fill="#eaddff" />
                </svg>
                <small className="text-secondary d-block">Deterministic Latency Gate</small>
              </div>
              <div className="col-md-4">
                <div className="bg-light rounded-3 p-3 text-start">
                  <small className="text-secondary">Reliability Constraint</small>
                  <div className="fw-bold">Zero Drift Engine</div>
                  <div className="progress mt-2" style={{ height: 5 }}>
                    <div className="progress-bar bg-primary" style={{ width: '99.9%' }}></div>
                  </div>
                  <small className="text-primary">&lt;0.001% Semantic Variance</small>
                </div>
              </div>
            </div>
          </div>

          {/* Impact metrics */}
          <div className="row g-3 mx-auto" style={{ maxWidth: 1000 }}>
            {[
              { value: '140+', label: 'Production Deployments', sub: 'Global enterprise scale', color: 'text-brand' },
              { value: '99.99%', label: 'Average Uptime SLA', sub: 'Mission-critical uptime', color: 'text-primary' },
              { value: '42ms', label: 'P95 Inference Latency', sub: 'High concurrency routing', color: 'text-brand' },
              { value: '100%', label: 'Client IP Ownership', sub: 'Zero proprietary lock-in', color: 'text-primary' },
            ].map((stat) => (
              <div className="col-6 col-lg-3" key={stat.label}>
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                  <div className={`fw-bold display-6 ${stat.color}`}>{stat.value}</div>
                  <div className="fw-semibold small mt-1">{stat.label}</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ===== BRAND PILLARS ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">

          <div className="row align-items-end mb-5 gy-3">
            <div className="col-lg-7">
              <small className="text-brand fw-semibold text-uppercase d-block mb-2" style={{ letterSpacing: '0.05em' }}>
                Core Tenets
              </small>
              <h2 className="fw-bold display-6">The Philosophy Powering Every Byte</h2>
            </div>
            <div className="col-lg-5">
              <p className="text-secondary mb-0">
                We reject hype-cycle promises in favor of verifiable proofs, algorithmic
                accuracy, and compounding technical durability.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                num: '01',
                icon: 'bi-cpu',
                title: 'Intelligent',
                desc: 'Rigorous mathematical foundations, zero-hallucination guardrail systems, and adaptive cognitive architectures calibrated for deterministic accuracy in regulated domains.',
                footerIcon: 'bi-patch-check',
                footerText: 'Formal Model Proofs',
                color: 'text-brand',
              },
              {
                num: '02',
                icon: 'bi-hurricane',
                title: 'Innovative',
                desc: 'Continually pushing frontier open-source and proprietary foundation models into practical, deployable business workflows without bloat, brittle glue code, or vendor dependency.',
                footerIcon: 'bi-diagram-3',
                footerText: 'Adaptive Orchestration',
                color: 'text-primary',
              },
              {
                num: '03',
                icon: 'bi-graph-up-arrow',
                title: 'Impactful',
                desc: 'We build software that delivers demonstrable ROI, measurable latency reductions, and compounding enterprise leverage from day one of launch.',
                footerIcon: 'bi-bar-chart',
                footerText: 'Quantifiable Compounding ROI',
                color: 'text-brand',
              },
            ].map((pillar) => (
              <div className="col-md-4" key={pillar.num}>
                <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-center rounded-3 bg-light mb-4" style={{ width: 56, height: 56 }}>
                      <i className={`bi ${pillar.icon} ${pillar.color} fs-3`}></i>
                    </div>
                    <small className={`fw-semibold text-uppercase d-block mb-2 ${pillar.color}`} style={{ letterSpacing: '0.05em' }}>
                      Pillar {pillar.num}
                    </small>
                    <h3 className="fs-4 fw-bold mb-3">{pillar.title}</h3>
                    <p className="text-secondary">{pillar.desc}</p>
                  </div>
                  <div className="pt-3 mt-3 border-top">
                    <small className={`fw-semibold d-flex align-items-center gap-2 ${pillar.color}`}>
                      <i className={`bi ${pillar.footerIcon}`}></i> {pillar.footerText}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ===== LEADERSHIP TEAM ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">

          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <small className="text-brand fw-semibold text-uppercase" style={{ letterSpacing: '0.05em' }}>
              Architects &amp; Researchers
            </small>
            <h2 className="fw-bold display-6 mt-2 mb-2">Engineered by Masters of the Craft</h2>
            <p className="text-secondary mb-0">
              A multidisciplinary collective from top global AI laboratories, hyperscaler
              infrastructure divisions, and mission-critical financial platforms.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                name: 'Dr. Aris Thorne',
                role: 'Chief AI Architect',
                sub: 'ex-DeepMind · PhD Stanford',
                tag: 'AI Architecture',
                bio: 'Pioneered sparse attention patterns and verifiable symbolic neural agents. Oversees enterprise foundation fine-tuning and inference pipelines.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDodKnz-EzeeQEDNnk48kGZOmV_yu1DzEXlmp8IFSN0-V4FB-LhcX87tn6hR85AD7j-Nf5DyhgRk1fFSvseBfHwvMeOtexYofKUPZ95hUTbQAmcnuXL274ISVeNT6UzraUG4Xm_nhadUURhDSxoQUHABnTfUYRx3xkjBdbSfgaNaC5uNaXMnESqR8_JaSmFiyWnnZK8ArTWfPhjrCeVdngML3sHpQNExHlDrOaXBUbg9iTeQx0fEA1iLA',
              },
              {
                name: 'Elena Rostova',
                role: 'VP of Software Engineering',
                sub: 'ex-Stripe · Cloud Infrastructure',
                tag: 'Infrastructure',
                bio: 'Led multi-region payment systems supporting millions of transactions per second. Steers Xeryn\'s distributed backend runtime and developer kits.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTTKDEo9N1jbi0J-WTzUs58nNhShhNOoeLXOPaYEupYvTz2WfhlbCCM2otcxkvKGOe5TKNGgYifJbjkDTMQuPHfoy5cD8_lLpZBuxLPJq0ecRgefJ2Pt_rBaGPnYvad1-sQ1emGqXGZzTDDEJOU51_HnrJsK9mKWCbu4MTm17lTV61AOwAy1SidBX33yHHtEh7ny9UuBBKpQT9uMcZkSmrKKU-WmuyWApxK_Rbla9dLQ0xZU5K2NH1Qw',
              },
              {
                name: 'Marcus Vance',
                role: 'Head of Machine Learning & MLOps',
                sub: 'ex-NVIDIA',
                tag: 'MLOps',
                bio: 'Specialist in low-precision quantization (FP4/INT8) and GPU kernel acceleration. Directs our low-latency distributed inference engines.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk5TiVe0oR_V19KmZJ9AjXO2Jf95HsARMKHOkrl67rZa2lvUHkQlKTaFbTjVpO0JJ7QRB85zD24p-A9pZGp3q1kZ0fSn5Jfx-C-nDQSEIIgmuaBKgrGkTyIXtk8Vfzlmdott7u3fSQvFN3h2t1b159sJE_Wdtcli5ny_VcKrjjLU3ujn1AgjgWOQaYmjog7dy-M3-r79zxha7Jgty5VLmpwjuWevz4hzDahh-EXAoWxIOnu3jf5Ak7cg',
              },
              {
                name: 'Sarah Lin',
                role: 'Principal Systems Architect',
                sub: 'High-Concurrency Distributed Systems',
                tag: 'Concurrency',
                bio: 'Expert in lock-free algorithmic structures and distributed consensus. Ensures microsecond responsiveness across hybrid edge configurations.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnTPbVwbvmnqA4DRQEd06IeBR7gASye3Qx8bwrwHqNQc8sBwM9UD8dPDBaS6k6twKOtTbbYiZeHvQWsXY9xAd51veNO5KdKMEjJ3NKJOxV50tQkuL-2zP51i8WvDGU31syb-v-hl6AAgh8kzucWf0_FiuC1uV8xE4S-5ZisIbcItJlICg2HcURD9JJSM6e5-2zvlGDZ23MdVDEt1Ky7wjVfqqeO-u3v5G_Knri8dpWL9nG2LIK4l2wxQ',
              },
              {
                name: 'Tariq Al-Mansoor',
                role: 'Lead Product Designer',
                sub: 'Design Systems & Human-AI Interfaces',
                tag: 'Interface UX',
                bio: 'Dedicated to eliminating latency perception in AI-assisted workflows and designing ergonomic feedback mechanisms for autonomous systems.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLWwk41CShUFyctBOOKnsZMw2WeFWHOrvOoJC64sJ7-HgPUjdtWfAxGh4df0fNFGTo9gvbQZZg9_zlo2JfkuVZhNlIBID8bBgF6zm8TOMn3uDa439NhUp87D80AkonsSTZ22KRf9ZTwWbbW6RJz39tCtpLIHW9Sw4Ja4OOuSZosSuitB6jdO-HEqfOwLqL9pD_qTioW-IQZeWyaqYmIELyVLpY7bTeOFQlnkFUYfcBYYlm1ZQdSk26Tg',
              },
              {
                name: 'Maya Chen',
                role: 'Director of Security & Compliance',
                sub: 'SOC2 & Zero-Trust Architecture',
                tag: 'Zero-Trust',
                bio: 'Specialized in private enclave computing, differential privacy, and SOC2 Type II automated compliance pipelines for enterprise clients.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCORO5RhqL9-xy1Z3eF5_rghP4odvzpX4XCF8y1YiQ3n53wDnCtGnJ9ES79kzd23DPkIXO_29bC8YvP4p0ZffwfwwfmPRj02JD5nsKwLq4PL7KR8LPmiRrvr7sEHYgWcFuOUOjT7M9y8CGNA6cMzeS4COkg4PziKzbU56htDNHt7ixenifWfLeLJOtAAo0Jkzf12D3q_v8MEYaZEywp7dUqH59P2Gzo_tQi6F-uNUDbI2I7scSAdny_Zg',
              },
            ].map((member) => (
              <div className="col-md-6 col-lg-4" key={member.name}>
                <div className="bg-white border rounded-4 shadow-sm p-3 h-100 d-flex flex-column">
                  <div className="position-relative rounded-3 overflow-hidden mb-3" style={{ height: 240 }}>
                    <img src={member.img} alt={member.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    <span className="position-absolute top-0 end-0 m-2 badge bg-white text-brand shadow-sm">
                      {member.tag}
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h3 className="fs-5 fw-bold mb-0">{member.name}</h3>
                    <div className="d-flex gap-2 text-secondary">
                      <a href="/contact" className="text-secondary"><i className="bi bi-share"></i></a>
                      <a href="/contact" className="text-secondary"><i className="bi bi-terminal"></i></a>
                    </div>
                  </div>
                  <small className="text-brand fw-semibold">{member.role}</small>
                  <small className="text-secondary fw-medium mb-2">{member.sub}</small>
                  <p className="text-secondary small mb-0">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ===== ENGINEERING MANIFESTO ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">
          <div className="row g-5 align-items-center">

            {/* Left: manifesto text */}
            <div className="col-lg-5">
              <span className="d-inline-flex align-items-center gap-2 bg-white rounded-pill px-3 py-1 mb-3">
                <i className="bi bi-code-square text-brand"></i>
                <small className="text-brand text-uppercase fw-semibold">Engineers First</small>
              </span>
              <h2 className="fw-bold display-6 mb-3">Our Engineering Manifesto</h2>
              <p className="text-secondary mb-4">
                We operate at the intersection of mathematical exactitude and software
                durability. We believe software architecture should be self-documenting,
                provably sound, and built to survive paradigm shifts.
              </p>

              <div className="d-flex flex-column gap-4">
                <div className="d-flex gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{ width: 36, height: 36, background: '#eaddff' }}
                  >
                    <i className="bi bi-patch-check text-brand"></i>
                  </div>
                  <div>
                    <h4 className="fs-6 fw-bold mb-1">Algorithmic Verification</h4>
                    <p className="text-secondary small mb-0">
                      Every model layer undergoes automated fuzzing, adversarial testing, and
                      formal semantic boundaries before reaching stage-zero.
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{ width: 36, height: 36, background: '#dbe1ff' }}
                  >
                    <i className="bi bi-shield-lock text-primary"></i>
                  </div>
                  <div>
                    <h4 className="fs-6 fw-bold mb-1">Ethical &amp; Private by Invariant</h4>
                    <p className="text-secondary small mb-0">
                      Client data is never leveraged for cross-tenant model training.
                      Zero-knowledge cryptographic isolation is baked into our base infrastructure.
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{ width: 36, height: 36, background: '#eaddff' }}
                  >
                    <i className="bi bi-memory text-brand"></i>
                  </div>
                  <div>
                    <h4 className="fs-6 fw-bold mb-1">Hardware-Aware Optimization</h4>
                    <p className="text-secondary small mb-0">
                      We profile at the silicon instruction level, tailoring tensor kernels to
                      maximize FLOP utilization and minimize power envelope.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: code/terminal mockup */}
            <div className="col-lg-7">
              <div className="rounded-4 shadow-lg p-4 font-monospace small" style={{ background: '#302e44', color: '#e4dffc' }}>
                <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-3" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                  <div className="d-flex align-items-center gap-2">
                    <span className="rounded-circle bg-danger" style={{ width: 10, height: 10 }}></span>
                    <span className="rounded-circle" style={{ width: 10, height: 10, background: '#d2bbff' }}></span>
                    <span className="rounded-circle bg-secondary" style={{ width: 10, height: 10 }}></span>
                    <span className="ms-2" style={{ opacity: 0.7 }}>manifesto_invariants.rs</span>
                  </div>
                  <span className="d-flex align-items-center gap-1" style={{ opacity: 0.6 }}>
                    <i className="bi bi-lock"></i> immutable_spec
                  </span>
                </div>

                <div style={{ lineHeight: 1.9 }}>
                  <div><span style={{ color: '#d2bbff' }}>pub struct</span> <span style={{ color: '#b4c5ff' }}>SystemContract</span>{'<'}<span style={{ color: '#c7c4d8' }}>'a</span>, T: TensorStream{'>'} {'{'}</div>
                  <div className="ps-4" style={{ opacity: 0.6 }}>// Rule 1: Zero unchecked stochastic execution</div>
                  <div className="ps-4">hallucination_threshold: <span style={{ color: '#b4c5ff' }}>P99Boundary::StrictZero</span>,</div>
                  <div className="ps-4">inference_budget: <span style={{ color: '#b4c5ff' }}>Duration::from_millis(42)</span>,</div>
                  <div className="ps-4">data_governance: <span style={{ color: '#b4c5ff' }}>EnclaveStoragePolicy::ConfidentialOnly</span>,</div>
                  <div className="ps-4">client_ownership: <span style={{ color: '#d2bbff' }}>Ownership::ExclusiveClientRetained</span>,</div>
                  <div>{'}'}</div>
                  <div className="mt-2" style={{ opacity: 0.6 }}>// Formal validation hook guaranteed at compile time</div>
                  <div><span style={{ color: '#d2bbff' }}>impl</span>{'<'}'a, T{'>'} <span style={{ color: '#b4c5ff' }}>VerifiablePlatform</span> <span style={{ color: '#d2bbff' }}>for</span> <span style={{ color: '#b4c5ff' }}>SystemContract</span>{'<'}'a, T{'>'} {'{'}</div>
                  <div className="ps-4"><span style={{ color: '#d2bbff' }}>fn</span> <span style={{ color: '#b4c5ff' }}>verify_safety_invariants</span>(&amp;<span style={{ color: '#d2bbff' }}>self</span>) -&gt; <span style={{ color: '#b4c5ff' }}>Result</span>{'<'}CompliancePass, AuditFailure{'>'} {'{'}</div>
                  <div className="ps-5" style={{ opacity: 0.85 }}>self.enforce_airgap_memory_bounds()?;</div>
                  <div className="ps-5" style={{ opacity: 0.85 }}>self.guarantee_deterministic_seed_parity()?;</div>
                  <div className="ps-5"><span style={{ color: '#b4c5ff' }}>Ok</span>(CompliancePass::Guaranteed)</div>
                  <div className="ps-4">{'}'}</div>
                  <div>{'}'}</div>
                </div>

                <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-3" style={{ borderColor: 'rgba(255,255,255,0.1) !important', opacity: 0.7 }}>
                  <span>Verified with formal Coq proofs</span>
                  <span className="d-flex align-items-center gap-1" style={{ color: '#d2bbff' }}>
                    <i className="bi bi-check-circle-fill"></i> 100% Passed
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE ===== */}
      <section className="py-5 bg-white">
        <div className="container-xl py-4">

          <div className="row align-items-end mb-5 gy-3">
            <div className="col-lg-7">
              <small className="text-brand fw-semibold text-uppercase d-block mb-2" style={{ letterSpacing: '0.05em' }}>
                Worldwide Footprint
              </small>
              <h2 className="fw-bold display-6">Global Hubs, 24/7 Follow-the-Sun Coverage</h2>
            </div>
            <div className="col-lg-5">
              <p className="text-secondary mb-0">
                Headquartered across key global technology centers to provide continuous
                low-latency engineering support and regulatory-compliant deployments.
              </p>
            </div>
          </div>

          {/* Office cards */}
          <div className="row g-4 mb-4">
            {[
              {
                region: 'Americas HQ',
                tz: 'UTC-7 (PST)',
                city: 'San Francisco',
                desc: '535 Mission St, SoMa Financial District. Core research lab, GPU supercomputing testbed, and executive headquarters.',
                hours: '09:00 - 18:00 PST',
                color: 'text-brand',
                dot: 'var(--brand-primary)',
              },
              {
                region: 'EMEA Hub',
                tz: 'UTC+1 (CET)',
                city: 'Zurich',
                desc: 'Neugasse 29, District 5. Algorithmic verification, cryptographic compliance, and sovereign European datacenter orchestration.',
                hours: '08:30 - 17:30 CET',
                color: 'text-primary',
                dot: 'var(--brand-secondary)',
              },
              {
                region: 'APAC Hub',
                tz: 'UTC+8 (SGT)',
                city: 'Singapore',
                desc: 'Marina Bay Financial Centre, Tower 2. High-throughput edge networking, regional fintech integrations, and distributed operations.',
                hours: '09:00 - 18:00 SGT',
                color: 'text-brand',
                dot: 'var(--brand-primary-light)',
              },
            ].map((office) => (
              <div className="col-md-4" key={office.city}>
                <div className="bg-white border rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <small className={`fw-semibold ${office.color}`}>{office.region}</small>
                    <span className="badge bg-light text-secondary">{office.tz}</span>
                  </div>
                  <h3 className="fs-4 fw-bold mb-2">{office.city}</h3>
                  <p className="text-secondary small mb-3">{office.desc}</p>
                  <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                    <small className="text-secondary d-flex align-items-center gap-1">
                      <i className="bi bi-clock"></i> {office.hours}
                    </small>
                    <span className="rounded-circle" style={{ width: 8, height: 8, background: office.dot }}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timezone coverage bar */}
          <div className="bg-white border rounded-4 shadow-sm p-4">
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 mb-3">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-globe text-brand"></i>
                <span className="fw-semibold">Continuous Follow-The-Sun SRE Active Window</span>
              </div>
              <small className="text-secondary">Coverage overlap: 100% of standard trading hours</small>
            </div>
            <div className="d-flex rounded-3 overflow-hidden" style={{ height: 32 }}>
              <div
                className="d-flex align-items-center justify-content-center small fw-semibold text-brand"
                style={{ width: '35%', background: '#eaddff' }}
              >
                SF (PST)
              </div>
              <div
                className="d-flex align-items-center justify-content-center small fw-semibold text-primary"
                style={{ width: '35%', background: '#dbe1ff' }}
              >
                Zurich (CET)
              </div>
              <div
                className="d-flex align-items-center justify-content-center small fw-semibold text-brand"
                style={{ width: '30%', background: '#f0ebff' }}
              >
                Singapore (SGT)
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== BOTTOM CTA BANNER ===== */}
      <section className="py-5 bg-light">
        <div className="container-xl py-4">
          <div
            className="rounded-4 shadow-lg text-white p-4 p-lg-5 position-relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #302e44, #1b192e)' }}
          >
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span
                  className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-1 mb-3"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  <i className="bi bi-rocket-takeoff"></i>
                  <small>Join the Frontier</small>
                </span>
                <h2 className="fw-bold display-6 mb-3">
                  Join our team or build your next platform with us.
                </h2>
                <p className="fs-5 mb-0" style={{ opacity: 0.85 }}>
                  Whether you are an engineer pushing mathematical boundaries or an enterprise
                  architect looking for zero-compromise AI infrastructure, let's connect.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
                  <a
                    href="/contact"
                    className="btn btn-light rounded-3 px-4 py-3 fw-semibold text-dark d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    Explore Careers
                  </a>
                  <a
                    href="/contact"
                    className="btn brand-gradient rounded-3 px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    Initiate Project
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

      
