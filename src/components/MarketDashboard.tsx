'use client';
import { useEffect, useState } from 'react';

type Direction = 'up' | 'down' | 'flat';

interface Metric {
  value: string;
  change: string;
  direction: Direction;
}

interface MarketData {
  bdi: Metric;
  crude: Metric;
  bunker: Metric;
  lastUpdated: string;
  live: boolean;
}

const routes = [
  { route: 'Middle East → South Asia', cargo: 'Gypsum, Clinker', activity: 'Active', actColor: '#4ade80', vessel: 'Supramax / Ultramax' },
  { route: 'West Africa → Europe', cargo: 'Aggregates, Limestone', activity: 'Moderate', actColor: 'var(--silver)', vessel: 'Handymax / Supramax' },
  { route: 'Black Sea → MENA', cargo: 'Grain, Fertilizer', activity: 'Active', actColor: '#4ade80', vessel: 'Panamax / Ultramax' },
  { route: 'Asia → East Africa', cargo: 'Clinker, Coal', activity: 'Stable', actColor: 'var(--silver)', vessel: 'Supramax' },
  { route: 'US Gulf → Asia Pacific', cargo: 'Grain, Soybeans', activity: 'Active', actColor: '#4ade80', vessel: 'Panamax' },
  { route: 'Australia → East Asia', cargo: 'Coal, Iron Ore', activity: 'High', actColor: '#4ade80', vessel: 'Capesize / Panamax' },
];

const staticMetrics = [
  { label: 'Port Congestion Index', val: 'Moderate', trend: '→ Stable', color: 'var(--silver)', note: 'Global dry bulk ports', source: 'Commercial desk assessment' },
  { label: 'Vessel Availability', val: 'Adequate', trend: '↑ Improving', color: '#4ade80', note: 'Supramax / Ultramax', source: 'Market assessment' },
  { label: 'Cargo Demand Signal', val: 'Active', trend: '↑ Firm', color: '#4ade80', note: 'Minor bulk inquiries', source: 'Commercial desk' },
];

function Arrow({ dir }: { dir: Direction }) {
  const map = { up: { c: '#4ade80', s: '↑' }, down: { c: '#f87171', s: '↓' }, flat: { c: 'var(--silver)', s: '→' } };
  return <span style={{ color: map[dir].c }}>{map[dir].s} </span>;
}

const cardStyle = { background: 'var(--navy2)', padding: 'clamp(18px,3vw,28px) clamp(16px,2.5vw,24px)' };
const labelStyle: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '10px' };
const valStyle: React.CSSProperties = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 600, color: '#f0f4fa', marginBottom: '6px' };
const noteStyle: React.CSSProperties = { fontSize: '10px', color: 'var(--faint)', fontStyle: 'italic', marginTop: '2px' };
const srcStyle: React.CSSProperties = { fontSize: '9px', color: 'var(--faint)', marginTop: '4px', fontFamily: 'var(--font-mono)' };

