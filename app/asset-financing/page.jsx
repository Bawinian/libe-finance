
export const metadata = {"title": "Libe Finance || Asset Financing", "description": "Asset Financing from Libe Finance Limited. Funding to acquire equipment, vehicles, or other productive assets.", "openGraph": {"title": "Libe Finance || Asset Financing", "description": "Asset Financing from Libe Finance Limited. Funding to acquire equipment, vehicles, or other productive assets.", "type": "website", "images": ["/assets/img/about/about-main.jpg"]}};

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
          <span>Asset Financing</span>
        </nav>
        <h1 className="page-title">Asset Financing</h1>
        <p className="page-lead">Credit for acquiring an asset the work depends on, with the asset part of the structure.</p>
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
              <p>Asset financing funds the purchase of equipment, vehicles, or other productive assets. It is available to individuals, businesses, and corporates, and the asset itself is part of how the facility is structured.</p>
              <h3>Who it is for</h3>
              <p>Individuals, businesses, and corporates.</p>
              <h3>Typical uses</h3>
              <ul className="ld-check-list ld-reset">
                <li><i className="fas fa-check"></i>Acquire equipment a business needs in order to deliver work.</li>
<li><i className="fas fa-check"></i>Finance a vehicle tied to operations rather than to a showroom promotion.</li>
<li><i className="fas fa-check"></i>Spread the cost of a productive asset across the period it earns.</li>
              </ul>
              <h3>What happens next</h3>
              <p>Describe the asset, the supplier if there is one, and who will use it. We assess the request and then set terms. Rates are not advertised in advance.</p>
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
                <li><a href="/bridge-finance">Bridge Finance <i className="fas fa-arrow-right"></i></a></li><li><a href="/working-capital">Working Capital Loans <i className="fas fa-arrow-right"></i></a></li><li><a href="/rental-loans">Rental Loans <i className="fas fa-arrow-right"></i></a></li><li><a href="/payroll-loans">Payroll Loans <i className="fas fa-arrow-right"></i></a></li><li className="active"><a href="/asset-financing">Asset Financing <i className="fas fa-arrow-right"></i></a></li>
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
