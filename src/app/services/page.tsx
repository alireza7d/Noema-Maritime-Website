import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const services = [
  { num: '01', title: 'Dry Bulk Freight Solutions', body: 'We arrange commercial freight solutions for dry bulk commodities including gypsum, limestone, clinker, fertilizer, coal, grain, steel products, and general bulk cargoes. Each solution is tailored to the specific cargo, route, quantity, and commercial requirements.', tags: ['Dry Bulk', 'All Commodities', 'Global Routes'] },
  { num: '02', title: 'Port-to-Port Cargo Transport', body: 'We coordinate cargo movement between load ports and discharge ports, managing the commercial and logistical requirements of each voyage. We review port conditions, berth availability, draft requirements, and cargo handling terms.', tags: ['Load Port', 'Discharge Port', 'Port Coordination'] },
  { num: '03', title: 'Vessel Capacity Coordination', body: 'We coordinate suitable vessel capacity for each shipment based on cargo type and volume, port restrictions, gear requirements, laycan window, and market availability across Handymax, Supramax, Ultramax, and Panamax classes.', tags: ['Handymax', 'Supramax', 'Ultramax', 'Panamax'] },
  { num: '04', title: 'Freight Indication & Negotiation', body: 'We prepare market-referenced freight indications based on current conditions, route economics, vessel availability, and cargo requirements. We work through commercial negotiations to reach an agreed fixture on terms that work for all parties.', tags: ['Market Rate', 'Commercial Terms', 'Fixture'] },
  { num: '05', title: 'Route and Port Review', body: 'Before presenting a freight solution, we review the proposed route and port requirements including port restrictions, berth conditions, draft limitations, gear requirements, and any known operational constraints.', tags: ['Port Analysis', 'Draft Review', 'Operational Check'] },
  { num: '06', title: 'Cargo Movement Planning', body: 'We support clients with laycan scheduling, quantity coordination, multi-shipment sequencing, and seasonal trade flow considerations. Particularly relevant for clients with regular or ongoing cargo volumes.', tags: ['Laycan', 'Scheduling', 'Programs'] },
  { num: '07', title: 'Voyage Coordination', body: 'Following fixture, we provide voyage coordination support including communication with port contacts, monitoring voyage progress, and supporting resolution of operational issues during the voyage.', tags: ['Post-Fixture', 'Monitoring', 'Execution Support'] },
  { num: '08', title: 'Port Agent Coordination', body: 'We coordinate with port agents at load and discharge ports to support vessel arrival, berthing, cargo operations, and documentation as part of overall voyage execution support.', tags: ['Load Port', 'Discharge Port', 'Documentation'] },
];

export default function Services() {
  return (
    <main>
      <Nav />
      <PageHeader breadcrumb="Services" title="Freight Solutions & Services" subtitle="From cargo inquiry to voyage completion — the full commercial structure to move dry bulk cargo by sea." />
      <section style={{ padding: '96px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {services.map((s) => (
            <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '48px', padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.5rem', fontWeight: 700, color: 'rgba(184,148,42,0.2)', lineHeight: 1 }}>{s.num}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '16px' }}>{s.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--silver)', border: '1px solid var(--border2)', padding: '4px 10px' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}