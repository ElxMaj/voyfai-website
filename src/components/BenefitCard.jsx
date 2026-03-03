import { useState } from "react";
import { COLORS } from "../constants/colors";
import { Icons } from "../constants/icons";

export default function BenefitCard({ icon, title, subtitle, description, items }) {
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
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
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
          fontFamily: "'Plus Jakarta Sans', sans-serif",
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
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 15,
          fontWeight: 400,
          color: COLORS.copper,
          margin: "0 0 16px",
          fontStyle: "italic",
        }}
      >
        {subtitle}
      </p>
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
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
                fontFamily: "'Plus Jakarta Sans', sans-serif",
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
