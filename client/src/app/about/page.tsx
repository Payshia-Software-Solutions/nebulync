'use client';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px', background: '#0A0A0A' }}>
        {/* Extended About Content or just the component */}
        <div>
          <About />
        </div>

        {/* Additional "Our Mission" or "Team" section for the full page */}
        <section className="section-padding mission-section" style={{ background: '#0D0D0D', borderTop: '1px solid rgba(196,163,90,0.1)' }}>
          <div className="container-custom">
            <div className="mission-grid">
              <div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, marginBottom: '24px' }}>Our <span className="gradient-text">Mission</span></h2>
                <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
                  At Nebulync, our mission is to empower businesses by bridging the gap between complex challenges and elegant technology solutions. We believe that every business, regardless of size, deserves access to enterprise-grade software that is intuitive, scalable, and secure.
                </p>
                <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}>
                  We are committed to continuous innovation, ethical engineering, and building lasting partnerships with our clients to drive their digital success in an ever-evolving market.
                </p>
              </div>
              <div className="card-glass" style={{ padding: '40px', borderRadius: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚀</div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Ready to Innovate?</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>
                  Join dozens of businesses that have transformed their operations with Nebulync.
                </p>
                <Link href="/#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .mission-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          @media (max-width: 992px) {
            .mission-grid {
              grid-template-columns: 1fr;
              gap: 48px;
              text-align: center;
            }
            .mission-section {
              padding: 60px 0;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
