import { COLORS } from "../constants/colors";
import Section from "./Section";
import SectionLabel from "./SectionLabel";

export default function DetailSection({ id, label, title, items, bg }) {
  return (
    <Section bg={bg} id={id}>
      <SectionLabel>{label}</SectionLabel>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(28px, 3.5vw, 38px)",
          fontWeight: 600,
          color: COLORS.navy,
          margin: "0 0 36px",
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          maxWidth: 600,
        }}
      >
        {title}
      </h2>
      <div
        className={items.length === 4 ? "detail-grid-4" : "detail-grid-3"}
        style={{
          display: "grid",
          gridTemplateColumns:
            items.length === 4
              ? "repeat(4, 1fr)"
              : items.length === 3
                ? "repeat(3, 1fr)"
                : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              background: bg === COLORS.warmWhite ? COLORS.white : COLORS.warmWhite,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 10,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: COLORS.copper,
                marginBottom: 12,
                letterSpacing: "0.02em",
              }}
            >
              0{i + 1}
            </div>
            <h4
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 17,
                fontWeight: 600,
                color: COLORS.navy,
                margin: "0 0 12px",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
              }}
            >
              {item.title}
            </h4>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.7,
                color: COLORS.textMuted,
                margin: 0,
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
