
export const metadata = {"title": "Libe Finance || Company", "description": "Libe Finance Limited provides specialized credit and structured financing to individuals, businesses, and corporates in Nigeria.", "openGraph": {"title": "Libe Finance || Company", "description": "Libe Finance Limited provides specialized credit and structured financing to individuals, businesses, and corporates in Nigeria.", "type": "website", "images": ["/assets/img/about/about-main.jpg"]}};

export default function Page() {
return (
<main className="main-root">

    <section className="subheader-area">
      <div className="sub-bg" aria-hidden="true">
        <img src="/assets/img/bg/subheader-bg.jpg" alt="" />
      </div>
      <div className="page-fx" aria-hidden="true"></div>
      <div className="container">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
          <span>Company</span>
        </nav>
        <h1 className="page-title">Access to finance, structured properly</h1>
        <p className="page-lead">Libe Finance Limited is a specialized credit and structured financing firm working across Nigeria.</p>
      </div>
    </section>

    <section className="about-area sec-pt-130 sec-pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-media fade-in">
              <div className="main-img">
                <img src="/assets/img/about/about-main.jpg" alt="A financing conversation at Libe Finance" />
              </div>
              <div className="float-img">
                <img src="/assets/img/about/about-float.jpg" alt="Discussion of a credit facility" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content ps-lg-5">
              <div className="section-title">
                <span className="subtitle">The firm</span>
                <h2 className="title">Specialized credit, <span className="accent">structured</span> to the need</h2>
                <p className="text">Libe Finance Limited is a specialized credit and structured financing firm committed to expanding access to finance across Nigeria. The work is bridge finance, working capital loans, rental loans, payroll loans, and asset financing.</p>
              </div>
              <ul className="ld-check-list ld-reset">
                <li><i className="fas fa-check"></i>Bridge Finance</li>
<li><i className="fas fa-check"></i>Working Capital Loans</li>
<li><i className="fas fa-check"></i>Rental Loans</li>
<li><i className="fas fa-check"></i>Payroll Loans</li>
<li><i className="fas fa-check"></i>Asset Financing</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="feature-area sec-pt-130 sec-pb-60">
      <div className="container">
        <div className="section-title mb-30">
          <span className="subtitle">Who it is for</span>
          <h2 className="title">Individuals, businesses, and corporates</h2>
        </div>
        <div className="row gy-4 fade-wrapper">
          
          <div className="col-lg-4 col-md-6 fade-top">
            <div className="feature-item">
              <span className="icon"><i className="fas fa-user"></i></span>
              <div>
                <h3>Individuals</h3>
                <p>Rental loans and asset financing, arranged around a specific need rather than a generic personal loan.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-top">
            <div className="feature-item">
              <span className="icon"><i className="fas fa-briefcase"></i></span>
              <div>
                <h3>Businesses</h3>
                <p>Working capital, bridge finance, payroll, rent, and assets for companies whose cash cycle needs a defined facility.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-top">
            <div className="feature-item">
              <span className="icon"><i className="fas fa-building"></i></span>
              <div>
                <h3>Corporates</h3>
                <p>Structured credit for larger commitments: bridges, working capital, payroll, and productive assets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="process-area sec-pt-130 sec-pb-130">
      <div className="ld-parallax-bg" aria-hidden="true"><img src="/assets/img/bg/process-bg.jpg" alt="" /></div>
      <span className="ld-noise" aria-hidden="true"></span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center mb-30">
              <span className="subtitle">How an enquiry works</span>
              <h2 className="title">From Conversation to Funding</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 mt-3 fade-wrapper">
          
          <div className="col-lg-3 col-md-6 fade-top">
            <div className="process-item">
              <span className="ghost-num" aria-hidden="true">01</span>
              <span className="step ld-num">1</span>
              <h3>Conversation</h3>
              <p>You tell us who the facility is for, the amount, and what it needs to do.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 fade-top">
            <div className="process-item">
              <span className="ghost-num" aria-hidden="true">02</span>
              <span className="step ld-num">2</span>
              <h3>Assessment</h3>
              <p>We read the request against the business, the individual, or the corporate behind it.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 fade-top">
            <div className="process-item">
              <span className="ghost-num" aria-hidden="true">03</span>
              <span className="step ld-num">3</span>
              <h3>Terms</h3>
              <p>If it fits, we set a structure. Nothing is offered as a teaser rate.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 fade-top">
            <div className="process-item">
              <span className="ghost-num" aria-hidden="true">04</span>
              <span className="step ld-num">4</span>
              <h3>Funding</h3>
              <p>Once terms are agreed, the facility is put in place.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-area">
      <div className="ld-lines" aria-hidden="true"></div>
      <span className="ld-noise" aria-hidden="true"></span>
      <div className="container">
        <div className="cta-inner">
          <div>
            <h2 className="cta-title">Tell us what the <span className="ld-shimmer">facility</span> is for.</h2>
            <p>A conversation first. Terms follow an assessment, not a published rate.</p>
          </div>
          <div className="cta-actions">
            <a href="/contact" className="ld-btn btn-light">
            Request a facility
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
            <a href="tel:+2348174903144" className="cta-phone">
              <i className="fas fa-phone-alt"></i>
              <span className="d-inline-block">
                <span>Or call the desk</span>
                +234 817 490 3144
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

  </main>
);
}
