'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const links = {
    Services: ['Custom Web Development', 'ERP Development', 'Hotel Management', 'Fleet Management', 'Banquet Management', 'Social Media Management'],
    Products: ['BizFlow ERP', 'BizFlow Demo', 'Pricing', 'Documentation'],
    Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer style={{ background: '#070707', borderTop: '1px solid rgba(196,163,90,0.12)', paddingTop: '72px' }}>
      <div className="container-custom">
        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>
              <span style={{ color: '#fff' }}>Nebu</span>
              <span style={{ color: '#C4A35A' }}>Lync</span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: '24px', maxWidth: '260px' }}>
              Engineering the future of enterprise software. Transforming ideas into powerful digital solutions.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['in', 'fb', 'ig', 'tw'].map(s => (
                <div key={s} style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(196,163,90,0.08)', border: '1px solid rgba(196,163,90,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#C4A35A', fontSize: '12px', fontWeight: 700 }}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h5 style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '14px', marginBottom: '20px', color: '#C4A35A', letterSpacing: '0.5px' }}>{title}</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="footer-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', paddingBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © {currentYear} Nebulync Software Pvt Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)' }}>
            Built with ❤️ by the Nebulync Team
          </p>
        </div>
      </div>

      <style>{`
        .footer-link { font-size: 13px; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.3s; }
        .footer-link:hover { color: #fff; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
