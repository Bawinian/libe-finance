'use client';

import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const menuRef = useRef(null);
  const close = () => setOpen(false);
  useEffect(() => {
    const update = () => setSticky(window.scrollY > 160);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    const menu = menuRef.current;
    const controls = menu.querySelectorAll('a, button');
    controls[0]?.focus();
    const keydown = (event) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', keydown);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', keydown);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [open]);
  return (<>
  <div className="ld-topbar">
    <div className="container">
      <div className="topbar-inner">
        <ul className="topbar-meta ld-reset">
          <li>
            <a href="tel:+2348174903144">
              <i className="fas fa-phone-alt"></i>
              +234 817 490 3144
            </a>
          </li>
          <li>
            <i className="far fa-clock"></i>
            Mon – Fri 8:00 – 17:00
          </li>
        </ul>
        <p className="topbar-note mb-0">
          <a href="mailto:hello@libefinance.com">hello@libefinance.com</a>
        </p>
      </div>
    </div>
  </div>

  <header className={`header-area${sticky ? " sticky-active" : ""}`}>
    <div className="container">
      <div className="header-main">
        <a href="/" className="ld-logo logo-lockup"><img src="/assets/img/logo/logo.png" alt="Libe Finance" /></a>
        <nav className="ld-nav">
          <ul className="ld-reset">
            <li className="menu-item-has-children"><a href="/facilities">Facilities <i className="fas fa-caret-down"></i></a>
              <ul className="sub-menu">
<li><a href="/bridge-finance">Bridge Finance</a></li>
<li><a href="/working-capital">Working Capital Loans</a></li>
<li><a href="/rental-loans">Rental Loans</a></li>
<li><a href="/payroll-loans">Payroll Loans</a></li>
<li><a href="/asset-financing">Asset Financing</a></li>
</ul>
            </li>
            <li className=""><a href="/about">Company</a></li>
            <li className=""><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="/contact" className="ld-btn">
            Request a facility
            <span className="btn-ic">
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
          <button className="ld-menu-toggle" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <aside id="mobile-menu" ref={menuRef} className={`ld-offcanvas${open ? " open" : ""}`} role={open ? "dialog" : undefined} aria-modal={open || undefined} aria-label="Main navigation" inert={!open} onClick={(event) => { if (event.target.closest("a")) close(); }}>
    <div className="offcanvas-head">
      <a href="/" className="logo-lockup logo-on-dark"><img src="/assets/img/logo/logo-light.png" alt="Libe Finance" /></a>
      <button className="offcanvas-close" onClick={close} aria-label="Close menu"><i className="fas fa-times"></i></button>
    </div>
    <nav className="offcanvas-nav">
      <ul className="ld-reset">
        <li><a href="/facilities">All facilities</a></li>
        <li><a href="/bridge-finance">Bridge Finance</a></li>
<li><a href="/working-capital">Working Capital Loans</a></li>
<li><a href="/rental-loans">Rental Loans</a></li>
<li><a href="/payroll-loans">Payroll Loans</a></li>
<li><a href="/asset-financing">Asset Financing</a></li>
        <li><a href="/about">Company</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div className="offcanvas-footer">
      <p className="mb-1">Flat E-01 Droll Apartments, Plot 81 Cadastral zone C01, Karmo District Abuja</p>
      <a href="mailto:hello@libefinance.com">hello@libefinance.com</a>
      <p className="mb-0 mt-2"><a href="tel:+2348174903144">+234 817 490 3144</a></p>
    </div>
  </aside>
  <div className={`ld-offcanvas-overlay${open ? " open" : ""}`} onClick={close}></div>


</>);
}
