// Contact.jsx - section 005
const Contact = () => (
  <section id="contact" style={{
    maxWidth: 1400, margin: "0 auto",
    padding: "calc(var(--section-gap) * 0.5) var(--pad-edge) var(--section-gap)",
  }}>
    <SectionLabel n="005" label="CONTACT" />

    <div style={{
      marginTop: "clamp(2rem, 4vw, 3rem)",
      display: "grid",
      gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)",
      gap: "clamp(1.5rem, 4vw, 4rem)",
      alignItems: "end",
    }} className="contact-grid">
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2.5rem, 7vw, 6rem)",
        fontWeight: 800,
        letterSpacing: "-0.045em",
        lineHeight: 0.95,
        margin: 0,
        color: "var(--ink)",
        textWrap: "balance",
      }}>
        Let's build{" "}
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>
          something.
        </span>
      </h2>

      <div>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(15px, 1.15vw, 17px)",
          lineHeight: 1.6,
          color: "var(--ink-2)",
          margin: "0 0 24px",
          maxWidth: "36ch",
        }}>
          Open to full-time roles, internships, and interesting projects. The fastest way to reach me is email.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <ContactRow label="EMAIL" href="mailto:adarshsujai603@gmail.com" value="adarshsujai603@gmail.com" />
          <ContactRow label="LINKEDIN" href="https://www.linkedin.com/in/adarshsujai/" value="in/adarshsujai" external />
          <ContactRow label="GITHUB" href="https://github.com/Adarsh-Sujai" value="@Adarsh-Sujai" external />
        </div>
      </div>
    </div>
  </section>
);

const ContactRow = ({ label, href, value, external }) => (
  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
    className="contact-row">
    <span className="contact-label" style={{
      fontFamily: "var(--font-mono)", fontSize: 11,
      letterSpacing: "0.1em", textTransform: "uppercase",
      color: "var(--steel)",
      transition: "color 220ms ease-out",
    }}>{label}</span>
    <span style={{
      fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15,
      display: "inline-flex", alignItems: "center", gap: 8,
    }}>
      {value} <span className="arrow" style={{ fontSize: 13 }}>{external ? "↗" : "→"}</span>
    </span>
  </a>
);

window.Contact = Contact;