export default function MarketDashboard() {
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/market')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const fmt = (iso: string) => {
    try {
      return new Date(iso).toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' }) + ' UTC';
    } catch { return iso; }
  };

  return (
    <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--navy)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Status bar */}
        <div style={{ background: 'var(--navy3)', border: '1px solid rgba(184,148,42,0.25)', padding: '12px 18px', marginBottom: '32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0, background: loading ? '#d29922' : data?.live ? '#4ade80' : 'var(--silver)' }}></div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: loading ? 'var(--gold)' : data?.live ? '#4ade80' : 'var(--silver)' }}>
              {loading ? 'FETCHING LIVE MARKET DATA...' : data?.live ? 'LIVE DATA — UPDATES HOURLY' : 'ESTIMATED DATA — LIVE FEED UNAVAILABLE'}
            </span>
          </div>
          {data && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)' }}>Updated: {fmt(data.lastUpdated)}</span>}
        </div>

        {/* Live metric cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'var(--border)', marginBottom: '1px' }}>

          <div style={cardStyle}>
            <div style={labelStyle}>Baltic Dry Index</div>
            <div style={valStyle}>{loading ? '—' : data?.bdi.value}</div>
            {data && <div style={{ fontSize: '12px', color: data.bdi.direction === 'up' ? '#4ade80' : data.bdi.direction === 'down' ? '#f87171' : 'var(--silver)' }}>
              <Arrow dir={data.bdi.direction} />{data.bdi.change}
            </div>}
            <div style={noteStyle}>Composite — BDI</div>
            <div style={srcStyle}>Baltic Exchange / Stooq</div>
          </div>

          <div style={cardStyle}>
            <div style={labelStyle}>Brent Crude</div>
            <div style={valStyle}>{loading ? '—' : data?.crude.value}</div>
            {data && <div style={{ fontSize: '12px', color: data.crude.direction === 'up' ? '#4ade80' : data.crude.direction === 'down' ? '#f87171' : 'var(--silver)' }}>
              <Arrow dir={data.crude.direction} />{data.crude.change}
            </div>}
            <div style={noteStyle}>USD/bbl, ICE Futures</div>
            <div style={srcStyle}>Yahoo Finance (BZ=F)</div>
          </div>

          <div style={cardStyle}>
            <div style={labelStyle}>VLSFO Bunker Est.</div>
            <div style={valStyle}>{loading ? '—' : data?.bunker.value}</div>
            {data && <div style={{ fontSize: '12px', color: data.bunker.direction === 'up' ? '#4ade80' : data.bunker.direction === 'down' ? '#f87171' : 'var(--silver)' }}>
              <Arrow dir={data.bunker.direction} />{data.bunker.change}
            </div>}
            <div style={noteStyle}>USD/MT, Singapore ref.</div>
            <div style={srcStyle}>Derived from Brent + spread</div>
          </div>

          {staticMetrics.map(m => (
            <div key={m.label} style={cardStyle}>
              <div style={labelStyle}>{m.label}</div>
              <div style={valStyle}>{m.val}</div>
              <div style={{ fontSize: '12px', color: m.color }}>{m.trend}</div>
              <div style={noteStyle}>{m.note}</div>
              <div style={srcStyle}>{m.source}</div>
            </div>
          ))}
        </div>

        {/* Source note */}
        <div style={{ background: 'var(--navy3)', border: '1px solid var(--border)', padding: '14px 18px', marginBottom: '48px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)', lineHeight: 1.9 }}>
            BDI sourced from Baltic Exchange via Stooq financial data. Brent Crude from ICE Futures via Yahoo Finance. VLSFO bunker is estimated from Brent with standard spread and does not represent actual port prices. Port congestion and vessel availability reflect NOEMA GROUP commercial desk assessment. Data cached hourly.
          </p>
        </div>

        {/* Trade corridors */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>
            Regional Trade Flow
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 600, color: '#f0f4fa', marginBottom: '24px' }}>Dry Bulk Trade Corridors</h2>
          <div style={{ background: 'var(--navy2)', border: '1px solid var(--border)', overflowX: 'auto' }}>
            <div style={{ minWidth: '580px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 0.8fr 1.2fr', gap: '12px', padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
                {['Route', 'Commodity', 'Activity', 'Vessel Class'].map(h => (
                  <div key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)' }}>{h}</div>
                ))}
              </div>
              {routes.map(r => (
                <div key={r.route} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 0.8fr 1.2fr', gap: '12px', padding: '14px 20px', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                  <div style={{ color: '#dce6f0', fontWeight: 500, fontSize: '14px' }}>{r.route}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '13px' }}>{r.cargo}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: r.actColor, fontWeight: 700 }}>{r.activity}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '13px' }}>{r.vessel}</div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)', marginTop: '12px', lineHeight: 1.7 }}>
            Trade corridor activity reflects NOEMA GROUP commercial desk assessment. Updated weekly.
          </p>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: '48px', padding: '20px', background: 'var(--navy3)', border: '1px solid var(--border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)', lineHeight: 1.9, letterSpacing: '0.04em' }}>
            DISCLAIMER: Market data is sourced from publicly available financial data providers for general commercial reference only. This information does not constitute financial advice or a freight quotation. For precise freight indications specific to your cargo and route, please submit a cargo inquiry to our commercial desk.
          </p>
        </div>
      </div>
    </section>
  );
}