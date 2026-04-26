export default function PageHeader({ breadcrumb, title, subtitle }: { breadcrumb: string; title: string; subtitle?: string }) {
  return (
    <div style={{ padding: 'clamp(90px,12vw,120px) 0 clamp(32px,5vw,60px)', background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '16px' }}>NOEMAGROUP — {breadcrumb}</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,5vw,3.2rem)', fontWeight: 600, color: '#f0f4fa', lineHeight: 1.15, letterSpacing: '-0.02em' }}>{title}</h1>
        {subtitle && <p style={{ color: 'var(--muted)', fontSize: 'clamp(14px,2vw,16px)', maxWidth: '600px', marginTop: '14px', lineHeight: 1.7 }}>{subtitle}</p>}
      </div>
    </div>
  );
}