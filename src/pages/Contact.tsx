import React, { useState, FormEvent } from 'react';
import Navigation from '../components/Navigation';

// Define the submission status type
type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate a secure handshake/API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <div>
      <Navigation/>
    <section className="services-layout" style={{ paddingBottom: 'var(--spacing-xl)',marginTop: '15vh' }}>
      
      <div className="asymmetric-grid">
        
        {/* Sidebar Info - "The Command Center" */}
        <div style={sidebarStyles}>
          <div>
            <div style={badgeStyles}>
              CONNECTION: SECURE_AES_256
            </div>
            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              Să securizăm <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'var(--accent-orange)' }}>viitorul</span> tău.
            </h2>
            <p style={{ opacity: 0.8, fontSize: '1rem', marginBottom: '2rem' }}>
              Transmite-ne detaliile proiectului tău. Datele tale sunt criptate și tratate cu maximă confidențialitate.
            </p>
          </div>

          <div style={trustBoxStyles}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={pulseDotStyles}></div>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', letterSpacing: '1px' }}>STATUS: READY FOR UPLOAD</span>
            </div>
            <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>Expertiza noastră începe cu prima conversație.</p>
          </div>
        </div>

        {/* The Form - "The Firewall" */}
        <div style={formContainerStyles}>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="field-wrapper">
                <label style={labelStyle}>Identitate (Nume)</label>
                <input type="text" placeholder="Ex: John Doe" style={inputStyle} required />
              </div>
              <div className="field-wrapper">
                <label style={labelStyle}>Email Business</label>
                <input type="email" placeholder="contact@firma.ro" style={inputStyle} required />
              </div>
            </div>

            <div className="field-wrapper">
              <label style={labelStyle}>Protocol (Serviciu)</label>
              <select style={inputStyle}>
                <option>Audit de Securitate</option>
                <option>Penetration Testing</option>
                <option>Implementare SOC</option>
                <option>Incident Response</option>
              </select>
            </div>

            <div className="field-wrapper">
              <label style={labelStyle}>Parametrii Proiectului</label>
              <textarea 
                placeholder="Detaliați cerințele dumneavoastră aici..." 
                style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              style={{
                ...buttonStyle,
                background: status === 'success' ? '#10B981' : 'var(--primary-teal)',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer'
              }}
            >
              {status === 'idle' && 'Inițiază Transmisia'}
              {status === 'sending' && 'Criptare date...'}
              {status === 'success' && 'Transmisie Reușită ✓'}
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

/* --- TypeScript Styles Interfaces --- */

const sidebarStyles: React.CSSProperties = {
  gridColumn: 'span 5',
  background: 'var(--neutral-900)',
  color: 'white',
  padding: 'var(--spacing-lg)',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const badgeStyles: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.4rem 1rem',
  background: 'rgba(79, 163, 209, 0.15)',
  borderRadius: '50px',
  fontSize: '0.7rem',
  fontWeight: '800',
  color: 'var(--accent-orange)',
  marginBottom: '1.5rem',
  border: '1px solid rgba(79, 163, 209, 0.3)',
  letterSpacing: '1px'
};

const trustBoxStyles: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  padding: '1.5rem',
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.08)'
};

const pulseDotStyles: React.CSSProperties = {
  width: '8px',
  height: '8px',
  background: '#10B981',
  borderRadius: '50%',
  boxShadow: '0 0 8px #10B981'
};

const formContainerStyles: React.CSSProperties = {
  gridColumn: 'span 7',
  background: 'var(--white)',
  padding: 'var(--spacing-lg)',
  borderRadius: '24px',
  boxShadow: '0 20px 40px rgba(15, 36, 56, 0.05)',
  border: '1px solid var(--neutral-200)'
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: '700',
  marginBottom: '0.5rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '1rem',
  borderRadius: '12px',
  border: '2px solid var(--neutral-200)',
  fontFamily: "'Sora', sans-serif",
  fontSize: '0.9rem',
  outline: 'none',
  background: 'var(--neutral-100)',
  transition: 'all 0.3s ease'
};

const buttonStyle: React.CSSProperties = {
  color: 'white',
  padding: '1.25rem',
  borderRadius: '12px',
  border: 'none',
  fontWeight: '700',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  marginTop: '1rem'
};

export default ContactForm;

