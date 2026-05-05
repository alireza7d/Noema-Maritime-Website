'use client';
import { useState } from 'react';

const iStyle = { background: 'var(--navy3)', border: '1px solid var(--border2)', color: '#f0f4fa', fontFamily: 'inherit', fontSize: '15px', padding: '11px 14px', outline: 'none', width: '100%' };
const lStyle: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', display: 'block', marginBottom: '7px' };
const tabs = ['General Inquiry', 'Freight Request', 'Partner Introduction'];

export default function ContactForms() {
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', '52d94f14-fb96-4452-92f5-d74f6e79ac27');
    data.append('subject', 'NOEMA GROUP - ' + tabs[active]);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) setSent(true);
    } catch { }
    setSending(false);
  }

  if (sent) {
    return (
      <div style={{ background: 'var(--navy2)', border: '1px solid rgba(74,222,128,0.3)', padding: '40px 32px', textAlign: 'center' as const }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#f0f4fa', marginBottom: '12px' }}>Message Sent</div>
        <p style={{ color: '#8fa8c8', fontSize: '15px', lineHeight: 1.7 }}>Thank you. Our commercial desk will respond within one business day.</p>
        <button onClick={() => setSent(false)} style={{ marginTop: '24px', background: 'transparent', border: '1px solid var(--border2)', color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '10px 20px', cursor: 'pointer' }}>
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '1px', background: 'var(--border)', marginBottom: '1px' }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActive(i)} style={{ background: active === i ? 'var(--ocean)' : 'var(--navy2)', color: active === i ? 'var(--gold2)' : 'var(--faint)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '14px 20px', border: 'none', cursor: 'pointer' }}>{t}</button>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ background: 'var(--navy2)', border: '1px solid var(--border2)', padding: '32px', borderTop: 'none', display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
        <input type="hidden" name="from_name" value="NOEMA GROUP Website" />

        {active === 0 && <>
          <div><label style={lStyle}>Name</label><input style={iStyle} type="text" name="name" placeholder="Your name" required /></div>
          <div><label style={lStyle}>Company</label><input style={iStyle} type="text" name="company" placeholder="Company name" /></div>
          <div><label style={lStyle}>Email</label><input style={iStyle} type="email" name="email" placeholder="your@email.com" required /></div>
          <div><label style={lStyle}>Subject</label><input style={iStyle} type="text" name="subject_detail" placeholder="Subject" /></div>
          <div><label style={lStyle}>Message</label><textarea rows={4} name="message" style={{ ...iStyle, resize: 'vertical' as const }} placeholder="Your message..." required /></div>
        </>}

        {active === 1 && <>
          <div><label style={lStyle}>Company</label><input style={iStyle} type="text" name="company" placeholder="Company name" required /></div>
          <div><label style={lStyle}>Email</label><input style={iStyle} type="email" name="email" placeholder="your@email.com" required /></div>
          <div><label style={lStyle}>Cargo Type</label><input style={iStyle} type="text" name="cargo_type" placeholder="e.g. Gypsum, Coal" /></div>
          <div><label style={lStyle}>Route</label><input style={iStyle} type="text" name="route" placeholder="Load Port to Discharge Port" /></div>
          <div><label style={lStyle}>Quantity and Laycan</label><input style={iStyle} type="text" name="quantity" placeholder="e.g. 25,000 MT / Aug 1-10" /></div>
          <div><label style={lStyle}>Message</label><textarea rows={3} name="message" style={{ ...iStyle, resize: 'vertical' as const }} placeholder="Additional freight details..." /></div>
        </>}

        {active === 2 && <>
          <div><label style={lStyle}>Name and Company</label><input style={iStyle} type="text" name="name" placeholder="Your name / company" required /></div>
          <div><label style={lStyle}>Email</label><input style={iStyle} type="email" name="email" placeholder="your@email.com" required /></div>
          <div><label style={lStyle}>Role / Capacity</label><input style={iStyle} type="text" name="role" placeholder="e.g. Ship Owner, Broker, Port Agent" /></div>
          <div><label style={lStyle}>Area of Coverage</label><input style={iStyle} type="text" name="coverage" placeholder="Geographic coverage / commodities" /></div>
          <div><label style={lStyle}>Introduction</label><textarea rows={4} name="message" style={{ ...iStyle, resize: 'vertical' as const }} placeholder="Brief introduction and basis for collaboration..." /></div>
        </>}

        <button type="submit" disabled={sending} style={{ background: sending ? 'var(--navy3)' : 'var(--gold)', color: sending ? 'var(--faint)' : 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '14px 28px', border: 'none', cursor: sending ? 'not-allowed' : 'pointer', alignSelf: 'flex-start' as const }}>
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}