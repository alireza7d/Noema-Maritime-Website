import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'About — NOEMA GROUP',
  description: 'NOEMA GROUP is a U.S.-based maritime freight and chartering company focused on dry bulk cargo movement.',
};

export default function About() {
  return (
    <main>
      <Nav />
      <PageHeader
        title="About NOEMA GROUP"
        subtitle="Maritime transport and freight solutions built around practical execution."
      />

      {/* Main statement */}
      <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 400, color: '#dce6f0', lineHeight: 1.75, maxWidth: '860px', marginBottom: '48px', borderLeft: '3px solid var(--gold)', paddingLeft: '28px' }}>
            NOEMA GROUP is a U.S.-based maritime freight and chartering company focused on dry bulk cargo movement, vessel capacity coordination, and port-to-port shipment solutions for cargo owners, traders, and industrial clients.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'rgba(180,200,230,0.1)', marginBottom: '48px' }}>
            {[
              { title: 'Who We Are', body: 'NOEMA GROUP is a maritime freight company operating within the global dry bulk shipping market. We work with cargo owners, commodity traders, and commercial clients who need reliable, commercially sound solutions to move bulk goods by sea.' },
              { title: 'What We Do', body: 'We arrange maritime freight solutions. We receive cargo inquiries, review route requirements and port conditions, coordinate suitable vessel capacity, prepare freight indications, agree commercial terms, and support voyage execution.' },
              { title: 'Our Commercial Approach', body: 'We engage directly with the commercial requirements of each shipment. Every inquiry is reviewed on its individual merits — cargo type, quantity, laycan, load port, discharge port, and market conditions — before a freight indication is prepared.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'var(--navy2)', padding: '32px 28px', borderTop: '3px solid var(--gold)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '14px' }}>{item.title}</h3>
                <p style={{ color: '#8fa8c8', fontSize: '15px', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 'clamp(32px,6vw,80px)', flexWrap: 'wrap' as const, borderTop: '1px solid rgba(180,200,230,0.1)', paddingTop: '40px' }}>
            {[['8','Commodity Types'],['4+','Vessel Classes'],['Global','Port Coverage'],['U.S.-Based','Operations']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--gold)' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--faint)', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(48px,6vw,72px) 0', background: 'var(--navy2)', borderTop: '1px solid rgba(180,200,230,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '8px' }}>Ready to Move Your Cargo?</h2>
            <p style={{ color: '#8fa8c8', fontSize: '15px' }}>Submit a cargo inquiry and we will respond within one business day.</p>
          </div>
          <Link href="/inquiry" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '16px 32px', textDecoration: 'none', display: 'inline-block', flexShrink: 0 }}>Submit Cargo Inquiry</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}