'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    
    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in top-middle of view
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Sections to track
    const sectionIds = ['hero', 'services', 'bizflow', 'contact'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home', section: 'hero' },
    { href: '/#services', label: 'Services', section: 'services' },
    { href: '/#bizflow', label: 'BizFlow', section: 'bizflow' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/#contact', label: 'Contact', section: 'contact' },
  ];

  const isActive = (link: { href: string; section?: string }) => {
    // If we are on a different page (Pricing, About, etc)
    if (pathname !== '/' && link.href !== '/') {
      return pathname === link.href;
    }
    
    // If we are on the homepage
    if (pathname === '/') {
      if (link.section) {
        return activeSection === link.section;
      }
      return link.href === '/' && (activeSection === 'hero' || activeSection === '');
    }

    return false;
  };

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,163,90,0.15)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/#home" style={{ textDecoration: 'none' }}>
          <img 
            src="/nebulync-without-icon-logo.png" 
            alt="Nebulync Logo" 
            style={{ height: '40px', width: 'auto', filter: 'invert(1) hue-rotate(180deg) brightness(1.2)' }} 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[36px]">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              className={`nav-link ${isActive(l) ? 'active' : ''}`}
              style={{
                color: isActive(l) ? '#C4A35A' : 'inherit',
                position: 'relative'
              }}
            >
              {l.label}
              {isActive(l) && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  background: '#C4A35A',
                  borderRadius: '2px'
                }} />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-[12px]">
          <Link href="/#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '14px', textDecoration: 'none' }}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          aria-label="Toggle menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '2px',
                background: (i === 1 && menuOpen) ? 'transparent' : '#C4A35A',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: 'rgba(10,10,10,0.98)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(196,163,90,0.15)',
        padding: '24px',
        display: menuOpen ? 'block' : 'none',
        transition: 'all 0.3s ease-in-out',
        maxHeight: '100vh',
        overflowY: 'auto',
        zIndex: 1001
      }}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
            style={{ 
              display: 'block', 
              padding: '14px 0', 
              color: isActive(l) ? '#C4A35A' : 'rgba(255,255,255,0.8)', 
              textDecoration: 'none', 
              fontSize: '16px', 
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              fontWeight: isActive(l) ? 700 : 400
            }}>
            {l.label}
          </Link>
        ))}
        <Link href="/#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ display: 'inline-block', marginTop: '16px', textDecoration: 'none', width: '100%', textAlign: 'center' }}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}

