import Link from 'next/link';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Custom Web Development', href: '/#services' },
    { name: 'ERP Development', href: '/#services' },
    { name: 'Hotel Management', href: '/#services' },
    { name: 'Fleet Management', href: '/#services' },
    { name: 'Banquet Management', href: '/#services' },
    { name: 'Social Media Management', href: '/#services' },
  ];

  const products = [
    { name: 'BizFlow ERP', href: '/#bizflow' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <footer style={{ background: '#070707', borderTop: '1px solid rgba(196,163,90,0.12)', paddingTop: '72px' }}>
      <div className="container-custom">
        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img 
                src="/nebulync-without-icon-logo.png" 
                alt="Nebulync Logo" 
                style={{ height: '45px', width: 'auto', filter: 'invert(1) hue-rotate(180deg) brightness(1.2)' }} 
              />
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: '24px', maxWidth: '260px' }}>
              Engineering the future of enterprise software. Transforming ideas into powerful digital solutions.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { name: 'LinkedIn', icon: <FaLinkedinIn size={18} /> },
                { name: 'Facebook', icon: <FaFacebookF size={18} /> },
                { name: 'Instagram', icon: <FaInstagram size={18} /> },
                { name: 'X', icon: <FaXTwitter size={18} /> },
              ].map(s => (
                <a 
                  key={s.name} 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '10px', 
                    background: 'rgba(196,163,90,0.05)', 
                    border: '1px solid rgba(196,163,90,0.15)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease',
                    color: '#C4A35A'
                  }}
                  className="social-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '14px', marginBottom: '20px', color: '#C4A35A', letterSpacing: '0.5px' }}>Services</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {services.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Company */}
          <div>
            <h5 style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '14px', marginBottom: '20px', color: '#C4A35A', letterSpacing: '0.5px' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[...products, ...company].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '14px', marginBottom: '20px', color: '#C4A35A', letterSpacing: '0.5px' }}>Legal</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {legal.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
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
        .social-icon:hover { 
          background: rgba(196,163,90,0.15) !important; 
          border-color: rgba(196,163,90,0.4) !important;
          transform: translateY(-3px);
        }
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
