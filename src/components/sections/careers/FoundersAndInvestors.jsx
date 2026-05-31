import { COLORS, RADIUS } from "../../../constants/colors";
import { Icons } from "../../../constants/icons";
import Section from "../../Section";
import SectionLabel from "../../SectionLabel";
import Reveal from "../../Reveal";
import Avatar from "../../Avatar";
import atlanticLabsLogo from "../../../assets/1-Atlantic-Labs.webp";
import heartcoreLogo from "../../../assets/2-Heartcore.svg";
import earlybirdLogo from "../../../assets/3-Earlybird.svg";
import blisceLogo from "../../../assets/4-blisce.png";

const FOUNDERS = [
  {
    name: "Adrian Detlefs",
    role: "Co-Founder & Managing Director",
    initials: "AD",
    photo: "/images/careers/founder-adrian.jpg",
    linkedin: "https://www.linkedin.com/in/adrian-detlefs-244836a4/",
  },
  {
    name: "James Maund",
    role: "Co-Founder & Managing Director",
    initials: "JM",
    photo: "/images/careers/founder-james.jpg",
    linkedin: "https://www.linkedin.com/in/james-maund-869b68127/",
  },
  {
    name: "Jonas Kulessa",
    role: "Co-Founder & CTO",
    initials: "JK",
    photo: "/images/careers/founder-jonas.jpg",
    linkedin: "https://www.linkedin.com/in/jonas-kulessa/",
  },
];

const INVESTORS = [
  {
    name: "Atlantic Labs",
    src: atlanticLabsLogo,
    width: 46,
    height: 32,
    blurb: "Berlin-based pre-seed and seed fund, focused on industrial and B2B software.",
  },
  {
    name: "Heartcore",
    src: heartcoreLogo,
    width: 35,
    height: 32,
    blurb: "Copenhagen-led Series A fund backing European consumer and SaaS founders.",
  },
  {
    name: "Earlybird",
    src: earlybirdLogo,
    width: 80,
    height: 32,
    blurb: "Pan-European early-stage VC with a long track record in industrial software.",
  },
  {
    name: "blisce",
    src: blisceLogo,
    width: 49,
    height: 32,
    blurb: "Paris and New York growth investor; portfolio includes Spotify, Brex, and Lydia.",
  },
];

export default function FoundersAndInvestors() {
  return (
    <Section id="founders-investors" bg={COLORS.cream}>
      {/* Founders */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <Reveal>
          <SectionLabel>Our Founders</SectionLabel>
          <h2 style={styles.heading}>Built by operators, for operators</h2>
        </Reveal>

        <div className="founders-grid" style={styles.foundersGrid}>
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={60 + i * 60}>
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="lift-card founder-card-link founder-card-stack"
                style={{ ...styles.founderCard, textDecoration: "none" }}
                aria-label={`${f.name} on LinkedIn`}
              >
                <Avatar
                  initials={f.initials}
                  src={f.photo}
                  alt={`${f.name}, ${f.role}`}
                  size={128}
                />
                <div style={styles.founderText}>
                  <div style={styles.founderName}>{f.name}</div>
                  <div style={styles.founderRole}>{f.role}</div>
                </div>
                <span style={styles.linkedin} aria-hidden="true">
                  {Icons.linkedin}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Investors — narrative line, then smaller full-color logos */}
      <Reveal>
        <div style={{ textAlign: "center" }}>
          <p style={styles.investorsLine}>
            Backed by European venture firms with deep conviction in industrial
            and operational software.
          </p>
          <div className="investors-strip" style={styles.investorsStrip}>
            {INVESTORS.map((inv) => (
              <div
                key={inv.name}
                className="investor-logo-color"
                style={styles.investorBlock}
              >
                <div style={styles.logoSlot}>
                  <img
                    src={inv.src}
                    alt={inv.name}
                    width={inv.width}
                    height={inv.height}
                    loading="lazy"
                    decoding="async"
                    style={styles.logoImg}
                  />
                </div>
                <p style={styles.investorBlurb}>{inv.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

const styles = {
  heading: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(28px, 3.5vw, 42px)",
    fontWeight: 700,
    color: COLORS.navy,
    margin: "0 auto 48px",
    maxWidth: 640,
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
    textWrap: "balance",
  },
  foundersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 380px))",
    gap: 20,
    justifyContent: "center",
  },
  founderCard: {
    background: COLORS.white,
    border: `1px solid ${COLORS.border}`,
    borderRadius: RADIUS.lg,
    padding: "32px 28px",
    display: "flex",
    alignItems: "center",
    gap: 24,
    position: "relative",
    textAlign: "left",
  },
  founderText: {
    flex: 1,
    minWidth: 0,
  },
  founderName: {
    fontFamily: "var(--font-display)",
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.navy,
    letterSpacing: "-0.01em",
    lineHeight: 1.2,
  },
  founderRole: {
    fontFamily: "var(--font-body)",
    fontSize: 13,
    fontWeight: 500,
    color: COLORS.textMuted,
    marginTop: 4,
    lineHeight: 1.4,
  },
  linkedin: {
    color: COLORS.copper,
    display: "inline-flex",
    flexShrink: 0,
  },
  investorsLine: {
    fontFamily: "var(--font-body)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 1.6,
    color: COLORS.textMuted,
    margin: "0 auto 32px",
    maxWidth: 540,
    textWrap: "pretty",
  },
  investorsStrip: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    alignItems: "start",
    justifyContent: "center",
    gap: 40,
    padding: 0,
    maxWidth: 1080,
    margin: "0 auto",
  },
  investorBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 14,
    minWidth: 0,
  },
  logoSlot: {
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    maxHeight: 32,
    maxWidth: 120,
    objectFit: "contain",
    display: "block",
  },
  investorBlurb: {
    fontFamily: "var(--font-body)",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.55,
    color: COLORS.textMuted,
    margin: 0,
    textAlign: "center",
    maxWidth: "26ch",
    textWrap: "pretty",
  },
};
