const cargoes = ['Gypsum','Limestone','Cement Clinker','Aggregates','Fertilizer','Coal','Grain','Steel Products','General Dry Bulk'];
export default function WhatWeMove() {
  return (
    <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--deep)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Commodity Coverage
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 600, color: '#f0f4fa', marginBottom: '12px' }}>What We Move</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.8, maxWidth: '640px', marginBottom: '32px' }}>NOEMA GROUP transports dry bulk commodities across global trade routes, covering a broad range of cargo types suited to handysize through panamax vessel classes.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {cargoes.map(c=>(
            <div key={c} style={{ background: 'var(--ocean)', padding: '20px 12px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--silver)', lineHeight: 1.5 }}>{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}