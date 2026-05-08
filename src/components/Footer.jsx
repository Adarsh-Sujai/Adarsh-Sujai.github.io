// Footer.jsx
const Footer = ({ onNavigate }) => {
  return (
    <footer style={{
      borderTop: "1px solid var(--hairline)",
      marginTop: "var(--space-9)",
      padding: "32px var(--pad-edge) 40px",
    }}>
      <div className="footer-row" style={{
        width: "100%",
        display: "flex", flexWrap: "wrap", gap: 24,
        justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 12,
          color: "var(--steel)", letterSpacing: "0.04em",
        }}>
          © 2026 Adarsh K Sujai · <span style={{ color: "var(--ink-2)" }}>Designed & built by Adarsh</span>
        </div>
        <nav className="footer-nav" style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
          {[
            { label: "About", h: "#about" },
            { label: "Projects", h: "#projects" },
            { label: "Skills", h: "#skills" },
            { label: "Contact", h: "#contact" },
          ].map((n) => (
            <a key={n.label} href={n.h}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/" + n.h);
                setTimeout(() => {
                  const el = document.querySelector(n.h);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 60);
              }}
              className="nav-link"
              style={{ fontSize: 13, color: "var(--steel)" }}>{n.label}</a>
          ))}
          <a href="https://github.com/Adarsh-Sujai" target="_blank" rel="noopener noreferrer" className="nav-link" style={{
            fontFamily: "var(--font-mono)", fontSize: 12,
            color: "var(--steel)", letterSpacing: "0.04em",
          }}>GH ↗</a>
          <a href="https://www.linkedin.com/in/adarshsujai/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{
            fontFamily: "var(--font-mono)", fontSize: 12,
            color: "var(--steel)", letterSpacing: "0.04em",
          }}>LI ↗</a>
        </nav>
      </div>
    </footer>
  );
};

window.Footer = Footer;
