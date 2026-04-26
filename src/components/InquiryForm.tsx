'use client';
const iStyle = { background: 'var(--navy3)', border: '1px solid var(--border2)', color: '#f0f4fa', fontFamily: 'inherit', fontSize: '15px', padding: '11px 14px', outline: 'none', width: '100%' };
const lStyle: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', display: 'block', marginBottom: '7px' };
export default function InquiryForm() {
  return (
    <div style={{ background: 'var(--navy2)', border: '1px solid var(--border2)', padding: '44px', maxWidth: '760px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Cargo Inquiry Form</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#f0f4fa', marginBottom: '8px' }}>Submit Your Freight Requirements</h2>
      <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '32px' }}>Our commercial desk will respond within one business day.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {[['Company Name','text','Your company name'],['Contact Person','text','Full name'],['Email Address','email','commercial@yourcompany.com'],['Phone / WhatsApp','tel','+1 000 000 0000'],['Quantity (MT)','text','e.g. 25,000 MT'],['Load Port','text','Port name / country'],['Discharge Port','text','Port name / country'],['Laycan','text','e.g. 01–10 Aug 2025'],['Freight Idea (if any)','text','USD per MT — optional']].map(([label,type,ph])=>(
          <div key={label as string}><label style={lStyle}>{label}</label><input type={type as string} placeholder={ph as string} style={iStyle} /></div>
        ))}
        <div><label style={lStyle}>Cargo Type</label><select style={{ ...iStyle, appearance: 'none' }}><option value="">Select cargo type</option>{['Gypsum','Limestone','Cement Clinker','Aggregates','Fertilizer','Coal','Grain','Steel Products','Other Dry Bulk'].map(c=><option key={c}>{c}</option>)}</select></div>
        <div><label style={lStyle}>Loading Terms</label><select style={{ ...iStyle, appearance: 'none' }}><option value="">Select terms</option>{['FIOS','FIO','Liner Terms','Other'].map(t=><option key={t}>{t}</option>)}</select></div>
        <div><label style={lStyle}>Discharge Terms</label><select style={{ ...iStyle, appearance: 'none' }}><option value="">Select terms</option>{['FIOS','FIO','Liner Terms','Other'].map(t=><option key={t}>{t}</option>)}</select></div>
        <div style={{ gridColumn: '1 / -1' }}><label style={lStyle}>Additional Notes</label><textarea rows={4} placeholder="Port restrictions, draft limitations, special cargo requirements..." style={{ ...iStyle, resize: 'vertical' }} /></div>
      </div>
      <div style={{ marginTop: '28px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button style={{ background: 'var(--gold)', color: 'var(--deep)', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 28px', border: 'none', cursor: 'pointer' }}>Submit Inquiry</button>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--faint)' }}>Responses within 1 business day</span>
      </div>
    </div>
  );
}