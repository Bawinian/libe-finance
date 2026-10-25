
export const metadata = {"title": "Libe Finance || Page not found", "description": "This page is not on the Libe Finance site.", "openGraph": {"title": "Libe Finance || Page not found", "description": "This page is not on the Libe Finance site.", "type": "website", "images": ["/assets/img/about/about-main.jpg"]}};

export default function Page() {
return (
<main className="main-root">

    <section className="utility-area">
      <div className="page-fx" aria-hidden="true"></div>
      <div className="container">
        <div className="u-ghost" aria-hidden="true">404</div>
        <h1>This page is not on the site</h1>
        <p>The address may be mistyped. The facilities and the desk are still here.</p>
        <div className="u-actions">
          <a href="/" className="ld-btn">
            Back to home
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
          <a href="/facilities" className="ld-btn btn-light">
            View facilities
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>

  </main>
);
}
