export default function PageHeader({ breadcrumb, title, subtitle }: { breadcrumb: string; title: string; subtitle?: string }) {
  return (
    <div style={{ padding: 'clamp(100px,12vw,130px) 0 clamp(40px,5vw,64px)', background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--faint)', marginBottom: '20px' }}>NOEMAGROUP — {breadcrumb}</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 700, color: '#f0f4fa', lineHeight: 1.12, letterSpacing: '-0.02em' }}>{title}</h1>
        {subtitle && <p style={{ color: 'var(--muted)', fontSize: 'clamp(15px,2vw,18px)', maxWidth: '600px', marginTop: '18px', lineHeight: 1.75 }}>{subtitle}</p>}
      </div>
    </div>
  );
}