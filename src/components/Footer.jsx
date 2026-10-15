import Logo from './Logo';
import { NAV_LINKS, CONTACT } from '../data/content';

const FOOTER_LINKS = [...NAV_LINKS, { label: 'Contact', href: '#contact' }];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo size={64} />
            <p className="footer-tagline">One stop shop for end-to-end SAP excellence.</p>
          </div>

          <div>
            <h5>Links</h5>
            {FOOTER_LINKS.map(({ label, href }) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>

          <div>
            <h5>Contact</h5>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>Tel: {CONTACT.phone}</a>
            <span>{CONTACT.addressLines.join(', ')}</span>
          </div>
        </div>

        <div className="footer-copy">© 2026 Vichai. All rights reserved.</div>
      </div>
    </footer>
  );
}
