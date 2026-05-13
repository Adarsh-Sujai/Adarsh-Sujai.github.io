// Hero.jsx - section 001 / INTRO
const Hero = ({ onJumpProjects }) => {
  const words = ["Code.", "Data.", "Insights."];

  return (
    <section id="intro" style={{
      maxWidth: 1400,
      margin: "0 auto",
      padding: "clamp(2rem, 8vw, 6rem) var(--pad-edge) 0",
      position: "relative",
    }}>
      <SectionLabel n="001" label="INTRO" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 8fr) minmax(0, 4fr)",
        gap: "clamp(1.5rem, 4vw, 4rem)",
        alignItems: "end",
        marginTop: "clamp(1.5rem, 4vw, 3rem)",
      }} className="hero-grid">
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(3rem, 12vw, 8rem)",
          letterSpacing: "-0.045em",
          lineHeight: 0.95,
          color: "var(--ink)",
          margin: 0,
          textWrap: "balance",
        }}>
          {words.map((w, i) => (
            <span key={i} style={{
              display: "inline-block",
              marginRight: "0.18em",
              opacity: 0,
              transform: "translateY(28px)",
              animation: `heroWord 700ms var(--ease-spring) forwards`,
              animationDelay: `${120 + i * 140}ms`,
            }}>
              {i === 1 ? (
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>
                  {w}
                </span>
              ) : w}
            </span>
          ))}
        </h1>

        <div style={{ paddingBottom: 8, opacity: 0, animation: "heroFade 700ms var(--ease-standard) forwards", animationDelay: "520ms" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 1.2vw, 18px)",
            lineHeight: 1.55,
            color: "var(--ink-2)",
            margin: "0 0 var(--space-5)",
            maxWidth: "32ch",
          }}>
            Software developer & data scientist building end-to-end systems - from computer vision pipelines to data-driven analysis.
          </p>
          <p className="meta" style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            color: "var(--steel)",
            letterSpacing: "0.03em",
            margin: 0,
          }}>
            BCA Data Science · Pune, India
          </p>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            color: "var(--accent)",
            letterSpacing: "0.03em",
            margin: "0.5rem 0 0",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span aria-hidden className="live-dot" style={{
              display: "inline-block", width: 8, height: 8, borderRadius: 999,
              background: "var(--accent)",
            }} />
            Available for work
          </p>
        </div>
      </div>

      <div className="hero-cta-row" style={{
        display: "flex", gap: 12, marginTop: "clamp(2rem, 5vw, 3.5rem)", flexWrap: "wrap",
        opacity: 0, animation: "heroFade 700ms var(--ease-standard) forwards", animationDelay: "680ms",
      }}>
        <button onClick={onJumpProjects} className="btn-primary">
          View projects <span className="arrow">↓</span>
        </button>
        <a href="https://www.linkedin.com/in/adarshsujai/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          LinkedIn <span className="arrow">↗</span>
        </a>
        <a href="https://github.com/Adarsh-Sujai" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          GitHub <span className="arrow">↗</span>
        </a>
	<a href="https://adarsh-sujai.github.io/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          Resume <span className="arrow">↗</span>
        </a>
      </div>

      <Marquee />
    </section>
  );
};

const btnGhost = {
  display: "inline-flex", alignItems: "center", gap: 8,
  fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15,
  padding: "13px 21px", borderRadius: 10,
  background: "transparent", color: "var(--ink)",
  border: "1px solid rgba(26,26,26,0.18)",
  textDecoration: "none",
};

const SectionLabel = ({ n, label }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 14,
    fontFamily: "var(--font-mono)", fontSize: 12,
    color: "var(--steel)", letterSpacing: "0.08em", textTransform: "uppercase",
  }} className="section-label-text">
    <span style={{ color: "var(--accent)", fontWeight: 600 }}>{n}</span>
    <span style={{ width: 24, height: 1, background: "var(--hairline-strong)" }}></span>
    <span>{label}</span>
  </div>
);

const Marquee = () => {
  const items = ["DEV", "ML", "DATA", "ANALYTICS", "PYTHON", "VISION", "SQL", "BUILD"];
  return (
    <div style={{
      marginTop: "var(--section-gap)",
      borderTop: "1px solid var(--hairline)",
      borderBottom: "1px solid var(--hairline)",
      overflow: "hidden",
      padding: "22px 0",
      maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      // Break out of parent's max-width container - span full viewport edge-to-edge
      width: "100vw",
      marginLeft: "calc(50% - 50vw)",
      marginRight: "calc(50% - 50vw)",
    }}>
      <div className="marquee-track" style={{
        display: "flex", gap: 48, whiteSpace: "nowrap",
        animation: "marquee 32s linear infinite",
        width: "max-content",
      }}>
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} className="marquee-text" style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.03em",
            color: it === "VISION" ? "var(--orange)" : "var(--ink)",
            display: "inline-flex", alignItems: "center", gap: 48,
            flexShrink: 0,
          }}>
            {it}
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 14,
              color: "var(--steel)", verticalAlign: "middle",
            }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

window.Hero = Hero;
window.SectionLabel = SectionLabel;
