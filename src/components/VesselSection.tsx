const vessels = [
  { name:'Handymax', dwt:'40,000–60,000 DWT', desc:'Versatile mid-size vessels with wide port access. Often geared. Suited to ports with moderate draft restrictions and a range of commodity types.' },
  { name:'Supramax', dwt:'50,000–60,000 DWT', desc:'The most widely traded size in the dry bulk market. Commonly equipped with onboard cranes for flexible port access.' },
  { name:'Ultramax', dwt:'60,000–65,000 DWT', desc:'Modern, fuel-efficient vessels offering higher capacity with port flexibility. Usually geared with five cargo holds.' },
  { name:'Panamax', dwt:'65,000–85,000 DWT', desc:'High-volume bulk carriers suited to deep-draft major ports and large cargo consignments. Generally gearless.' },
];

export default function VesselSection() {
  return (
    <section style={{ background: 'var(--navy)' }}>
      {/* Container terminal with cranes photo */}
      <div style={{ position: 'relative', height: 'clamp(220px,35vw,420px)', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1577985043696-8bd54d9f6c5a?w=1600&q=80"
          alt="Container terminal with cranes"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 20%, var(--navy) 100%)' }}></div>
        <div style={{ position: 'absolute', bottom: '32px', left: '1.5rem', maxWidth: '1200px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Vessel Capacity
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#f0f4fa', lineHeight: 1.15 }}>Vessel Coverage</h2>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem clamp(64px,8vw,112px)' }}>
        <p style={{ color: '#b0c8e0', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.85, maxWidth: '640px', margin: '32px 0 40px' }}>
          NOEMA GROUP coordinates suitable vessel capacity based on cargo type, quantity, port restrictions, laycan, and route requirements. Each shipment is matched to the right vessel class.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'rgba(180,200,230,0.1)' }}>
          {vessels.map(v => (
            <div key={v.name} style={{ background: 'var(--navy3)', padding: '32px 24px', borderTop: '3px solid var(--gold)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: '#f0f4fa', marginBottom: '4px' }}>{v.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '14px' }}>{v.dwt}</div>
              <div style={{ fontSize: '15px', color: '#8fa8c8', lineHeight: 1.75 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}