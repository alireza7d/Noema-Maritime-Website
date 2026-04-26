import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Link from 'next/link';

const cargoes = [
  { name: 'Gypsum', vessel: 'Handymax / Supramax' },
  { name: 'Limestone', vessel: 'Supramax / Ultramax' },
  { name: 'Cement Clinker', vessel: 'Supramax / Panamax' },
  { name: 'Aggregates', vessel: 'Handymax / Supramax' },
  { name: 'Fertilizer', vessel: 'Supramax / Ultramax' },
  { name: 'Coal', vessel: 'Panamax / Ultramax' },
  { name: 'Grain', vessel: 'Panamax / Supramax' },
  { name: 'Steel Products', vessel: 'Supramax / Ultramax' },
];

export default function DryBulk() {
  return (
    <main>
      <Nav />
      <PageHeader breadcrumb="Dry Bulk Transport" title="Dry Bulk Transport" subtitle="Port-to-port cargo transportation for the full range of dry bulk commodities." />
      <section style={{ padding: '96px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }}></span>What We Transport
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '20px', lineHeight: 1.2 }}>Dry Bulk Cargo Movement</h2>
              <div style={{ width: '48px', height: '2px', background: 'var(--gold)', marginBottom: '24px' }}></div>
              <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                NOEMA GROUP supports the transportation of dry bulk commodities between load ports and discharge ports. We review cargo type, quantity, loading terms, discharge terms, port restrictions, laycan, and market conditions to arrange a practical freight solution.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '36px' }}>
                Each shipment is assessed individually. Our commercial desk reviews each inquiry and prepares a freight solution based on actual conditions of the proposed shipment.
              </p>
              <Link href="/inquiry" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none', display: 'inline-block' }}>
                Submit Cargo Inquiry
              </Link>
            </div>
            <div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr>{['Cargo Type','Vessel Class','Status'].map(h=><th key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid var(--border2)' }}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {cargoes.map(c=>(
                    <tr key={c.name}>
                      <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)', color: '#dce6f0', fontWeight: 500 }}>{c.name}</td>
                      <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{c.vessel}</td>
                      <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', padding: '3px 9px', background: 'rgba(184,148,42,0.15)', color: 'var(--gold2)', border: '1px solid rgba(184,148,42,0.3)' }}>Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
      <Footer />
    </main>
  );
}