export default function PageHeader({ breadcrumb, title, subtitle }: { breadcrumb: string; title: string; subtitle?: string }) {
  return (
    <div style={{ padding: '100px 0 60px', background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '20px' }}>NOEMAGROUP — {breadcrumb}</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, color: '#f0f4fa', lineHeight: 1.15, letterSpacing: '-0.02em' }}>{title}</h1>
        {subtitle && <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '600px', marginTop: '16px' }}>{subtitle}</p>}
      </div>
    </div>
  );
}