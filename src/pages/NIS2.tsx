import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NIS2() {
  return (
    <>
      <Navigation />

      <header className="hero">
        <div className="hero-text">
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: '#E0F2FE', color: '#0369A1', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', marginBottom: '1rem' }}>
            DIRECTIVA (UE) 2022/2555
          </div>
          <h1>
            NIS2: Guvernanță<br />
            <span style={{ fontFamily: "'Playfair Display', serif", color: 'var(--primary-teal)', fontStyle: 'italic' }}>și Reziliență</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '650px' }}>
            Nu este doar o obligație legală, ci noul standard de securitate european. Ghidăm organizațiile în procesul complex de aliniere, transformând conformitatea într-un avantaj competitiv.
          </p>
          <a href="#audit" style={{ padding: '1rem 2.5rem', background: 'var(--primary-teal)', color: 'white', textDecoration: 'none', borderRadius: '12px', fontWeight: '600', display: 'inline-block', marginTop: '2rem' }}>
            Solicită Gap Analysis
          </a>
        </div>

        <div style={{ background: 'white', padding: '3rem', borderRadius: '30px', border: '1px solid var(--neutral-200)', boxShadow: '0 30px 60px rgba(0,0,0,0.03)', textAlign: 'center' }}>
          <div style={{ width: '120px', height: '120px', border: '8px solid var(--neutral-200)', borderTop: '8px solid var(--primary-teal)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem' }}>
            80%
          </div>
          <h4 style={{ marginBottom: '0.5rem' }}>Ready for Audit</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Majoritatea companiilor au nevoie de minim 6 luni pentru aliniere completă.</p>
          <div style={{ marginTop: '2rem', padding: '1rem', background: '#FFF7ED', border: '1px solid #FFEDD5', borderRadius: '12px', color: '#9A3412', fontSize: '0.85rem', fontWeight: '600' }}>
            ⚠️ Octombrie 2024: Deadline Implementare
          </div>
        </div>
      </header>

      <main className="services-layout" id="audit">
        <div className="asymmetric-grid">

          <div style={{ gridColumn: 'span 7', background: 'white', padding: '3rem', borderRadius: '24px', border: '1px solid var(--neutral-200)', borderLeft: '6px solid var(--primary-teal)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Gap Analysis & Roadmap</h3>
            <p style={{ opacity: 0.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>Evaluăm nivelul actual de maturitate digitală și identificăm punctele critice care trebuie remediate pentru a respecta cerințele NIS2.</p>
            <ul style={{ marginTop: '1.5rem', listStyle: 'none', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>→ Auditul lanțului de aprovizionare (Supply Chain)</li>
              <li style={{ marginBottom: '0.5rem' }}>→ Evaluarea politicilor de gestionare a incidentelor</li>
              <li>→ Analiza riscurilor de securitate cibernetică</li>
            </ul>
          </div>

          <div style={{ gridColumn: 'span 5', background: '#0F2438', color: 'white', padding: '3rem', borderRadius: '24px', border: 'none' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Documentație & Politici</h3>
            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>De la politici de control al accesului până la protocoale de raportare a incidentelor către autorități (DNSC).</p>
            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '0.8rem' }}>
              Inclus: Training Management (Art. 20 NIS2)
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', background: 'var(--neutral-200)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--neutral-200)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚖️</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Conformitate Continuă</h3>
            <p style={{ opacity: 0.8 }}>NIS2 nu este un proiect "one-time". Oferim audituri periodice pentru a menține certificarea.</p>
          </div>

          <div style={{ gridColumn: 'span 8', background: 'var(--primary-teal)', color: 'white', padding: '3rem', borderRadius: '24px', border: '1px solid var(--neutral-200)', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Raportare în 24h</h3>
              <p style={{ opacity: 0.8 }}>Implementăm sistemele tehnice necesare pentru a detecta și raporta incidentele semnificative în termenele legale stricte impuse de directivă.</p>
            </div>
            <div style={{ background: '#0F2438', padding: '2rem', borderRadius: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>RESPONSABILITATE</p>
              <p style={{ fontSize: '0.75rem' }}>Suport juridic și tehnic combinat.</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
