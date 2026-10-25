
export const metadata = {"title": "Libe Finance || Facilities", "description": "Bridge finance, working capital loans, rental loans, payroll loans, and asset financing from Libe Finance Limited.", "openGraph": {"title": "Libe Finance || Facilities", "description": "Bridge finance, working capital loans, rental loans, payroll loans, and asset financing from Libe Finance Limited.", "type": "website", "images": ["/assets/img/about/about-main.jpg"]}};

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
          <span>Facilities</span>
        </nav>
        <h1 className="page-title">Credit, named for the job it does</h1>
        <p className="page-lead">Five facilities. Each one is structured after an assessment. None of them is sold from a rate card.</p>
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
