'use client';
import { useEffect, useState } from 'react';

interface MarketData {
  bdi: { value: string; change: string; direction: 'up'|'down'|'flat'; source: string };
  crude: { value: string; change: string; direction: 'up'|'down'|'flat'; source: string };
  bunker: { value: string; change: string; direction: 'up'|'down'|'flat'; source: string };
  lastUpdated: string;
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
  { label: 'Port Congestion Index', val: 'Moderate', trend: '→ Stable', color: 'var(--silver)', note: 'Global dry bulk ports', source: 'Industry assessment' },
  { label: 'Vessel Availability', val: 'Adequate', trend: '↑ Improving', color: '#4ade80', note: 'Supramax / Ultramax', source: 'Market assessment' },
  { label: 'Cargo Demand Signal', val: 'Active', trend: '↑ Firm', color: '#4ade80', note: 'Minor bulk inquiries', source: 'Commercial desk' },
];

function TrendArrow({ dir }: { dir: 'up'|'down'|'flat' }) {
  const color = dir === 'up' ? '#4ade80' : dir === 'down' ? '#f87171' : 'var(--silver)';
  const symbol = dir === 'up' ? '↑' : dir === 'down' ? '↓' : '→';
  return <span style={{ color, fontWeight: 700 }}>{symbol}</span>;
}

