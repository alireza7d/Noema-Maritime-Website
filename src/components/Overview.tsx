export default function Overview() {
  const steps = [
    { n:'01', title:'Cargo inquiry received', body:'Your requirements are reviewed against current market conditions and vessel availability.' },
    { n:'02', title:'Route and port requirements reviewed', body:'Load and discharge ports evaluated for draft, gear, and laycan compatibility.' },
    { n:'03', title:'Suitable vessel capacity coordinated', body:'Vessel options aligned to cargo volume, route, and timing requirements.' },
    { n:'04', title:'Freight indication prepared', body:'Commercial freight terms presented for review and discussion.' },
    { n:'05', title:'Shipment arranged & voyage supported', body:'Commercial terms agreed, shipment fixed, voyage execution supported end to end.' },
  ];
  return (
    <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--navy)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px,6vw,80px)', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Business Overview
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 600, color: '#f0f4fa', marginBottom: '20px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Practical Freight Solutions by Sea</h2>
            <div style={{ width: '48px', height: '2px', background: 'var(--gold)', marginBottom: '24px' }}></div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.8 }}>NOEMA GROUP helps customers move cargo by sea through practical maritime freight solutions. From cargo inquiry to voyage coordination, we support the commercial process required to transport goods safely and efficiently between ports.</p>
            <div style={{ marginTop: '36px', display: 'flex', gap: 'clamp(24px,4vw,48px)', flexWrap: 'wrap' }}>
              {[['8','Commodity Types'],['4+','Vessel Classes'],['Global','Port Coverage']].map(([n,l])=>(
                <div key={l}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(20px,4vw,28px)', fontWeight: 700, color: 'var(--gold)' }}>{n}</div><div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)' }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div>
            {steps.map(s=>(
              <div key={s.n} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--gold)', minWidth: '28px', paddingTop: '3px', flexShrink: 0 }}>{s.n}</div>
                <div style={{ color: 'var(--muted)', fontSize: '14px' }}><strong style={{ color: '#dce6f0', display: 'block', marginBottom: '4px' }}>{s.title}</strong>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}