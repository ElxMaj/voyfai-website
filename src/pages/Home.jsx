import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { COLORS } from "../constants/colors";
import { Icons } from "../constants/icons";
import Section from "../components/Section";
import SectionLabel from "../components/SectionLabel";
import BenefitCard from "../components/BenefitCard";
import DetailSection from "../components/DetailSection";
import TestimonialCard from "../components/TestimonialCard";
import Reveal from "../components/Reveal";
import DarkCTA from "../components/sections/DarkCTA";
import useReducedMotion from "../hooks/useReducedMotion";

const HERO_BASE = `${import.meta.env.BASE_URL}hero`;
import atlanticLabsLogo from "../assets/1-Atlantic-Labs.webp";
import CountUp from "../components/motion/CountUp";
import heartcoreLogo from "../assets/2-Heartcore.svg";
import earlybirdLogo from "../assets/3-Earlybird.svg";
import blisceLogo from "../assets/4-blisce.png";

// Below-the-fold — code-split so GSAP, the Europe map SVG, and the heavier
// section bundles don't block the entry chunk or the LCP paint.
const NorthernEuropeMap = lazy(() => import("../components/NorthernEuropeMap"));
const RateCompare = lazy(() => import("../components/sections/tech/RateCompare"));
const ShipmentIntake = lazy(() => import("../components/sections/tech/ShipmentIntake"));
const HubTracker = lazy(() => import("../components/sections/tech/HubTracker"));
const CustomsScan = lazy(() => import("../components/sections/tech/CustomsScan"));
const BenchmarkChart = lazy(() => import("../components/sections/BenchmarkChart"));
const CustomsFlow = lazy(() => import("../components/sections/CustomsFlow"));
const HubPreview = lazy(() => import("../components/sections/HubPreview"));
const ComplianceBand = lazy(() => import("../components/sections/ComplianceBand"));

function LoadWhenNear({
  children,
  minHeight = 0,
  background = "transparent",
  idleTimeout = 5000,
  rootMargin = "900px 0px",
}) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  useEffect(() => {
    if (shouldLoad) return;

    const load = () => setShouldLoad(true);
    let idleId;

    const timeoutId = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(load, { timeout: 1000 });
        return;
      }
      load();
    }, idleTimeout);

    return () => {
      window.clearTimeout(timeoutId);
      if (idleId) window.cancelIdleCallback(idleId);
    };
  }, [idleTimeout, shouldLoad]);

  return (
    <div ref={ref} style={{ minHeight, background }}>
      {shouldLoad ? children : null}
    </div>
  );
}

