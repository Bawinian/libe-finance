
export const metadata = {"title": "Libe Finance || Bridge Finance", "description": "Bridge Finance from Libe Finance Limited. Short-term funding across the gap between a commitment and the cash that settles it.", "openGraph": {"title": "Libe Finance || Bridge Finance", "description": "Bridge Finance from Libe Finance Limited. Short-term funding across the gap between a commitment and the cash that settles it.", "type": "website", "images": ["/assets/img/about/about-main.jpg"]}};

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
          <span>Bridge Finance</span>
        </nav>
        <h1 className="page-title">Bridge Finance</h1>
        <p className="page-lead">Funding for the interval between money you are owed and money you need now.</p>
      </div>
    </section>

    <section className="sdetail-area practice-area sec-pt-130 sec-pb-130">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-8 fade-in">
            <div className="sd-content">
              <div className="sd-media">
                <img src="/assets/img/about/practice.jpg" alt="A conversation about a Libe Finance facility" />
              </div>
              <h2>What this facility is</h2>
              <p>Bridge finance is short-term credit arranged around a known incoming sum. It is for a business or corporate that has a commitment to meet before that cash arrives, and wants the gap funded without recasting the whole balance sheet.</p>
              <h3>Who it is for</h3>
              <p>Businesses and corporates.</p>
              <h3>Typical uses</h3>
              <ul className="ld-check-list ld-reset">
                <li><i className="fas fa-check"></i>Cover a payment that falls due before receivables clear.</li>
<li><i className="fas fa-check"></i>Hold a transaction together while documentation or a larger facility is completed.</li>
<li><i className="fas fa-check"></i>Fund a defined, time-bound gap rather than an open-ended overdraft.</li>
              </ul>
              <h3>What happens next</h3>
              <p>Tell us the amount, the date it is needed, and what settles the bridge. Terms are set after that assessment, not from a published rate card.</p>
              <a href="/contact" className="ld-btn">
            Request this facility
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
            </div>
          </div>
          <div className="col-lg-4 fade-in">
            <div className="sd-widget">
              <h3 className="widget-title">Facilities</h3>
              <ul className="sd-links">
                <li className="active"><a href="/bridge-finance">Bridge Finance <i className="fas fa-arrow-right"></i></a></li><li><a href="/working-capital">Working Capital Loans <i className="fas fa-arrow-right"></i></a></li><li><a href="/rental-loans">Rental Loans <i className="fas fa-arrow-right"></i></a></li><li><a href="/payroll-loans">Payroll Loans <i className="fas fa-arrow-right"></i></a></li><li><a href="/asset-financing">Asset Financing <i className="fas fa-arrow-right"></i></a></li>
              </ul>
            </div>
            <div className="sd-widget">
              <h3 className="widget-title">The desk</h3>
              <ul className="sd-links">
                <li><a href="tel:+2348174903144">+234 817 490 3144 <i className="fas fa-phone-alt"></i></a></li>
                <li><a href="mailto:hello@libefinance.com">hello@libefinance.com <i className="fas fa-envelope"></i></a></li>
                <li><a href="/contact">Flat E-01 Droll Apartments, Plot 81 Cadastral zone C01, Karmo District Abuja <i className="fas fa-location-dot"></i></a></li>
              </ul>
              <div className="mt-4">
                <a href="/contact" className="ld-btn btn-sm">
            Request a facility
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
