import Link from 'next/link';
export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', padding: 'clamp(40px,6vw,64px) 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '17px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>
              NOEMA<span style={{ color: 'var(--gold)' }}>GROUP</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--faint)', lineHeight: 1.7, maxWidth: '280px' }}>Maritime transport and freight solutions for dry bulk cargo. Port-to-port shipping coordination for cargo owners, traders, and commercial clients.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['/', 'Home'],['/about','About'],['/services','Services'],['/contact','Contact']].map(([href,label])=>(
                <Link key={href} href={href} style={{ color: 'var(--faint)', fontSize: '13px', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['/dry-bulk','Dry Bulk Transport'],['/vessel-capacity','Vessel Capacity'],['/market-intelligence','Market Intelligence'],['/inquiry','Cargo Inquiry']].map(([href,label])=>(
                <Link key={href} href={href} style={{ color: 'var(--faint)', fontSize: '13px', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:info@noemagroup.net" style={{ color: 'var(--faint)', fontSize: '13px', textDecoration: 'none' }}>info@noemagroup.net</a>
              <span style={{ color: 'var(--faint)', fontSize: '13px' }}>United States</span>
              <span style={{ color: 'var(--faint)', fontSize: '13px' }}>International Maritime Network</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--faint)' }}>© 2025 NOEMA GROUP — Maritime Freight Solutions</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--faint)' }}>Dry Bulk | Vessel Capacity | Port-to-Port</p>
        </div>
      </div>
    </footer>
  );
}