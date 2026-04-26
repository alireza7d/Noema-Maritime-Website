import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const vessels = [
  { name: 'Handymax', desc: 'Typically 40,000–60,000 DWT. Versatile mid-size vessels with wide port access. Often geared. Suited to ports with moderate draft restrictions and commodity types including gypsum, aggregates, and minor bulk cargoes.' },
  { name: 'Supramax', desc: 'Typically 50,000–60,000 DWT. The most widely traded vessel size in the global dry bulk market. Commonly equipped with onboard cranes — preferred at ports where shore crane infrastructure is limited.' },
  { name: 'Ultramax', desc: 'Typically 60,000–65,000 DWT. Modern vessels with higher capacity and fuel efficiency. Usually geared with five cargo holds. Suited to fertilizer, clinker, limestone, and coal.' },
  { name: 'Panamax', desc: 'Typically 65,000–85,000 DWT. High-volume vessels suited to large cargo parcels. Generally gearless — require port cranes for loading and discharge. Best suited to well-equipped ports with adequate draft.' },
];

export default function VesselCapacity() {
  return (
    <main>
      <Nav />
      <PageHeader breadcrumb="Vessel Capacity" title="Vessel Capacity" subtitle="Different cargoes and ports require different vessel capacity. We coordinate the right vessel for your shipment." />
      <section style={{ padding: '96px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, maxWidth: '760px', marginBottom: '48px' }}>
            NOEMA GROUP reviews each shipment requirement and coordinates suitable vessel options based on cargo volume, port draft, gear requirements, route, and timing. Vessel selection requires commercial judgment specific to each voyage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: '48px' }}>
            {vessels.map(v => (
              <div key={v.name} style={{ background: 'var(--navy3)', padding: '32px 28px', borderBottom: '3px solid transparent', transition: 'border-color 0.2s', cursor: 'default' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '12px' }}>{v.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--navy3)', border: '1px solid var(--border)', padding: '36px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>Geared vs Gearless</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '10px' }}>Geared Vessels</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>Vessels equipped with onboard cranes. Suitable for ports where shore crane infrastructure is limited or unavailable. Provides operational flexibility in a wider range of port environments.</p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '10px' }}>Gearless Vessels</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>Vessels without onboard cranes. Suitable where port infrastructure fully supports loading and discharge operations. Typically larger and suited to high-volume commodity trades at major bulk terminals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}