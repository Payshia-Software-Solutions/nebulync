'use client';

const clients = [
  { name: 'Aradhana Lagoon', logo: '/client-logos/aradhana-logo-lagoon.png' },
  { name: 'Ceylon Pharma', logo: '/client-logos/ceylon-pharma-logo.webp' },
  { name: 'EFER Recycling', logo: '/client-logos/efer-recycling-logo.webp' },
  { name: 'GoTickets', logo: '/client-logos/gotickets-logo.png' },
  { name: 'GSR', logo: '/client-logos/gsr.webp' },
  { name: 'Olinton', logo: '/client-logos/olinton-logo.webp' },
  { name: 'Sapphire Trails', logo: '/client-logos/sapphire-trails.webp' },
  { name: 'Tea Jar', logo: '/client-logos/tea-jar-logo.webp' },
];

export default function Clients() {
  return (
    <section style={{ 
      background: '#070707', 
      padding: '40px 0', 
      borderBottom: '1px solid rgba(196,163,90,0.1)',
      overflow: 'hidden'
    }}>
      <div className="container-custom">
        <p style={{ 
          textAlign: 'center', 
          fontSize: '13px', 
          color: 'rgba(255,255,255,0.3)', 
          textTransform: 'uppercase', 
          letterSpacing: '3px',
          marginBottom: '20px'
        }}>
          Trusted by Industry Leaders
        </p>
        
        <div className="clients-wrapper">
          <div className="clients-track">
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="client-logo">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  title={client.name}
                  style={{ 
                    height: '55px', 
                    width: 'auto', 
                    maxWidth: '220px',
                    objectFit: 'contain',
                    filter: client.name === 'Aradhana Lagoon' ? 'invert(1) brightness(1.5)' : 'none'
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clients-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 30px 0;
          overflow: hidden;
        }

        .clients-track {
          display: flex;
          gap: 100px;
          animation: scroll 60s linear infinite;
          width: max-content;
        }

        .clients-track:hover {
          animation-play-state: paused;
        }

        .client-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.6;
          filter: grayscale(1) brightness(1.2);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          white-space: nowrap;
          padding: 10px 0;
        }

        .client-logo:hover {
          opacity: 1;
          filter: grayscale(0);
          transform: scale(1.15);
        }

        .client-name {
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.5px;
          transition: color 0.3s ease;
        }

        .client-logo:hover .client-name {
          color: #C4A35A;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .clients-wrapper::before,
        .clients-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .clients-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #070707 0%, transparent 100%);
        }

        .clients-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #070707 0%, transparent 100%);
        }

        @media (max-width: 768px) {
          .client-name { font-size: 18px; }
          .clients-track { gap: 40px; }
          .clients-wrapper::before, .clients-wrapper::after { width: 60px; }
        }
      `}</style>
    </section>
  );
}
