'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = ['Custom Web Development', 'ERP Development', 'Hotel Management', 'Fleet Management', 'Banquet Management', 'Social Media Management', 'BizFlow ERP SaaS', 'Other'];

  return (
    <section id="contact" className="section-padding" style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '0', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(196,163,90,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4A35A', display: 'inline-block' }} />
            Let&apos;s Talk
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.5px' }}>
            Start Your <span className="gradient-text">Project</span>
          </h2>
          <div className="gold-divider" style={{ margin: '16px auto 24px' }} />
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Ready to transform your business? Drop us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }} className="contact-grid">
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: '📧', label: 'Email Us', value: 'hello@nebulync.com', href: 'mailto:hello@nebulync.com' },
              { icon: '📞', label: 'Call Us', value: '077 048 1363', href: 'tel:+94770481363' },
              { icon: '📍', label: 'Visit Us', value: 'Rathnapura Rd, Pelmadulla, Sri Lanka', href: 'https://maps.google.com/?q=Pelmadulla,Sri+Lanka' },
            ].map(c => (
              <a key={c.label} href={c.href} className="card-glass" style={{ borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(196,163,90,0.1)', border: '1px solid rgba(196,163,90,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginBottom: '2px' }}>{c.label}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{c.value}</div>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="card-glass" style={{ borderRadius: '16px', padding: '24px' }}>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['LinkedIn', 'Facebook', 'Instagram', 'Twitter'].map(s => (
                  <div key={s} style={{ padding: '8px 14px', borderRadius: '8px', background: 'rgba(196,163,90,0.08)', border: '1px solid rgba(196,163,90,0.2)', fontSize: '12px', color: '#C4A35A', cursor: 'pointer' }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div style={{ padding: '20px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(196,163,90,0.1), rgba(196,163,90,0.05))', border: '1px solid rgba(196,163,90,0.2)' }}>
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>⚡</div>
              <div style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '4px' }}>Fast Response</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Average reply time: &lt; 24 hours on business days.</div>
            </div>
          </div>

          {/* Form */}
          <div className="card-glass" style={{ borderRadius: '24px', padding: '40px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '12px' }}>Message Sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline" style={{ marginTop: '24px' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'block' }}>Full Name *</label>
                    <input id="contact-name" required className="input-field" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'block' }}>Email Address *</label>
                    <input id="contact-email" required type="email" className="input-field" placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'block' }}>Company Name</label>
                  <input id="contact-company" className="input-field" placeholder="Your company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'block' }}>Service Interested In *</label>
                  <select id="contact-service" required className="input-field" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="" style={{ background: '#111' }}>Select a service...</option>
                    {services.map(s => <option key={s} value={s} style={{ background: '#111' }}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'block' }}>Your Message *</label>
                  <textarea id="contact-message" required className="input-field" placeholder="Tell us about your project..." rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical', fontFamily: 'inherit' }} />
                </div>
                <button id="contact-submit" type="submit" className="btn-primary" style={{ width: '100%', fontSize: '16px', padding: '16px' }}>
                  <span style={{ position: 'relative', zIndex: 1 }}>Send Message →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
