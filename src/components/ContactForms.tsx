'use client';
import { useState } from 'react';
const iStyle = { background: 'var(--navy3)', border: '1px solid var(--border2)', color: '#f0f4fa', fontFamily: 'inherit', fontSize: '15px', padding: '11px 14px', outline: 'none', width: '100%' };
const lStyle: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', display: 'block', marginBottom: '7px' };
const tabs = ['General Inquiry','Freight Request','Partner Introduction'];
export default function ContactForms() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div style={{ display: 'flex', gap: '1px', background: 'var(--border)', marginBottom: '1px' }}>
        {tabs.map((t,i)=><button key={t} onClick={()=>setActive(i)} style={{ background: active===i?'var(--ocean)':'var(--navy2)', color: active===i?'var(--gold2)':'var(--faint)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 20px', border: 'none', cursor: 'pointer' }}>{t}</button>)}
      </div>
      <div style={{ background: 'var(--navy2)', border: '1px solid var(--border2)', padding: '32px', borderTop: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {active===0 && <><div><label style={lStyle}>Name</label><input style={iStyle} type="text" placeholder="Your name" /></div><div><label style={lStyle}>Company</label><input style={iStyle} type="text" placeholder="Company name" /></div><div><label style={lStyle}>Email</label><input style={iStyle} type="email" placeholder="your@email.com" /></div><div><label style={lStyle}>Subject</label><input style={iStyle} type="text" placeholder="Subject" /></div><div><label style={lStyle}>Message</label><textarea rows={4} style={{ ...iStyle, resize:'vertical' as const }} placeholder="Your message..." /></div></>}
        {active===1 && <><div><label style={lStyle}>Company</label><input style={iStyle} type="text" placeholder="Company name" /></div><div><label style={lStyle}>Email</label><input style={iStyle} type="email" placeholder="your@email.com" /></div><div><label style={lStyle}>Cargo Type</label><input style={iStyle} type="text" placeholder="e.g. Gypsum, Coal" /></div><div><label style={lStyle}>Route</label><input style={iStyle} type="text" placeholder="Load Port → Discharge Port" /></div><div><label style={lStyle}>Quantity & Laycan</label><input style={iStyle} type="text" placeholder="e.g. 25,000 MT / Aug 1–10" /></div><div><label style={lStyle}>Message</label><textarea rows={3} style={{ ...iStyle, resize:'vertical' as const }} placeholder="Additional freight details..." /></div></>}
        {active===2 && <><div><label style={lStyle}>Name & Company</label><input style={iStyle} type="text" placeholder="Your name / company" /></div><div><label style={lStyle}>Email</label><input style={iStyle} type="email" placeholder="your@email.com" /></div><div><label style={lStyle}>Role / Capacity</label><input style={iStyle} type="text" placeholder="e.g. Ship Owner, Broker, Port Agent" /></div><div><label style={lStyle}>Area of Coverage</label><input style={iStyle} type="text" placeholder="Geographic coverage / commodities" /></div><div><label style={lStyle}>Introduction</label><textarea rows={4} style={{ ...iStyle, resize:'vertical' as const }} placeholder="Brief introduction and basis for collaboration..." /></div></>}
        <button style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 28px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Send Message</button>
      </div>
    </div>
  );
}