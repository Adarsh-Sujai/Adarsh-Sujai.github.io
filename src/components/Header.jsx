// Header.jsx - sticky portfolio nav, blur on scroll
const Header = ({ onNavigate, currentRoute }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e, hash) => {
    e.preventDefault();
    setMobileOpen(false);
    if (currentRoute !== "/") {
      onNavigate("/" + hash);
      // give the home view a tick to mount
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goAllProjects = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate("/projects");
    window.scrollTo({ top: 0 });
  };

  const goHome = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "About", href: "#about", onClick: (e) => handleAnchor(e, "#about") },
    { label: "Projects", href: "#projects", onClick: (e) => handleAnchor(e, "#projects") },
    { label: "Skills", href: "#skills", onClick: (e) => handleAnchor(e, "#skills") },
    { label: "Contact", href: "#contact", onClick: (e) => handleAnchor(e, "#contact") },
  ];

  return (
    <React.Fragment>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(13,13,15,0.78)" : "rgba(13,13,15,0)",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
          transition: "all 240ms var(--ease-standard)",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "18px var(--pad-edge)",
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
        >
          <a
            href="/"
            onClick={goHome}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "baseline",
              gap: 1,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 22,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
              }}
            >
              AKS
            </span>
            <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: 22 }}>.</span>
          </a>

          <nav className="desktop-nav" style={{ display: "flex", gap: 28, marginLeft: 12 }}>
            {navItems.map((n) => (
              <a key={n.label} href={n.href} onClick={n.onClick} className="nav-link">
                {n.label}
              </a>
            ))}
            <a
              href="/projects"
              onClick={goAllProjects}
              className="nav-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--steel)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                alignSelf: "center",
              }}
            >
              all →
            </a>
          </nav>

          <div className="desktop-nav" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="https://adarsh-sujai.github.io/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              Resume <span className="arrow" style={{ fontSize: 12 }}>↗</span>
            </a>
          </div>

          <button
            className="mobile-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              marginLeft: "auto",
              display: "none",
              background: "transparent",
              border: "1px solid var(--hairline-strong)",
              borderRadius: 8,
              padding: "8px 10px",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--ink)",
            }}
          >
            {mobileOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "var(--canvas)",
            paddingTop: 80,
            paddingLeft: "var(--pad-edge)",
            paddingRight: "var(--pad-edge)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {navItems.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                onClick={n.onClick}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 26,
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                  textDecoration: "none",
                  minHeight: 44,
                  display: "flex", alignItems: "center",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--steel)", marginRight: 14 }}>
                  00{i + 1}
                </span>
                {n.label}
              </a>
            ))}
            <a
              href="/projects"
              onClick={goAllProjects}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 17,
                color: "var(--steel)",
                textDecoration: "none",
                marginTop: 4,
                minHeight: 40,
                display: "flex", alignItems: "center",
              }}
            >
              All projects →
            </a>
            <a
              href="https://adarsh-sujai.github.io/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 16, width: "fit-content" }}
            >
              Resume <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

window.Header = Header;
