'use client';

const services = [
  {
    icon: '🌐',
    title: 'Custom Web Development',
    description: 'Tailor-made web applications built with cutting-edge technologies. From responsive landing pages to complex enterprise portals, we craft digital experiences that drive results.',
    tags: ['React', 'Next.js', 'Node.js', 'PHP'],
  },
  {
    icon: '🏢',
    title: 'ERP Development',
    description: 'End-to-end Enterprise Resource Planning systems that unify your operations — finance, HR, supply chain, and more — into one powerful, integrated platform.',
    tags: ['Finance', 'HR', 'Inventory', 'Reports'],
  },
  {
    icon: '🏨',
    title: 'Hotel Management',
    description: 'Complete hospitality management systems covering reservations, room management, billing, housekeeping, and guest experience — all in one streamlined solution.',
    tags: ['Reservations', 'POS', 'Billing', 'Housekeeping'],
  },
  {
    icon: '🚛',
    title: 'Fleet Management',
    description: 'Real-time fleet tracking and management solutions that optimize routes, reduce costs, manage maintenance schedules, and keep your vehicles running efficiently.',
    tags: ['GPS Tracking', 'Maintenance', 'Routes', 'Reports'],
  },
  {
    icon: '🎪',
    title: 'Banquet Management',
    description: 'Comprehensive event and banquet management software that handles bookings, menus, staffing, billing, and venue management with ease and precision.',
    tags: ['Bookings', 'Menus', 'Events', 'Billing'],
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description: 'Smart social media tools that automate scheduling, track analytics, manage multi-platform campaigns, and grow your brand presence across all channels.',
    tags: ['Scheduling', 'Analytics', 'Campaigns', 'Insights'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
      {/* Background accent */}
      <div style={{ position: 'absolute', right: '-10%', top: '20%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,163,90,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4A35A', display: 'inline-block' }} />
            What We Do
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0' }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="gold-divider" style={{ margin: '16px auto 24px' }} />
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {services.map((svc, i) => (
            <div key={svc.title} className="card-glass" style={{ borderRadius: '20px', padding: '32px', cursor: 'default' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div className="service-icon" style={{ fontSize: '28px', flexShrink: 0 }}>{svc.icon}</div>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '4px' }}>{svc.title}</h3>
                </div>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '24px' }}>{svc.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {svc.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '4px 12px', borderRadius: '100px',
                    background: 'rgba(196,163,90,0.08)', border: '1px solid rgba(196,163,90,0.2)',
                    color: 'rgba(196,163,90,0.9)', fontSize: '12px', fontWeight: 500,
                  }}>{tag}</span>
                ))}
              </div>
              {/* Hover arrow */}
              <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px', color: '#C4A35A', fontSize: '13px', fontWeight: 600 }}>
                Learn More <span style={{ fontSize: '16px' }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