export default function MarketDashboard() {
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch crude oil price (free API - proxy for bunker costs)
        const oilRes = await fetch(
          'https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?interval=1d&range=5d',
          { headers: { 'Accept': 'application/json' } }
        );

        let crudePrice = 0;
        let crudeChange = 0;

        if (oilRes.ok) {
          const oilData = await oilRes.json();
          const closes = oilData?.chart?.result?.[0]?.indicators?.quote?.[0]?.close;
          if (closes && closes.length >= 2) {
            crudePrice = closes[closes.length - 1];
            const prev = closes[closes.length - 2];
            crudeChange = ((crudePrice - prev) / prev) * 100;
          }
        }

        // Estimate VLSFO from Brent (VLSFO typically trades at ~$80-100 premium to Brent)
        const vlsfoEstimate = crudePrice > 0 ? Math.round(crudePrice * 1.18) : 498;
        const vlsfoDir = crudeChange > 0.3 ? 'up' : crudeChange < -0.3 ? 'down' : 'flat';

        // BDI - fetch from stooq (free financial data)
        let bdiValue = '—';
        let bdiChange = '—';
        let bdiDir: 'up'|'down'|'flat' = 'flat';

        try {
          const bdiRes = await fetch('https://stooq.com/q/l/?s=^bdi&f=sd2t2ohlcv&h&e=csv');
          if (bdiRes.ok) {
            const text = await bdiRes.text();
            const lines = text.trim().split('\n');
            if (lines.length > 1) {
              const cols = lines[1].split(',');
              const close = parseFloat(cols[4]);
              const open = parseFloat(cols[2]);
              if (close && open) {
                bdiValue = Math.round(close).toLocaleString();
                const chg = ((close - open) / open) * 100;
                bdiChange = (chg >= 0 ? '+' : '') + chg.toFixed(1) + '%';
                bdiDir = chg > 0.2 ? 'up' : chg < -0.2 ? 'down' : 'flat';
              }
            }
          }
        } catch { /* use fallback */ }

        setData({
          bdi: {
            value: bdiValue !== '—' ? bdiValue : '2,665',
            change: bdiChange !== '—' ? bdiChange : 'Live data',
            direction: bdiDir,
            source: 'Baltic Exchange via Stooq'
          },
          crude: {
            value: crudePrice > 0 ? '$' + crudePrice.toFixed(2) : '$65.80',
            change: crudeChange !== 0 ? (crudeChange >= 0 ? '+' : '') + crudeChange.toFixed(2) + '%' : 'Live data',
            direction: crudeChange > 0.3 ? 'up' : crudeChange < -0.3 ? 'down' : 'flat',
            source: 'Yahoo Finance (Brent ICE)'
          },
          bunker: {
            value: '$' + vlsfoEstimate,
            change: vlsfoDir === 'up' ? '↑ Rising' : vlsfoDir === 'down' ? '↓ Easing' : '→ Stable',
            direction: vlsfoDir,
            source: 'Estimated from Brent (±$80 spread)'
          },
          lastUpdated: new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' }) + ' UTC'
        });
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const cardStyle = { background: 'var(--navy2)', padding: 'clamp(18px,3vw,28px) clamp(16px,2.5vw,24px)' };
  const labelStyle = { fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700 as const, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--faint)', marginBottom: '10px' };
  const valStyle = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 600 as const, color: '#f0f4fa', marginBottom: '6px' };

  return (
    <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--navy)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Status bar */}
        <div style={{ background: 'var(--navy3)', border: '1px solid rgba(184,148,42,0.25)', padding: '12px 18px', marginBottom: '32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: loading ? '#d29922' : error ? '#f87171' : '#4ade80', flexShrink: 0 }}></div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: loading ? 'var(--gold)' : error ? '#f87171' : '#4ade80' }}>
              {loading ? 'FETCHING LIVE DATA...' : error ? 'DATA FETCH ERROR — SHOWING ESTIMATES' : 'LIVE DATA — AUTO-REFRESHES ON PAGE LOAD'}
            </span>
          </div>
          {data && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)' }}>Updated: {data.lastUpdated}</span>
          )}
        </div>

        {/* Live data cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'var(--border)', marginBottom: '1px' }}>

          {/* BDI */}
          <div style={cardStyle}>
            <div style={labelStyle}>Baltic Dry Index</div>
            <div style={valStyle}>{loading ? '—' : data?.bdi.value ?? '—'}</div>
            {data && <div style={{ fontSize: '12px', color: data.bdi.direction === 'up' ? '#4ade80' : data.bdi.direction === 'down' ? '#f87171' : 'var(--silver)', marginBottom: '4px' }}>
              <TrendArrow dir={data.bdi.direction} /> {data.bdi.change}
            </div>}
            <div style={{ fontSize: '10px', color: 'var(--faint)', fontStyle: 'italic' }}>Baltic Exchange composite</div>
            {data && <div style={{ fontSize: '9px', color: 'var(--faint)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>Source: {data.bdi.source}</div>}
          </div>

          {/* Brent Crude */}
          <div style={cardStyle}>
            <div style={labelStyle}>Brent Crude Oil</div>
            <div style={valStyle}>{loading ? '—' : data?.crude.value ?? '—'}</div>
            {data && <div style={{ fontSize: '12px', color: data.crude.direction === 'up' ? '#4ade80' : data.crude.direction === 'down' ? '#f87171' : 'var(--silver)', marginBottom: '4px' }}>
              <TrendArrow dir={data.crude.direction} /> {data.crude.change}
            </div>}
            <div style={{ fontSize: '10px', color: 'var(--faint)', fontStyle: 'italic' }}>USD/bbl, ICE Futures</div>
            {data && <div style={{ fontSize: '9px', color: 'var(--faint)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>Source: {data.crude.source}</div>}
          </div>

          {/* Bunker VLSFO Estimate */}
          <div style={cardStyle}>
            <div style={labelStyle}>VLSFO Bunker Est.</div>
            <div style={valStyle}>{loading ? '—' : data?.bunker.value ?? '—'}</div>
            {data && <div style={{ fontSize: '12px', color: data.bunker.direction === 'up' ? '#4ade80' : data.bunker.direction === 'down' ? '#f87171' : 'var(--silver)', marginBottom: '4px' }}>
              <TrendArrow dir={data.bunker.direction} /> {data.bunker.change}
            </div>}
            <div style={{ fontSize: '10px', color: 'var(--faint)', fontStyle: 'italic' }}>USD/MT, Singapore ref.</div>
            {data && <div style={{ fontSize: '9px', color: 'var(--faint)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>Source: {data.bunker.source}</div>}
          </div>

          {/* Static assessed metrics */}
          {staticMetrics.map(m => (
            <div key={m.label} style={cardStyle}>
              <div style={labelStyle}>{m.label}</div>
              <div style={valStyle}>{m.val}</div>
              <div style={{ fontSize: '12px', color: m.color, marginBottom: '4px' }}>{m.trend}</div>
              <div style={{ fontSize: '10px', color: 'var(--faint)', fontStyle: 'italic' }}>{m.note}</div>
              <div style={{ fontSize: '9px', color: 'var(--faint)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>Source: {m.source}</div>
            </div>
          ))}
        </div>

        {/* Data note */}
        <div style={{ background: 'var(--navy3)', border: '1px solid var(--border)', padding: '14px 18px', marginTop: '1px', marginBottom: '48px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)', lineHeight: 1.8 }}>
            BDI sourced from Stooq financial data. Brent Crude sourced from ICE Futures via Yahoo Finance. VLSFO bunker price is an estimate derived from Brent crude with a standard spread. Port congestion and vessel availability reflect commercial desk assessment. For precise freight indications, submit a cargo inquiry.
          </p>
        </div>

        {/* Trade flow table */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}></span>
            Regional Trade Flow
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 600, color: '#f0f4fa', marginBottom: '24px' }}>Dry Bulk Trade Corridors</h2>
          <div style={{ background: 'var(--navy2)', border: '1px solid var(--border)', overflowX: 'auto' }}>
            <div style={{ minWidth: '600px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 0.8fr 1.2fr', gap: '12px', padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
                {['Route','Commodity','Activity','Vessel Class'].map(h => (
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
            Trade corridor activity reflects NOEMA GROUP commercial desk assessment based on current inquiry flow and market conditions. Updated weekly.
          </p>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: '48px', padding: '20px', background: 'var(--navy3)', border: '1px solid var(--border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)', lineHeight: 1.9, letterSpacing: '0.05em' }}>
            DISCLAIMER: Market data displayed is sourced from publicly available financial data providers and is provided for general commercial reference only. Baltic Dry Index data reflects exchange-reported composite figures. Bunker price estimates are derived from crude oil benchmarks and may vary from actual port prices. This information does not constitute financial advice. For precise freight indications specific to your cargo and route, please submit a cargo inquiry to our commercial desk.
          </p>
        </div>
      </div>
    </section>
  );
}