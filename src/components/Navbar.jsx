import { useState } from 'react';
import Logo from './Logo';
import useScrolled from '../hooks/useScrolled';
import { NAV_LINKS } from '../data/content';

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Logo />

        <div className="navbar-actions">
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="btn btn-primary" href="#contact" onClick={closeMenu}>
              Request a demo
            </a>
          </div>

          <button
            type="button"
            className="icon-button menu-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
