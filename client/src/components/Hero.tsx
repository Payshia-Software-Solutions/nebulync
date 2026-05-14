'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,163,90,${p.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(196,163,90,${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section id="home" style={{
      position: 'relative', minHeight: '100vh', display: 'flex',
      alignItems: 'center', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 20% 50%, rgba(196,163,90,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(196,163,90,0.04) 0%, transparent 60%), #0A0A0A',
    }}>
      {/* Animated Canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/hero_bg.png" alt="Hero background" fill style={{ objectFit: 'cover', opacity: 0.12 }} priority />
      </div>

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, transparent 40%, rgba(10,10,10,0.8) 100%)' }} />
      <div style={{ position: 'absolute', left: '-20%', top: '10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,163,90,0.07) 0%, transparent 70%)', zIndex: 1 }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingTop: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            <div className="badge animate-fade-up" style={{ marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4A35A', display: 'inline-block' }} />
              Premium Software Solutions
            </div>

            <h1 style={{ fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}
              className="animate-fade-up delay-100">
              Building the Future<br />
              of <span className="gradient-text">Digital Business</span>
            </h1>

            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '520px' }}
              className="animate-fade-up delay-200">
              From custom web platforms to full-scale ERP systems — Nebulync engineers powerful, scalable solutions that transform how businesses operate and grow.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }} className="animate-fade-up delay-300">
              <a href="#services" className="btn-primary" style={{ textDecoration: 'none' }}>Explore Services</a>
              <a href="#bizflow" className="btn-outline" style={{ textDecoration: 'none' }}>Discover BizFlow</a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '40px', marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}
              className="animate-fade-up delay-400">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '7+', label: 'Solutions Offered' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '32px', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }} className="gradient-text">{s.value}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="animate-fade-right delay-200">
            {/* Spinning ring */}
            <div style={{
              position: 'absolute', width: '460px', height: '460px', borderRadius: '50%',
              border: '1px solid rgba(196,163,90,0.15)',
              top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            }} className="animate-spin-slow" />
            <div style={{
              position: 'absolute', width: '360px', height: '360px', borderRadius: '50%',
              border: '1px dashed rgba(196,163,90,0.1)',
              top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            }} />

            {/* Main card */}
            <div className="card-glass animate-float" style={{
              borderRadius: '24px', padding: '32px', maxWidth: '380px', width: '100%',
              background: 'rgba(20,20,20,0.85)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg,#A8863E,#D4B86A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>⚡</div>
                <div>
                  <div style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>BizFlow ERP</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>SaaS Platform</div>
                </div>
                <div style={{ marginLeft: 'auto', padding: '4px 10px', borderRadius: '100px', background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontSize: '11px', fontWeight: 600 }}>● Live</div>
              </div>

              {/* Mini chart bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '70px', marginBottom: '20px' }}>
                {[40,65,45,80,60,90,75,95,70,88].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '4px', background: i === 9 ? 'linear-gradient(180deg,#D4B86A,#A8863E)' : 'rgba(196,163,90,0.2)' }} />
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: 'Revenue', value: '+28%', icon: '📈' },
                  { label: 'Orders', value: '1,240', icon: '📦' },
                  { label: 'Users', value: '3,800', icon: '👥' },
                  { label: 'Uptime', value: '99.9%', icon: '🛡️' },
                ].map(m => (
                  <div key={m.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '18px', marginBottom: '4px' }}>{m.icon}</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#C4A35A', fontFamily: "'Outfit', sans-serif" }}>{m.value}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="card-glass" style={{ position: 'absolute', top: '10%', left: '-5%', padding: '10px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: 600 }}>
              🌐 Web Dev
            </div>
            <div className="card-glass" style={{ position: 'absolute', bottom: '15%', right: '-5%', padding: '10px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: 600, color: '#C4A35A' }}>
              🏨 Hotel Mgmt
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 2 }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1.5px', height: '50px', background: 'linear-gradient(to bottom, rgba(196,163,90,0.6), transparent)' }} className="animate-pulse-gold" />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            text-align: center !important;
            padding-top: 40px !important;
          }
          .hero-grid > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-grid p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-grid .animate-fade-up[style*="display: flex"] {
            justify-content: center !important;
          }
          .hero-grid .animate-fade-right {
            margin-top: 40px !important;
            transform: scale(0.85) !important;
          }
        }
        @media (max-width: 480px) {
          .hero-grid h1 { font-size: 36px !important; }
          .hero-grid .animate-fade-right { transform: scale(0.7) !important; margin-top: 0 !important; }
          .hero-grid div[style*="gap: 40px"] { gap: 20px !important; flex-wrap: wrap !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
