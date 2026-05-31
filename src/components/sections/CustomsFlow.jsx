import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Icons } from "../../constants/icons";
import MaskReveal from "../motion/MaskReveal";

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  { id: "email", label: "Email intake", icon: Icons.mail, data: { label: "Source", value: "shipper@acme.com" } },
  { id: "hs", label: "HS classification", icon: Icons.cpu, data: { label: "HS Code", value: "8471.30 (94%)" } },
  { id: "doc", label: "Document validation", icon: Icons.document, data: { label: "Commercial Inv", value: "Verified" } },
  { id: "risk", label: "Risk scoring", icon: Icons.shield, data: { label: "Status", value: "Low Risk" } },
  { id: "file", label: "Filing", icon: Icons.send, data: { label: "Customs ID", value: "CHIEF-8422A" } },
];

export default function CustomsFlow() {
  const containerRef = useRef(null);
  const activeLineRef = useRef(null);

  useLayoutEffect(() => {
    if (!activeLineRef.current) return;

    const canPin =
      window.matchMedia("(min-width: 900px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canPin) return;

    let cleanupRefresh = () => {};

    const ctx = gsap.context(() => {
      gsap.set(activeLineRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=20%",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(activeLineRef.current, { scaleX: 1, ease: "none", duration: 1 }, 0);

      NODES.forEach((_, i) => {
        const nodeProgress = i / (NODES.length - 1);

        tl.to(`.node-${i}`, {
          borderColor: "var(--voyfai-teal)",
          color: "var(--voyfai-teal)",
          duration: 0.1,
        }, nodeProgress - 0.05);

        tl.to(`.node-data-${i}`, {
          y: 0,
          duration: 0.1,
        }, nodeProgress - 0.05);
      });

      let refreshFrame;
      const refresh = () => {
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      };
      const refreshTimers = [80, 300, 900, 1800].map((delay) =>
        window.setTimeout(refresh, delay)
      );

      document.fonts?.ready?.then(refresh);
      window.addEventListener("load", refresh, { once: true });
      window.addEventListener("resize", refresh);
      refresh();

      cleanupRefresh = () => {
        cancelAnimationFrame(refreshFrame);
        refreshTimers.forEach((timer) => window.clearTimeout(timer));
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
      };
    }, containerRef);

    return () => {
      cleanupRefresh();
      ctx.revert();
    };
  }, []);

  return (
    /* Pinned ScrollTrigger scrub section — sized by viewport, so it skips the canonical 96px padding. */
    <section ref={containerRef} className="customs-flow-section">
      <div style={{ width: "100%", maxWidth: 1200, padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div className="customs-flow-heading">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            <MaskReveal>From shipper email to customs filing</MaskReveal>
          </h2>
        </div>

        <div className="customs-flow-track">
          <div className="customs-flow-line customs-flow-line--base" aria-hidden="true" />
          <div
            ref={activeLineRef}
            className="customs-flow-line customs-flow-line--active"
            aria-hidden="true"
          />

          {NODES.map((node, i) => (
            <div key={node.id} className="customs-flow-node">
              <div
                className={`node-data-${i}`}
                style={{
                  position: "absolute", bottom: "100%", marginBottom: 16, background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 12px", width: 140, transform: "translateY(0)",
                }}
              >
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4 }}>{node.data.label}</div>
                <div style={{ fontSize: 11, fontFamily: "monospace", color: "var(--voyfai-teal)" }}>{node.data.value}</div>
              </div>

              <div
                className={`node-${i}`}
                style={{ width: 48, height: 48, borderRadius: "50%", background: "#000", border: "2px solid var(--voyfai-teal)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--voyfai-teal)", transition: "border-color 200ms var(--ease-out-quart), color 200ms var(--ease-out-quart)" }}
              >
                {node.icon}
              </div>

              <div className="customs-flow-label">
                {node.label}
              </div>
            </div>
          ))}
        </div>

        <div className="customs-flow-mobile">
          {NODES.map((node) => (
            <div key={node.id} className="customs-flow-mobile-step">
              <div className="customs-flow-mobile-icon">{node.icon}</div>
              <div>
                <div className="customs-flow-mobile-title">{node.label}</div>
                <div className="customs-flow-mobile-meta">
                  <span>{node.data.label}</span>
                  <strong>{node.data.value}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
