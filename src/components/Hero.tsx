import Link from 'next/link';

export default function Hero() {
  return (
    <div style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--deep)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(165deg,#071029 0%,#0d1a35 40%,#071e3d 70%,#0a1428 100%)' }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(180,210,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(180,210,255,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div className="animate-fade-up delay-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '32px', height: '1px', background: 'var(--gold)' }}></span>
          NOEMAGROUP — Maritime Freight Solutions
        </div>
        <h1 className="animate-fade-up delay-2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem,5vw,4.2rem)', fontWeight: 600, lineHeight: 1.12, color: '#f0f4fa', maxWidth: '820px', marginBottom: '28px', letterSpacing: '-0.02em' }}>
          Maritime Freight Solutions<br />for <span style={{ color: 'var(--gold)' }}>Dry Bulk Cargo</span>
        </h1>
        <p className="animate-fade-up delay-3" style={{ fontSize: '17px', fontWeight: 300, color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.75, marginBottom: '44px' }}>
          NOEMA GROUP coordinates vessel capacity, cargo movement, and port-to-port shipping solutions for cargo owners, traders, and commercial clients.
        </p>
        <div className="animate-fade-up delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '60px' }}>
          <Link href="/inquiry" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>Submit Cargo Inquiry</Link>
          <Link href="/services" style={{ background: 'transparent', color: '#dce6f0', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 27px', border: '1px solid var(--border2)', textDecoration: 'none' }}>Request Freight Solution</Link>
          <Link href="/contact" style={{ background: 'transparent', color: '#dce6f0', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 27px', border: '1px solid var(--border2)', textDecoration: 'none' }}>Contact Commercial Desk</Link>
        </div>
        <div className="animate-fade-up delay-5" style={{ display: 'flex', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '0' }}>
          {['Dry Bulk Transport','Port-to-Port Freight','Vessel Capacity','Voyage Coordination','Commercial Shipping'].map(t=>(
            <div key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', padding: '18px 22px 18px 0', marginRight: '22px', borderRight: '1px solid var(--border)' }}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}