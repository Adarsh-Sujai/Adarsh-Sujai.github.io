// ─────────────────────────────────────────
//  projects.js  —  Add or edit projects here
//  Each object = one project card
// ─────────────────────────────────────────

const PROJECTS = [
  {
    number:   "001",
    category: "Computer Vision",
    title:    "Automatic License Plate Recognition",
    desc:     "End-to-end ALPR pipeline that detects and reads vehicle license plates in real time. Combines YOLOv8 for accurate plate detection with EasyOCR for character extraction — ready to plug into any surveillance or traffic management system.",
    tags:     ["YOLOv8", "EasyOCR", "Python", "OpenCV", "Object Detection"],
    link:     "https://github.com/Adarsh-Sujai/license-plate-recognition-yolov8",
    badge:    "ML + CV",
    status:   "live"
  },
  {
    number:   "002",
    category: "Backend",
    title:    "REST API for Task Management",
    desc:     "Backend REST API handling full CRUD operations for task management, with data persisted in an SQL database. Supports creating, updating, retrieving and deleting tasks through clean REST endpoints.",
    tags:     ["Python", "Flask", "SQL", "REST API"],
    link:     "https://github.com/Adarsh-Sujai/task-manager-api",
    badge:    "Backend",
    status:   "live"
  },
  {
    number:   "003",
    category: "Data Analytics",
    title:    "IPL / Cricket Analysis",
    desc:     "Exploratory analysis of 14 IPL seasons across 200,000+ deliveries. Surfaces team dominance, player rankings and over-phase trends through statistical analysis and data visualisation.",
    tags:     ["Python", "Pandas", "Matplotlib", "NumPy", "EDA"],
    link:     "https://github.com/Adarsh-Sujai/ipl-analysis",
    badge:    "Data Science",
    status:   "live"
  }
];

// ─────────────────────────────────────────
//  Renders all projects into #projects-list
// ─────────────────────────────────────────
function renderProjects() {
  var container = document.getElementById('projects-list');
  if (!container) return;

  container.innerHTML = PROJECTS.map(function(p) {
    var isComingSoon = p.status === 'coming-soon';
    var cardStyle    = isComingSoon ? ' style="border-style:dashed;opacity:.72;"' : '';
    var numStyle     = isComingSoon ? ' style="color:var(--accent3);"' : '';
    var tagsHTML     = p.tags.map(function(t) { return '<span class="tag">' + t + '</span>'; }).join('');
    var footerLeft   = isComingSoon
      ? '<span style="font-size:11px;color:var(--accent3);display:flex;align-items:center;gap:8px;font-family:\'DM Mono\',monospace;letter-spacing:.08em;"><span style="width:6px;height:6px;border-radius:50%;background:var(--accent3);display:inline-block;animation:pulse 1.5s ease-in-out infinite;"></span>Coming soon</span>'
      : '<a href="' + p.link + '" target="_blank" class="project-link">View on GitHub <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
    var badgeStyle   = isComingSoon ? ' style="border-color:rgba(61,158,135,.25);color:var(--accent3);background:rgba(61,158,135,.06);"' : '';

    return '<div class="project-card reveal"' + cardStyle + '>'
      + '<div class="project-number"' + numStyle + '>' + p.number + ' — ' + p.category.toUpperCase() + '</div>'
      + '<div class="project-title">' + p.title + '</div>'
      + '<p class="project-desc">' + p.desc + '</p>'
      + '<div class="tags">' + tagsHTML + '</div>'
      + '<div class="project-footer">' + footerLeft + '<span class="project-badge"' + badgeStyle + '>' + p.badge + '</span></div>'
      + '</div>';
  }).join('');

  // re-observe injected cards for scroll reveal
  if (window._revealObserver) {
    container.querySelectorAll('.reveal').forEach(function(el) {
      window._revealObserver.observe(el);
    });
  }
}

renderProjects();
