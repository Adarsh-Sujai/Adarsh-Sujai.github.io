// Projects.jsx - section 003 / SHOWCASE - auto-advancing carousel
const { motion, AnimatePresence } = window.Motion || {};

const Projects = ({ onNavigate }) => {
  const all = window.PROJECTS || [];
  const featured = all.filter((p) => p.featured).slice(0, 4);
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(null);

  // Auto-advance respects prefers-reduced-motion
  React.useEffect(() => {
    if (paused || featured.length === 0) return;
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % featured.length);
    }, 3000);
    return () => clearInterval(t);
  }, [paused, featured.length]);

  if (featured.length === 0) return null;
  const project = featured[idx];

  const next = () => setIdx((i) => (i + 1) % featured.length);
  const prev = () => setIdx((i) => (i - 1 + featured.length) % featured.length);

  const goAll = () => {
    onNavigate("/projects");
    window.scrollTo({ top: 0 });
  };

  return (
    <section id="projects" style={{
      maxWidth: 1400, margin: "0 auto",
      padding: "var(--section-gap) var(--pad-edge)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
        <div>
          <SectionLabel n="003" label="SHOWCASE" />
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            margin: "20px 0 0",
            color: "var(--ink)",
          }}>
            Selected work,{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>
              four
            </span>{" "}
            at a time.
          </h2>
        </div>
        <div className="meta" style={{
          fontFamily: "var(--font-mono)", fontSize: 12,
          color: "var(--steel)", letterSpacing: "0.06em", textTransform: "uppercase",
        }}>
          {String(idx + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
        </div>
      </div>

      <div
        className="carousel-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => { window.__touchX = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - (window.__touchX || 0);
          if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
        }}
        style={{
          marginTop: "clamp(2rem, 4vw, 3rem)",
          background: "var(--surface)",
          color: "var(--ink)",
          borderRadius: 28,
          padding: "clamp(2rem, 4vw, 3.5rem)",
          position: "relative",
          overflow: "hidden",
          minHeight: 460,
          touchAction: "pan-y",
          border: "1px solid var(--hairline-strong)",
          boxShadow: "inset 0 1px 0 rgba(237,237,240,0.04), 0 30px 60px -30px rgba(0,0,0,0.7)",
          transition: "transform 240ms ease-out, box-shadow 240ms ease-out",
        }}
      >
        {/* grain overlay */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          opacity: 0.04,
          backgroundImage: "radial-gradient(rgba(237,237,240,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }} />
        {/* big project number watermark */}
        <div aria-hidden style={{
          position: "absolute", right: -10, bottom: -40,
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(10rem, 22vw, 22rem)",
          letterSpacing: "-0.05em",
          color: "rgba(237,237,240,0.035)",
          lineHeight: 0.85,
          pointerEvents: "none",
        }}>
          {project.number}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          alignItems: "stretch",
          position: "relative",
        }} className="carousel-grid">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.id + "-text"}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, minHeight: 380 }}
            >
              <div>
                <div className="meta" style={{
                  fontFamily: "var(--font-mono)", fontSize: 12,
                  color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase",
                  marginBottom: 18,
                }}>
                  {project.number}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.02,
                  margin: "0 0 18px",
                  color: "var(--ink)",
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(15px, 1.15vw, 17px)",
                  lineHeight: 1.6,
                  color: "var(--steel)",
                  maxWidth: "52ch",
                  margin: "0 0 24px",
                }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "rgba(237,237,240,0.05)",
                      border: "1px solid var(--hairline)",
                      color: "var(--ink-2)",
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View code <span className="arrow">↗</span>
                </a>
                <button onClick={() => setShowDetails(project)} className="btn-ghost">
                  Details
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.id + "-art"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "relative",
                borderRadius: 18,
                overflow: "hidden",
                background: "rgba(237,237,240,0.03)",
                border: "1px solid var(--hairline)",
                minHeight: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ProjectArt project={project} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* controls */}
        <div style={{
          position: "absolute", left: "clamp(2rem, 4vw, 3.5rem)", right: "clamp(2rem, 4vw, 3.5rem)",
          bottom: 22,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          pointerEvents: "none",
        }}>
          <div style={{ display: "flex", gap: 6, pointerEvents: "auto", alignItems: "center" }}>
            {featured.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={"Go to slide " + (i + 1)}
                className={"carousel-dot" + (i === idx ? " active" : "")}
                style={{ width: i === idx ? 28 : 8 }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, pointerEvents: "auto" }} className="carousel-arrows">
            <button onClick={prev} aria-label="Previous" className="carousel-arrow">←</button>
            <button onClick={next} aria-label="Next" className="carousel-arrow">→</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "clamp(2rem, 4vw, 3rem)", display: "flex", justifyContent: "center" }}>
        <button onClick={goAll} className="btn-ghost" style={{ padding: "15px 26px", fontSize: 16 }}>
          View all projects <span className="arrow">→</span>
        </button>
      </div>

      {showDetails && (
        <DetailsModal project={showDetails} onClose={() => setShowDetails(null)} />
      )}
    </section>
  );
};

const carouselBtn = {
  width: 38, height: 38, borderRadius: 999,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "var(--canvas)",
  fontFamily: "var(--font-mono)", fontSize: 14,
  cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center",
};

