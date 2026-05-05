import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactForms from '@/components/ContactForms';

export const metadata = {
  title: 'Contact â NOEMA GROUP',
  description: 'Get in touch with NOEMA GROUP commercial desk.',
};

export default function Contact() {
  return (
    <main>
      <Nav />
      <PageHeader
        title="Contact"
        subtitle="Reach our commercial desk for freight inquiries, vessel capacity questions, or general information."
      />
      <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px,5vw,64px)' }}>

            {/* Contact info */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '24px' }}>Get In Touch</div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--faint)', marginBottom: '8px' }}>Email</div>
                <a href="mailto:info@noemagroup.co" style={{ color: '#dce6f0', fontSize: '16px', textDecoration: 'none' }}>info@noemagroup.co</a>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--faint)', marginBottom: '8px' }}>Location</div>
                <div style={{ color: '#dce6f0', fontSize: '16px' }}>United States</div>
                <div style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px' }}>International Maritime Network</div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--faint)', marginBottom: '8px' }}>Response Time</div>
                <div style={{ color: '#dce6f0', fontSize: '16px' }}>Within one business day</div>
              </div>

              <div style={{ background: 'var(--navy3)', border: '1px solid var(--border)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '10px' }}>Commercial Desk</div>
                <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7 }}>
                  For cargo inquiries, include cargo type, quantity, load port, discharge port, and laycan window for a faster response.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '24px' }}>Send a Message</div>
              <ContactForms />
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}