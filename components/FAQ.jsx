'use client';
import { useState } from 'react';
const questions = [["Who is Libe Finance for?", "Individuals, businesses, and corporates in Nigeria that need a defined credit facility: bridge finance, working capital, rental loans, payroll loans, or asset financing."], ["Do you publish interest rates?", "No. Terms are set after an assessment of the request. A teaser rate would describe a product we do not sell."], ["What should an enquiry include?", "Who the facility is for, the amount, what it will pay for, and when it is needed. The contact form asks for those points. You can also call or email the desk."], ["How is funding agreed?", "A conversation, then an assessment, then terms. Funding follows once those terms are agreed. There is no instant online approval."]];
export default function FAQ() {
  const [active, setActive] = useState(0);
  return <div className="accordion ld-accordion" id="faqAccordion">
    {questions.map(([question, answer], index) => <div className="accordion-item" key={question}>
      <h3 className="accordion-header"><button className={`accordion-button${active === index ? '' : ' collapsed'}`} type="button" aria-expanded={active === index} aria-controls={`faq${index + 1}`} onClick={() => setActive(active === index ? null : index)}>{question}</button></h3>
      <div id={`faq${index + 1}`} className={`accordion-collapse collapse${active === index ? ' show' : ''}`}><div className="accordion-body">{answer}</div></div>
    </div>)}
  </div>;
}
