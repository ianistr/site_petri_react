
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Cybersecurity() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-text">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(25, 115, 175, 0.1)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-teal)', marginBottom: '1.5rem' }}>
            DEFENSIVĂ ACTIVĂ
          </div>
          <h1>
            Securitate<br />
            <span style={{ fontFamily: "'Playfair Display', serif", color: 'var(--primary-teal)', fontStyle: 'italic' }}>Cibernetică</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            Într-o lume a amenințărilor digitale constante, nu ne mulțumim să reacționăm. Construim fortărețe digitale care anticipează riscul și protejează continuitatea afacerii tale.
          </p>
          <a href="#solutii" style={{ padding: '1rem 2.5rem', background: 'var(--primary-teal)', color: 'white', textDecoration: 'none', borderRadius: '12px', fontWeight: '600', display: 'inline-block', marginTop: '2rem' }}>
            Audit de Securitate
          </a>
        </div>

        <div style={{ background: '#0F2438', padding: '3rem', borderRadius: '30px', color: 'white', boxShadow: '0 30px 60px rgba(15, 36, 56, 0.2)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
          <h4 style={{ color: '#4FA3D1', marginBottom: '1.5rem' }}>Status Sistem: Protejat</h4>
          <div style={{ margin: '1.5rem 0', fontFamily: 'monospace', fontSize: '0.8rem', opacity: 0.7 }}>
            {'> Scanning for vulnerabilities...'}<br />
            {'> Encrypting data streams...'}<br />
            {'> Threat level: MINIMAL'}
          </div>
          <p style={{ fontSize: '0.9rem' }}>Monitorizăm infrastructura ta 24/7 pentru a opri atacurile înainte să devină incidente.</p>
        </div>
      </section>

      <section className="services-layout" id="solutii">
        <div className="asymmetric-grid">

          <div style={{ gridColumn: 'span 8', background: '#0F2438', color: 'white', padding: '3rem', borderRadius: '24px', border: 'none' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>SOC & Monitoring</h3>
            <p style={{ opacity: 0.8, fontSize: '1rem' }}>Centrul nostru de operațiuni de securitate monitorizează în timp real fiecare acces, fiecare fișier și fiecare alertă. Nu e doar software, e expertiză umană asistată de AI.</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem' }}>SIEM Deployment</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem' }}>Endpoint Detection (EDR)</span>
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', background: 'linear-gradient(135deg, #3b0d0d, #160707)', color: '#fff', padding: '3rem', borderRadius: '24px', border: '1px solid #6e1c1c' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Penetration Testing</h3>
            <p style={{ opacity: 0.8 }}>Găsim punctele slabe înaintea hackerilor. Testăm aplicațiile și rețeaua ta prin atacuri simulate controlate.</p>
          </div>

          <div style={{ gridColumn: 'span 4', background: 'var(--primary-teal)', color: 'white', padding: '3rem', borderRadius: '24px', border: 'none' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>GDPR & ISO</h3>
            <p style={{ opacity: 0.8 }}>Aliniem infrastructura ta la standardele internaționale de securitate a datelor și conformitate legală.</p>
          </div>

          <div style={{ gridColumn: 'span 8', background: '#0F2438', color: 'white', padding: '3rem', borderRadius: '24px', border: 'none', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Disaster Recovery</h3>
              <p style={{ opacity: 0.8 }}>Ce faci dacă totul se oprește? Avem planuri de continuitate care îți repun afacerea pe picioare în câteva minute, nu zile.</p>
            </div>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
              <p style={{ fontWeight: '700', marginBottom: '0.5rem' }}>RTO: {'<'} 15 MIN</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Timp de recuperare garantat.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
