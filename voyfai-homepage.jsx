import { useState, useEffect, useRef } from "react";

// ─── VOYFAI HOMEPAGE ───────────────────────────────────────────────
// Target: Freight forwarder owners considering joining the group
// Tone: Established, trustworthy, modern-but-not-startup
// Blueprint: LP Global structure + Hellmann credibility + better design

const COLORS = {
  navy: "#111111",
  navyLight: "#181818",
  steel: "#1F1F1F",
  slate: "#6B6B6B",
  copper: "#03A696",
  copperLight: "#04C9B4",
  copperMuted: "rgba(3, 166, 150, 0.08)",
  cream: "#F7F7F7",
  warmWhite: "#FFFFFF",
  sand: "#EBEBEB",
  text: "#1D1D1F",
  textMuted: "#86868B",
  white: "#FFFFFF",
  border: "rgba(0, 0, 0, 0.06)",
};

const HERO_IMG =



// ─── SVG ICONS ─────────────────────────────────────────────────────
const Icons = {
  anchor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><path d="M5 12H2a10 10 0 0020 0h-3"/>
    </svg>
  ),
  cpu: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  ),
  trending: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  globe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  zap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  arrowRight: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  chevronDown: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  quote: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
    </svg>
  ),
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  ship: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0021 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 00-2-2H7a2 2 0 00-2 2v6"/><path d="M12 1v4"/>
    </svg>
  ),
  menu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  ),
  x: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
};

