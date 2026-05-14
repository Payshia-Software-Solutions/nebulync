'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const positions = [
  {
    title: 'Senior Full Stack Developer',
    type: 'Full-time',
    location: 'Remote / Pelmadulla',
    department: 'Engineering',
    description: 'We are looking for a skilled developer proficient in Next.js, TypeScript, and Node.js to lead our core product development.'
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    description: 'Help us create stunning, intuitive interfaces for our enterprise SaaS products and client websites.'
  },
  {
    title: 'ERP Solution Consultant',
    type: 'Full-time',
    location: 'Sri Lanka',
    department: 'Sales & Support',
    description: 'Bridge the gap between business needs and technical solutions. Experience with ERP systems is a plus.'
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Contract',
    location: 'Remote',
    department: 'Marketing',
    description: 'Drive growth and brand awareness for Nebulync and our clients across social and search platforms.'
  }
];

export default function Careers() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section style={{ 
          padding: '160px 0 80px', 
          background: 'radial-gradient(circle at 50% -20%, rgba(196,163,90,0.15) 0%, transparent 50%)',
          textAlign: 'center'
        }}>
          <div className="container-custom">
            <div className="badge" style={{ marginBottom: '24px' }}>🚀 Join the Future</div>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '24px' }}>
              Build the Next Generation of <span className="gradient-text">Enterprise Software</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
              At Nebulync, we're on a mission to transform how businesses operate through intelligent software. Join our remote-first team of innovators and creators.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {[
                { title: 'Remote-First', desc: 'Work from anywhere in Sri Lanka or the world. We value output over office hours.', icon: '🌍' },
                { title: 'Modern Stack', desc: 'Work with the latest technologies like Next.js, Tailwind, and Cloud Native infra.', icon: '💻' },
                { title: 'Growth Mindset', desc: 'Continuous learning is in our DNA. We provide resources for your professional development.', icon: '📈' },
                { title: 'Meaningful Work', desc: 'See your code and designs directly impact hundreds of businesses across the island.', icon: '🎯' }
              ].map(item => (
                <div key={item.title} className="card-glass" style={{ padding: '40px', borderRadius: '24px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '20px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontSize: '15px' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding" style={{ background: 'rgba(196,163,90,0.02)' }}>
          <div className="container-custom">
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>Open Positions</h2>
              <div className="gold-divider" style={{ width: '60px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {positions.map((p, i) => (
                <div key={i} className="card-glass position-card" style={{ 
                  padding: '30px', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                  border: '1px solid rgba(196,163,90,0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ flex: '1', minWidth: '300px' }}>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '12px', color: '#C4A35A', background: 'rgba(196,163,90,0.1)', padding: '4px 10px', borderRadius: '100px', fontWeight: 600 }}>{p.department}</span>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', padding: '4px 10px' }}>{p.type}</span>
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.6 }}>{p.description}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginBottom: '15px' }}>📍 {p.location}</div>
                    <a href={`mailto:careers@nebulync.com?subject=Application for ${p.title}`} className="btn-primary" style={{ padding: '12px 24px', fontSize: '14px' }}>
                      Apply Now →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <div className="card-glass" style={{ padding: '80px 40px', borderRadius: '40px', background: 'linear-gradient(135deg, rgba(196,163,90,0.15), rgba(196,163,90,0.05))' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>Don't see a perfect fit?</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                We're always looking for talented individuals. Send us your resume and tell us why you'd be a great addition to the Nebulync team.
              </p>
              <a href="mailto:careers@nebulync.com" className="btn-outline">Send General Application</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .position-card:hover {
          border-color: rgba(196,163,90,0.3) !important;
          background: rgba(196,163,90,0.03) !important;
          transform: translateY(-5px);
        }
        @media (max-width: 768px) {
          .position-card { text-align: left !important; }
          .position-card > div { text-align: left !important; width: 100%; }
        }
      `}</style>
    </div>
  );
}
