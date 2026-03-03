import { COLORS } from "../constants/colors";

export default function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: COLORS.copper,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}
