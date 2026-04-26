import Link from 'next/link';

export default function Hero() {
  return (
    <div style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--deep)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1568689380834-8e46e7c7dce6?w=1800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center 40%', opacity: 0.2 }}></div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(165deg,rgba(7,16,41,0.96) 0%,rgba(13,26,53,0.88) 50%,rgba(7,30,61,0.92) 100%)' }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(180,210,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(180,210,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '110px 1.5rem 60px', width: '100%' }}>
        <div className="animate-fade-up delay-1" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
            <span style={{ display: 'inline-block', width: '36px', height: '2px', background: 'var(--gold)', flexShrink: 0 }}></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '22px', fontWeight: 700, letterSpacing: '0.12em' }}>
              <span style={{ color: 'var(--gold)' }}>NOEMA</span>
              <span style={{ color: '#f0f4fa' }}>GROUP</span>
            </span>
          </div>
          <div style={{ paddingLeft: '50px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' as const }}>
              Maritime Freight Solutions
            </span>
          </div>
        </div>
        <h1 className="animate-fade-up delay-2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem,5.5vw,5rem)', fontWeight: 700, lineHeight: 1.08, color: '#f0f4fa', maxWidth: '820px', marginBottom: '28px', letterSpacing: '-0.02em' }}>
          Maritime Freight Solutions for{' '}
          <span style={{ color: 'var(--gold)' }}>Dry Bulk Cargo</span>
        </h1>
        <p className="animate-fade-up delay-3" style={{ fontSize: 'clamp(16px,2vw,19px)', fontWeight: 300, color: '#b0c8e0', maxWidth: '560px', lineHeight: 1.8, marginBottom: '44px' }}>
          NOEMA GROUP coordinates vessel capacity, cargo movement, and port-to-port shipping solutions for cargo owners, traders, and commercial clients worldwide.
        </p>
        <div className="animate-fade-up delay-4" style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px', marginBottom: '56px', maxWidth: '340px' }}>
          <Link href="/inquiry" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '16px 28px', textDecoration: 'none', textAlign: 'center' as const, display: 'block' }}>Submit Cargo Inquiry</Link>
          <Link href="/services" style={{ background: 'transparent', color: '#dce6f0', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '15px 28px', border: '1px solid rgba(180,200,230,0.3)', textDecoration: 'none', textAlign: 'center' as const, display: 'block' }}>Request Freight Solution</Link>
          <Link href="/contact" style={{ background: 'transparent', color: '#dce6f0', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '15px 28px', border: '1px solid rgba(180,200,230,0.3)', textDecoration: 'none', textAlign: 'center' as const, display: 'block' }}>Contact Commercial Desk</Link>
        </div>
        <div className="animate-fade-up delay-5" style={{ borderTop: '1px solid rgba(180,200,230,0.15)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const }}>
            {['Dry Bulk Transport','Port-to-Port Freight','Vessel Capacity','Voyage Coordination'].map(t => (
              <div key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--faint)', padding: '18px 20px 18px 0', marginRight: '20px', borderRight: '1px solid rgba(180,200,230,0.12)' }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}