// ─── NORTHERN EUROPE MAP (SVG) ─────────────────────────────────────
function NorthernEuropeMap() {
  const partners = [
    { name: "EFS", city: "London", x: 26, y: 57, founded: "2004" },
    { name: "Soli-Trans", city: "Liverpool", x: 22, y: 53.5, founded: "2009" },
    { name: "Remiro", city: "Rotterdam", x: 33.5, y: 54, founded: "2008" },
    { name: "Corten", city: "Amsterdam", x: 33, y: 52.5, founded: "1991" },
    { name: "PVY & Boxlines", city: "Bremen", x: 37, y: 52.5, founded: "1974" },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ 
      position: "relative", 
      width: "100%", 
      maxWidth: 520, 
      margin: "0 auto",
    }}>
      {/* Europe map as actual img so dots align perfectly */}
      <img 
        src={EUROPE_MAP} 
        alt="Europe map"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          opacity: 0.25,
        }}
      />

      {/* Partner dots — positioned as % of the image */}
      {partners.map((p, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          {/* Pulse ring */}
          <div style={{
            position: "absolute",
            inset: -8,
            borderRadius: "50%",
            background: COLORS.copper,
            opacity: 0.15,
            animation: "gentlePulse 3s ease infinite",
          }}/>
          {/* Dot */}
          <div style={{
            width: hovered === i ? 14 : 10,
            height: hovered === i ? 14 : 10,
            borderRadius: "50%",
            background: COLORS.copper,
            border: `2px solid ${COLORS.warmWhite}`,
            boxShadow: hovered === i 
              ? "0 0 16px rgba(3,166,150,0.5)" 
              : "0 0 8px rgba(3,166,150,0.25)",
            transition: "all 0.2s ease",
            position: "relative",
          }}/>

          {/* Tooltip */}
          {hovered === i && (
            <div style={{
              position: "absolute",
              bottom: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: COLORS.navy,
              color: COLORS.white,
              padding: "8px 14px",
              borderRadius: 6,
              fontSize: 13,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
              animation: "fadeIn 0.15s ease",
            }}>
              <strong>{p.name}</strong>
              <span style={{ opacity: 0.6, marginLeft: 8 }}>{p.city}</span>
              <div style={{
                position: "absolute",
                bottom: -4,
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                width: 8, height: 8,
                background: COLORS.navy,
              }}/>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
\n

// ─── SECTION WRAPPER ───────────────────────────────────────────────
function Section({ children, bg = COLORS.warmWhite, id, style = {} }) {
  return (
    <section id={id} style={{
      background: bg,
      padding: "72px 24px",
      ...style,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}

// ─── SECTION LABEL ─────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: COLORS.copper,
      marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

// ─── BENEFIT CARD ──────────────────────────────────────────────────
function BenefitCard({ icon, title, subtitle, description, items }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        
        background: hover ? COLORS.white : "transparent",
        border: `1px solid ${hover ? COLORS.border : "transparent"}`,
        borderRadius: 12,
        padding: "36px 28px",
        transition: "all 0.35s ease",
        boxShadow: hover ? "0 8px 40px rgba(0,0,0,0.06)" : "none",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 12,
        background: COLORS.copperMuted,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: COLORS.copper,
        marginBottom: 24,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 21, fontWeight: 600,
        color: COLORS.navy, margin: "0 0 8px",
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      }}>{title}</h3>
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 15, fontWeight: 400,
        color: COLORS.copper, margin: "0 0 16px",
        fontStyle: "italic",
      }}>{subtitle}</p>
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 15, fontWeight: 400, lineHeight: 1.7,
        color: COLORS.textMuted, margin: "0 0 20px",
      }}>{description}</p>
      {items && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, i) => (
            <li key={i} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14, color: COLORS.text,
              display: "flex", alignItems: "flex-start", gap: 10,
              marginBottom: 10, lineHeight: 1.5,
            }}>
              <span style={{ color: COLORS.copper, flexShrink: 0, marginTop: 2 }}>{Icons.check}</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── PARTNER CARD ──────────────────────────────────────────────────
function PartnerCard({ name, founded, withVoyfai, service, customers }) {
  return (
    <div style={{
      background: COLORS.white,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 10,
      padding: "24px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 12,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
          width: 48, height: 48, borderRadius: 8,
          background: COLORS.navy,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: COLORS.copperLight,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 16, fontWeight: 600,
        }}>
          {name.charAt(0)}
        </div>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 11, fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: COLORS.copper,
          background: COLORS.copperMuted,
          padding: "4px 10px",
          borderRadius: 4,
        }}>
          Since {withVoyfai}
        </span>
      </div>
      <h4 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 18, fontWeight: 600,
        color: COLORS.navy, margin: 0,
        letterSpacing: "-0.01em",
      }}>{name}</h4>
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 13, color: COLORS.textMuted,
        margin: 0, lineHeight: 1.5,
      }}>
        Founded {founded}
      </p>
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 14, color: COLORS.text,
        margin: 0, lineHeight: 1.6,
      }}>
        {service}
      </p>
      <div style={{
        borderTop: `1px solid ${COLORS.border}`,
        paddingTop: 12, marginTop: 4,
      }}>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 12, color: COLORS.textMuted,
          fontWeight: 500,
        }}>
          Customers: {customers}
        </span>
      </div>
    </div>
  );
}

// ─── DETAIL SECTION (Procurement, Tech, Growth) ────────────────────
function DetailSection({ id, label, title, items, bg, reversed }) {
  return (
    <Section bg={bg} id={id}>
      <SectionLabel>{label}</SectionLabel>
      <h2 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "clamp(28px, 3.5vw, 38px)",
        fontWeight: 600,
        color: COLORS.navy,
        margin: "0 0 36px",
        lineHeight: 1.25,
        letterSpacing: "-0.02em",
        maxWidth: 600,
      }}>{title}</h2>
      <div className={items.length === 4 ? "detail-grid-4" : "detail-grid-3"} style={{
        display: "grid",
        gridTemplateColumns: items.length === 4 
          ? "repeat(4, 1fr)" 
          : items.length === 3 
            ? "repeat(3, 1fr)" 
            : "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 16,
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            background: bg === COLORS.warmWhite ? COLORS.white : COLORS.warmWhite,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 10,
            padding: "28px 24px",
          }}>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13, fontWeight: 500,
              color: COLORS.copper,
              marginBottom: 12,
              letterSpacing: "0.02em",
            }}>
              0{i + 1}
            </div>
            <h4 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 17, fontWeight: 600,
              color: COLORS.navy, margin: "0 0 12px",
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
            }}>{item.title}</h4>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15, fontWeight: 400, lineHeight: 1.7,
              color: COLORS.textMuted, margin: 0,
            }}>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── TESTIMONIAL CARD ──────────────────────────────────────────────
