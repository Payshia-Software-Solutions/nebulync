'use client';

const values = [
  { icon: '🎯', title: 'Innovation First', desc: 'We embrace emerging technologies and creative approaches to solve complex business challenges.' },
  { icon: '🤝', title: 'Client Partnership', desc: 'Your success is our success. We build long-term partnerships, not just one-time projects.' },
  { icon: '🛡️', title: 'Quality & Security', desc: 'Enterprise-grade code quality with rigorous testing and security-first architecture.' },
  { icon: '⚡', title: 'Agile Delivery', desc: 'Rapid iterations and transparent communication keep your project on track and on budget.' },
];

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '7', label: 'Core Services' },
  { value: '24/7', label: 'Support & Maintenance' },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,163,90,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom">
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '80px' }} className="about-grid">
          <div>
            <div className="badge" style={{ marginBottom: '16px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4A35A', display: 'inline-block' }} />
              Who We Are
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0' }}>
              About <span className="gradient-text">Nebulync</span>
            </h2>
            <div className="gold-divider" />
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', marginBottom: '24px' }}>
              Nebulync Software Pvt Ltd is a forward-thinking technology company dedicated to delivering enterprise-grade software solutions. We specialize in custom web development, ERP systems, and domain-specific management platforms for hospitality, logistics, and events.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', marginBottom: '36px' }}>
              Our team of passionate engineers and designers work collaboratively with clients to understand their unique challenges, crafting tailored solutions that don&apos;t just meet requirements — they exceed expectations.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Work With Us</a>
              <a href="#services" className="btn-outline" style={{ textDecoration: 'none' }}>Our Work</a>
            </div>
          </div>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {stats.map(s => (
              <div key={s.label} className="card-glass" style={{ borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", marginBottom: '8px' }} className="gradient-text">{s.value}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 style={{ fontSize: '28px', fontWeight: 700, fontFamily: "'Outfit', sans-serif", textAlign: 'center', marginBottom: '48px' }}>
            Our Core <span className="gradient-text">Values</span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {values.map(v => (
              <div key={v.title} className="card-glass" style={{ borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{v.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '17px', fontFamily: "'Outfit', sans-serif", marginBottom: '12px' }}>{v.title}</h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ marginTop: '72px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>Technologies We Work With</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {['React', 'Next.js', 'Node.js', 'PHP', 'Laravel', 'TypeScript', 'MySQL', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS', 'REST APIs'].map(tech => (
              <span key={tech} style={{ padding: '8px 20px', borderRadius: '100px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: 500 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
