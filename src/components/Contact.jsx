import { useState } from 'react';
import Reveal from './Reveal';
import { CONTACT } from '../data/content';

// Opens the visitor's email app with the form details filled in.
// TODO: replace with a real endpoint (Formspree, Web3Forms, EmailJS or your own API)
// so requests reach the Vichai inbox without the visitor pressing send.
function openEmailDraft({ name, company, phone, email, message }) {
  const body = `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`;
  const subject = `Demo request from ${name}`;
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    setSubmitted(true);
    openEmailDraft(data);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <Reveal>
          <h2>Let's start a conversation</h2>
          <p className="lead">
            Whether you have a specific project in mind, a question about our capabilities, or just want to explore how
            we can help, we're ready to listen. Call us or drop an email and one of our principal consultants will get
            back to you to schedule a conversation.
          </p>

          <address className="contact-details">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>Tel: {CONTACT.phone}</a>
            <span>
              {CONTACT.addressLines[0]}
              <br />
              {CONTACT.addressLines[1]}
            </span>
          </address>
        </Reveal>

        <Reveal delay={120}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Request a demo</h3>
            <p className="muted">Please fill in your contact details below.</p>

            <div className="field-row">
              <label>
                Name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Company
                <input name="company" autoComplete="organization" />
              </label>
            </div>

            <div className="field-row">
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>

            <label>
              How can we help?
              <textarea name="message" rows="4" />
            </label>

            <button className="btn btn-primary" type="submit">
              Send request
            </button>

            {submitted && (
              <div className="form-success" role="status">
                Thanks for submitting! Your email app should open with your request ready to send.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
