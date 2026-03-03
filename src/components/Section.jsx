import { COLORS } from "../constants/colors";

export default function Section({ children, bg = COLORS.warmWhite, id, style = {} }) {
  return (
    <section
      id={id}
      style={{
        background: bg,
        padding: "72px 24px",
        ...style,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
