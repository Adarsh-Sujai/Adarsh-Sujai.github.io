// About.jsx - section 002
const About = () => {
  const facts = [
    { label: "EDUCATION", value: "BCA, Data Science", sub: "Amrita Vishwa Vidyapeetham" },
    { label: "CERTIFICATIONS", value: "AI · SQL", sub: "English CEFR C1" },
    { label: "INTERESTS", value: "Reading · Hiking", sub: "Building things" },
    { label: "COFOUNDED", value: "Aana Pappan", sub: "Freelance web dev studio · aanapappan.tech", href: "https://aanapappan.tech/" },
  ];

  return (
    <section id="about" style={{
      maxWidth: 1400, margin: "0 auto",
      padding: "var(--section-gap) var(--pad-edge)",
    }}>
      <SectionLabel n="002" label="ABOUT" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
        gap: "clamp(2rem, 5vw, 5rem)",
        marginTop: "clamp(2rem, 4vw, 3.5rem)",
        alignItems: "start",
      }} className="about-grid">
        <figure style={{ margin: 0, position: "relative" }}>
          <div className="about-photo-frame" style={{
            aspectRatio: "4 / 5",
            background: "var(--surface-2)",
            position: "relative",
          }}>
            <img
              src="src/assets/portrait.jpg"
              alt="Adarsh K Sujai"
              style={{
                width: "100%", height: "100%", objectFit: "cover",
                display: "block",
              }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <figcaption style={{
            marginTop: 14,
            fontFamily: "var(--font-mono)", fontSize: 11,
            color: "var(--steel)", letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            Adarsh K Sujai · 2026
          </figcaption>
        </figure>

        <div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            margin: "0 0 var(--space-5)",
            color: "var(--ink)",
            textWrap: "balance",
          }}>
            I'm Adarsh - a software developer and{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>
              data scientist
            </span>{" "}
            from Pune.
          </h2>
          <p style={{
            fontSize: "clamp(15px, 1.15vw, 17px)",
            lineHeight: 1.65,
            color: "var(--ink-2)",
            maxWidth: "60ch",
            margin: "0 0 var(--space-4)",
          }}>
            I graduated with a BCA in Data Science from Amrita Vishwa Vidyapeetham. What draws me to tech is simple but mesmerising - the idea that with just letters and numbers on a keyboard, you can create something beautiful.
          </p>
          <p style={{
            fontSize: "clamp(15px, 1.15vw, 17px)",
            lineHeight: 1.65,
            color: "var(--ink-2)",
            maxWidth: "60ch",
            margin: "0 0 var(--space-7)",
          }}>
            Currently co-founding{" "}
            <a
              href="https://aanapappan.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Aana Pappan <span className="arrow">↗</span>
            </a>{" "}
            - a freelance web development studio building websites and digital products. We're early, taking on our first clients.
          </p>

          <div className="fact-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "var(--hairline)",
            border: "1px solid var(--hairline)",
            borderRadius: 14,
            overflow: "hidden",
          }}>
            {facts.map((f, i) => {
              const inner = (
                <React.Fragment>
                  <div className="meta" style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    color: "var(--steel)", letterSpacing: "0.08em",
                    textTransform: "uppercase", marginBottom: 10,
                  }}>{f.label}</div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 600,
                    fontSize: 16, color: "var(--ink)", letterSpacing: "-0.01em",
                    marginBottom: 4,
                  }}>{f.value}</div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 13,
                    color: "var(--steel)", lineHeight: 1.4,
                  }}>
                    {f.sub}
                    {f.href && <span className="arrow" style={{ fontFamily: "var(--font-mono)", marginLeft: 4 }}>↗</span>}
                  </div>
                </React.Fragment>
              );
              return f.href ? (
                <a key={i} href={f.href} target="_blank" rel="noopener noreferrer" className="fact-cell">
                  {inner}
                </a>
              ) : (
                <div key={i} className="fact-cell">{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

window.About = About;
