import { useMemo, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { COLORS, RADIUS } from "../constants/colors";
import { Icons } from "../constants/icons";
import useAshbyJobs from "../hooks/useAshbyJobs";
import { formatEmploymentType } from "../lib/ashby";
import { sanitizeHtml } from "../lib/sanitizeHtml";
import Reveal from "../components/Reveal";

function Pill({ children, tone = "light" }) {
  const styles =
    tone === "accent"
      ? {
          background: COLORS.copperMuted,
          color: COLORS.copper,
          border: `1px solid rgba(3,166,150,0.2)`,
        }
      : {
          background: COLORS.white,
          color: COLORS.text,
          border: `1px solid ${COLORS.border}`,
        };
  return (
    <span
      style={{
        ...styles,
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 500,
        padding: "6px 12px",
        borderRadius: RADIUS.pill,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {children}
    </span>
  );
}

function Skeleton() {
  return (
    <div
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "48px 24px",
      }}
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            height: i === 0 ? 40 : 16,
            width: i === 0 ? "60%" : `${60 + ((i * 7) % 30)}%`,
            background: COLORS.cream,
            borderRadius: RADIUS.sm,
            margin: "12px 0",
            animation: "skeletonPulse 1.4s ease-in-out infinite",
          }}
        />
      ))}
    </div>
  );
}

export default function CareerDetail() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { jobs, loading, error } = useAshbyJobs();
  const job = useMemo(() => jobs.find((j) => j.id === jobId), [jobs, jobId]);
  const cleanHtml = useMemo(
    () => (job ? sanitizeHtml(job.descriptionHtml) : ""),
    [job]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [jobId]);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  if (loading) {
    return (
      <main style={{ background: COLORS.warmWhite, paddingTop: 120, minHeight: "100vh" }}>
        <Skeleton />
      </main>
    );
  }

  if (error || !job) {
    return (
      <main
        style={{
          background: COLORS.warmWhite,
          paddingTop: 160,
          paddingBottom: 120,
          minHeight: "100vh",
          textAlign: "center",
          padding: "160px 24px 120px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: COLORS.navy,
            margin: "0 0 16px",
          }}
        >
          Position not found
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: COLORS.textMuted,
            margin: "0 0 32px",
          }}
        >
          This role may have closed or the link is no longer valid.
        </p>
        <button
          type="button"
          onClick={() => navigate("/careers")}
          className="cta-btn cta-primary"
        >
          <span>{Icons.arrowLeft}</span>
          All Open Positions
        </button>
      </main>
    );
  }

  return (
    <main style={{ background: COLORS.warmWhite }}>
      {/* Hero */}
      <header
        style={{
          background: "linear-gradient(180deg, #0b0b0b 0%, #141414 100%)",
          padding: "140px 24px 80px",
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
              "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(3,166,150,0.18) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Link
            to="/careers"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              marginBottom: 28,
              padding: "6px 2px",
              borderRadius: 4,
              transition: "color 200ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.95)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            {Icons.arrowLeft}
            All Open Positions
          </Link>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: COLORS.copperLight,
              marginBottom: 14,
            }}
          >
            {job.department}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 4.4vw, 48px)",
              fontWeight: 700,
              color: COLORS.white,
              lineHeight: 1.15,
              margin: "0 0 24px",
              letterSpacing: "-0.025em",
            }}
          >
            {job.title}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <Pill>
              <span style={{ color: COLORS.copper, display: "inline-flex" }}>
                {Icons.mapPin}
              </span>
              {job.location}
            </Pill>
            <Pill>
              <span style={{ color: COLORS.copper, display: "inline-flex" }}>
                {Icons.clock}
              </span>
              {formatEmploymentType(job.employmentType)}
            </Pill>
            {job.team && job.team !== job.department && <Pill>{job.team}</Pill>}
            {job.workplaceType && job.workplaceType !== "OnSite" && (
              <Pill tone="accent">
                {job.workplaceType === "Hybrid" ? "Hybrid" : "Remote friendly"}
              </Pill>
            )}
          </div>
        </div>
      </header>

      {/* Body + sticky apply */}
      <section style={{ padding: "72px 24px 120px" }}>
        <div
          className="job-detail-layout"
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 300px",
            gap: 48,
            alignItems: "start",
          }}
        >
          <Reveal>
            <article
              className="prose"
              dangerouslySetInnerHTML={{ __html: cleanHtml }}
            />
          </Reveal>
          <aside
            style={{
              position: "sticky",
              top: 100,
              background: COLORS.cream,
              border: `1px solid ${COLORS.border}`,
              borderRadius: RADIUS.lg,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: COLORS.textMuted,
                marginBottom: 10,
              }}
            >
              Ready to apply?
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: COLORS.text,
                lineHeight: 1.65,
                margin: "0 0 20px",
              }}
            >
              Submit your application through Ashby. It takes just a few minutes.
            </p>
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px 20px",
              }}
            >
              Apply on Ashby
              <span>{Icons.external}</span>
            </a>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: COLORS.textMuted,
                marginTop: 14,
                textAlign: "center",
              }}
            >
              Opens in a new tab
            </div>
          </aside>
        </div>
      </section>

      {/* Mobile sticky bottom bar */}
      <div
        className="mobile-apply-bar"
        style={{
          display: "none",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 16px calc(12px + env(safe-area-inset-bottom))",
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(16px)",
          borderTop: `1px solid ${COLORS.border}`,
          zIndex: 900,
        }}
      >
        <a
          href={job.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-primary"
          style={{
            width: "100%",
            justifyContent: "center",
            padding: "14px 20px",
          }}
        >
          Apply on Ashby
          <span>{Icons.external}</span>
        </a>
      </div>
    </main>
  );
}
