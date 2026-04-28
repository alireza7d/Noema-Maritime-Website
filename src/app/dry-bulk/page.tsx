import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Dry Bulk — NOEMA GROUP',
  description: 'Dry bulk freight solutions for cargo owners, traders, and commercial clients.',
};

const commodities = [
  { name: 'Gypsum', desc: 'Building and construction mineral moved in bulk across major trade corridors.' },
  { name: 'Limestone', desc: 'Industrial mineral transported to cement plants and processing facilities.' },
  { name: 'Cement Clinker', desc: 'Key building material shipped between production and consumption markets.' },
  { name: 'Aggregates', desc: 'Construction aggregates moved in handysize and supramax vessels.' },
  { name: 'Fertilizer', desc: 'Agricultural commodity with seasonal demand across global markets.' },
  { name: 'Coal', desc: 'Energy and industrial coal transported across major bulk trade routes.' },
  { name: 'Grain', desc: 'Food commodities including wheat, corn, and soybeans on panamax vessels.' },
  { name: 'Steel Products', desc: 'Industrial metals and steel products requiring careful stowage.' },
];

const routes = [
  { from: 'Middle East', to: 'South Asia', cargo: 'Gypsum, Clinker' },
  { from: 'West Africa', to: 'Europe', cargo: 'Aggregates, Limestone' },
  { from: 'Black Sea', to: 'MENA', cargo: 'Grain, Fertilizer' },
  { from: 'US Gulf', to: 'Asia Pacific', cargo: 'Grain, Soybeans' },
  { from: 'Australia', to: 'East Asia', cargo: 'Coal, Iron Ore' },
  { from: 'Asia', to: 'East Africa', cargo: 'Clinker, Coal' },
];

export default function DryBulk() {
  return (
    <main>
      <Nav />
      <PageHeader
        title="Dry Bulk Freight"
        subtitle="Commercial freight solutions for dry bulk commodities across global trade routes."
      />

      {/* Intro */}
      <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '20px', lineHeight: 1.2 }}>Moving Dry Bulk Cargo by Sea</h2>
              <p style={{ color: '#b0c8e0', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.85, marginBottom: '20px' }}>
                NOEMA GROUP arranges dry bulk freight for cargo owners, commodity traders, and industrial shippers. We coordinate the full commercial process — from cargo inquiry to voyage completion.
              </p>
              <p style={{ color: '#b0c8e0', fontSize: 'clamp(15px,1.8vw,17px)', lineHeight: 1.85 }}>
                Each shipment is handled individually, matched to the right vessel, and supported through the full voyage cycle.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1px', background: 'rgba(180,200,230,0.1)' }}>
              {[
                ['Cargo Review', 'Type, quantity, and port conditions assessed'],
                ['Vessel Match', 'Right vessel class for your route and laycan'],
                ['Freight Terms', 'Commercial terms prepared for review'],
                ['Voyage Support', 'Execution supported from fixture to completion'],
              ].map(([title, desc]) => (
                <div key={title} style={{ background: 'var(--navy2)', padding: '20px 24px', borderLeft: '3px solid var(--gold)' }}>
                  <div style={{ color: '#dce6f0', fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
                  <div style={{ color: '#8fa8c8', fontSize: '14px' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commodities */}
      <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--deep)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }}></span>Commodity Coverage
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '32px', lineHeight: 1.2 }}>What We Move</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'rgba(180,200,230,0.1)' }}>
            {commodities.map(c => (
              <div key={c.name} style={{ background: 'var(--navy2)', padding: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '10px' }}>{c.name}</div>
                <div style={{ color: '#8fa8c8', fontSize: '14px', lineHeight: 1.7 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Routes */}
      <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }}></span>Trade Corridors
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '32px', lineHeight: 1.2 }}>Key Routes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(180,200,230,0.1)' }}>
            {routes.map(r => (
              <div key={r.from + r.to} style={{ background: 'var(--navy2)', padding: '24px' }}>
                <div style={{ color: '#dce6f0', fontWeight: 600, fontSize: '15px', marginBottom: '6px' }}>{r.from} → {r.to}</div>
                <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em' }}>{r.cargo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(48px,8vw,80px) 0', background: 'var(--navy2)', borderTop: '1px solid rgba(180,200,230,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' as const }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#f0f4fa', marginBottom: '16px' }}>Ready to Move Your Cargo?</h2>
          <p style={{ color: '#b0c8e0', fontSize: '16px', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px' }}>Submit a cargo inquiry and our commercial desk will respond within one business day.</p>
          <Link href="/inquiry" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '16px 32px', textDecoration: 'none', display: 'inline-block' }}>Submit Cargo Inquiry</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}