import Link from 'next/link';
export default function CtaBand() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--ocean)', borderTop: '1px solid rgba(180,200,230,0.12)', borderBottom: '1px solid rgba(180,200,230,0.12)', padding: 'clamp(64px,8vw,96px) 0' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1 }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Commercial Desk
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '18px', maxWidth: '660px', lineHeight: 1.2 }}>Ready to Move Your Cargo?</h2>
        <p style={{ color: '#b0c8e0', maxWidth: '560px', marginBottom: '36px', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.8 }}>
          Send your cargo details and our commercial desk will review the route, quantity, laycan, and vessel capacity requirements. We respond within one business day.
        </p>
        <Link href="/inquiry" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '16px 32px', textDecoration: 'none', display: 'inline-block' }}>Submit Cargo Inquiry</Link>
      </div>
    </div>
  );
}