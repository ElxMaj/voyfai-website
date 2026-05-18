import { COLORS } from "../../constants/colors";
import Reveal from "../Reveal";

export default function DarkCTA({
  id,
  icon,
  headline,
  body,
  primary,
  secondary,
  footnote,
}) {
  return (
    <section
      id={id}
      style={{
        background: "linear-gradient(165deg, #000000 0%, #141414 100%)",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(3,166,150,0.18) 0%, transparent 55%)",
        }}
      />

      <Reveal
        style={{
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {icon && (
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "rgba(3,166,150,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: COLORS.copperLight,
              margin: "0 auto 28px",
            }}
          >
            {icon}
          </div>
        )}

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 700,
            color: COLORS.white,
            margin: "0 0 16px",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
          }}
        >
          {headline}
        </h2>

        {body && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              margin: "0 auto 40px",
              maxWidth: 540,
            }}
          >
            {body}
          </p>
        )}

        {(primary || secondary) && (
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {primary}
            {secondary}
          </div>
        )}

        {footnote && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "rgba(255,255,255,0.58)",
              marginTop: 24,
            }}
          >
            {footnote}
          </p>
        )}
      </Reveal>
    </section>
  );
}
