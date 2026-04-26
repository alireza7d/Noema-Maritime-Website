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
    <section style={{ padding: 'clamp(64px,8vw,112px) 0', background: 'var(--deep)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Commodity Coverage
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '20px', lineHeight: 1.15 }}>What We Move</h2>
            <p style={{ color: 'var(--muted)', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.85 }}>
              NOEMA GROUP transports dry bulk commodities across global trade routes, covering a broad range of cargo types suited to handysize through panamax vessel classes.
            </p>
          </div>
          {/* Port photo */}
          <div style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden', height: '260px' }}>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
              alt="Bulk cargo port operations"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--deep), transparent)' }}></div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {cargoes.map(c=>(
            <div key={c.name} style={{ background: 'var(--ocean)', padding: '24px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '6px' }}>{c.name}</div>
              <div style={{ fontSize: '11px', color: 'var(--faint)' }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}