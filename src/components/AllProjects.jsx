// AllProjects.jsx - /projects route
const AllProjects = ({ onNavigate }) => {
  const all = window.PROJECTS || [];
  const allTech = React.useMemo(() => {
    const set = new Set();
    all.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, [all]);

  const [filter, setFilter] = React.useState("All");
  const filtered = filter === "All" ? all : all.filter((p) => p.tech.includes(filter));

  const goHome = (e) => {
    e.preventDefault();
    onNavigate("/");
    window.scrollTo({ top: 0 });
  };

  return (
    <main style={{ minHeight: "70vh", paddingBottom: "var(--space-8)" }}>
      <section style={{
        maxWidth: 1400, margin: "0 auto",
        padding: "clamp(2.5rem, 6vw, 4rem) var(--pad-edge) clamp(2rem, 4vw, 3rem)",
      }}>
        <a href="/" onClick={goHome} className="nav-link" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-mono)", fontSize: 12,
          color: "var(--steel)",
          letterSpacing: "0.06em", textTransform: "uppercase",
          marginBottom: 24,
        }}>
          ← Back to home
        </a>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <SectionLabel n="003" label="ARCHIVE" />
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.96,
              margin: "20px 0 0",
              color: "var(--ink)",
            }}>
              All projects{" "}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.4em", color: "var(--accent)", verticalAlign: "middle" }}>
                / {String(all.length).padStart(3, "0")}
              </span>
            </h1>
          </div>
        </div>

        <div style={{
          display: "flex", flexWrap: "wrap", gap: 8,
          marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
        }}>
          {allTech.map((t) => (
            <button key={t} onClick={() => setFilter(t)} style={{
              fontFamily: "var(--font-mono)", fontSize: 12,
              padding: "8px 14px", borderRadius: 999, cursor: "pointer",
              background: filter === t ? "var(--accent)" : "transparent",
              color: filter === t ? "var(--ink)" : "var(--ink-2)",
              border: filter === t ? "1px solid var(--accent)" : "1px solid var(--hairline-strong)",
              transition: "all 200ms ease-out",
            }}
            onMouseEnter={(e) => { if (filter !== t) e.currentTarget.style.borderColor = "var(--accent)"; }}
            onMouseLeave={(e) => { if (filter !== t) e.currentTarget.style.borderColor = "var(--hairline-strong)"; }}
            >{t}</button>
          ))}
        </div>
      </section>

      <section style={{
        maxWidth: 1400, margin: "0 auto",
        padding: "0 var(--pad-edge) var(--space-9)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 24,
        }}>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--steel)", padding: "var(--space-8) 0" }}>
            No projects match this filter.
          </p>
        )}
      </section>
    </main>
  );
};

const ProjectCard = ({ project, index }) => (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card"
    style={{
      opacity: 0,
      animation: "cardIn 600ms ease-out forwards",
      animationDelay: (index * 70) + "ms",
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
      <span className="pn" style={{
        fontFamily: "var(--font-mono)", fontSize: 12,
        color: "var(--steel)",
        letterSpacing: "0.08em", textTransform: "uppercase",
      }}>{project.number}</span>
    </div>
    <h3 style={{
      fontFamily: "var(--font-display)", fontWeight: 700,
      fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
      letterSpacing: "-0.025em", lineHeight: 1.1,
      margin: "0 0 12px", color: "var(--ink)",
    }}>{project.title}</h3>
    <p style={{
      fontFamily: "var(--font-body)", fontSize: 14.5,
      lineHeight: 1.55, color: "var(--steel)",
      margin: "0 0 20px", flex: 1,
    }}>{project.description}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
      {project.tech.map((t) => (
        <span key={t} style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          padding: "3px 9px", borderRadius: 999,
          background: "rgba(237,237,240,0.04)",
          color: "var(--ink-2)",
          border: "1px solid var(--hairline)",
        }}>{t}</span>
      ))}
    </div>
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      paddingTop: 14, borderTop: "1px solid var(--hairline)",
    }}>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 12,
        color: "var(--steel)", letterSpacing: "0.05em",
      }}>VIEW CODE</span>
      <span className="arrow" style={{
        fontFamily: "var(--font-mono)", fontSize: 14,
        color: "var(--ink)",
      }}>↗</span>
    </div>
  </a>
);

window.AllProjects = AllProjects;
