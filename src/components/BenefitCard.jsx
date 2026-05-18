import { COLORS, RADIUS } from "../constants/colors";
import { Icons } from "../constants/icons";

export default function BenefitCard({ icon, title, subtitle, description, items }) {
  return (
    <div
      className="lift-card benefit-card"
      style={{
        background: "transparent",
        border: `1px solid transparent`,
        borderRadius: RADIUS.lg,
        padding: "36px 28px",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: RADIUS.md,
          background: COLORS.copperMuted,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: COLORS.copper,
          marginBottom: 24,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 21,
          fontWeight: 600,
          color: COLORS.navy,
          margin: "0 0 8px",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          fontWeight: 400,
          color: COLORS.copperText,
          margin: "0 0 16px",
          fontStyle: "italic",
        }}
      >
        {subtitle}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: COLORS.textMuted,
          margin: "0 0 20px",
        }}
      >
        {description}
      </p>
      {items && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: COLORS.text,
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 10,
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: COLORS.copper, flexShrink: 0, marginTop: 2 }}>
                {Icons.check}
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