export default function Home() {
  const reducedMotion = useReducedMotion();
  const [heroLoaded, setHeroLoaded] = useState(reducedMotion);

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────── */}
      <header
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          overflow: "hidden",
          padding: "120px 24px 80px",
        }}
      >
        {/* Hero background image */}
        <picture>
          <source
            type="image/avif"
            srcSet={`${HERO_BASE}/hero-1280.avif 1280w, ${HERO_BASE}/hero-1920.avif 1920w, ${HERO_BASE}/hero-2560.avif 2560w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${HERO_BASE}/hero-1280.webp 1280w, ${HERO_BASE}/hero-1920.webp 1920w, ${HERO_BASE}/hero-2560.webp 2560w`}
            sizes="100vw"
          />
          <img
            src={`${HERO_BASE}/hero-1920.jpg`}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1440}
            fetchPriority="high"
            decoding="async"
            onLoad={() => setHeroLoaded(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
              filter: "brightness(0.3) saturate(0.7)",
              clipPath: heroLoaded ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              transition: reducedMotion
                ? "none"
                : "clip-path 1000ms cubic-bezier(0.6, 0.01, 0.05, 1)",
            }}
          />
        </picture>
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%),
              radial-gradient(ellipse 800px 600px at 20% 80%, rgba(3,166,150,0.06) 0%, transparent 60%)
            `,
          }}
        />
        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            boxShadow: "inset 0 0 200px rgba(0,0,0,0.3)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: 800,
            animation: "fadeInUp 1s ease",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 5.8vw, 68px)",
              fontWeight: 700,
              color: COLORS.white,
              lineHeight: 1.1,
              margin: "0 0 36px",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ display: "block", marginBottom: 8 }}>
              Independent Freight
              <br />
              Forwarders.
            </span>
            <span
              className={reducedMotion ? undefined : "hero-accent-line"}
              style={{ display: "block", color: COLORS.copperLight }}
            >
              Stronger Together.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 2vw, 18px)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 560,
              margin: "0 auto 48px",
            }}
          >
            A group of independent freight forwarders operating autonomously at
            local level while benefiting from the collective scale.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="#contact" className="cta-btn cta-primary">
              Explore Partnership
              <span>{Icons.arrowRight}</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            animation: "fadeIn 2s ease",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 32,
              background: "rgba(255,255,255,0.1)",
              position: "relative",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <div
              style={{
                width: 1,
                height: 12,
                background: "rgba(255,255,255,0.4)",
                borderRadius: 1,
                animation: "scrollLine 2s ease infinite",
              }}
            />
          </div>
        </div>
      </header>

      {/* ─── BENEFITS ───────────────────────────────────────────── */}
      <Section id="benefits" bg={COLORS.cream}>
        <Reveal>
          <SectionLabel>Partner Benefits</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700,
              color: COLORS.navy,
              margin: "0 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              maxWidth: 600,
            }}
          >
            Everything forwarders need to compete at global scale
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.7,
              color: COLORS.textMuted,
              maxWidth: 540,
              margin: "0 0 40px",
            }}
          >
            Voyfai group forwarders access the resources that unlock the next stage of
            growth.
          </p>
        </Reveal>
        <div
          className="benefits-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 0,
          }}
        >
          <Reveal delay={60}>
            <BenefitCard
              icon={Icons.anchor}
              title="Central Trade Management"
              subtitle="Direct, lasting carrier partnerships at scale."
              description="We leverage the group's collective procurement power to secure stronger terms and lasting relationships with major carriers worldwide."
              items={[
                "Group negotiated rates across all trade lanes",
                "Direct carrier relationships with secured allocations",
                "Flexible rate structures from spot to annual",
              ]}
            />
          </Reveal>
          <Reveal delay={120}>
            <BenefitCard
              icon={Icons.cpu}
              title="Proprietary Tech"
              subtitle="Less manual work for operators."
              description="Our AI tools enhance the way operators work, reducing manual tasks so teams focus on service quality, relationships, and growth."
              items={[
                "Modern-age customer visibility across every shipment",
                "Automated manual workflows such as customs and accounts payable",
                "Eliminated data entry via automated shipment creation",
              ]}
            />
          </Reveal>
          <Reveal delay={180}>
            <BenefitCard
              icon={Icons.trending}
              title="Growth"
              subtitle="Operational backbone for expansion."
              description="Comprehensive administrative, financial, and strategic support to grow the business together."
              items={[
                "Growth financing",
                "Centralized talent acquisition",
                "Product and service expansion",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      {/* ─── OUR PARTNERS / MAP ─────────────────────────────────── */}
      <Section id="partners" bg={COLORS.warmWhite}>
        <Reveal>
        <div
          className="partners-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <SectionLabel>Our Group</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 700,
                color: COLORS.navy,
                margin: "0 0 16px",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              A growing group of independent freight forwarders
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                fontWeight: 400,
                lineHeight: 1.7,
                color: COLORS.textMuted,
                margin: "0 0 40px",
                maxWidth: 540,
              }}
            >
              Established freight forwarders, each a leader in their market, united
              under the Voyfai group. Every partner maintains their identity while
              gaining the strength of the collective.
            </p>

            {/* Key stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              {[
                { number: 8, label: "Partner Companies" },
                { number: 50, suffix: "k+", label: "Annual TEU" },
                { number: 25, label: "Office Locations" },
                { number: 6, label: "Countries" },
              ].map((stat, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div style={{ position: "relative", paddingBottom: 16 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 48,
                        fontWeight: 600,
                        color: COLORS.navy,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      <CountUp to={stat.number} duration={1400} prefix={stat.prefix || ""} suffix={stat.suffix || ""} delay={i * 100} />
                    </div>
                    {/* Animated divider */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "rgba(0,0,0,0.06)" }}>
                      <div
                        className="partner-stat-divider"
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "var(--voyfai-teal)",
                          transformOrigin: "left",
                          transitionDelay: `${i * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: COLORS.textMuted,
                      fontWeight: 500,
                      marginTop: 12,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: 16 }}>
            <LoadWhenNear minHeight={360} rootMargin="700px 0px">
              <Suspense fallback={null}>
                <NorthernEuropeMap />
              </Suspense>
            </LoadWhenNear>
          </div>
        </div>
        </Reveal>
      </Section>

      <LoadWhenNear minHeight={380} background="var(--voyfai-ink)">
        <Suspense fallback={null}>
          <BenchmarkChart />
        </Suspense>
      </LoadWhenNear>

      {/* ─── TECHNOLOGY ─────────────────────────────────────────── */}
      <LoadWhenNear minHeight={1040} background={COLORS.cream}>
        <Suspense fallback={null}>
          <DetailSection
            id="technology"
            bg={COLORS.cream}
            label="AI Technology"
            title="Tools built by forwarders, for forwarders"
            items={[
              {
                graphic: <RateCompare />,
                title: "Instant Rate Comparison",
                description:
                  "Compare carrier options in seconds and deliver accurate quotes within minutes. Operators spend time on relationships, not spreadsheets.",
              },
              {
                graphic: <ShipmentIntake />,
                title: "Automated Shipment Creation",
                description:
                  "Our AI agent converts booking emails directly into structured shipments in the TMS, reducing manual data entry and eliminating errors.",
              },
              {
                graphic: <HubTracker />,
                title: "Voyfai Hub: Live Visibility",
                description:
                  "A client portal that keeps clients continuously informed with smart alerts, automated updates, and full shipment transparency from origin to destination.",
              },
              {
                graphic: <CustomsScan />,
                title: "Intelligent Customs Automation",
                description:
                  "Streamline customs declarations with AI that classifies HS codes and processes documents, improving both speed and accuracy.",
              },
            ]}
          />
        </Suspense>
      </LoadWhenNear>

      <LoadWhenNear minHeight={620} background="var(--voyfai-ink)">
        <Suspense fallback={null}>
          <CustomsFlow />
        </Suspense>
      </LoadWhenNear>

      <LoadWhenNear minHeight={720} background="var(--voyfai-surface-page)">
        <Suspense fallback={null}>
          <HubPreview />
        </Suspense>
      </LoadWhenNear>

      <LoadWhenNear minHeight={96} background="var(--voyfai-ink)">
        <Suspense fallback={null}>
          <ComplianceBand />
        </Suspense>
      </LoadWhenNear>

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <Section bg={COLORS.warmWhite}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionLabel>What Voyfai Group Forwarders Say</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 700,
                color: COLORS.navy,
                margin: "0 auto",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                maxWidth: 500,
              }}
            >
              Built on trust, proven by results
            </h2>
          </div>
        </Reveal>
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: 16,
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          <Reveal delay={60}>
            <TestimonialCard
              quote="Our experience with Voyfai during the process was exceptionally smooth, transparent, and well-communicated. From the outset, James and Adrian made it clear that their approach is built on trust and autonomy, and they have followed through on that commitment. Since the deal, we've continued to run Corten independently, with Voyfai offering meaningful support where needed, from tech development to procurement efficiencies. Their input has been practical and value-adding, without ever being overbearing."
              name="Sam"
              company="Corten"
              role="Managing Director"
            />
          </Reveal>
        </div>
      </Section>

      {/* ─── CTA / CONTACT ──────────────────────────────────────── */}
      <DarkCTA
        id="contact"
        icon={Icons.mail}
        headline="Ready to write the next chapter?"
        body={
          <>
            Every Voyfai partnership starts with a conversation rooted in shared
            values &mdash; independence, ambition, and a belief in what the group
            can build together. No pressure, no pitch.
          </>
        }
        primary={
          <a
            href="mailto:contact@voyfai.com"
            className="cta-btn cta-primary"
            style={{ fontSize: 16, padding: "16px 32px" }}
          >
            Explore Partnership
            <span>{Icons.arrowRight}</span>
          </a>
        }
        footnote="Or reach us directly at contact@voyfai.com"
      />

      {/* ─── INVESTORS ─────────────────────────────────────────── */}
      <section
        style={{
          background: COLORS.cream,
          padding: "96px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.5,
            backgroundImage: `
              radial-gradient(ellipse 60% 50% at 50% 0%, rgba(3,166,150,0.04) 0%, transparent 70%)
            `,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <SectionLabel>Investors</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700,
              color: COLORS.navy,
              margin: "0 auto 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              maxWidth: 600,
            }}
          >
            Backed by the Greatest Investors
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.7,
              color: COLORS.textMuted,
              maxWidth: 540,
              margin: "0 auto 64px",
            }}
          >
            All our investors have long proven track records of picking the
            winners across different industries.
          </p>

          {/* Thin separator line */}
          <div
            style={{
              width: 48,
              height: 1,
              background: COLORS.sand,
              margin: "0 auto 64px",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 80,
              flexWrap: "wrap",
            }}
          >
            {[
              { src: atlanticLabsLogo, alt: "Atlantic Labs", width: 69, height: 48 },
              { src: heartcoreLogo, alt: "Heartcore", width: 52, height: 48 },
              { src: earlybirdLogo, alt: "Earlybird", width: 119, height: 52 },
              { src: blisceLogo, alt: "blisce", width: 85, height: 55 },
            ].map((logo, i) => (
              <Reveal key={logo.alt} delay={i * 60}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="investor-logo"
                  loading="lazy"
                  decoding="async"
                  style={{
                    height: logo.height,
                    objectFit: "contain",
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
