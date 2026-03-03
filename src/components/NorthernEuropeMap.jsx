import { useState } from "react";
import { COLORS } from "../constants/colors";
import europeSvg from "../assets/Europe.svg";

const partners = [
  { name: "EFS", city: "London", x: 26, y: 57, founded: "2004" },
  { name: "Soli-Trans", city: "Liverpool", x: 22, y: 53.5, founded: "2009" },
  { name: "Remiro", city: "Rotterdam", x: 33.5, y: 54, founded: "2008" },
  { name: "Corten", city: "Amsterdam", x: 33, y: 52.5, founded: "1991" },
  { name: "PVY & Boxlines", city: "Bremen", x: 37, y: 52.5, founded: "1974" },
];

export default function NorthernEuropeMap() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <img
        src={europeSvg}
        alt="Europe map"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          opacity: 0.25,
        }}
      />

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
          <div
            style={{
              position: "absolute",
              inset: -8,
              borderRadius: "50%",
              background: COLORS.copper,
              opacity: 0.15,
              animation: "gentlePulse 3s ease infinite",
            }}
          />
          {/* Dot */}
          <div
            style={{
              width: hovered === i ? 14 : 10,
              height: hovered === i ? 14 : 10,
              borderRadius: "50%",
              background: COLORS.copper,
              border: `2px solid ${COLORS.warmWhite}`,
              boxShadow:
                hovered === i
                  ? "0 0 16px rgba(3,166,150,0.5)"
                  : "0 0 8px rgba(3,166,150,0.25)",
              transition: "all 0.2s ease",
              position: "relative",
            }}
          />

          {/* Tooltip */}
          {hovered === i && (
            <div
              style={{
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
              }}
            >
              <strong>{p.name}</strong>
              <span style={{ opacity: 0.6, marginLeft: 8 }}>{p.city}</span>
              <div
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: "50%",
                  transform: "translateX(-50%) rotate(45deg)",
                  width: 8,
                  height: 8,
                  background: COLORS.navy,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
