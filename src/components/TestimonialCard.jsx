import { COLORS } from "../constants/colors";
import { Icons } from "../constants/icons";

export default function TestimonialCard({ quote, name, company, role }) {
  return (
    <div
      style={{
        background: COLORS.white,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 12,
        padding: "36px 32px",
      }}
    >
      <div style={{ color: COLORS.copper, marginBottom: 16 }}>{Icons.quote}</div>
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.75,
          color: COLORS.text,
          margin: "0 0 24px",
          fontStyle: "italic",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 15,
            fontWeight: 500,
            color: COLORS.navy,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            color: COLORS.textMuted,
            marginTop: 2,
          }}
        >
          {role}, {company}
        </div>
      </div>
    </div>
  );
}
