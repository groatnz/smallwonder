import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  };

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <h1 className="wordmark">Small Wonder</h1>
        </a>
        
        <nav className="nav" aria-label="Main navigation">
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          
          <ul className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#classes" onClick={(e) => { e.preventDefault(); scrollToSection('classes'); }}>Classes</a></li>
            <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Benefits</a></li>
            <li><a href="#faqs" onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQs</a></li>
            <li>
              <a 
                href="#contact" 
                className="nav-contact-button"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

