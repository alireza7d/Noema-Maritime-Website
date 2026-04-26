import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>
              NOEMA<span style={{ color: 'var(--gold)' }}>GROUP</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--faint)', lineHeight: 1.7, maxWidth: '300px' }}>Maritime transport and freight solutions for dry bulk cargo. Port-to-port shipping coordination for cargo owners, traders, and commercial clients.</p>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Dry Bulk Transport','Vessel Capacity','Port-to-Port Shipping'].map(t=>(
                <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', border: '1px solid var(--border)', padding: '4px 8px' }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[['/', 'Home'],['/about','About'],['/services','Services'],['/contact','Contact']].map(([href,label])=>(
                <Link key={href} href={href} style={{ color: 'var(--faint)', fontSize: '13px', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[['/dry-bulk','Dry Bulk Transport'],['/vessel-capacity','Vessel Capacity'],['/market-intelligence','Market Intelligence'],['/inquiry','Cargo Inquiry']].map(([href,label])=>(
                <Link key={href} href={href} style={{ color: 'var(--faint)', fontSize: '13px', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--faint)' }}>© 2025 NOEMA GROUP — Maritime Freight Solutions</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--faint)' }}>Voyage Coordination | Commercial Shipping | Dry Bulk</p>
        </div>
      </div>
    </footer>
  );
}