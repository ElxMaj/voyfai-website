import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../constants/colors";
import { Icons } from "../constants/icons";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Partners", href: "#partners" },
  { label: "Procurement", href: "#procurement" },
  { label: "Technology", href: "#technology" },
  { label: "Growth", href: "#growth" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  const resolveHref = (href) => {
    if (isHome) return href;
    return "/" + href;
  };

  return (
    <>
      <nav
        className={scrolled ? "nav-scrolled" : ""}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          background: scrolled ? "rgba(253,251,247,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${COLORS.border}`
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              transition: "all 0.4s",
            }}
          >
            <svg
              width="100"
              height="33"
              viewBox="0 0 435 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transition: "fill 0.4s" }}
            >
              <path
                d="M97.789 6.08211L64.3604 71.7985L29.9903 6.08211L0 6.06843L49.1424 95.3329C51.1163 98.9191 54.8776 101.146 58.9572 101.146H69.9136C74.0615 101.146 77.8683 98.8507 79.8149 95.1777L127.038 6.06386L97.789 6.07755V6.08211Z"
                fill={scrolled ? COLORS.navy : "#fff"}
              />
              <path
                d="M146.836 32.5823C124.059 32.5823 103.033 42.8575 103.033 67.7378C103.033 92.6182 124.059 102.355 146.836 102.355C169.613 102.355 190.239 92.349 190.239 67.7378C190.239 43.1267 169.617 32.5823 146.836 32.5823ZM146.836 83.0183C134.301 83.0183 126.888 75.8503 126.888 67.6055C126.888 58.6809 134.301 51.5129 146.836 51.5129C159.37 51.5129 166.784 58.8178 166.784 67.6055C166.784 76.3933 159.37 83.0183 146.836 83.0183Z"
                fill={scrolled ? COLORS.navy : "#fff"}
              />
              <path
                d="M325.036 34.2065H305.492V28.932C305.492 22.9823 308.999 19.7382 315.062 19.7382C316.949 19.7382 320.724 19.1952 325.977 21.6317L328.538 2.97487C322.339 0.944477 315.867 0 311.555 0C305.219 0 299.425 1.21824 293.494 4.86839C286.349 9.3307 281.496 18.1184 281.496 25.8248V34.2065H249.15C243.083 46.512 237.02 59.2237 231.09 71.6616L207.772 34.2065H181.17L219.501 95.7298L201.636 130.967L221.853 142L266.961 50.4314H281.506V100.867H305.497V50.4314H325.04V34.2019L325.036 34.2065Z"
                fill={scrolled ? COLORS.navy : "#fff"}
              />
              <path
                d="M410.354 84.6423C403.613 86.3989 401.594 83.967 401.594 78.6925V57.7361C401.594 48.9484 398.897 43.4047 389.191 37.9933C380.7 33.3941 368.57 32.7189 361.289 32.7189C350.91 32.7189 335.273 36.912 330.02 40.0192L333.122 53.6753C341.345 50.8373 352.802 47.4564 360.484 47.4564C366.01 47.4564 370.862 48.2685 374.769 50.2989C377.33 51.5126 377.598 55.1673 377.598 57.4669C377.237 57.4669 376.968 57.4213 376.789 57.33C372.477 56.1118 364.927 55.4365 359.806 55.4365C341.477 55.4365 322.202 59.8988 322.202 78.8294C322.202 96.2726 342.419 101.953 359.538 101.953C367.356 101.953 376.52 100.466 382.992 95.5973C387.709 100.329 395.527 101.278 401.726 101.278C406.442 101.278 410.349 100.872 410.349 100.872H434.609V34.2063H410.349V84.6423H410.354ZM360.215 86.262C350.51 86.262 346.062 83.1503 346.062 78.2864C346.062 73.6872 350.778 69.7679 361.698 69.7679C366.687 69.7679 372.75 70.7169 377.603 71.2553C377.603 84.4598 368.438 86.262 360.215 86.262Z"
                fill={scrolled ? COLORS.navy : "#fff"}
              />
              <path
                d="M422.734 29.5936C429.069 29.5936 435 24.7252 435 17.831C435 10.9368 429.069 5.93149 422.734 5.93149C416.398 5.93149 410.467 11.0691 410.467 17.831C410.467 24.5929 416.398 29.5936 422.734 29.5936Z"
                fill={scrolled ? COLORS.navy : "#fff"}
              />
            </svg>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            {navLinks.map((link) => (
              <a key={link.label} href={resolveHref(link.href)} className="nav-link">
                {link.label}
              </a>
            ))}
            <a
              href={resolveHref("#contact")}
              className="cta-btn"
              style={{
                padding: "10px 20px",
                fontSize: 13,
                fontWeight: 500,
                background: scrolled ? COLORS.copper : "rgba(255,255,255,0.12)",
                color: COLORS.white,
                borderRadius: 6,
                border: scrolled ? "none" : "1px solid rgba(255,255,255,0.2)",
                textDecoration: "none",
              }}
            >
              Start a Conversation
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="mobile-trigger"
            onClick={() => setMobileMenu(!mobileMenu)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? COLORS.navy : COLORS.white,
              padding: 4,
            }}
          >
            {mobileMenu ? Icons.x : Icons.menu}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
            background: COLORS.navy,
            zIndex: 999,
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            animation: "slideDown 0.3s ease",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={resolveHref(link.href)}
              onClick={() => setMobileMenu(false)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 18,
                fontWeight: 400,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resolveHref("#contact")}
            className="cta-btn cta-primary"
            onClick={() => setMobileMenu(false)}
            style={{ marginTop: 16, justifyContent: "center" }}
          >
            Start a Conversation
          </a>
        </div>
      )}
    </>
  );
}
