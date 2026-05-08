// Skills.jsx - section 004
const Skills = () => {
  const groups = [
    {
      title: "Development",
      items: ["Python", "Machine Learning", "Computer Vision", "Git & GitHub"],
    },
    {
      title: "Data & Analytics",
      items: ["Pandas", "NumPy", "Matplotlib", "SQL", "Tableau", "Power BI", "Excel"],
    },
  ];

  return (
    <section id="skills" style={{
      maxWidth: 1400, margin: "0 auto",
      padding: "calc(var(--section-gap) * 0.85) var(--pad-edge) calc(var(--section-gap) * 0.55)",
    }}>
      <SectionLabel n="004" label="SKILLS" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 8fr) minmax(0, 4fr)",
        gap: "clamp(1.5rem, 4vw, 4rem)",
        alignItems: "end",
        marginTop: 8,
      }} className="hero-grid">
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.035em",
          lineHeight: 1.05,
          margin: "20px 0 0",
          color: "var(--ink)",
          maxWidth: "16ch",
        }}>
          Tools, in two{" "}
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>
            rooms
          </span>.
        </h2>

        {/* small decorative counter */}
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--steel)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          paddingBottom: 6,
          display: "flex", flexDirection: "column", gap: 6,
          borderLeft: "1px solid var(--hairline)",
          paddingLeft: 16,
        }}>
          <span>01 - Development · {groups[0].items.length}</span>
          <span>02 - Data &amp; Analytics · {groups[1].items.length}</span>
          <span style={{ color: "var(--accent)" }}>-</span>
          <span>{groups[0].items.length + groups[1].items.length} tools, sharpened</span>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
        gap: "clamp(1.5rem, 3vw, 3rem)",
        marginTop: "clamp(2rem, 4vw, 3rem)",
      }}>
        {groups.map((g) => (
          <div key={g.title}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              borderTop: "1px solid var(--hairline-strong)",
              paddingTop: 18, marginBottom: 22,
            }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 12,
                color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase",
              }}>-</span>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 600,
                fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)",
                letterSpacing: "-0.02em",
                margin: 0, color: "var(--ink)",
              }}>{g.title}</h3>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 10 }}>
              {g.items.map((it) => (
                <li key={it} className="skill-pill">{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

window.Skills = Skills;
