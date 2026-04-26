'use client';
import { useState } from 'react';

const iStyle: React.CSSProperties = { background: 'var(--navy3)', border: '1px solid var(--border2)', color: '#f0f4fa', fontFamily: 'inherit', fontSize: '15px', padding: '11px 14px', outline: 'none', width: '100%' };
const lStyle: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', display: 'block', marginBottom: '7px' };

export default function InquiryForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    data.append('access_key', '52d94f14-fb96-4452-92f5-d74f6e79ac27');
    data.append('subject', 'NOEMA GROUP — New Cargo Inquiry');
    data.append('from_name', 'NOEMA GROUP Website');
    data.append('redirect', 'false');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) { setStatus('sent'); (e.target as HTMLFormElement).reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  if (status === 'sent') return (
    <div style={{ background: 'var(--navy2)', border: '1px solid var(--border2)', padding: '64px 44px', maxWidth: '760px', textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '20px' }}>✓</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#f0f4fa', marginBottom: '12px' }}>Inquiry Received</h2>
      <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '24px' }}>Our commercial desk will review your cargo requirements and respond within 1 business day.</p>
      <button onClick={() => setStatus('idle')} style={{ background: 'transparent', color: 'var(--silver)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--border2)', padding: '10px 20px', cursor: 'pointer' }}>Submit Another Inquiry</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ background: 'var(--navy2)', border: '1px solid var(--border2)', padding: '44px', maxWidth: '760px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Cargo Inquiry Form</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#f0f4fa', marginBottom: '8px' }}>Submit Your Freight Requirements</h2>
      <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '32px' }}>Our commercial desk will respond within one business day.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div><label style={lStyle}>Company Name</label><input type="text" name="company" placeholder="Your company name" style={iStyle} required /></div>
        <div><label style={lStyle}>Contact Person</label><input type="text" name="name" placeholder="Full name" style={iStyle} required /></div>
        <div><label style={lStyle}>Email Address</label><input type="email" name="email" placeholder="commercial@yourcompany.com" style={iStyle} required /></div>
        <div><label style={lStyle}>Phone / WhatsApp</label><input type="tel" name="phone" placeholder="+1 000 000 0000" style={iStyle} /></div>
        <div><label style={lStyle}>Cargo Type</label>
          <select name="cargo_type" style={{ ...iStyle, appearance: 'none' }}>
            <option value="">Select cargo type</option>
            <option>Gypsum</option><option>Limestone</option><option>Cement Clinker</option><option>Aggregates</option><option>Fertilizer</option><option>Coal</option><option>Grain</option><option>Steel Products</option><option>Other Dry Bulk</option>
          </select>
        </div>
        <div><label style={lStyle}>Quantity (MT)</label><input type="text" name="quantity" placeholder="e.g. 25,000 MT" style={iStyle} /></div>
        <div><label style={lStyle}>Load Port</label><input type="text" name="load_port" placeholder="Port name / country" style={iStyle} /></div>
        <div><label style={lStyle}>Discharge Port</label><input type="text" name="discharge_port" placeholder="Port name / country" style={iStyle} /></div>
        <div><label style={lStyle}>Laycan</label><input type="text" name="laycan" placeholder="e.g. 01-10 Aug 2025" style={iStyle} /></div>
        <div><label style={lStyle}>Loading Terms</label>
          <select name="loading_terms" style={{ ...iStyle, appearance: 'none' }}>
            <option value="">Select terms</option><option>FIOS</option><option>FIO</option><option>Liner Terms</option><option>Other</option>
          </select>
        </div>
        <div><label style={lStyle}>Discharge Terms</label>
          <select name="discharge_terms" style={{ ...iStyle, appearance: 'none' }}>
            <option value="">Select terms</option><option>FIOS</option><option>FIO</option><option>Liner Terms</option><option>Other</option>
          </select>
        </div>
        <div><label style={lStyle}>Freight Idea (if any)</label><input type="text" name="freight_idea" placeholder="USD per MT - optional" style={iStyle} /></div>
        <div style={{ gridColumn: '1 / -1' }}><label style={lStyle}>Additional Notes</label><textarea rows={4} name="message" placeholder="Port restrictions, draft limitations, special cargo requirements..." style={{ ...iStyle, resize: 'vertical' }} /></div>
      </div>
      {status === 'error' && <p style={{ color: '#f87171', fontFamily: 'var(--font-mono)', fontSize: '12px', marginTop: '16px' }}>Something went wrong. Please email info@noemagroup.net directly.</p>}
      <div style={{ marginTop: '28px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button type="submit" disabled={status==='sending'} style={{ background: status==='sending'?'var(--navy3)':'var(--gold)', color: status==='sending'?'var(--faint)':'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 28px', border: 'none', cursor: status==='sending'?'not-allowed':'pointer' }}>
          {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
        </button>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--faint)' }}>Responses within 1 business day</span>
      </div>
    </form>
  );
}