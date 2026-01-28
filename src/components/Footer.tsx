import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>NMS IT Solutions</h3>
            <p>
              Partenerul tău de încredere pentru securitate digitală completă.
              Protejăm afaceri cu soluții inovatoare și suport dedicat.
            </p>
          </div>
          <div className="footer-column">
            <h4>Servicii</h4>
            <ul className="footer-links">
              <li><Link to="/cybersecurity">Cyber Security</Link></li>
              <li><Link to="/m365">Microsoft 365</Link></li>
              <li><Link to="/nis2">NIS2 Compliance</Link></li>
              <li><Link to="/software">Dezvoltare</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Companie</h4>
            <ul className="footer-links">
              <li><a href="#">Despre Noi</a></li>
              <li><a href="#">Echipa</a></li>
              <li><a href="#">Cariere</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:contact@nms-it.ro">contact@nms-it.ro</a></li>
              <li><a href="tel:+40770123456">+40 770 123 456</a></li>
              <li>București, România</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 NMS IT Solutions. Toate drepturile rezervate.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
