'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '140px', paddingBottom: '100px', background: '#0A0A0A', color: 'rgba(255,255,255,0.8)' }}>
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '24px', color: '#fff' }}>Terms of <span className="gradient-text">Service</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '48px' }}>Last updated: May 14, 2026</p>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>1. Agreement to Terms</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              By accessing or using the services provided by Nebulync Software Pvt Ltd, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>2. Services</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              Nebulync provides custom software development, ERP solutions, and consulting services. The specific scope of work, timelines, and fees for any project will be governed by a separate Service Agreement or Statement of Work.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>3. Intellectual Property</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              Unless otherwise agreed in writing, all source code, designs, and documentation developed by Nebulync remain our intellectual property until full payment for the respective services has been received, at which point ownership (or license rights) will transfer according to the project contract.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>4. Limitation of Liability</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              In no event shall Nebulync Software Pvt Ltd be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>5. Governing Law</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              These terms shall be governed by and defined following the laws of Sri Lanka. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Sri Lanka.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>6. Changes to Terms</h2>
            <p style={{ lineHeight: 1.8 }}>
              We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date of these Terms of Service.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
