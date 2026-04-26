import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactForms from '@/components/ContactForms';

export default function Contact() {
  return (
    <main>
      <Nav />
      <PageHeader breadcrumb="Contact" title="Contact NOEMA GROUP" subtitle="Commercial desk. Freight inquiries. Partner introductions." />
      <section style={{ padding: '96px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }}></span>Commercial Desk
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, color: '#f0f4fa', marginBottom: '24px' }}>Get In Touch</h2>
              {[['Email','info@noemagroup.net'],['Location','United States / International Maritime Network'],['Response Time','Within 1 business day']].map(([label,val])=>(
                <div key={label} style={{ background: 'var(--navy2)', border: '1px solid var(--border)', padding: '20px', marginBottom: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>{label}</div>
                  <div style={{ fontSize: '15px', color: '#dce6f0' }}>{val}</div>
                </div>
              ))}
            </div>
            <ContactForms />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}