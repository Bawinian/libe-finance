'use client';
import { useState } from 'react';
export default function ContactForm() {
  const [status, setStatus] = useState('');
  function submit(event) {
    event.preventDefault();
    setStatus('This form is not connected to a mailbox yet. Please call +234 817 490 3144 or email hello@libefinance.com.');
  }
  return (<form id="contact-form" action="#" method="post" onSubmit={submit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="w-field">
                      <label htmlFor="ct-name">Full name</label>
                      <input type="text" id="ct-name" name="name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="w-field">
                      <label htmlFor="ct-email">Email address</label>
                      <input type="email" id="ct-email" name="email" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="w-field">
                      <label htmlFor="ct-phone">Phone</label>
                      <input type="tel" id="ct-phone" name="phone" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="w-field">
                      <label htmlFor="ct-org">Organisation</label>
                      <input type="text" id="ct-org" name="organisation" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="w-field">
                      <label htmlFor="ct-facility">Facility</label>
                      <select id="ct-facility" name="facility" required defaultValue="">
                        <option value="" disabled>Select a facility</option>
                        <option value="Bridge Finance">Bridge Finance</option>
<option value="Working Capital Loans">Working Capital Loans</option>
<option value="Rental Loans">Rental Loans</option>
<option value="Payroll Loans">Payroll Loans</option>
<option value="Asset Financing">Asset Financing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="w-field">
                      <label htmlFor="ct-msg">What the facility is for</label>
                      <textarea id="ct-msg" name="message" rows="5" required></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="ld-btn">
                  Send enquiry
                  <span className="btn-ic">
                    <i className="fas fa-arrow-right"></i>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
                <div className="form-status" role="status" aria-live="polite">{status}</div>
              </form>);
}