const ProjectArt = ({ project }) => {
  // generate a deterministic abstract art piece per project
  const seed = project.id.length;
  const palettes = {
    "license-plate-recognition": ["#E85D2F", "#1A1A1A", "#F4EFE6"],
    "ipl-analysis":             ["#1A1A1A", "#E85D2F", "#3a3a3a"],
    "ipl-dashboard":            ["#E85D2F", "#F4EFE6", "#1A1A1A"],
    "task-manager-api":         ["#F4EFE6", "#E85D2F", "#1A1A1A"],
  };
  const colors = palettes[project.id] || ["#E85D2F", "#1A1A1A", "#F4EFE6"];

  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"
      style={{ display: "block" }}>
      <defs>
        <pattern id={"grid-" + seed} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill={colors[0]}/>
      <rect width="400" height="400" fill={`url(#grid-${seed})`}/>
      {project.id === "license-plate-recognition" && (
        <g>
          <rect x="80" y="160" width="240" height="90" rx="8" fill={colors[2]} stroke={colors[1]} strokeWidth="3"/>
          <text x="200" y="222" textAnchor="middle" fontFamily="monospace" fontSize="44" fontWeight="700" fill={colors[1]}>MH·12</text>
          <rect x="60" y="140" width="280" height="130" rx="12" fill="none" stroke={colors[0]} strokeWidth="2" strokeDasharray="6 6"/>
          <circle cx="62" cy="142" r="4" fill={colors[0]}/>
          <circle cx="338" cy="142" r="4" fill={colors[0]}/>
          <circle cx="62" cy="268" r="4" fill={colors[0]}/>
          <circle cx="338" cy="268" r="4" fill={colors[0]}/>
        </g>
      )}
      {project.id === "ipl-analysis" && (
        <g transform="translate(50,80)">
          {[60, 110, 80, 160, 130, 200, 170, 240].map((h, i) => (
            <rect key={i} x={i * 38} y={260 - h} width="26" height={h} rx="3"
              fill={i % 3 === 0 ? colors[1] : "rgba(244,239,230,0.85)"} />
          ))}
          <line x1="0" y1="260" x2="304" y2="260" stroke="rgba(244,239,230,0.4)" strokeWidth="1"/>
        </g>
      )}
      {project.id === "ipl-dashboard" && (
        <g>
          <rect x="40" y="60" width="320" height="40" rx="6" fill="rgba(0,0,0,0.15)"/>
          <rect x="50" y="72" width="80" height="16" rx="3" fill={colors[2]}/>
          <rect x="40" y="120" width="150" height="100" rx="10" fill="rgba(0,0,0,0.18)"/>
          <rect x="210" y="120" width="150" height="100" rx="10" fill={colors[2]} opacity="0.92"/>
          <rect x="40" y="240" width="320" height="100" rx="10" fill="rgba(0,0,0,0.18)"/>
          <polyline points="55,310 110,280 160,295 220,260 280,275 340,250"
            fill="none" stroke={colors[2]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      )}
      {project.id === "task-manager-api" && (
        <g fontFamily="monospace" fontSize="14" fill={colors[1]}>
          <rect x="30" y="50" width="340" height="300" rx="12" fill={colors[2]}/>
          <text x="50" y="90" fontWeight="700" fill={colors[0]}>POST</text>
          <text x="100" y="90">/api/tasks</text>
          <text x="50" y="130" fontWeight="700" fill={colors[0]}>GET</text>
          <text x="100" y="130">/api/tasks/:id</text>
          <text x="50" y="170" fontWeight="700" fill={colors[0]}>PUT</text>
          <text x="100" y="170">/api/tasks/:id</text>
          <text x="50" y="210" fontWeight="700" fill={colors[0]}>DELETE</text>
          <text x="120" y="210">/api/tasks/:id</text>
          <line x1="50" y1="245" x2="350" y2="245" stroke={colors[0]} strokeWidth="1" strokeDasharray="3 3"/>
          <text x="50" y="280" fontSize="12" opacity="0.6">{`{ "id": 42, "done": true }`}</text>
          <text x="50" y="310" fontSize="11" opacity="0.5">200 OK · 18ms</text>
        </g>
      )}
    </svg>
  );
};

const DetailsModal = ({ project, onClose }) => {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(0,0,0,0.6)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "var(--pad-edge)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "var(--surface)",
        border: "1px solid var(--hairline-strong)",
        borderRadius: 22,
        maxWidth: 640, width: "100%",
        padding: "32px 36px",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8)",
      }}>
        <div className="meta" style={{
          fontFamily: "var(--font-mono)", fontSize: 12,
          color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase",
          marginBottom: 12,
        }}>{project.number}</div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          letterSpacing: "-0.03em", lineHeight: 1.05,
          margin: "0 0 16px", color: "var(--ink)",
        }}>{project.title}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)", margin: "0 0 22px" }}>
          {project.longDescription}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontFamily: "var(--font-mono)", fontSize: 12,
              padding: "4px 10px", borderRadius: 999,
              background: "rgba(237,237,240,0.05)", color: "var(--ink-2)",
              border: "1px solid var(--hairline)",
            }}>{t}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View code <span className="arrow">↗</span>
          </a>
          <button onClick={onClose} className="btn-ghost">Close</button>
        </div>
      </div>
    </div>
  );
};

window.Projects = Projects;
