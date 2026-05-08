// App.jsx - root: routing + page composition
const App = () => {
  const [route, setRoute] = React.useState(() => {
    const h = window.location.hash;
    if (h.startsWith("#/projects")) return "/projects";
    return "/";
  });

  const navigate = (path) => {
    setRoute(path);
    window.location.hash = path === "/" ? "" : "#" + path;
  };

  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      if (h.startsWith("#/projects")) setRoute("/projects");
      else setRoute("/");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const jumpProjects = () => {
    if (route !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      const el = document.querySelector("#projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <Header onNavigate={navigate} currentRoute={route} />
      {route === "/" ? (
        <main>
          <Hero onJumpProjects={jumpProjects} />
          <About />
          <Projects onNavigate={navigate} />
          <Skills />
          <Contact />
        </main>
      ) : (
        <AllProjects onNavigate={navigate} />
      )}
      <Footer onNavigate={navigate} />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
