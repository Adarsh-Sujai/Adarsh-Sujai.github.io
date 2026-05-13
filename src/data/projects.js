/* ============================================================
   projects.js - Single source of truth for portfolio projects.
   ------------------------------------------------------------
   RULES
   - To add a project: append one object to the array below.
   - To remove: delete its object.
   - To reorder the homepage carousel: reorder array entries with
     `featured: true`. The carousel reads the FIRST 4 featured.
   - To swap which 4 are featured on the homepage: flip
     `featured: true|false` - no other code changes needed.
   - The /projects page lists EVERY entry, regardless of `featured`.
   ============================================================ */

window.PROJECTS = [
  {
    id: "license-plate-recognition",
    number: "P-01",
    title: "License Plate Recognition",
    description:
      "ANPR system using YOLOv8 + EasyOCR + Flask. Compared 3 models; achieved 20% accuracy improvement.",
    longDescription:
      "An automatic number plate recognition pipeline built on YOLOv8 for detection and EasyOCR for text extraction, served behind a Flask API. Three model variants were benchmarked on a custom-curated dataset; the final configuration improved end-to-end recognition accuracy by ~20% over the baseline.",
    tech: ["Python", "YOLOv8", "EasyOCR", "Flask"],
    github: "https://github.com/Adarsh-Sujai/license-plate-recognition-yolov8",
    demo: null,
    image: null,
    featured: true,
    year: 2024,
  },
  {
    id: "resume-match",
    number: "P-02",
    title: "Resume Matcher",
    description:
      "AI resume analyzer scoring JD match, flagging gaps, and rewriting bullets with Llama 3.3.",
    longDescription:
      "A web app that scores how well a resume matches a job description and turns the gap into action. TF-IDF cosine similarity rescales to a 0-100 match score, an ATS readability check flags scanned PDFs and missing section headers, and a Groq-hosted Llama 3.3 70B call suggests tailored bullet rewrites. The API key stays server-side behind Flask, with per-IP rate limits protecting the free quota. Deployed on Render.",
    tech: ["Python", "Flask", "scikit-learn", "Groq", "Llama 3.3"],
    github: "https://github.com/Adarsh-Sujai/resume-match",
    demo: null,
    image: null,
    featured: true,
    year: 2026,
  },
  {
    id: "ipl-dashboard",
    number: "P-03",
    title: "IPL Dashboard",
    description:
      "Interactive dashboard for exploring IPL stats and trends.",
    longDescription:
      "A companion dashboard to the IPL analysis project - an interactive layer letting users filter by season, team, and player to surface trends across batting, bowling, and match outcomes.",
    tech: ["Python", "Dashboard", "Visualization"],
    github: "https://github.com/Adarsh-Sujai/ipl-dashboard",
    demo: null,
    image: null,
    featured: true,
    year: 2024,
  },
  {
    id: "task-manager-api",
    number: "P-04",
    title: "Task Manager API",
    description:
      "REST API for task management with full CRUD and SQL backend.",
    longDescription:
      "A clean REST API for managing tasks, lists, and tags. Full CRUD coverage, SQL-backed persistence, and a thin Flask layer with input validation and structured error responses - designed as a drop-in backend for any front-end client.",
    tech: ["Python", "Flask", "SQL", "REST"],
    github: "https://github.com/Adarsh-Sujai/task-manager-api",
    demo: null,
    image: null,
    featured: true,
    year: 2024,
  },
  {
    id: "ipl-analysis",
    number: "P-05",
    title: "IPL Data Analysis",
    description:
      "14 seasons of IPL data analyzed with 10 dark-themed visualizations.",
    longDescription:
      "Exploratory data analysis across 14 seasons of Indian Premier League cricket - covering team form, player consistency, venue effects, and toss-decision impact. Output is a curated set of 10 dark-themed Matplotlib/Seaborn visuals that read as a single editorial story.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Adarsh-Sujai/ipl-analysis",
    demo: null,
    image: null,
    featured: false,
    year: 2024,
  },
  {
    id: "cardly-thumbnails",
    number: "P-06",
    title: "Cardly Thumbnails",
    description:
      "A browser-based playground to design Open Graph images.",
    longDescription:
      "A browser-based playground for designing Open Graph images, GitHub repo thumbnails, YouTube covers, LinkedIn banners and other social cards. Same engine as Vercel's og-playground (Satori), but runs 100% in the browser, with no server and no API calls",
    tech: ["TypeScript", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Adarsh-Sujai/cardly-thumbnails",
    demo: null,
    image: null,
    featured: false,
    year: 2024,
  },

];
