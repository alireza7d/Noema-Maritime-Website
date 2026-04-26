import Link from 'next/link';
export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep)', borderTop: '1px solid rgba(180,200,230,0.12)', padding: 'clamp(48px,6vw,72px) 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          <div>
            <img src="/logo-horizontal.png" alt="NOEMA GROUP" style={{ height: '48px', width: 'auto', marginBottom: '16px', display: 'block' }} />
            <p style={{ fontSize: '14px', color: 'var(--faint)', lineHeight: 1.8, maxWidth: '280px' }}>Maritime transport and freight solutions for dry bulk cargo. Port-to-port shipping coordination for cargo owners, traders, and commercial clients worldwide.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[['/', 'Home'],['/about','About'],['/services','Services'],['/contact','Contact']].map(([href,label]) => (
                <Link key={href} href={href} style={{ color: '#8fa8c8', fontSize: '15px', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[['/dry-bulk','Dry Bulk Transport'],['/vessel-capacity','Vessel Capacity'],['/market-intelligence','Market Intelligence'],['/inquiry','Cargo Inquiry']].map(([href,label]) => (
                <Link key={href} href={href} style={{ color: '#8fa8c8', fontSize: '15px', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:info@noemagroup.net" style={{ color: '#8fa8c8', fontSize: '15px', textDecoration: 'none' }}>info@noemagroup.net</a>
              <span style={{ color: '#8fa8c8', fontSize: '15px' }}>United States</span>
              <span style={{ color: 'var(--faint)', fontSize: '14px' }}>International Maritime Network</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(180,200,230,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--faint)' }}>© 2025 NOEMA GROUP — Maritime Freight Solutions</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--faint)' }}>Dry Bulk | Vessel Capacity | Port-to-Port</p>
        </div>
      </div>
    </footer>
  );
}