const services = [
  { n:'01', title:'Dry Bulk Freight', body:'Commercial freight solutions for dry bulk commodities across all major global trade routes. Tailored to each cargo, route, and commercial requirement.' },
  { n:'02', title:'Port-to-Port Transport', body:'End-to-end cargo movement coordination from load port to discharge port, including port condition review and draft assessment.' },
  { n:'03', title:'Vessel Capacity', body:'Suitable vessel capacity coordinated based on cargo type, quantity, port restrictions, and route requirements across all vessel classes.' },
  { n:'04', title:'Cargo Movement Planning', body:'Strategic planning for cargo volumes, laycan windows, multi-shipment sequencing, and seasonal trade flow scheduling.' },
  { n:'05', title:'Freight Indications', body:'Market-based freight indications prepared for commercial review and negotiation, referenced against current market conditions.' },
  { n:'06', title:'Voyage Coordination', body:'Full voyage execution support from fixture to completion at discharge port, including monitoring and issue resolution.' },
  { n:'07', title:'Port Agent Coordination', body:'Coordination with port agents at load and discharge ports for smooth vessel arrival, berthing, and cargo operations.' },
  { n:'08', title:'Commercial Shipping Support', body:'Ongoing commercial advisory for cargo owners, traders, and industrial shippers requiring regular maritime freight support.' },
];

export default function ServicesGrid() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) 0', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>Core Services
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '12px', lineHeight: 1.15 }}>What We Provide</h2>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(15px,1.8vw,17px)', maxWidth: '640px', lineHeight: 1.8, marginBottom: '40px' }}>
          From cargo inquiry to voyage completion — the full commercial structure to move dry bulk cargo by sea.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {services.map(s => (
            <div key={s.n} style={{ background: 'var(--navy2)', padding: '32px 28px', borderTop: '2px solid transparent' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '16px' }}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '12px', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}