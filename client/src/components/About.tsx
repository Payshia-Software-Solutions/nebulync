'use client';
import Link from 'next/link';

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
              <Link href="/#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Work With Us</Link>
              <Link href="/#services" className="btn-outline" style={{ textDecoration: 'none' }}>Our Work</Link>
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
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '40px' }}>Technologies We Work With</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Row 1 - 10 Icons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 60px' }} className="tech-row">
              {[
                { name: 'React', slug: 'react', color: '#61DAFB' },
                { name: 'Next.js', slug: 'nextdotjs', color: '#FFFFFF' },
                { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
                { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
                { name: 'Python', slug: 'python', color: '#3776AB' },
                { name: 'PHP', slug: 'php', color: '#777BB4' },
                { name: 'Laravel', slug: 'laravel', color: '#FF2D20' },
                { name: 'Tailwind CSS', slug: 'tailwindcss', color: '#06B6D4' },
                { name: 'Redux', slug: 'redux', color: '#764ABC' },
                { name: 'Figma', slug: 'figma', color: '#F24E1E' },
              ].map(tech => (
                <div key={tech.name} title={tech.name} className="tech-item">
                  <img 
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} 
                    alt={tech.name}
                    style={{ width: '52px', height: '52px', transition: 'all 0.4s ease', filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.05))' }}
                    className="hover-scale"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 - 9 Icons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 60px' }} className="tech-row">
              {[
                { name: 'MySQL', slug: 'mysql', color: '#4479A1' },
                { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
                { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
                { name: 'Docker', slug: 'docker', color: '#2496ED' },
                { name: 'Vercel', slug: 'vercel', color: '#FFFFFF' },
                { name: 'Firebase', slug: 'firebase', color: '#FFCA28' },
                { name: 'GitHub', slug: 'github', color: '#FFFFFF' },
                { name: 'Stripe', slug: 'stripe', color: '#008CDD' },
                { name: 'REST APIs', slug: 'postman', color: '#FF6C37' },
              ].map(tech => (
                <div key={tech.name} title={tech.name} className="tech-item">
                  <img 
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} 
                    alt={tech.name}
                    style={{ width: '52px', height: '52px', transition: 'all 0.4s ease', filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.05))' }}
                    className="hover-scale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .tech-row { gap: 32px 50px !important; }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .tech-row { gap: 24px 24px !important; }
          .tech-item img { width: 42px !important; height: 42px !important; }
        }
        .hover-scale:hover {
          transform: scale(1.2);
          filter: drop-shadow(0 0 15px rgba(196,163,90,0.3)) !important;
        }
      `}</style>
    </section>
  );
}
