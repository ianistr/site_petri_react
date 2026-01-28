import { useEffect } from 'react';
import { Shield, FolderTree, BarChart3, Code2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navigation />

      <section className="hero" id="acasa">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            Certificat ISO 27001
          </div>
          <h1>
            Securitate<br />
            <span className="display">Fără Compromis</span>
          </h1>
          <p className="hero-subtitle">
            Protejăm afaceri prin soluții avansate de cyber security, administrare
            expertă Active Directory, audituri complete și dezvoltare software sigură.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Solicită Consultație
              <span>→</span>
            </a>
            <a href="#servicii" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('servicii'); }}>
              Explorează Serviciile
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-main-card">
            <div className="visual-metric">
              <div className="metric-value">99.9%</div>
              <div className="metric-trend">↑ 15.2%</div>
            </div>
            <div className="visual-chart">
              <div className="chart-bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <div className="visual-badges">
              <div className="badge">
                <div className="badge-icon">
                  <Shield size={24} color="white" />
                </div>
                <div className="badge-text">Protecție 24/7</div>
              </div>
              <div className="badge">
                <div className="badge-icon">⚡</div>
                <div className="badge-text">Răspuns Rapid</div>
              </div>
              <div className="badge">
                <div className="badge-icon">✓</div>
                <div className="badge-text">Certificări</div>
              </div>
              <div className="badge">
                <div className="badge-icon">🔒</div>
                <div className="badge-text">Audit Complet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="servicii">
        <div className="section-container">
          <div className="section-intro reveal">
            <span className="section-label">Expertiza Noastră</span>
            <h2>Servicii Complete de Protecție</h2>
            <p>
              Oferim soluții integrate pentru a securiza și optimiza întreaga
              ta infrastructură digitală
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-header">
                <div className="service-icon">
                  <Shield size={32} color="white" />
                </div>
                <div className="service-title">
                  <h3>Securitate Cibernetică</h3>
                  <span className="subtitle">Protecție Avansată 24/7</span>
                </div>
              </div>
              <p className="service-description">
                Monitorizare continuă, detectare amenințări și răspuns rapid la
                incidente pentru protecția completă a afacerii tale.
              </p>
              <ul className="service-features">
                <li>Security Operations Center (SOC)</li>
                <li>Threat Intelligence & Detection</li>
                <li>Incident Response Management</li>
                <li>Penetration Testing & Red Teaming</li>
              </ul>
            </div>

            <div className="service-card reveal">
              <div className="service-header">
                <div className="service-icon">
                  <FolderTree size={32} color="white" />
                </div>
                <div className="service-title">
                  <h3>Active Directory</h3>
                  <span className="subtitle">Gestionare & Securizare</span>
                </div>
              </div>
              <p className="service-description">
                Configurare expertă, politici de securitate avansate și
                management complet al identităților corporative.
              </p>
              <ul className="service-features">
                <li>Implementare și Optimizare AD</li>
                <li>Azure AD Integration</li>
                <li>Group Policy Management</li>
                <li>Disaster Recovery Planning</li>
              </ul>
            </div>

            <div className="service-card reveal">
              <div className="service-header">
                <div className="service-icon">
                  <BarChart3 size={32} color="white" />
                </div>
                <div className="service-title">
                  <h3>Audit & Compliance</h3>
                  <span className="subtitle">Conformitate Totală</span>
                </div>
              </div>
              <p className="service-description">
                Evaluări detaliate pentru conformitate GDPR, ISO 27001
                și alte standarde internaționale.
              </p>
              <ul className="service-features">
                <li>Security Audits Complete</li>
                <li>GDPR Compliance</li>
                <li>ISO 27001 Consulting</li>
              </ul>
            </div>

            <div className="service-card reveal">
              <div className="service-header">
                <div className="service-icon">
                  <Code2 size={32} color="white" />
                </div>
                <div className="service-title">
                  <h3>Dezvoltare Software Sigură</h3>
                  <span className="subtitle">Secure by Design</span>
                </div>
              </div>
              <p className="service-description">
                Aplicații personalizate construite cu securitate încorporată
                din faza de design până la deployment.
              </p>
              <ul className="service-features">
                <li>Secure SDLC Implementation</li>
                <li>API Development & Security</li>
                <li>DevSecOps Integration</li>
                <li>Code Review & Static Analysis</li>
                <li>Security Testing Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item reveal">
              <div className="stat-number">750+</div>
              <div className="stat-label">Clienți Protejați</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Garantat</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Monitorizare Activă</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number">18+</div>
              <div className="stat-label">Ani Experiență</div>
            </div>
          </div>
        </div>
      </section>

      <section className="process" id="proces">
        <div className="section-container">
          <div className="section-intro reveal">
            <span className="section-label">Metodologia Noastră</span>
            <h2>Proces Structurat și Eficient</h2>
            <p>Abordare transparentă pentru rezultate măsurabile</p>
          </div>

          <div className="process-flow">
            <div className="process-step reveal">
              <div className="step-number">1</div>
              <h4>Analiză Inițială</h4>
              <p>Evaluăm infrastructura și identificăm vulnerabilitățile</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">2</div>
              <h4>Strategie</h4>
              <p>Dezvoltăm soluții personalizate pentru nevoile tale</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">3</div>
              <h4>Implementare</h4>
              <p>Aplicăm măsurile cu minim impact operațional</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">4</div>
              <h4>Optimizare</h4>
              <p>Monitorizare continuă și îmbunătățire proactivă</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-box reveal">
          <h2>Protejează-ți Afacerea Astăzi</h2>
          <p>
            Contactează-ne pentru o evaluare gratuită a securității tale digitale
            și descoperă cum te putem ajuta să rămâi în siguranță.
          </p>
          <a href="mailto:contact@nms-it.ro" className="btn">
            Programează o Consultație
            <span>✉</span>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
