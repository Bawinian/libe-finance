import FAQ from "../components/FAQ";

export const metadata = {"title": "Libe Finance || Home", "description": "Libe Finance Limited provides bridge finance, working capital loans, rental loans, payroll loans, and asset financing across Nigeria.", "openGraph": {"title": "Libe Finance || Home", "description": "Libe Finance Limited provides bridge finance, working capital loans, rental loans, payroll loans, and asset financing across Nigeria.", "type": "website", "images": ["/assets/img/about/about-main.jpg"]}};

export default function Page() {
return (
<main className="main-root">

    <section className="hero-area">
      <div className="hero-bg-img" aria-hidden="true">
        <img className="bg-a" src="/assets/img/banner/hero-bg.jpg" alt="" />
      </div>
      <div className="hero-fx" aria-hidden="true"></div>
      <div className="hero-wave" aria-hidden="true"></div>
      <span className="ld-side-label" aria-hidden="true">Libe Finance — Structured credit</span>
      <span className="hero-orb orb-1" aria-hidden="true"></span>
      <span className="hero-orb orb-2" aria-hidden="true"></span>
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-badge fade-in">
                <span className="pulse"></span>
                Specialized credit for Nigeria
              </div>
              <h1 className="hero-title">
                Credit, structured for
                <span className="accent">the moment you need it</span>
              </h1>
              <p className="hero-text">Libe Finance Limited provides bridge finance, working capital loans, rental loans, payroll loans, and asset financing to individuals, businesses, and corporates.</p>
              <div className="hero-btns">
                <a href="/contact" className="ld-btn">
            Request a facility
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
                <a href="/facilities" className="ld-btn btn-outline">
            View facilities
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-calc fade-in">
              <div className="calc-head">
                <h2>A facility, not a teaser rate</h2>
              </div>
              <p className="calc-note" style={{"marginTop": "0"}}>Terms follow an assessment. Choose the facility that matches the need.</p>
              <ul className="facility-links ld-reset">
                <li><a href="/bridge-finance">Bridge Finance <i className="fas fa-arrow-right"></i></a></li>
<li><a href="/working-capital">Working Capital Loans <i className="fas fa-arrow-right"></i></a></li>
<li><a href="/rental-loans">Rental Loans <i className="fas fa-arrow-right"></i></a></li>
<li><a href="/payroll-loans">Payroll Loans <i className="fas fa-arrow-right"></i></a></li>
<li><a href="/asset-financing">Asset Financing <i className="fas fa-arrow-right"></i></a></li>
              </ul>
              <a href="/contact" className="ld-btn">
            Start an enquiry
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
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

    <section className="service-area sec-pt-130 sec-pb-130" id="facilities">
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-lg-8">
            <div className="section-title">
              <span className="subtitle">Facilities</span>
              <h2 className="title">Five ways to structure credit</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a href="/facilities" className="ld-btn btn-outline mt-4 mt-lg-0">
            All facilities
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
          </div>
        </div>
        <div className="row gy-4 mt-2 fade-wrapper">
          
          <div className="col-lg-4 col-md-6 fade-top">
            <div className="service-item">
              <span className="ghost-num" aria-hidden="true">01</span>
              <span className="icon"><i className="fas fa-arrows-left-right"></i></span>
              <h3><a href="/bridge-finance">Bridge Finance</a></h3>
              <p>Short-term funding across the gap between a commitment and the cash that settles it.</p>
              <span className="rate">Businesses and corporates</span><br />
              <a href="/bridge-finance" className="service-link">View facility <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-top">
            <div className="service-item">
              <span className="ghost-num" aria-hidden="true">02</span>
              <span className="icon"><i className="fas fa-briefcase"></i></span>
              <h3><a href="/working-capital">Working Capital Loans</a></h3>
              <p>Funding for inventory, operations, and the day-to-day running of a business.</p>
              <span className="rate">Businesses and corporates</span><br />
              <a href="/working-capital" className="service-link">View facility <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-top">
            <div className="service-item">
              <span className="ghost-num" aria-hidden="true">03</span>
              <span className="icon"><i className="fas fa-key"></i></span>
              <h3><a href="/rental-loans">Rental Loans</a></h3>
              <p>Finance structured around rent, for securing or sustaining a premises.</p>
              <span className="rate">Individuals and businesses</span><br />
              <a href="/rental-loans" className="service-link">View facility <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-top">
            <div className="service-item">
              <span className="ghost-num" aria-hidden="true">04</span>
              <span className="icon"><i className="fas fa-users"></i></span>
              <h3><a href="/payroll-loans">Payroll Loans</a></h3>
              <p>Facilities that keep salaries paid when cash flow and payday do not line up.</p>
              <span className="rate">Businesses and corporates</span><br />
              <a href="/payroll-loans" className="service-link">View facility <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-top">
            <div className="service-item">
              <span className="ghost-num" aria-hidden="true">05</span>
              <span className="icon"><i className="fas fa-cubes"></i></span>
              <h3><a href="/asset-financing">Asset Financing</a></h3>
              <p>Funding to acquire equipment, vehicles, or other productive assets.</p>
              <span className="rate">Individuals, businesses, and corporates</span><br />
              <a href="/asset-financing" className="service-link">View facility <i className="fas fa-arrow-right"></i></a>
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
              
              <div className="founder-row">
                <a href="/about" className="ld-btn">
            About the firm
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="faq-area sec-pt-130 sec-pb-130">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-title">
              <span className="subtitle">Questions</span>
              <h2 className="title">Before you enquire</h2>
              <p className="text">Four answers we would rather give plainly than leave implied.</p>
            </div>
            <div className="faq-cta fade-in">
              <span className="icon"><i className="fas fa-phone-alt"></i></span>
              <div>
                <h4>Call the desk</h4>
                <p><a href="tel:+2348174903144">+234 817 490 3144</a> — Monday to Friday, 8:00–17:00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
<FAQ />
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
