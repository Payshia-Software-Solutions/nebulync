'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '140px', paddingBottom: '100px', background: '#0A0A0A', color: 'rgba(255,255,255,0.8)' }}>
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '24px', color: '#fff' }}>Cookie <span className="gradient-text">Policy</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '48px' }}>Last updated: May 14, 2026</p>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>1. What are Cookies?</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work or to work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>2. How We Use Cookies</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              We use cookies for the following purposes:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2 }}>
              <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly.</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website.</li>
              <li><strong>Preference Cookies:</strong> To remember your settings and preferences.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>3. Types of Cookies We Use</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              Our website may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them).
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>4. Managing Cookies</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
              Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or to notify you when a cookie is being set. However, please note that blocking essential cookies may impact your experience on our website.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#C4A35A' }}>5. Contact Us</h2>
            <p style={{ lineHeight: 1.8 }}>
              If you have any questions about our use of cookies, please contact us at: <span style={{ color: '#C4A35A' }}>hello@nebulync.com</span>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
