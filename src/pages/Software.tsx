import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Software() {
  return (
    <>
      <Navigation />

      <header className="page-hero">
        <div className="hero-text">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--neutral-200)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-teal)', marginBottom: '1rem' }}>
            SECURITY BY DESIGN
          </div>
          <h1>
            Cod Sursă.<br />
            <span style={{ fontFamily: "'Playfair Display', serif", color: 'var(--primary-teal)', fontStyle: 'italic' }}>Securitate Nativă.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            Nu construim doar aplicații, ci active digitale reziliente. Integrăm securitatea în fiecare linie de cod, de la prima idee până la lansarea în producție.
          </p>
          <a href="#proces" style={{ padding: '1rem 2.5rem', background: 'var(--primary-teal)', color: 'white', textDecoration: 'none', borderRadius: '12px', fontWeight: '600', display: 'inline-block', marginTop: '2rem' }}>
            Începe un Proiect
          </a>
        </div>

        <div style={{ background: '#1E293B', padding: '2.5rem', borderRadius: '30px', color: '#94A3B8', fontFamily: "'Monaco', 'Consolas', monospace", boxShadow: '0 30px 60px rgba(0,0,0,0.15)', fontSize: '0.85rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></div>
          </div>
          <div style={{ color: '#818CF8' }}>class</div> <span style={{ color: '#FACC15' }}>SecureApplication</span> {'{'}<br />
          &nbsp;&nbsp;<span style={{ color: '#818CF8' }}>constructor</span>() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.<span style={{ color: '#34D399' }}>security</span> = <span style={{ color: '#818CF8' }}>new</span> <span style={{ color: '#FACC15' }}>NMS_Shield</span>();<br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.<span style={{ color: '#34D399' }}>encryption</span> = <span style={{ color: '#6366F1' }}>true</span>;<br />
          &nbsp;&nbsp;{'}'}<br /><br />
          &nbsp;&nbsp;<span style={{ color: '#818CF8' }}>deploy</span>() {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#818CF8' }}>return</span> this.<span style={{ color: '#34D399' }}>security</span>.audit();<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </div>
      </header>

      <main className="services-layout" id="proces">
        <div className="asymmetric-grid">

          <div style={{ gridColumn: 'span 8', background: '#0F2438', color: 'white', padding: '3rem', borderRadius: '24px', border: 'none' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Dezvoltare Web & Mobile</h3>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>Construim soluții software scalabile, utilizând cele mai moderne framework-uri (React, Node.js, Python), cu un accent obsesiv pe performanță și UX.</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', opacity: 0.7 }}>
              <span>#EnterpriseReady</span> <span>#CloudNative</span> <span>#CleanCode</span>
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', background: 'white', padding: '3rem', borderRadius: '24px', border: '1px solid var(--neutral-200)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>DevSecOps Pipeline</h3>
            <p style={{ opacity: 0.8 }}>Automatizăm securitatea. Integrăm teste automate de vulnerabilități direct în fluxul de dezvoltare (CI/CD).</p>
          </div>

          <div style={{ gridColumn: 'span 4', background: 'var(--primary-teal)', color: 'white', padding: '3rem', borderRadius: '24px', border: 'none' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Audit Cod & Refactoring</h3>
            <p style={{ opacity: 0.8 }}>Ai deja o aplicație? O audităm pentru a identifica breșe de securitate și o optimizăm pentru standardele actuale.</p>
          </div>

          <div style={{ gridColumn: 'span 8', background: 'white', padding: '3rem', borderRadius: '24px', border: '1px solid var(--neutral-200)', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Arhitecturi Microservicii</h3>
              <p style={{ opacity: 0.8 }}>Proiectăm sisteme complexe și interconectate prin API-uri securizate, capabile să susțină mii de utilizatori simultan.</p>
            </div>
            <div style={{ background: 'var(--neutral-100)', padding: '2.5rem', borderRadius: '20px' }}>
              <p style={{ fontWeight: '700', color: 'var(--primary-teal)', marginBottom: '0.5rem' }}>Tech Stack Modern</p>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.4 }}>AWS / Azure / Docker / Kubernetes</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
