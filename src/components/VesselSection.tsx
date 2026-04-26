const vessels = [
  { name:'Handymax', desc:'Versatile mid-size vessels suited to a broad range of ports and commodity types.' },
  { name:'Supramax', desc:'Standard workhorses of dry bulk trade, commonly geared for flexible port access.' },
  { name:'Ultramax', desc:'Modern, fuel-efficient vessels offering higher capacity with port flexibility.' },
  { name:'Panamax', desc:'High-volume bulk carriers suited to deep-draft major ports and large cargo consignments.' },
];
export default function VesselSection() {
  return (
    <section style={{ padding: '96px 0', background: 'var(--navy)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }}></span>Vessel Capacity
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.7rem,3vw,2.8rem)', fontWeight: 600, color: '#f0f4fa', marginBottom: '12px' }}>Vessel Coverage</h2>
        <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, maxWidth: '640px', marginBottom: '40px' }}>NOEMA GROUP coordinates suitable vessel capacity based on cargo type, quantity, port restrictions, laycan, and route requirements.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {vessels.map(v=>(
            <div key={v.name} style={{ background: 'var(--navy3)', padding: '28px 22px', borderBottom: '3px solid transparent', transition: 'border-color 0.2s' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '8px' }}>{v.name}</div>
              <div style={{ fontSize: '13px', color: 'var(--faint)', lineHeight: 1.6 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}