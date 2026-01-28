import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function M365() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-text">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--neutral-200)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', color: '#0078D4', marginBottom: '1rem' }}>
            PARTENER CLOUD
          </div>
          <h1>
            Productivitate<br />
            <span style={{ fontFamily: "'Playfair Display', serif", color: 'var(--primary-teal)', fontStyle: 'italic' }}>Fără Limite</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            Nu ne limităm la vânzarea de licențe. Construim mediul digital în care echipa ta poate performa, colabora și inova în deplină siguranță.
          </p>
          <a href="#detalii" style={{ padding: '1rem 2.5rem', background: 'var(--primary-teal)', color: 'white', textDecoration: 'none', borderRadius: '12px', fontWeight: '600', display: 'inline-block', marginTop: '2rem' }}>
            Vezi Planurile de Migrare
          </a>
        </div>

        <div style={{ background: '#0F2438',color:"white", padding: '2.5rem', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', border: '1px solid var(--neutral-200)', position: 'relative' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
          <h4 style={{ marginBottom: '0.5rem' }}>Cloud Status</h4>
          <div style={{ width: '100%', height: '8px', background: 'var(--neutral-200)', borderRadius: '10px', marginBottom: '1rem' }}>
            <div style={{ width: '85%', height: '100%', background: '#0078D4', borderRadius: '10px' }}></div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'white' }}>85% din companiile moderne au migrat deja fluxurile critice în Microsoft 365.</p>
        </div>
      </section>

      <section className="services-layout" id="detalii">
        <div className="asymmetric-grid">

          <div style={{ gridColumn: 'span 7', background: '#0F2438', color: 'white', padding: '3rem', borderRadius: '24px', border: 'none' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Migrare & Arhitectură</h3>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>Echipa noastră preia întreaga responsabilitate a transferului de date. De la serverele tale locale către infrastructura globală Microsoft, fără întreruperi de activitate.</p>
            <ul style={{ listStyle: 'none', opacity: 0.9, fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ Migrare Exchange & SharePoint</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Configurare identități hibride</li>
              <li>✓ Optimizare OneDrive for Business</li>
            </ul>
          </div>

          <div style={{ gridColumn: 'span 5', background: 'var(--neutral-200)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--neutral-200)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Securitate M365</h3>
            <p style={{ opacity: 0.8 }}>Configurăm politici de acces condiționat și protecție împotriva scurgerilor de date (DLP).</p>
          </div>

          <div style={{ gridColumn: 'span 4', background: 'var(--neutral-200)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--neutral-200)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>E5 Compliance</h3>
            <p style={{ opacity: 0.8 }}>Audităm licențele tale pentru a ne asigura că ești protejat legal și financiar.</p>
          </div>

          <div style={{ gridColumn: 'span 8', background: '#0F2438',color:"white", padding: '3rem', borderRadius: '24px', border: '1px solid var(--neutral-200)', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Teams & Colaborare</h3>
              <p style={{ opacity: 0.8 }}>Transformăm Teams dintr-o aplicație de chat într-un hub complet de lucru, cu integrare SharePoint și aplicații custom.</p>
            </div>
            <div style={{ background: 'var(--neutral-200)', padding: '2rem', borderRadius: '20px' }}>
              <p style={{ fontWeight: '700', color: 'var(--primary-teal)', marginBottom: '0.5rem' }}>Suport Dedicat 24/7</p>
              <span style={{ fontSize: '0.8rem' , color: 'var(--primary-teal)'}}>Inclus în pachetele de administrare.</span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
