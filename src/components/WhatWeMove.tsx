const cargoes = [
  { name: 'Gypsum', desc: 'Construction mineral' },
  { name: 'Limestone', desc: 'Industrial mineral' },
  { name: 'Cement Clinker', desc: 'Building material' },
  { name: 'Aggregates', desc: 'Construction material' },
  { name: 'Fertilizer', desc: 'Agricultural commodity' },
  { name: 'Coal', desc: 'Energy commodity' },
  { name: 'Grain', desc: 'Food commodity' },
  { name: 'Steel Products', desc: 'Industrial metal' },
  { name: 'General Dry Bulk', desc: 'Various commodities' },
];

export default function WhatWeMove() {
  return (
    <section style={{ background: 'var(--deep)' }}>
      {/* Photo banner */}
      <div style={{ position: 'relative', height: 'clamp(200px,30vw,380px)', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80" alt="Port bulk cargo operations" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, var(--deep) 100%)' }}></div>
        <div style={{ position: 'absolute', bottom: '32px', left: '1.5rem', right: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Commodity Coverage
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#f0f4fa', lineHeight: 1.15 }}>What We Move</h2>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem clamp(64px,8vw,112px)' }}>
        <p style={{ color: '#b0c8e0', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.85, maxWidth: '640px', margin: '32px 0 40px' }}>
          NOEMA GROUP transports dry bulk commodities across global trade routes, covering a broad range of cargo types suited to handysize through panamax vessel classes.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1px', background: 'rgba(180,200,230,0.1)' }}>
          {cargoes.map(c => (
            <div key={c.name} style={{ background: 'var(--ocean)', padding: '24px 16px', textAlign: 'center' as const }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#dce6f0', marginBottom: '6px' }}>{c.name}</div>
              <div style={{ fontSize: '11px', color: 'var(--faint)' }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}