import { COLORS } from "../constants/colors";

export default function PartnerCard({ name, founded, withVoyfai, service, customers }) {
  return (
    <div
      style={{
        background: COLORS.white,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 10,
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 8,
            background: COLORS.navy,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.copperLight,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {name.charAt(0)}
        </div>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: COLORS.copper,
            background: COLORS.copperMuted,
            padding: "4px 10px",
            borderRadius: 4,
          }}
        >
          Since {withVoyfai}
        </span>
      </div>
      <h4
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 18,
          fontWeight: 600,
          color: COLORS.navy,
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {name}
      </h4>
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 13,
          color: COLORS.textMuted,
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        Founded {founded}
      </p>
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 14,
          color: COLORS.text,
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {service}
      </p>
      <div
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          paddingTop: 12,
          marginTop: 4,
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 12,
            color: COLORS.textMuted,
            fontWeight: 500,
          }}
        >
          Customers: {customers}
        </span>
      </div>
    </div>
  );
}
