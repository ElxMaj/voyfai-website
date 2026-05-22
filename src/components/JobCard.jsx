import { Link } from "react-router-dom";
import { COLORS, RADIUS } from "../constants/colors";
import { Icons } from "../constants/icons";
import { formatEmploymentType } from "../lib/ashby";

export default function JobCard({ job }) {
  return (
    <Link
      to={`/careers/${job.id}`}
      className="lift-card job-card"
      style={{
        display: "flex",
        flexDirection: "column",
        background: COLORS.white,
        border: `1px solid ${COLORS.border}`,
        borderRadius: RADIUS.lg,
        padding: "28px 28px 24px",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            fontWeight: 600,
            color: COLORS.navy,
            margin: 0,
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
          }}
        >
          {job.title}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: RADIUS.pill,
            background: COLORS.copperMuted,
            color: COLORS.copper,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {job.department}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 14,
          fontSize: 13,
          color: COLORS.textMuted,
          marginBottom: 20,
          fontFamily: "var(--font-body)",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: COLORS.copper, display: "inline-flex" }}>
            {Icons.mapPin}
          </span>
          {job.location}
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: COLORS.copper, display: "inline-flex" }}>
            {Icons.clock}
          </span>
          {formatEmploymentType(job.employmentType)}
        </span>
        {job.workplaceType && job.workplaceType !== "OnSite" && (
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: RADIUS.pill,
              background: "rgba(3,166,150,0.08)",
              color: COLORS.copper,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            {job.workplaceType === "Hybrid" ? "Hybrid" : "Remote"}
          </span>
        )}
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: 16,
          borderTop: `1px solid ${COLORS.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            color: COLORS.textMuted,
          }}
        >
          {job.team}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-body)",
            fontSize: 14,
            fontWeight: 600,
            color: COLORS.copper,
          }}
        >
          View role
          {Icons.arrowRight}
        </span>
      </div>
    </Link>
  );
}
