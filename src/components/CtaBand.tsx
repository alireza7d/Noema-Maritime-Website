import Link from 'next/link';
export default function CtaBand() {
  return (
    <div style={{ background: 'var(--ocean)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '72px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '16px', maxWidth: '660px' }}>Ready to Move Your Cargo?</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '580px', marginBottom: '36px' }}>Send your cargo details and our commercial desk will review the route, quantity, laycan, and vessel capacity requirements.</p>
        <Link href="/inquiry" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none', display: 'inline-block' }}>Submit Cargo Inquiry</Link>
      </div>
    </div>
  );
}