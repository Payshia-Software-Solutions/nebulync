'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Kasun Perera',
    role: 'CEO, Ceylon Traders Pvt Ltd',
    avatar: 'KP',
    color: '#C4A35A',
    rating: 5,
    quote: 'Nebulync transformed our entire business operations. The BizFlow ERP handles everything from our warehouse to payroll. The team was professional, responsive, and truly understood our needs.',
    company: 'Wholesale & Distribution',
    icon: '🏭',
  },
  {
    name: 'Nimali Fernando',
    role: 'Director, Grand Lotus Hotel',
    avatar: 'NF',
    color: '#4db8ff',
    rating: 5,
    quote: 'The hotel management system Nebulync built for us is outstanding. Reservations, billing, housekeeping — everything is seamless. Our guest satisfaction scores jumped 40% after deployment.',
    company: 'Hospitality',
    icon: '🏨',
  },
  {
    name: 'Ravindu Silva',
    role: 'Operations Manager, FastFleet Logistics',
    avatar: 'RS',
    color: '#4ade80',
    rating: 5,
    quote: 'Our fleet of 120+ vehicles is now tracked in real-time. Fuel costs dropped by 22% and our maintenance schedule is fully automated. Exceptional work by the Nebulync team!',
    company: 'Logistics & Transport',
    icon: '🚛',
  },
  {
    name: 'Sachini Wijeratne',
    role: 'Owner, The Banquet House',
    avatar: 'SW',
    color: '#fb923c',
    rating: 5,
    quote: 'Managing 80+ events per month used to be chaotic. With Nebulync\'s banquet system, we manage bookings, menus, and billing from one screen. Absolutely game-changing software.',
    company: 'Events & Hospitality',
    icon: '🎪',
  },
  {
    name: 'Tharaka Dissanayake',
    role: 'Marketing Head, BrandVault Agency',
    avatar: 'TD',
    color: '#c084fc',
    rating: 5,
    quote: 'The social media management tool Nebulync built for us saves our team 20+ hours a week. The analytics dashboard is incredibly insightful. Best tech investment we\'ve made.',
    company: 'Digital Marketing',
    icon: '📱',
  },
  {
    name: 'Amitha Jayasinghe',
    role: 'CFO, Summit Retail Group',
    avatar: 'AJ',
    color: '#34d399',
    rating: 5,
    quote: 'We migrated from spreadsheets to BizFlow in 3 weeks. The financial modules are robust, reporting is instant, and the support team is always there when we need them.',
    company: 'Retail & Finance',
    icon: '💰',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="section-padding" style={{ background: '#070707', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '-10%', bottom: '0', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,163,90,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span>⭐</span> Client Reviews
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.5px' }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="gold-divider" style={{ margin: '16px auto 24px' }} />
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
            Trusted by businesses across Sri Lanka. Real stories, real impact.
          </p>
        </div>

        {/* Featured testimonial */}
        <div style={{ maxWidth: '800px', margin: '0 auto 48px', position: 'relative' }}>
          <div className="card-glass" style={{ borderRadius: '28px', padding: '48px', textAlign: 'center', border: '1px solid rgba(196,163,90,0.2)' }}>
            {/* Quote mark */}
            <div style={{ fontSize: '72px', lineHeight: 1, color: 'rgba(196,163,90,0.15)', fontFamily: 'Georgia, serif', marginBottom: '-16px' }}>&ldquo;</div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} style={{ color: '#C4A35A', fontSize: '18px' }}>★</span>
              ))}
            </div>

            {/* Quote text */}
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: '36px', fontStyle: 'italic' }}>
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `rgba(${current.color === '#C4A35A' ? '196,163,90' : current.color === '#4db8ff' ? '77,184,255' : current.color === '#4ade80' ? '74,222,128' : '196,163,90'},0.15)`, border: `2px solid ${current.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px', color: current.color, flexShrink: 0 }}>
                {current.avatar}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '16px' }}>{current.name}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{current.role}</div>
              </div>
              <div style={{ marginLeft: '16px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                {current.icon} {current.company}
              </div>
            </div>
          </div>
        </div>

        {/* Avatars selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {testimonials.map((t, i) => (
            <button key={t.name} onClick={() => setActive(i)} title={t.name} style={{
              width: '52px', height: '52px', borderRadius: '50%', border: `2px solid ${i === active ? t.color : 'rgba(255,255,255,0.12)'}`,
              background: i === active ? `rgba(196,163,90,0.15)` : 'rgba(255,255,255,0.04)',
              cursor: 'pointer', fontWeight: 800, fontSize: '13px',
              color: i === active ? t.color : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease',
              transform: i === active ? 'scale(1.15)' : 'scale(1)',
            }}>
              {t.avatar}
            </button>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: i === active ? '#C4A35A' : 'rgba(255,255,255,0.15)', transition: 'all 0.3s ease' }} />
          ))}
        </div>

        {/* Stats row */}
        <div style={{ marginTop: '72px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
          {[
            { value: '50+', label: 'Happy Clients', icon: '😊' },
            { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
            { value: '100%', label: 'Project Success Rate', icon: '🎯' },
            { value: '<24h', label: 'Support Response', icon: '⚡' },
          ].map(s => (
            <div key={s.label} className="card-glass" style={{ borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{s.icon}</div>
              <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: "'Outfit', sans-serif', marginBottom: '6px" }} className="gradient-text">{s.value}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
