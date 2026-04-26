const vessels = [
  { name:'Handymax', dwt:'40,000–60,000 DWT', desc:'Versatile mid-size vessels with wide port access. Often geared. Suited to ports with moderate draft restrictions and a range of commodity types.' },
  { name:'Supramax', dwt:'50,000–60,000 DWT', desc:'The most widely traded size in the dry bulk market. Commonly equipped with onboard cranes for flexible port access.' },
  { name:'Ultramax', dwt:'60,000–65,000 DWT', desc:'Modern, fuel-efficient vessels offering higher capacity with port flexibility. Usually geared with five cargo holds.' },
  { name:'Panamax', dwt:'65,000–85,000 DWT', desc:'High-volume bulk carriers suited to deep-draft major ports and large cargo consignments. Generally gearless.' },
];

export default function VesselSection() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) 0', background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06 }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Vessel Capacity
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '20px', lineHeight: 1.15 }}>Vessel Coverage</h2>
            <p style={{ color: 'var(--muted)', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.85 }}>
              NOEMA GROUP coordinates suitable vessel capacity based on cargo type, quantity, port restrictions, laycan, and route requirements. Each shipment is matched to the right vessel class.
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden', height: '280px' }}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Bulk carrier vessel at sea"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, var(--navy), transparent 60%)' }}></div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {vessels.map(v => (
            <div key={v.name} style={{ background: 'var(--navy3)', padding: '28px 24px', borderBottom: '3px solid var(--gold)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: '#f0f4fa', marginBottom: '4px' }}>{v.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '12px' }}>{v.dwt}</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}