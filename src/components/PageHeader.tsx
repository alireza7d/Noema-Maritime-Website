export default function PageHeader({ breadcrumb, title, subtitle }: { breadcrumb: string; title: string; subtitle?: string }) {
  return (
    <div style={{ padding: 'clamp(100px,12vw,130px) 0 clamp(40px,5vw,64px)', background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* NOEMA gold GROUP white — same as hero */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
            <span style={{ display: 'inline-block', width: '36px', height: '2px', background: 'var(--gold)', flexShrink: 0 }}></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '22px', fontWeight: 700, letterSpacing: '0.12em' }}>
              <span style={{ color: 'var(--gold)' }}>NOEMA</span>
              <span style={{ color: '#f0f4fa' }}>GROUP</span>
            </span>
          </div>
          <div style={{ paddingLeft: '50px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' as const }}>
              {breadcrumb}
            </span>
          </div>
        </div>

        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 700, color: '#f0f4fa', lineHeight: 1.12, letterSpacing: '-0.02em' }}>{title}</h1>
        {subtitle && <p style={{ color: '#b0c8e0', fontSize: 'clamp(15px,2vw,18px)', maxWidth: '600px', marginTop: '18px', lineHeight: 1.75 }}>{subtitle}</p>}
      </div>
    </div>
  );
}