import { COLORS } from "../constants/colors";
import { Icons } from "../constants/icons";
import Section from "../components/Section";
import SectionLabel from "../components/SectionLabel";
import BenefitCard from "../components/BenefitCard";
import PartnerCard from "../components/PartnerCard";
import DetailSection from "../components/DetailSection";
import TestimonialCard from "../components/TestimonialCard";
import NorthernEuropeMap from "../components/NorthernEuropeMap";
import heroImg from "../assets/Voyfai-hero.jpg";

export default function Home() {
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.3) saturate(0.7)",
          }}
        />
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
          {/* Tagline chip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(3,166,150,0.12)",
              border: "1px solid rgba(3,166,150,0.25)",
              backdropFilter: "blur(12px)",
              borderRadius: 100,
              padding: "8px 20px",
              marginBottom: 36,
              animation: "fadeIn 1.2s ease",
            }}
          >
            <span style={{ color: COLORS.copperLight }}>{Icons.ship}</span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: COLORS.copperLight,
                letterSpacing: "0.04em",
              }}
            >
              A New Chapter for Freight Forwarders
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(38px, 5.8vw, 68px)",
              fontWeight: 600,
              color: COLORS.white,
              lineHeight: 1.1,
              margin: "0 0 8px",
              letterSpacing: "-0.035em",
            }}
          >
            Independent Freight
            <br />
            Forwarders.
          </h1>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(38px, 5.8vw, 68px)",
              fontWeight: 600,
              color: COLORS.copperLight,
              lineHeight: 1.1,
              margin: "0 0 36px",
              letterSpacing: "-0.035em",
            }}
          >
            Stronger Together.
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 560,
              margin: "0 auto 48px",
            }}
          >
            We unite successful, family run freight forwarders across Europe while
            preserving what makes them great and unlocking the scale, technology, and
            rates they need to thrive.
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
              Start a Conversation
              <span>{Icons.arrowRight}</span>
            </a>
            <a href="#benefits" className="cta-btn cta-outline">
              Discover Our Model
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
              fontFamily: "'Plus Jakarta Sans', sans-serif",
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
        <SectionLabel>Partner Benefits</SectionLabel>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 600,
            color: COLORS.navy,
            margin: "0 0 16px",
            lineHeight: 1.25,
            maxWidth: 600,
          }}
        >
          Everything your business needs to compete at global scale
        </h2>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 17,
            fontWeight: 400,
            lineHeight: 1.7,
            color: COLORS.textMuted,
            maxWidth: 540,
            margin: "0 0 40px",
          }}
        >
          Voyfai partners keep their brand, their team, and their clients. We add the
          resources that transform good forwarders into great ones.
        </p>
        <div
          className="benefits-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 0,
          }}
        >
          <BenefitCard
            icon={Icons.anchor}
            title="Central Procurement"
            subtitle="Direct, lasting carrier partnerships at scale."
            description="We leverage group volume to secure stronger terms and lasting relationships with major carriers worldwide."
            items={[
              "Group negotiated rates across all trade lanes",
              "Direct carrier partnerships with allocation priority",
              "Flexible rate structures from monthly to annual",
            ]}
          />
          <BenefitCard
            icon={Icons.cpu}
            title="Proprietary Technology"
            subtitle="Technology that empowers people."
            description="Our AI tools enhance the way your operators work, reducing manual tasks so your team can focus on service, relationships, and growth."
            items={[
              "Instant rate comparison and rapid quoting",
              "Automated shipment creation from email",
              "Real time tracking with proactive alerts",
            ]}
          />
          <BenefitCard
            icon={Icons.trending}
            title="Growth Support"
            subtitle="Operational backbone for expansion."
            description="Comprehensive administrative, financial, and strategic support that frees you to do what you do best: grow the business."
            items={[
              "Growth capital while keeping independence",
              "Centralized talent acquisition",
              "New revenue streams and market entry support",
            ]}
          />
        </div>
      </Section>

      {/* ─── OUR PARTNERS / MAP ─────────────────────────────────── */}
      <Section id="partners" bg={COLORS.warmWhite}>
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
            <SectionLabel>Our Network</SectionLabel>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 38px)",
                fontWeight: 600,
                color: COLORS.navy,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              Voyfai&rsquo;s group spans Northern Europe
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.7,
                color: COLORS.textMuted,
                margin: "0 0 40px",
                maxWidth: 460,
              }}
            >
              Five established freight forwarders, each a leader in their market, united
              under the Voyfai group. Every partner maintains their identity while
              gaining the strength of the collective.
            </p>

            {/* Key stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {[
                { number: "5", label: "Partner Companies" },
                { number: "50+", label: "Years Combined Experience" },
                { number: "6", label: "Office Locations" },
                { number: "3", label: "Countries" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "16px 0",
                    borderTop: `2px solid ${i < 2 ? COLORS.copper : COLORS.border}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 32,
                      fontWeight: 600,
                      color: COLORS.navy,
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 13,
                      color: COLORS.textMuted,
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: 16 }}>
            <NorthernEuropeMap />
          </div>
        </div>

        {/* Partner cards grid */}
        <div
          className="partner-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            marginTop: 48,
          }}
        >
          <PartnerCard
            name="Remiro"
            founded="2008"
            withVoyfai="Jul '24"
            service="Operating & Management of Air Freight, Sea, Road & Warehousing"
            customers="Diverse base across Europe in general cargo and food products"
          />
          <PartnerCard
            name="Corten"
            founded="1991"
            withVoyfai="Apr '25"
            service="Operating & Management of Sea Freight"
            customers="Industrial companies across multiple sectors"
          />
          <PartnerCard
            name="EFS"
            founded="2004"
            withVoyfai="Dec '24"
            service="Air Freight, Road Freight and Warehousing"
            customers="Broadcasting equipment, military, pharma and more"
          />
          <PartnerCard
            name="PVY & Boxlines"
            founded="1974 / 2001"
            withVoyfai="Feb '25"
            service="Sea Freight FCL & Consolidations"
            customers="General cargo, machinery and equipment"
          />
          <PartnerCard
            name="Soli-Trans"
            founded="2009"
            withVoyfai="Jul '24"
            service="Operating & Management of Sea and Air Freight"
            customers="Consumer & retail brands, ecommerce businesses"
          />
        </div>
      </Section>

      {/* ─── PROCUREMENT ────────────────────────────────────────── */}
      <DetailSection
        id="procurement"
        bg={COLORS.cream}
        label="Central Procurement"
        title="Carrier relationships built on trust, powered by scale"
        items={[
          {
            title: "Direct Carrier Partnerships",
            description:
              "Establish trusted, lasting partnerships with major carriers that enhance stability and give your business allocation priority, even in peak season.",
          },
          {
            title: "Group Negotiated Rates",
            description:
              "Leverage the collective scale of the Voyfai group to access pricing and terms that no individual forwarder could secure alone.",
          },
          {
            title: "Flexible Rate Structures",
            description:
              "From alternative product solutions to monthly and annual agreements, we build rate structures that ensure resilience in changing markets.",
          },
        ]}
      />

      {/* ─── TECHNOLOGY ─────────────────────────────────────────── */}
      <DetailSection
        id="technology"
        bg={COLORS.warmWhite}
        label="AI Technology"
        title="Tools built by forwarders, for forwarders"
        items={[
          {
            title: "Instant Rate Comparison",
            description:
              "Compare carrier options in seconds and deliver accurate quotes within minutes. Your operators spend time on relationships, not spreadsheets.",
          },
          {
            title: "Automated Shipment Creation",
            description:
              "Our AI agent converts booking emails directly into structured shipments in your TMS, reducing manual data entry and eliminating errors.",
          },
          {
            title: "Real Time Visibility",
            description:
              "Keep clients continuously informed with automated updates, proactive exception alerts, and full shipment transparency from origin to destination.",
          },
          {
            title: "Intelligent Customs Automation",
            description:
              "Streamline customs declarations with AI powered HS code classification and document processing that improves both speed and accuracy.",
          },
        ]}
      />

      {/* ─── GROWTH ─────────────────────────────────────────────── */}
      <DetailSection
        id="growth"
        bg={COLORS.cream}
        label="Growth Support"
        title="Your ambition, our infrastructure"
        items={[
          {
            title: "Growth Capital",
            description:
              "Access financial resources that accelerate your expansion while preserving the operational independence that made your business successful.",
          },
          {
            title: "Talent Acquisition",
            description:
              "Leverage centralized recruitment capabilities to attract and retain top professionals, solving the industry's biggest challenge.",
          },
          {
            title: "Geographic Expansion",
            description:
              "Enter new markets with strategic planning and structured local support from partners who already know the territory.",
          },
          {
            title: "New Revenue Streams",
            description:
              "Broaden your product offering from cargo insurance to carbon offset solutions, services your clients want but you couldn't offer alone.",
          },
        ]}
      />

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <Section bg={COLORS.warmWhite}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel>What Our Partners Say</SectionLabel>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 38px)",
              fontWeight: 600,
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
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
        >
          <TestimonialCard
            quote="Partner testimonial placeholder. A quote from one of the founding partners about their experience joining the Voyfai group and the impact on their business."
            name="Partner Name"
            company="Corten"
            role="Managing Director"
          />
          <TestimonialCard
            quote="Partner testimonial placeholder. A quote about how Voyfai's technology and procurement capabilities have helped them compete with much larger forwarders."
            name="Partner Name"
            company="Soli-Trans"
            role="Founder"
          />
        </div>
      </Section>

      {/* ─── CTA / CONTACT ──────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          background: "linear-gradient(165deg, #000000 0%, #141414 100%)",
          padding: "72px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage: `
              radial-gradient(circle at 25% 50%, rgba(3,166,150,0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 50%, rgba(20,20,20,0.4) 0%, transparent 50%)
            `,
          }}
        />

        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
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
            {Icons.mail}
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 600,
              color: COLORS.white,
              margin: "0 0 16px",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Ready to write the next chapter?
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.5)",
              margin: "0 auto 40px",
              maxWidth: 480,
            }}
          >
            Every Voyfai partnership starts with a conversation. No pressure, no pitch.
            Just two freight forwarding people talking about what&rsquo;s possible.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:partner@voyfai.com"
              className="cta-btn cta-primary"
              style={{ fontSize: 16, padding: "16px 32px" }}
            >
              Schedule a Conversation
              <span>{Icons.arrowRight}</span>
            </a>
          </div>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
              marginTop: 24,
            }}
          >
            Or reach us directly at partner@voyfai.com
          </p>
        </div>
      </section>
    </>
  );
}
