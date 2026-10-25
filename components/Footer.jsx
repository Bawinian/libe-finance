export default function Footer() {
return (
<footer className="footer-area">
    <div className="container">
      <div className="footer-infobar">
        <div className="ib-item">
          <span className="ic"><i className="fas fa-phone-alt"></i></span>
          <div>
            <span className="t">Call the desk</span>
            <a className="s" href="tel:+2348174903144">+234 817 490 3144</a>
          </div>
        </div>
        <div className="ib-item">
          <span className="ic"><i className="fas fa-envelope"></i></span>
          <div>
            <span className="t">Email</span>
            <a className="s" href="mailto:hello@libefinance.com">hello@libefinance.com</a>
          </div>
        </div>
        <div className="ib-item">
          <span className="ic"><i className="far fa-clock"></i></span>
          <div>
            <span className="t">Weekday hours</span>
            <span className="s">Monday to Friday, 8:00–17:00</span>
          </div>
        </div>
        <a href="/contact" className="ld-btn btn-sm">
            Request a facility
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
      </div>
      <div className="footer-top">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6">
            <a href="/" className="f-logo logo-lockup logo-on-dark"><img src="/assets/img/logo/logo-light.png" alt="Libe Finance" /></a>
            <p className="f-about">Libe Finance Limited provides bridge finance, working capital loans, rental loans, payroll loans, and asset financing to individuals, businesses, and corporates in Nigeria.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="widget-title">Facilities</h4>
            <ul className="f-links ld-reset">
              <li><a href="/bridge-finance">Bridge Finance</a></li>
<li><a href="/working-capital">Working Capital Loans</a></li>
<li><a href="/rental-loans">Rental Loans</a></li>
<li><a href="/payroll-loans">Payroll Loans</a></li>
<li><a href="/asset-financing">Asset Financing</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="widget-title">Company</h4>
            <ul className="f-links ld-reset">
              <li><a href="/about">About</a></li>
              <li><a href="/facilities">Facilities</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <p className="f-about mt-4 mb-0">Flat E-01 Droll Apartments, Plot 81 Cadastral zone C01, Karmo District Abuja</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Libe Finance Limited. Facilities are subject to assessment and approval.</div>
      </div>
    </div>
  </footer>
);
}
