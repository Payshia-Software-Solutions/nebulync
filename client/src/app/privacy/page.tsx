'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '140px', paddingBottom: '100px', background: '#0A0A0A', color: 'rgba(255,255,255,0.8)' }}>
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '24px', color: '#fff' }}>Privacy <span className="gradient-text">Policy</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '48px' }}>Last updated: May 14, 2026</p>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>1. Introduction</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              Welcome to Nebulync Software Pvt Ltd ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>2. Information We Collect</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, such as:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2 }}>
              <li>Name and Contact Data (Email, Phone, Address)</li>
              <li>Company Information</li>
              <li>Information provided in contact forms or inquiries</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>3. How We Use Your Information</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              We use personal information collected via our website for a variety of business purposes, including:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2 }}>
              <li>To provide and manage our services</li>
              <li>To communicate with you regarding your inquiries</li>
              <li>To send administrative information or marketing communications (with your consent)</li>
              <li>To improve our website and service offerings</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>4. Data Security</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that no electronic transmission over the internet can be guaranteed to be 100% secure.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>5. Contact Us</h2>
            <p style={{ lineHeight: 1.8 }}>
              If you have questions or comments about this policy, you may email us at: <span style={{ color: '#C4A35A' }}>hello@nebulync.com</span>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
