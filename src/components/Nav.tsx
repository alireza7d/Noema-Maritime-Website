'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/dry-bulk', label: 'Dry Bulk' },
  { href: '/vessel-capacity', label: 'Vessel Capacity' },
  { href: '/market-intelligence', label: 'Market Intel' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(7,16,41,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <img src="/logo-horizontal.png" alt="NOEMA GROUP" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{
                color: pathname === l.href ? 'var(--gold2)' : '#c8d8e8',
                fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '8px 14px', textDecoration: 'none',
                borderBottom: pathname === l.href ? '2px solid var(--gold)' : '2px solid transparent',
              }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link href="/inquiry" className="nav-cta" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '10px 20px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Cargo Inquiry
            </Link>
            <button onClick={() => setOpen(!open)} className="hamburger" style={{ background: 'none', border: '1px solid var(--border2)', padding: '8px', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px' }} aria-label="Menu">
              <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'var(--gold)' : 'var(--muted)', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }}></span>
              <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'transparent' : 'var(--muted)', transition: 'all 0.2s' }}></span>
              <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'var(--gold)' : 'var(--muted)', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }}></span>
            </button>
          </div>
        </div>
        {open && (
          <div className="mobile-menu" style={{ background: 'rgba(7,16,41,0.99)', borderTop: '1px solid var(--border)', padding: '16px 1.5rem 24px' }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', color: pathname === l.href ? 'var(--gold2)' : '#c8d8e8', fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '16px 0', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                {l.label}
              </Link>
            ))}
            <Link href="/inquiry" onClick={() => setOpen(false)} style={{ display: 'block', marginTop: '16px', background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '15px', textDecoration: 'none', textAlign: 'center' }}>
              Submit Cargo Inquiry
            </Link>
          </div>
        )}
      </nav>
      <style>{\`
        @media (max-width: 1024px) { .desktop-nav { display: none !important; } .hamburger { display: flex !important; } .nav-cta { display: none !important; } }
        @media (min-width: 1025px) { .mobile-menu { display: none !important; } }
      \`}</style>
    </>
  );
}