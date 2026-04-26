import { NextResponse } from 'next/server';

export const revalidate = 900; // 15 minutes for fresher data

async function fetchBDI() {
  try {
    const res = await fetch('https://stooq.com/q/l/?s=^bdi&f=sd2t2ohlcv&h&e=csv', {
      next: { revalidate: 900 },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const text = await res.text();
    const lines = text.trim().split('\n');
    if (lines.length < 2) return null;
    const cols = lines[1].split(',');
    const close = parseFloat(cols[4]);
    const open = parseFloat(cols[2]);
    if (!close || !open || isNaN(close) || close < 100) return null;
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

async function tryYahooTicker(ticker: string) {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=5d`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    const result = data?.chart?.result?.[0];
    if (!result) return null;
    const closes = result?.indicators?.quote?.[0]?.close;
    const meta = result?.meta;
    // Use regularMarketPrice from meta if available (most current)
    const currentPrice = meta?.regularMarketPrice || (closes && closes[closes.length - 1]);
    const prevClose = meta?.chartPreviousClose || meta?.previousClose || (closes && closes.length > 1 ? closes[closes.length - 2] : null);
    if (!currentPrice || isNaN(currentPrice) || currentPrice < 50 || currentPrice > 200) return null;
    const change = prevClose ? ((currentPrice - prevClose) / prevClose) * 100 : 0;
    return { price: currentPrice, prevClose, change };
  } catch {
    return null;
  }
}

async function fetchBrent() {
  // Try multiple Brent tickers in order of accuracy
  const tickers = ['BZ=F', 'BRENT.L', 'EB=F'];
  
  for (const ticker of tickers) {
    const result = await tryYahooTicker(ticker);
    if (result) {
      const { price, change } = result;
      // VLSFO: Brent in $/bbl → convert to $/MT (1 MT ≈ 7.33 barrels) + $80-100 premium
      const vlsfo = Math.round((price * 7.33) + 90);
      return {
        price: price.toFixed(2),
        change: (change >= 0 ? '+' : '') + change.toFixed(2) + '%',
        direction: (change > 0.5 ? 'up' : change < -0.5 ? 'down' : 'flat') as 'up' | 'down' | 'flat',
        vlsfo,
        vlsfoDir: (change > 0.5 ? 'up' : change < -0.5 ? 'down' : 'flat') as 'up' | 'down' | 'flat',
        ticker,
      };
    }
  }
  return null;
}

export async function GET() {
  const [bdi, brent] = await Promise.all([fetchBDI(), fetchBrent()]);

  return NextResponse.json({
    bdi: bdi ?? { value: '2,665', change: 'Est.', direction: 'flat' },
    crude: brent
      ? { value: '$' + brent.price, change: brent.change, direction: brent.direction, note: 'ICE Brent (' + brent.ticker + ')' }
      : { value: '$105.88', change: 'Est.', direction: 'flat', note: 'Estimated' },
    bunker: brent
      ? { value: '$' + brent.vlsfo, change: brent.vlsfoDir === 'up' ? '↑ Rising' : brent.vlsfoDir === 'down' ? '↓ Easing' : '→ Stable', direction: brent.vlsfoDir }
      : { value: '$865', change: '→ Stable', direction: 'flat' },
    lastUpdated: new Date().toISOString(),
    live: !!(bdi || brent),
  });
}