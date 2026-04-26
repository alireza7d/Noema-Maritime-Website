const cargoes = ['Gypsum','Limestone','Cement Clinker','Aggregates','Fertilizer','Coal','Grain','Steel Products','General Dry Bulk'];
export default function WhatWeMove() {
  return (
    <section style={{ padding: '96px 0', background: 'var(--deep)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }}></span>Commodity Coverage
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.7rem,3vw,2.8rem)', fontWeight: 600, color: '#f0f4fa', marginBottom: '12px' }}>What We Move</h2>
        <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, maxWidth: '640px', marginBottom: '40px' }}>NOEMA GROUP transports dry bulk commodities across global trade routes, covering a broad range of cargo types suited to handysize through panamax vessel classes.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {cargoes.map(c=>(
            <div key={c} style={{ background: 'var(--ocean)', padding: '28px 18px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--silver)' }}>{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}