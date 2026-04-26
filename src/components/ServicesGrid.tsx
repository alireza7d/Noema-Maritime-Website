const services = [
  { n:'01', title:'Dry Bulk Freight', body:'Commercial freight solutions for dry bulk commodities across major global trade routes.' },
  { n:'02', title:'Port-to-Port Transport', body:'End-to-end cargo movement coordination from load port to discharge port.' },
  { n:'03', title:'Vessel Capacity', body:'Suitable vessel capacity coordinated based on cargo type, quantity, and route requirements.' },
  { n:'04', title:'Cargo Movement Planning', body:'Strategic planning for cargo volumes, laycan windows, and shipping logistics.' },
  { n:'05', title:'Freight Indications', body:'Market-based freight indications prepared for commercial review and negotiation.' },
  { n:'06', title:'Voyage Coordination', body:'Full voyage execution support from fixture to completion at discharge port.' },
  { n:'07', title:'Port Agent Coordination', body:'Coordination with port agents at load and discharge ports for smooth operations.' },
  { n:'08', title:'Commercial Shipping Support', body:'Ongoing commercial advisory for cargo owners, traders, and industrial shippers.' },
];
export default function ServicesGrid() {
  return (
    <section style={{ padding: '96px 0', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }}></span>Core Services
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.7rem,3vw,2.8rem)', fontWeight: 600, color: '#f0f4fa', marginBottom: '40px' }}>What We Provide</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {services.map(s=>(
            <div key={s.n} style={{ background: 'var(--navy2)', padding: '32px 28px', transition: 'background 0.2s', cursor: 'default' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '16px' }}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}