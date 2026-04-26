'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/dry-bulk', label: 'Dry Bulk' },
  { href: '/vessel-capacity', label: 'Vessel Capacity' },
  { href: '/market-intelligence', label: 'Market Intelligence' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(7,16,41,0.95)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)', padding: '0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '17px', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', color: '#f0f4fa',
          }}
        >
          NOEMA<span style={{ color: 'var(--gold)' }}>GROUP</span>
        </Link>
        <div style={{ display: 'flex' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? 'var(--gold2)' : 'var(--muted)',
                fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '8px 12px', textDecoration: 'none', transition: 'color 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/inquiry"
          style={{
            background: 'var(--gold)', color: 'var(--deep)',
            fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '9px 18px', textDecoration: 'none',
          }}
        >
          Cargo Inquiry
        </Link>
      </div>
    </nav>
  );
}