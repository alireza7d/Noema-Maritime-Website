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
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(7,16,41,0.97)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)', padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', color: '#f0f4fa', flexShrink: 0 }}>
            NOEMA<span style={{ color: 'var(--gold)' }}>GROUP</span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 0 }} className="desktop-nav">
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{ color: pathname === l.href ? 'var(--gold2)' : 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '8px 10px', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link href="/inquiry" className="nav-cta" style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 16px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Cargo Inquiry
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="hamburger"
              style={{ background: 'none', border: '1px solid var(--border2)', padding: '8px', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px' }}
              aria-label="Menu"
            >
              <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'var(--gold)' : 'var(--muted)', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }}></span>
              <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'transparent' : 'var(--muted)', transition: 'all 0.2s' }}></span>
              <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'var(--gold)' : 'var(--muted)', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }}></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: 'rgba(7,16,41,0.99)', borderTop: '1px solid var(--border)', padding: '16px 1.5rem 24px' }} className="mobile-menu">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', color: pathname === l.href ? 'var(--gold2)' : 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 0', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                {l.label}
              </Link>
            ))}
            <Link href="/inquiry" onClick={() => setOpen(false)} style={{ display: 'block', marginTop: '16px', background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px', textDecoration: 'none', textAlign: 'center' }}>
              Submit Cargo Inquiry
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .nav-cta { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}