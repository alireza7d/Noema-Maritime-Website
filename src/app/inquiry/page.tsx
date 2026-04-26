import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import InquiryForm from '@/components/InquiryForm';

export default function Inquiry() {
  return (
    <main>
      <Nav />
      <PageHeader breadcrumb="Cargo Inquiry" title="Cargo Inquiry" subtitle="Submit your cargo requirements and our commercial desk will review and respond within one business day." />
      <section style={{ padding: '96px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <InquiryForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}