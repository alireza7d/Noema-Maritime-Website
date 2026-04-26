import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const metrics = [
  { label: 'Baltic Supramax Index', val: '1,842', trend: '↑ +2.4% (7d)', color: '#4ade80', note: 'Indicative BSI reference' },
  { label: 'Supramax Spot Rate', val: '$9,200', trend: '→ Stable (7d)', color: 'var(--silver)', note: 'Per day, global average' },
  { label: 'VLSFO Bunker Price', val: '$540', trend: '↓ -1.8% (7d)', color: '#f87171', note: 'USD/MT, Singapore ref.' },
  { label: 'Port Congestion Index', val: 'Moderate', trend: '→ Unchanged', color: 'var(--silver)', note: 'Global dry bulk ports' },
  { label: 'Vessel Availability', val: 'Adequate', trend: '↑ Improving', color: '#4ade80', note: 'Supramax / Ultramax' },
  { label: 'Cargo Demand Signal', val: 'Active', trend: '↑ Firm', color: '#4ade80', note: 'Minor bulk inquiries' },
];

const routes = [
  { route: 'Middle East → South Asia', cargo: 'Gypsum, Clinker', activity: 'Active', actColor: '#4ade80', vessel: 'Supramax / Ultramax' },
  { route: 'West Africa → Europe', cargo: 'Aggregates, Limestone', activity: 'Moderate', actColor: 'var(--silver)', vessel: 'Handymax / Supramax' },
  { route: 'Black Sea → MENA', cargo: 'Grain, Fertilizer', activity: 'Active', actColor: '#4ade80', vessel: 'Panamax / Ultramax' },
  { route: 'Asia → East Africa', cargo: 'Clinker, Coal', activity: 'Stable', actColor: 'var(--silver)', vessel: 'Supramax' },
];

export default function MarketIntelligence() {
  return (
    <main>
      <Nav />
      <PageHeader breadcrumb="Market Intelligence" title="Market Intelligence" subtitle="Dry bulk freight market indicators and trade flow data." />
      <section style={{ padding: '96px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ background: 'var(--navy3)', border: '1px solid rgba(184,148,42,0.25)', padding: '14px 20px', marginBottom: '36px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }}></div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--gold)' }}>PLACEHOLDER DATA — Live market data integration available on request</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'var(--border)', marginBottom: '64px' }}>
            {metrics.map(m => (
              <div key={m.label} style={{ background: 'var(--navy2)', padding: '28px 24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '10px' }}>{m.label}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '6px' }}>{m.val}</div>
                <div style={{ fontSize: '12px', color: m.color }}>{m.trend}</div>
                <div style={{ fontSize: '11px', color: 'var(--faint)', marginTop: '6px', fontStyle: 'italic' }}>{m.note}</div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }}></span>Regional Trade Flow
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '32px' }}>Dry Bulk Trade Indicators</h2>
            <div style={{ background: 'var(--navy2)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '16px', padding: '16px 24px', borderBottom: '1px solid var(--border)' }}>
                {['Route','Commodity','Activity','Vessel Class'].map(h=><div key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)' }}>{h}</div>)}
              </div>
              {routes.map(r=>(
                <div key={r.route} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '16px', padding: '16px 24px', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                  <div style={{ color: '#dce6f0', fontWeight: 500, fontSize: '14px' }}>{r.route}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '13px' }}>{r.cargo}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: r.actColor }}>{r.activity}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '13px' }}>{r.vessel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}