import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const blocks = [
  { title: 'Who We Are', body: 'NOEMA GROUP is a maritime freight company operating within the global dry bulk shipping market. We work with cargo owners, commodity traders, and commercial clients who need reliable, commercially sound solutions to move bulk goods by sea.' },
  { title: 'What We Do', body: 'We arrange maritime freight solutions. We receive cargo inquiries, review route requirements and port conditions, coordinate suitable vessel capacity, prepare freight indications, agree commercial terms, and support voyage execution.' },
  { title: 'Our Commercial Approach', body: 'We engage directly with the commercial requirements of each shipment. Every inquiry is reviewed on its individual merits — cargo type, quantity, laycan, load port, discharge port, and market conditions — before a freight indication is prepared.' },
  { title: 'Responsible Trade & Compliance', body: 'NOEMA GROUP operates within applicable maritime trade regulations and commercial standards. We apply appropriate due diligence to cargo, counterparties, and routes. Compliance is built into our commercial process.' },
  { title: 'Why Work With NOEMA GROUP', body: 'We offer direct commercial engagement, practical freight solutions, and clear communication throughout the shipping process. Our clients return because we execute reliably and communicate clearly.' },
  { title: 'Global Maritime Network', body: 'We maintain commercial relationships across the global dry bulk shipping market, covering key trade routes and major ports across multiple regions. Our commercial desk is accessible to clients globally.' },
];

export default function About() {
  return (
    <main>
      <Nav />
      <PageHeader breadcrumb="About" title="About NOEMA GROUP" subtitle="Maritime transport and freight solutions built around practical execution." />
      <section style={{ padding: '96px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ fontSize: '1.35rem', lineHeight: 1.75, marginBottom: '64px', maxWidth: '760px', color: '#dce6f0', fontFamily: 'var(--font-serif)' }}>
            NOEMA GROUP is a maritime transport and freight solutions company built around practical execution. We focus on moving dry bulk cargo between ports by coordinating cargo requirements, vessel capacity, freight terms, and voyage execution.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            {blocks.map((b) => (
              <div key={b.title} style={{ borderTop: '2px solid var(--gold)', paddingTop: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '14px' }}>{b.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}