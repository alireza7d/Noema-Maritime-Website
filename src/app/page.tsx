import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import WhatWeMove from '@/components/WhatWeMove';
import ServicesGrid from '@/components/ServicesGrid';
import VesselSection from '@/components/VesselSection';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Overview />
      <WhatWeMove />
      <ServicesGrid />
      <VesselSection />
      <CtaBand />
      <Footer />
    </main>
  );
}