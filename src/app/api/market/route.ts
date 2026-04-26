import { NextResponse } from 'next/server';

export const revalidate = 3600;

async function fetchBDI() {
  try {
    const res = await fetch('https://stooq.com/q/l/?s=^bdi&f=sd2t2ohlcv&h&e=csv', {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' }
    });
    if (!res.ok) return null;
    const text = await res.text();
    const lines = text.trim().split('\n');
    if (lines.length < 2) return null;
    const cols = lines[1].split(',');
    const close = parseFloat(cols[4]);
    const open = parseFloat(cols[2]);
    if (!close || !open || isNaN(close)) return null;
    const change = ((close - open) / open) * 100;
    return {
      value: Math.round(close).toLocaleString(),
      change: (change >= 0 ? '+' : '') + change.toFixed(1) + '%',
      direction: change > 0.3 ? 'up' : change < -0.3 ? 'down' : 'flat',
    };
  } catch {
    return null;
  }
}

async function fetchBrent() {
  try {
    const res = await fetch(
      'https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?interval=1d&range=5d',
      {
        next: { revalidate: 3600 },
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible)', 'Accept': 'application/json' }
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const closes = data?.chart?.result?.[0]?.indicators?.quote?.[0]?.close;
    if (!closes || closes.length < 2) return null;
    const price = closes[closes.length - 1];
    const prev = closes[closes.length - 2];
    if (!price || isNaN(price)) return null;
    const change = ((price - prev) / prev) * 100;
    // Convert Brent $/bbl to VLSFO $/MT
    // 1 barrel of crude = ~0.136 MT
    // So 1 MT = ~7.33 barrels
    // VLSFO trades at roughly $80-100/MT premium over crude
    const vlsfo = Math.round((price * 7.33) + 85);
    return {
      price: price.toFixed(2),
      change: (change >= 0 ? '+' : '') + change.toFixed(2) + '%',
      direction: change > 0.3 ? 'up' : change < -0.3 ? 'down' : 'flat',
      vlsfo,
      vlsfoDir: change > 0.5 ? 'up' : change < -0.5 ? 'down' : 'flat',
    };
  } catch {
    return null;
  }
}

export async function GET() {
  const [bdi, brent] = await Promise.all([fetchBDI(), fetchBrent()]);

  return NextResponse.json({
    bdi: bdi ?? { value: '2,665', change: 'Est.', direction: 'flat' },
    crude: brent
      ? { value: '$' + brent.price, change: brent.change, direction: brent.direction }
      : { value: '$65.80', change: 'Est.', direction: 'flat' },
    bunker: brent
      ? {
          value: '$' + brent.vlsfo,
          change: brent.vlsfoDir === 'up' ? '↑ Rising' : brent.vlsfoDir === 'down' ? '↓ Easing' : '→ Stable',
          direction: brent.vlsfoDir
        }
      : { value: '$498', change: 'Est.', direction: 'flat' },
    lastUpdated: new Date().toISOString(),
    live: !!(bdi || brent),
  });
}