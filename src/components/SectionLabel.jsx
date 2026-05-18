import { COLORS } from "../constants/colors";

export default function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: COLORS.copperText,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}
