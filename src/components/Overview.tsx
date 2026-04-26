export default function Overview() {
  const steps = [
    { n:'01', title:'Cargo inquiry received', body:'Your requirements are reviewed against current market conditions and vessel availability.' },
    { n:'02', title:'Route and port requirements reviewed', body:'Load and discharge ports evaluated for draft, gear, and laycan compatibility.' },
    { n:'03', title:'Suitable vessel capacity coordinated', body:'Vessel options aligned to cargo volume, route, and timing requirements.' },
    { n:'04', title:'Freight indication prepared', body:'Commercial freight terms presented for review and discussion.' },
    { n:'05', title:'Shipment arranged & voyage supported', body:'Commercial terms agreed, shipment fixed, voyage execution supported end to end.' },
  ];
  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) 0', background: 'var(--navy)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Business Overview
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '20px', lineHeight: 1.15 }}>Practical Freight Solutions by Sea</h2>
            <div style={{ width: '48px', height: '2px', background: 'var(--gold)', marginBottom: '24px' }}></div>
            <p style={{ color: '#b0c8e0', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.85, marginBottom: '32px' }}>
              NOEMA GROUP helps customers move cargo by sea through practical maritime freight solutions. From cargo inquiry to voyage coordination, we support the commercial process required to transport goods safely and efficiently between ports.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(24px,4vw,48px)', flexWrap: 'wrap' as const }}>
              {[['8','Commodity Types'],['4+','Vessel Classes'],['Global','Port Coverage']].map(([n,l])=>(
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--gold)' }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--faint)', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {steps.map(s=>(
              <div key={s.n} style={{ display: 'flex', gap: '20px', padding: '22px 0', borderBottom: '1px solid rgba(180,200,230,0.1)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--gold)', minWidth: '32px', paddingTop: '2px', flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ color: '#dce6f0', fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>{s.title}</div>
                  <div style={{ color: '#8fa8c8', fontSize: '15px', lineHeight: 1.7 }}>{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}