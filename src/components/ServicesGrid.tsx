const services = [
  { n:'01', title:'Dry Bulk Freight', body:'Commercial freight solutions for dry bulk commodities across all major global trade routes.' },
  { n:'02', title:'Port-to-Port Transport', body:'End-to-end cargo movement coordination from load port to discharge port.' },
  { n:'03', title:'Vessel Capacity', body:'Suitable vessel capacity coordinated based on cargo type, quantity, and route requirements.' },
  { n:'04', title:'Cargo Movement Planning', body:'Strategic planning for cargo volumes, laycan windows, and multi-shipment sequencing.' },
  { n:'05', title:'Freight Indications', body:'Market-based freight indications prepared for commercial review and negotiation.' },
  { n:'06', title:'Voyage Coordination', body:'Full voyage execution support from fixture to completion at discharge port.' },
  { n:'07', title:'Port Agent Coordination', body:'Coordination with port agents at load and discharge ports for smooth operations.' },
  { n:'08', title:'Commercial Shipping Support', body:'Ongoing commercial advisory for cargo owners, traders, and industrial shippers.' },
];

export default function ServicesGrid() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) 0', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px', alignItems: 'center', marginBottom: '56px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Core Services
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#f0f4fa', lineHeight: 1.15, marginBottom: '16px' }}>What We Provide</h2>
            <p style={{ color: '#b0c8e0', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.8 }}>From cargo inquiry to voyage completion — the full commercial structure to move dry bulk cargo by sea.</p>
          </div>
          <div style={{ position: 'relative', height: '260px', overflow: 'hidden', borderRadius: '2px' }}>
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Maritime port operations" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--navy2), transparent 50%)' }}></div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'rgba(180,200,230,0.1)' }}>
          {services.map(s => (
            <div key={s.n} style={{ background: 'var(--navy2)', padding: '32px 28px', borderLeft: '3px solid var(--gold)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '14px' }}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '12px', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ color: '#8fa8c8', fontSize: '15px', lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}