'use client';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: '#0A0A0A' }}>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
