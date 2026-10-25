import ContactForm from "../../components/ContactForm";

export const metadata = {"title": "Libe Finance || Contact", "description": "Contact Libe Finance Limited at Flat E-01 Droll Apartments, Plot 81 Cadastral zone C01, Karmo District Abuja. Phone +234 817 490 3144. Email hello@libefinance.com.", "openGraph": {"title": "Libe Finance || Contact", "description": "Contact Libe Finance Limited at Flat E-01 Droll Apartments, Plot 81 Cadastral zone C01, Karmo District Abuja. Phone +234 817 490 3144. Email hello@libefinance.com.", "type": "website", "images": ["/assets/img/about/about-main.jpg"]}};

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
          <span>Contact</span>
        </nav>
        <h1 className="page-title">Tell us what the facility is for</h1>
        <p className="page-lead">Monday to Friday, 8:00–17:00. A written enquiry is read by the desk, not by an automated offer.</p>
      </div>
    </section>

    <section className="feature-area contact-info-area sec-pt-130 sec-pb-130">
      <div className="container">
        <div className="row gy-4 fade-wrapper">
          <div className="col-xl-4 col-md-6 fade-top">
            <div className="feature-item">
              <span className="icon"><i className="fas fa-phone-alt"></i></span>
              <div>
                <h3>Call</h3>
                <p><a href="tel:+2348174903144">+234 817 490 3144</a> — Monday to Friday, 8:00–17:00.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 fade-top">
            <div className="feature-item">
              <span className="icon"><i className="fas fa-envelope"></i></span>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:hello@libefinance.com">hello@libefinance.com</a></p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 fade-top">
            <div className="feature-item">
              <span className="icon"><i className="fas fa-location-dot"></i></span>
              <div>
                <h3>Visit</h3>
                <p>Flat E-01 Droll Apartments, Plot 81 Cadastral zone C01, Karmo District Abuja.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="contact-area loanstep-area practice-area sec-pb-130">
      <div className="practice-fx" aria-hidden="true"><div className="ld-knot"></div></div>
      <div className="container">
        <div className="row gy-4 fade-wrapper">
          <div className="col-lg-7 fade-top">
            <div className="wizard-card h-100">
              <h3>Request a facility</h3>
              <p className="w-hint">This form is not connected to a mailbox yet. Calling or emailing the desk is the sure way to reach us.</p>
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-5 fade-top">
            <div className="contact-map">
              <iframe src="https://maps.google.com/maps?q=Flat%20E-01%20Droll%20Apartments%2C%20Plot%2081%20Cadastral%20zone%20C01%2C%20Karmo%20District%20Abuja&z=16&output=embed" title="Flat E-01 Droll Apartments, Plot 81 Cadastral zone C01, Karmo District Abuja" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
);
}
