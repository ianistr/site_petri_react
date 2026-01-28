import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-wrapper">
        <div className="brand">
          <Link to="/" className="brand-logo">
  <img src="/logo_nms.png" alt="NMS IT" className="h-16 w-auto" />
</Link>
        </div>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          id="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          <li><Link to="/cybersecurity" onClick={closeMenu}>Securitate</Link></li>
          <li><Link to="/m365" onClick={closeMenu}>MS365</Link></li>
          <li><Link to="/nis2" onClick={closeMenu}>NIS2</Link></li>
          <li><Link to="/software" onClick={closeMenu}>Software</Link></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
