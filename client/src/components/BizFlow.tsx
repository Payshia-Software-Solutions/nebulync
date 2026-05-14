'use client';
import Image from 'next/image';

const features = [
  { icon: '📊', title: 'Real-Time Analytics', desc: 'Live dashboards with KPIs, charts, and business intelligence at your fingertips.' },
  { icon: '🏭', title: 'Inventory & Warehouse', desc: 'Full stock control, purchase orders, and multi-location warehouse management.' },
  { icon: '💰', title: 'Finance & Accounting', desc: 'Automated ledgers, invoicing, tax compliance, and financial reporting.' },
  { icon: '👥', title: 'HR & Payroll', desc: 'Employee lifecycle management, attendance tracking, and automated payroll.' },
  { icon: '🛒', title: 'Sales & CRM', desc: 'Lead management, customer relationships, and sales pipeline automation.' },
  { icon: '📋', title: 'Project Management', desc: 'Task tracking, team collaboration, timesheets, and project milestones.' },
  { icon: '🔗', title: 'API Integrations', desc: 'Connect with third-party tools, payment gateways, and e-commerce platforms.' },
  { icon: '☁️', title: 'Cloud-Native SaaS', desc: 'Secure, scalable cloud infrastructure with 99.9% uptime guarantee.' },
];

export default function BizFlow() {
  return (
    <section id="bizflow" className="section-padding" style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
      {/* Gold glow left */}
      <div style={{ position: 'absolute', left: '-15%', bottom: '10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,163,90,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom">
        {/* Top label */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span>⚡</span> Flagship Product
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-0.5px' }}>
            Introducing <span className="gradient-text">BizFlow</span>
          </h2>
          <div className="gold-divider" style={{ margin: '16px auto 24px' }} />
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            The all-in-one ERP SaaS platform engineered for modern businesses. Manage everything from one intelligent dashboard.
          </p>
        </div>

        {/* Main content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '80px' }} className="biz-grid">
          {/* Left — mockup */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-2px', borderRadius: '22px', background: 'linear-gradient(135deg, rgba(196,163,90,0.3), transparent, rgba(196,163,90,0.1))', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, borderRadius: '20px', overflow: 'hidden', background: '#111' }}>
              <Image src="/bizflow_mockup.png" alt="BizFlow ERP Dashboard" width={620} height={420} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            {/* Floating stats */}
            <div className="card-glass" style={{ position: 'absolute', bottom: '-24px', right: '-24px', padding: '16px 20px', borderRadius: '16px', zIndex: 2 }}>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#C4A35A', fontFamily: "'Outfit', sans-serif" }}>99.9%</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Uptime SLA</div>
            </div>
            <div className="card-glass" style={{ position: 'absolute', top: '-20px', left: '-20px', padding: '16px 20px', borderRadius: '16px', zIndex: 2 }}>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#C4A35A', fontFamily: "'Outfit', sans-serif" }}>Multi-Tenant</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Isolation & Security</div>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '16px' }}>
              One Platform. <span className="gradient-text">Infinite Possibilities.</span>
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '32px' }}>
              BizFlow is Nebulync&apos;s flagship cloud ERP — designed from the ground up for scalability, security, and ease of use. Whether you&apos;re a growing startup or an established enterprise, BizFlow adapts to your needs.
            </p>

            {/* USPs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              {[
                'Multi-company & multi-branch support',
                'Role-based access control & audit trails',
                'Real-time notifications & workflow automation',
                'Custom report builder with export options',
                'Mobile-friendly responsive interface',
              ].map(point => (
                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(196,163,90,0.15)', border: '1px solid rgba(196,163,90,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#C4A35A', flexShrink: 0 }}>✓</div>
                  {point}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Request a Demo</a>
              <a href="#contact" className="btn-outline" style={{ textDecoration: 'none' }}>Start Free Trial</a>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {features.map(f => (
            <div key={f.title} className="card-glass" style={{ borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{f.icon}</div>
              <h4 style={{ fontWeight: 700, fontSize: '15px', fontFamily: "'Outfit', sans-serif", marginBottom: '8px' }}>{f.title}</h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing CTA banner */}
        <div style={{ marginTop: '60px', borderRadius: '24px', padding: '48px', background: 'linear-gradient(135deg, rgba(196,163,90,0.1) 0%, rgba(196,163,90,0.05) 100%)', border: '1px solid rgba(196,163,90,0.2)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '12px' }}>
            Ready to Transform Your Business?
          </h3>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
            Start with a personalized demo and see BizFlow in action for your industry.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Get a Free Demo →</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .biz-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
