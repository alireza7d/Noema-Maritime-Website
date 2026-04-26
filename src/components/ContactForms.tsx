'use client';
import { useState } from 'react';

const iStyle: React.CSSProperties = {
  background: 'var(--navy3)', border: '1px solid var(--border2)',
  color: '#f0f4fa', fontFamily: 'inherit', fontSize: '15px',
  padding: '11px 14px', outline: 'none', width: '100%',
};
const lStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700,
  letterSpacing: '0.15em', textTransform: 'uppercase',
  color: 'var(--faint)', display: 'block', marginBottom: '7px',
};

const ACCESS_KEY = 'info@noemagroup.net';
const tabs = ['General Inquiry', 'Freight Request', 'Partner Introduction'];

export default function ContactForms() {
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    data.append('access_key', ACCESS_KEY);
    data.append('subject', 'NOEMA GROUP — ' + tabs[active]);
    data.append('from_name', 'NOEMA GROUP Website');
    data.append('redirect', 'false');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) { setStatus('sent'); (e.target as HTMLFormElement).reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '1px', background: 'var(--border)', marginBottom: '1px' }}>
        {tabs.map((t, i) => (
          <button key={t} type="button" onClick={() => { setActive(i); setStatus('idle'); }}
            style={{ background: active===i?'var(--ocean)':'var(--navy2)', color: active===i?'var(--gold2)':'var(--faint)',
              fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', padding: '14px 20px', border: 'none', cursor: 'pointer' }}>
            {t}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--navy2)', border: '1px solid var(--border2)', padding: '32px', borderTop: 'none' }}>
        {status === 'sent' ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--gold)' }}>✓</div>
            <p style={{ color: 'var(--gold2)', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Message Sent</p>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '20px' }}>Our commercial desk will respond within 1 business day.</p>
            <button type="button" onClick={() => setStatus('idle')} style={{ background: 'transparent', color: 'var(--silver)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--border2)', padding: '8px 16px', cursor: 'pointer' }}>Send Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input type="hidden" name="form_type" value={tabs[active]} />
            {active === 0 && (<>
              <div><label style={lStyle}>Name</label><input style={iStyle} type="text" name="name" placeholder="Your name" required /></div>
              <div><label style={lStyle}>Company</label><input style={iStyle} type="text" name="company" placeholder="Company name" /></div>
              <div><label style={lStyle}>Email</label><input style={iStyle} type="email" name="email" placeholder="your@email.com" required /></div>
              <div><label style={lStyle}>Subject</label><input style={iStyle} type="text" name="subject_line" placeholder="Subject" /></div>
              <div><label style={lStyle}>Message</label><textarea rows={4} name="message" style={{ ...iStyle, resize: 'vertical' }} placeholder="Your message..." required /></div>
            </>)}
            {active === 1 && (<>
              <div><label style={lStyle}>Company</label><input style={iStyle} type="text" name="company" placeholder="Company name" required /></div>
              <div><label style={lStyle}>Email</label><input style={iStyle} type="email" name="email" placeholder="your@email.com" required /></div>
              <div><label style={lStyle}>Cargo Type</label><input style={iStyle} type="text" name="cargo_type" placeholder="e.g. Gypsum, Coal" /></div>
              <div><label style={lStyle}>Route</label><input style={iStyle} type="text" name="route" placeholder="Load Port to Discharge Port" /></div>
              <div><label style={lStyle}>Quantity and Laycan</label><input style={iStyle} type="text" name="quantity_laycan" placeholder="e.g. 25,000 MT / Aug 1-10" /></div>
              <div><label style={lStyle}>Message</label><textarea rows={3} name="message" style={{ ...iStyle, resize: 'vertical' }} placeholder="Additional freight details..." /></div>
            </>)}
            {active === 2 && (<>
              <div><label style={lStyle}>Name and Company</label><input style={iStyle} type="text" name="name" placeholder="Your name / company" required /></div>
              <div><label style={lStyle}>Email</label><input style={iStyle} type="email" name="email" placeholder="your@email.com" required /></div>
              <div><label style={lStyle}>Role / Capacity</label><input style={iStyle} type="text" name="role" placeholder="e.g. Ship Owner, Broker, Port Agent" /></div>
              <div><label style={lStyle}>Area of Coverage</label><input style={iStyle} type="text" name="coverage" placeholder="Geographic coverage / commodities" /></div>
              <div><label style={lStyle}>Introduction</label><textarea rows={4} name="message" style={{ ...iStyle, resize: 'vertical' }} placeholder="Brief introduction and basis for collaboration..." required /></div>
            </>)}
            {status === 'error' && <p style={{ color: '#f87171', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>Something went wrong. Please email info@noemagroup.net directly.</p>}
            <button type="submit" disabled={status==='sending'} style={{ background: status==='sending'?'var(--navy3)':'var(--gold)', color: status==='sending'?'var(--faint)':'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 28px', border: 'none', cursor: status==='sending'?'not-allowed':'pointer', alignSelf: 'flex-start' }}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}