function TestimonialCard({ quote, name, company, role }) {
  return (
    <div style={{
      background: COLORS.white,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 12,
      padding: "36px 32px",
      
    }}>
      <div style={{ color: COLORS.copper, marginBottom: 16 }}>{Icons.quote}</div>
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 16, fontWeight: 400, lineHeight: 1.75,
        color: COLORS.text, margin: "0 0 24px",
        fontStyle: "italic",
      }}>"{quote}"</p>
      <div>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 15, fontWeight: 500,
          color: COLORS.navy,
        }}>{name}</div>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 13, color: COLORS.textMuted,
          marginTop: 2,
        }}>{role}, {company}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function VoyfaiHomepage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Benefits", href: "#benefits" },
    { label: "Partners", href: "#partners" },
    { label: "Procurement", href: "#procurement" },
    { label: "Technology", href: "#technology" },
    { label: "Growth", href: "#growth" },
  ];

  return (
    <div style={{ 
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: COLORS.text,
      fontWeight: 400,
      background: COLORS.warmWhite,
      overflowX: "hidden",
    }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
      
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { margin: 0; -webkit-font-smoothing: antialiased; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentlePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes scrollLine {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }

        .nav-link {
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          color: rgba(253,251,247,0.7);
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .nav-link:hover { color: #fff; }
        .nav-scrolled .nav-link { color: rgba(0,0,0,0.45); }
        .nav-scrolled .nav-link:hover { color: ${COLORS.text}; }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.01em;
        }
        .cta-primary {
          background: ${COLORS.copper};
          color: ${COLORS.white};
        }
        .cta-primary:hover {
          background: #029486;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(3,166,150,0.25);
        }
        .cta-outline {
          background: transparent;
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .cta-outline:hover {
          border-color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.05);
        }
        .cta-dark {
          background: ${COLORS.navy};
          color: ${COLORS.white};
        }
        .cta-dark:hover {
          background: ${COLORS.navyLight};
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        @media (max-width: 1024px) {
          .partner-cards-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .detail-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-trigger { display: flex !important; }
          .detail-grid-4 { grid-template-columns: 1fr 1fr !important; }
          .detail-grid-3 { grid-template-columns: 1fr !important; }
          .benefits-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .partners-layout { grid-template-columns: 1fr !important; }
          .partner-cards-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .detail-grid-4 { grid-template-columns: 1fr !important; }
          .partner-cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-trigger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      {/* ─── NAVIGATION ─────────────────────────────────────────── */}
      <nav className={scrolled ? "nav-scrolled" : ""} style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: "0 24px",
        height: 72,
        display: "flex",
        alignItems: "center",
        background: scrolled 
          ? "rgba(253,251,247,0.92)" 
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", width: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", transition: "all 0.4s" }}>
            <svg width="100" height="33" viewBox="0 0 435 142" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: "fill 0.4s" }}>
              <path d="M97.789 6.08211L64.3604 71.7985L29.9903 6.08211L0 6.06843L49.1424 95.3329C51.1163 98.9191 54.8776 101.146 58.9572 101.146H69.9136C74.0615 101.146 77.8683 98.8507 79.8149 95.1777L127.038 6.06386L97.789 6.07755V6.08211Z" fill={scrolled ? COLORS.navy : "#fff"}/>
              <path d="M146.836 32.5823C124.059 32.5823 103.033 42.8575 103.033 67.7378C103.033 92.6182 124.059 102.355 146.836 102.355C169.613 102.355 190.239 92.349 190.239 67.7378C190.239 43.1267 169.617 32.5823 146.836 32.5823ZM146.836 83.0183C134.301 83.0183 126.888 75.8503 126.888 67.6055C126.888 58.6809 134.301 51.5129 146.836 51.5129C159.37 51.5129 166.784 58.8178 166.784 67.6055C166.784 76.3933 159.37 83.0183 146.836 83.0183Z" fill={scrolled ? COLORS.navy : "#fff"}/>
              <path d="M325.036 34.2065H305.492V28.932C305.492 22.9823 308.999 19.7382 315.062 19.7382C316.949 19.7382 320.724 19.1952 325.977 21.6317L328.538 2.97487C322.339 0.944477 315.867 0 311.555 0C305.219 0 299.425 1.21824 293.494 4.86839C286.349 9.3307 281.496 18.1184 281.496 25.8248V34.2065H249.15C243.083 46.512 237.02 59.2237 231.09 71.6616L207.772 34.2065H181.17L219.501 95.7298L201.636 130.967L221.853 142L266.961 50.4314H281.506V100.867H305.497V50.4314H325.04V34.2019L325.036 34.2065Z" fill={scrolled ? COLORS.navy : "#fff"}/>
              <path d="M410.354 84.6423C403.613 86.3989 401.594 83.967 401.594 78.6925V57.7361C401.594 48.9484 398.897 43.4047 389.191 37.9933C380.7 33.3941 368.57 32.7189 361.289 32.7189C350.91 32.7189 335.273 36.912 330.02 40.0192L333.122 53.6753C341.345 50.8373 352.802 47.4564 360.484 47.4564C366.01 47.4564 370.862 48.2685 374.769 50.2989C377.33 51.5126 377.598 55.1673 377.598 57.4669C377.237 57.4669 376.968 57.4213 376.789 57.33C372.477 56.1118 364.927 55.4365 359.806 55.4365C341.477 55.4365 322.202 59.8988 322.202 78.8294C322.202 96.2726 342.419 101.953 359.538 101.953C367.356 101.953 376.52 100.466 382.992 95.5973C387.709 100.329 395.527 101.278 401.726 101.278C406.442 101.278 410.349 100.872 410.349 100.872H434.609V34.2063H410.349V84.6423H410.354ZM360.215 86.262C350.51 86.262 346.062 83.1503 346.062 78.2864C346.062 73.6872 350.778 69.7679 361.698 69.7679C366.687 69.7679 372.75 70.7169 377.603 71.2553C377.603 84.4598 368.438 86.262 360.215 86.262Z" fill={scrolled ? COLORS.navy : "#fff"}/>
              <path d="M422.734 29.5936C429.069 29.5936 435 24.7252 435 17.831C435 10.9368 429.069 5.93149 422.734 5.93149C416.398 5.93149 410.467 11.0691 410.467 17.831C410.467 24.5929 416.398 29.5936 422.734 29.5936Z" fill={scrolled ? COLORS.navy : "#fff"}/>
            </svg>
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-nav" style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="cta-btn" style={{
              padding: "10px 20px",
              fontSize: 13,
              fontWeight: 500,
              background: scrolled ? COLORS.copper : "rgba(255,255,255,0.12)",
              color: COLORS.white,
              borderRadius: 6,
              border: scrolled ? "none" : "1px solid rgba(255,255,255,0.2)",
              textDecoration: "none",
            }}>
              Start a Conversation
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="mobile-trigger"
            onClick={() => setMobileMenu(!mobileMenu)}
            style={{
              display: "none",
              background: "none", border: "none", cursor: "pointer",
              color: scrolled ? COLORS.navy : COLORS.white,
              padding: 4,
            }}
          >
            {mobileMenu ? Icons.x : Icons.menu}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="mobile-menu" style={{
          position: "fixed",
          top: 72, left: 0, right: 0, bottom: 0,
          background: COLORS.navy,
          zIndex: 999,
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          animation: "slideDown 0.3s ease",
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              onClick={() => setMobileMenu(false)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 18, fontWeight: 400,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="cta-btn cta-primary"
            onClick={() => setMobileMenu(false)}
            style={{ marginTop: 16, justifyContent: "center" }}>
            Start a Conversation
          </a>
        </div>
      )}

      {/* ─── HERO ───────────────────────────────────────────────── */}
      <header style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `#000`,
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}>
        {/* Hero background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          filter: "brightness(0.3) saturate(0.7)",
        }}/>
        {/* Gradient overlay for depth */}
        <div style={{
          position: "absolute", inset: 0,
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%),
            radial-gradient(ellipse 800px 600px at 20% 80%, rgba(3,166,150,0.06) 0%, transparent 60%)
          `,
        }}/>
        {/* Subtle vignette */}
        <div style={{
          position: "absolute", inset: 0,
          boxShadow: "inset 0 0 200px rgba(0,0,0,0.3)",
          pointerEvents: "none",
        }}/>

        <div style={{
          position: "relative",
          textAlign: "center",
          maxWidth: 800,
          animation: "fadeInUp 1s ease",
        }}>
          {/* Tagline chip */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(3,166,150,0.12)",
            border: "1px solid rgba(3,166,150,0.25)",
            backdropFilter: "blur(12px)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 36,
            animation: "fadeIn 1.2s ease",
          }}>
            <span style={{ color: COLORS.copperLight }}>{Icons.ship}</span>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              color: COLORS.copperLight,
              letterSpacing: "0.04em",
            }}>
              A New Chapter for Freight Forwarders
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(38px, 5.8vw, 68px)",
            fontWeight: 600,
            color: COLORS.white,
            lineHeight: 1.1,
            margin: "0 0 8px",
            letterSpacing: "-0.035em",
          }}>
            Independent Freight<br/>Forwarders.
          </h1>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(38px, 5.8vw, 68px)",
            fontWeight: 600,
            color: COLORS.copperLight,
            lineHeight: 1.1,
            margin: "0 0 36px",
            letterSpacing: "-0.035em",
          }}>
            Stronger Together.
          </h1>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(16px, 2vw, 18px)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            margin: "0 auto 48px",
          }}>
            We unite successful, family run freight forwarders across Europe
            while preserving what makes them great and unlocking the scale,
            technology, and rates they need to thrive.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="cta-btn cta-primary">
              Start a Conversation
              <span>{Icons.arrowRight}</span>
            </a>
            <a href="#benefits" className="cta-btn cta-outline">
              Discover Our Model
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "fadeIn 2s ease",
        }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}>Scroll</span>
          <div style={{
            width: 1, height: 32,
            background: "rgba(255,255,255,0.1)",
            position: "relative",
            overflow: "hidden",
            borderRadius: 1,
          }}>
            <div style={{
              width: 1, height: 12,
              background: "rgba(255,255,255,0.4)",
              borderRadius: 1,
              animation: "scrollLine 2s ease infinite",
            }}/>
          </div>
        </div>
      </header>

      {/* ─── BENEFITS ───────────────────────────────────────────── */}
      <Section id="benefits" bg={COLORS.cream}>
        <SectionLabel>Partner Benefits</SectionLabel>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(28px, 3.5vw, 42px)",
          fontWeight: 600,
          color: COLORS.navy,
          margin: "0 0 16px",
          lineHeight: 1.25,
          maxWidth: 600,
        }}>
          Everything your business needs to compete at global scale
        </h2>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.7,
          color: COLORS.textMuted,
          maxWidth: 540,
          margin: "0 0 40px",
        }}>
          Voyfai partners keep their brand, their team, and their clients.
          We add the resources that transform good forwarders into great ones.
        </p>
        <div className="benefits-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 0,
        }}>
          <BenefitCard
            icon={Icons.anchor}
            title="Central Procurement"
            subtitle="Direct, lasting carrier partnerships at scale."
            description="We leverage group volume to secure stronger terms and lasting relationships with major carriers worldwide."
            items={[
              "Group negotiated rates across all trade lanes",
              "Direct carrier partnerships with allocation priority",
              "Flexible rate structures from monthly to annual",
            ]}
          />
          <BenefitCard
            icon={Icons.cpu}
            title="Proprietary Technology"
            subtitle="Technology that empowers people."
            description="Our AI tools enhance the way your operators work, reducing manual tasks so your team can focus on service, relationships, and growth."
            items={[
              "Instant rate comparison and rapid quoting",
              "Automated shipment creation from email",
              "Real time tracking with proactive alerts",
            ]}
          />
          <BenefitCard
            icon={Icons.trending}
            title="Growth Support"
            subtitle="Operational backbone for expansion."
            description="Comprehensive administrative, financial, and strategic support that frees you to do what you do best: grow the business."
            items={[
              "Growth capital while keeping independence",
              "Centralized talent acquisition",
              "New revenue streams and market entry support",
            ]}
          />
        </div>
      </Section>

      {/* ─── OUR PARTNERS / MAP ─────────────────────────────────── */}
      <Section id="partners" bg={COLORS.warmWhite}>
        <div className="partners-layout" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "start",
        }}>
          <div>
            <SectionLabel>Our Network</SectionLabel>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 38px)",
              fontWeight: 600,
              color: COLORS.navy,
              margin: "0 0 16px",
              lineHeight: 1.3,
            }}>
              Voyfai's group spans Northern Europe
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.7,
              color: COLORS.textMuted,
              margin: "0 0 40px",
              maxWidth: 460,
            }}>
              Five established freight forwarders, each a leader in their market,
              united under the Voyfai group. Every partner maintains their identity
              while gaining the strength of the collective.
            </p>

            {/* Key stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}>
              {[
                { number: "5", label: "Partner Companies" },
                { number: "50+", label: "Years Combined Experience" },
                { number: "6", label: "Office Locations" },
                { number: "3", label: "Countries" },
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: "16px 0",
                  borderTop: `2px solid ${i < 2 ? COLORS.copper : COLORS.border}`,
                }}>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 32, fontWeight: 600,
                    color: COLORS.navy,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}>{stat.number}</div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13, color: COLORS.textMuted,
                    fontWeight: 500, marginTop: 4,
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ paddingTop: 16 }}>
            <NorthernEuropeMap />
          </div>
        </div>

        {/* Partner cards grid */}
        <div className="partner-cards-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 16,
          marginTop: 48,
        }}>
          <PartnerCard
            name="Remiro"
            founded="2008"
            withVoyfai="Jul '24"
            service="Operating & Management of Air Freight, Sea, Road & Warehousing"
            customers="Diverse base across Europe in general cargo and food products"
          />
          <PartnerCard
            name="Corten"
            founded="1991"
            withVoyfai="Apr '25"
            service="Operating & Management of Sea Freight"
            customers="Industrial companies across multiple sectors"
          />
          <PartnerCard
            name="EFS"
            founded="2004"
            withVoyfai="Dec '24"
            service="Air Freight, Road Freight and Warehousing"
            customers="Broadcasting equipment, military, pharma and more"
          />
          <PartnerCard
            name="PVY & Boxlines"
            founded="1974 / 2001"
            withVoyfai="Feb '25"
            service="Sea Freight FCL & Consolidations"
            customers="General cargo, machinery and equipment"
          />
          <PartnerCard
            name="Soli-Trans"
            founded="2009"
            withVoyfai="Jul '24"
            service="Operating & Management of Sea and Air Freight"
            customers="Consumer & retail brands, ecommerce businesses"
          />
        </div>
      </Section>

      {/* ─── PROCUREMENT ────────────────────────────────────────── */}
      <DetailSection
        id="procurement"
        bg={COLORS.cream}
        label="Central Procurement"
        title="Carrier relationships built on trust, powered by scale"
        items={[
          {
            title: "Direct Carrier Partnerships",
            description: "Establish trusted, lasting partnerships with major carriers that enhance stability and give your business allocation priority, even in peak season."
          },
          {
            title: "Group Negotiated Rates",
            description: "Leverage the collective scale of the Voyfai group to access pricing and terms that no individual forwarder could secure alone."
          },
          {
            title: "Flexible Rate Structures",
            description: "From alternative product solutions to monthly and annual agreements, we build rate structures that ensure resilience in changing markets."
          },
        ]}
      />

      {/* ─── TECHNOLOGY ─────────────────────────────────────────── */}
      <DetailSection
        id="technology"
        bg={COLORS.warmWhite}
        label="AI Technology"
        title="Tools built by forwarders, for forwarders"
        items={[
          {
            title: "Instant Rate Comparison",
            description: "Compare carrier options in seconds and deliver accurate quotes within minutes. Your operators spend time on relationships, not spreadsheets."
          },
          {
            title: "Automated Shipment Creation",
            description: "Our AI agent converts booking emails directly into structured shipments in your TMS, reducing manual data entry and eliminating errors."
          },
          {
            title: "Real Time Visibility",
            description: "Keep clients continuously informed with automated updates, proactive exception alerts, and full shipment transparency from origin to destination."
          },
          {
            title: "Intelligent Customs Automation",
            description: "Streamline customs declarations with AI powered HS code classification and document processing that improves both speed and accuracy."
          },
        ]}
      />

      {/* ─── GROWTH ─────────────────────────────────────────────── */}
      <DetailSection
        id="growth"
        bg={COLORS.cream}
        label="Growth Support"
        title="Your ambition, our infrastructure"
        items={[
          {
            title: "Growth Capital",
            description: "Access financial resources that accelerate your expansion while preserving the operational independence that made your business successful."
          },
          {
            title: "Talent Acquisition",
            description: "Leverage centralized recruitment capabilities to attract and retain top professionals, solving the industry's biggest challenge."
          },
          {
            title: "Geographic Expansion",
            description: "Enter new markets with strategic planning and structured local support from partners who already know the territory."
          },
          {
            title: "New Revenue Streams",
            description: "Broaden your product offering from cargo insurance to carbon offset solutions, services your clients want but you couldn't offer alone."
          },
        ]}
      />

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <Section bg={COLORS.warmWhite}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel>What Our Partners Say</SectionLabel>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(28px, 3.5vw, 38px)",
            fontWeight: 600,
            color: COLORS.navy,
            margin: "0 auto",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            maxWidth: 500,
          }}>
            Built on trust, proven by results
          </h2>
        </div>
        <div className="testimonials-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 16,
        }}>
          <TestimonialCard
            quote="Partner testimonial placeholder. A quote from one of the founding partners about their experience joining the Voyfai group and the impact on their business."
            name="Partner Name"
            company="Corten"
            role="Managing Director"
          />
          <TestimonialCard
            quote="Partner testimonial placeholder. A quote about how Voyfai's technology and procurement capabilities have helped them compete with much larger forwarders."
            name="Partner Name"
            company="Soli-Trans"
            role="Founder"
          />
        </div>
      </Section>

      {/* ─── CTA / CONTACT ──────────────────────────────────────── */}
      <section id="contact" style={{
        background: `linear-gradient(165deg, #000000 0%, #141414 100%)`,
        padding: "72px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `
            radial-gradient(circle at 25% 50%, rgba(3,166,150,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 50%, rgba(20,20,20,0.4) 0%, transparent 50%)
          `,
        }}/>
        
        <div style={{
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 12,
            background: "rgba(3,166,150,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: COLORS.copperLight,
            margin: "0 auto 28px",
          }}>
            {Icons.mail}
          </div>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 600,
            color: COLORS.white,
            margin: "0 0 16px",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
          }}>
            Ready to write the next chapter?
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.5)",
            margin: "0 auto 40px",
            maxWidth: 480,
          }}>
            Every Voyfai partnership starts with a conversation. 
            No pressure, no pitch. Just two freight forwarding people 
            talking about what's possible.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:partner@voyfai.com" className="cta-btn cta-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
              Schedule a Conversation
              <span>{Icons.arrowRight}</span>
            </a>
          </div>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.3)",
            marginTop: 24,
          }}>
            Or reach us directly at partner@voyfai.com
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{
        background: COLORS.navy,
        borderTop: `1px solid rgba(255,255,255,0.06)`,
        padding: "40px 24px",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
        }}>
          <div>
            <div style={{ marginBottom: 12 }}>
              <svg width="90" height="30" viewBox="0 0 435 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M97.789 6.08211L64.3604 71.7985L29.9903 6.08211L0 6.06843L49.1424 95.3329C51.1163 98.9191 54.8776 101.146 58.9572 101.146H69.9136C74.0615 101.146 77.8683 98.8507 79.8149 95.1777L127.038 6.06386L97.789 6.07755V6.08211Z" fill="white"/>
                <path d="M146.836 32.5823C124.059 32.5823 103.033 42.8575 103.033 67.7378C103.033 92.6182 124.059 102.355 146.836 102.355C169.613 102.355 190.239 92.349 190.239 67.7378C190.239 43.1267 169.617 32.5823 146.836 32.5823ZM146.836 83.0183C134.301 83.0183 126.888 75.8503 126.888 67.6055C126.888 58.6809 134.301 51.5129 146.836 51.5129C159.37 51.5129 166.784 58.8178 166.784 67.6055C166.784 76.3933 159.37 83.0183 146.836 83.0183Z" fill="white"/>
                <path d="M325.036 34.2065H305.492V28.932C305.492 22.9823 308.999 19.7382 315.062 19.7382C316.949 19.7382 320.724 19.1952 325.977 21.6317L328.538 2.97487C322.339 0.944477 315.867 0 311.555 0C305.219 0 299.425 1.21824 293.494 4.86839C286.349 9.3307 281.496 18.1184 281.496 25.8248V34.2065H249.15C243.083 46.512 237.02 59.2237 231.09 71.6616L207.772 34.2065H181.17L219.501 95.7298L201.636 130.967L221.853 142L266.961 50.4314H281.506V100.867H305.497V50.4314H325.04V34.2019L325.036 34.2065Z" fill="white"/>
                <path d="M410.354 84.6423C403.613 86.3989 401.594 83.967 401.594 78.6925V57.7361C401.594 48.9484 398.897 43.4047 389.191 37.9933C380.7 33.3941 368.57 32.7189 361.289 32.7189C350.91 32.7189 335.273 36.912 330.02 40.0192L333.122 53.6753C341.345 50.8373 352.802 47.4564 360.484 47.4564C366.01 47.4564 370.862 48.2685 374.769 50.2989C377.33 51.5126 377.598 55.1673 377.598 57.4669C377.237 57.4669 376.968 57.4213 376.789 57.33C372.477 56.1118 364.927 55.4365 359.806 55.4365C341.477 55.4365 322.202 59.8988 322.202 78.8294C322.202 96.2726 342.419 101.953 359.538 101.953C367.356 101.953 376.52 100.466 382.992 95.5973C387.709 100.329 395.527 101.278 401.726 101.278C406.442 101.278 410.349 100.872 410.349 100.872H434.609V34.2063H410.349V84.6423H410.354ZM360.215 86.262C350.51 86.262 346.062 83.1503 346.062 78.2864C346.062 73.6872 350.778 69.7679 361.698 69.7679C366.687 69.7679 372.75 70.7169 377.603 71.2553C377.603 84.4598 368.438 86.262 360.215 86.262Z" fill="white"/>
                <path d="M422.734 29.5936C429.069 29.5936 435 24.7252 435 17.831C435 10.9368 429.069 5.93149 422.734 5.93149C416.398 5.93149 410.467 11.0691 410.467 17.831C410.467 24.5929 416.398 29.5936 422.734 29.5936Z" fill="white"/>
              </svg>
            </div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              maxWidth: 320,
              lineHeight: 1.6,
            }}>
              Uniting independent freight forwarders across Europe with
              the scale, technology, and partnerships to thrive.
            </p>
          </div>
          <div style={{
            display: "flex",
            gap: 32,
            flexWrap: "wrap",
          }}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
          }}>
            © 2026 Voyfai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
