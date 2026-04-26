import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import MarketDashboard from '@/components/MarketDashboard';

export const metadata = {
  title: 'Market Intelligence — NOEMA GROUP',
  description: 'Live dry bulk freight market indicators, bunker prices, and trade flow data.',
};

export default function MarketIntelligence() {
  return (
    <main>
      <Nav />
      <PageHeader
        breadcrumb="Market Intelligence"
        title="Market Intelligence"
        subtitle="Live dry bulk freight market indicators, commodity prices, and trade flow data."
      />
      <MarketDashboard />
      <Footer />
    </main>
  );
}