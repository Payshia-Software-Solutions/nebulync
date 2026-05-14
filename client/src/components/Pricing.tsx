'use client';
import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for small businesses',
    monthlyPrice: 49,
    yearlyPrice: 39,
    icon: '🌱',
    color: '#4ade80',
    features: [
      'Up to 5 users',
      'Core ERP modules (Finance, Inventory)',
      'POS integration',
      '5 GB storage',
      'Email support',
      'Monthly reports',
      'Mobile-friendly UI',
    ],
    notIncluded: ['Multi-branch', 'Custom modules', 'API access', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    id: 'business',
    name: 'Business',
    subtitle: 'Ideal for growing teams',
    monthlyPrice: 129,
    yearlyPrice: 99,
    icon: '⚡',
    color: '#C4A35A',
    features: [
      'Up to 25 users',
      'All ERP modules',
      'Multi-branch support',
      'Advanced POS & CRM',
      '50 GB storage',
      'Priority email & chat support',
      'Custom report builder',
      'API access',
      'HR & Payroll module',
    ],
    notIncluded: ['Dedicated server', 'White-label'],
    cta: 'Get Started',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'For large-scale operations',
    monthlyPrice: 299,
    yearlyPrice: 239,
    icon: '🏢',
    color: '#c084fc',
    features: [
      'Unlimited users',
      'All Business features',
      'Dedicated cloud server',
      'White-label option',
      'Unlimited storage',
      '24/7 phone & priority support',
      'Custom module development',
      'SLA guarantee (99.9%)',
      'On-site training',
      'Data migration assistance',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const addons = [
  { name: 'Hotel Management Module', price: 49, icon: '🏨' },
  { name: 'Fleet Management Module', price: 39, icon: '🚛' },
  { name: 'Banquet Management Module', price: 29, icon: '🎪' },
  { name: 'Social Media Manager', price: 19, icon: '📱' },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding" style={{ background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '0', transform: 'translateX(-50%)', width: '900px', height: '500px', background: 'radial-gradient(ellipse, rgba(196,163,90,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4A35A', display: 'inline-block' }} />
            BizFlow Pricing
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0' }}>
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <div className="gold-divider" style={{ margin: '16px auto 24px' }} />
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.8 }}>
            Choose the BizFlow plan that fits your business. No hidden fees — scale up anytime.
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px 20px' }}>
            <span style={{ fontSize: '14px', color: yearly ? 'rgba(255,255,255,0.4)' : 'white', fontWeight: 500 }}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} style={{
              width: '46px', height: '26px', borderRadius: '13px', border: 'none', cursor: 'pointer', position: 'relative',
              background: yearly ? 'linear-gradient(135deg, #A8863E, #D4B86A)' : 'rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease',
            }}>
              <div style={{ position: 'absolute', top: '3px', left: yearly ? '23px' : '3px', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', transition: 'left 0.3s ease' }} />
            </button>
            <span style={{ fontSize: '14px', color: yearly ? 'white' : 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
              Yearly
              <span style={{ marginLeft: '8px', padding: '2px 8px', borderRadius: '100px', background: 'rgba(196,163,90,0.2)', color: '#C4A35A', fontSize: '11px', fontWeight: 700 }}>Save 25%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px', alignItems: 'start' }} className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.id} style={{
              borderRadius: '24px', overflow: 'hidden',
              border: plan.highlight ? '1px solid rgba(196,163,90,0.5)' : '1px solid rgba(255,255,255,0.08)',
              background: plan.highlight ? 'rgba(20,20,20,0.9)' : 'rgba(16,16,16,0.8)',
              position: 'relative',
              boxShadow: plan.highlight ? '0 0 60px rgba(196,163,90,0.12)' : 'none',
              transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}>
              {plan.badge && (
                <div style={{ position: 'absolute', top: '20px', right: '20px', padding: '5px 14px', borderRadius: '100px', background: 'linear-gradient(135deg, #A8863E, #D4B86A)', color: '#000', fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px' }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ padding: '36px 32px 28px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{plan.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", marginBottom: '4px' }}>{plan.name}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>{plan.subtitle}</p>

                <div style={{ marginBottom: '28px' }}>
                  <span style={{ fontSize: '44px', fontWeight: 900, fontFamily: "'Outfit', sans-serif", color: plan.highlight ? '#C4A35A' : '#fff' }}>
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginLeft: '6px' }}>/month</span>
                  {yearly && (
                    <div style={{ fontSize: '12px', color: '#4ade80', marginTop: '4px' }}>Billed annually — save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/yr</div>
                  )}
                </div>

                <Link href="/#contact" style={{
                  display: 'block', textAlign: 'center', textDecoration: 'none',
                  padding: '14px', borderRadius: '10px', fontWeight: 700, fontSize: '15px',
                  fontFamily: "'Outfit', sans-serif", transition: 'all 0.3s ease',
                  background: plan.highlight ? 'linear-gradient(135deg, #A8863E, #D4B86A)' : 'rgba(255,255,255,0.06)',
                  color: plan.highlight ? '#000' : '#fff',
                  border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.12)',
                }}>
                  {plan.cta}
                </Link>
              </div>

              <div style={{ padding: '0 32px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px', textTransform: 'uppercase', padding: '20px 0 16px' }}>What&apos;s included</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: plan.color, fontSize: '14px', flexShrink: 0 }}>✓</span>
                      {f}
                    </div>
                  ))}
                  {plan.notIncluded.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
                      <span style={{ fontSize: '14px', flexShrink: 0 }}>✕</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '32px' }}>
            Optional <span className="gradient-text">Add-on Modules</span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px' }}>
            {addons.map(a => (
              <div key={a.name} className="card-glass" style={{ borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontSize: '32px' }}>{a.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>{a.name}</div>
                  <div style={{ fontSize: '13px', color: '#C4A35A', fontWeight: 700 }}>${a.price}/mo</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div style={{ textAlign: 'center', padding: '48px', borderRadius: '24px', background: 'rgba(196,163,90,0.06)', border: '1px solid rgba(196,163,90,0.18)' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Custom Projects</p>
          <h3 style={{ fontSize: '26px', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '12px' }}>
            Need a Custom Web or ERP Solution?
          </h3>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', marginBottom: '28px', maxWidth: '520px', margin: '0 auto 28px' }}>
            We build fully bespoke systems tailored to your business. Let&apos;s discuss your requirements.
          </p>
          <Link href="/#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Request a Custom Quote →</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-grid > div { transform: scale(1) !important; }
        }
      `}</style>
    </section>
  );
}
