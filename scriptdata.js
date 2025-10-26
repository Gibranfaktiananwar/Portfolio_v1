// ====== Data Projects ======
const PROJECTS = [
  {
    id: "mini-project",
    title: "Python Mini Project for Stock Market Analysis",
    desc: "Stock Market Analysis using Python: Data Visualization & Technical Analysis with Pandas and Yahoo Finance.",
    tech: [],
    cover: "assets/data/card1/img1.png",
    demo: "",
    code: "https://github.com/Gibranfaktiananwar/python-mini-project-for-stock-market-analysis",
    medium: "", 
  },
  {
    id: "data-science-implementation",
    title: "Solving Edutech Company Problems",
    desc: "Dicoding Data Science Submission: HR attrition analysis with EDA, classification modeling, and a KPI dashboard.",
    tech: [],
    cover: "assets/data/card2/img1.jpeg",
    demo: "",
    code: "https://github.com/Gibranfaktiananwar/Submission-Pertama-Belajar-Penerapan-Data-Science", 
    medium: "", 
  },
  {
    id: "Bike-Rentals",
    title: "Bike-Rentals-Data-Analysis",
    desc: "",
    tech: [],
    cover: "",
    demo: "",
    code: "",
    medium: "",
  },
  {
    id: "",
    title: "",
    desc: "",
    tech: [],
    cover: "",
    demo: "#",
    code: "#",
    medium: "#",
  },
  {
    id: "",
    title: "Cooming Soon Project",
    desc: "Upcoming projects for web applications, Stay tuned.",
    tech: [],
    cover: "assets/resto-cover.png",
    demo: "#",
    code: "#",
    medium: "#",
  },
  {
    id: "",
    title: "Cooming Soon Project",
    desc: "Upcoming projects for web applications, Stay tuned.",
    tech: [],
    cover: "assets/resto-cover.png",
    demo: "#",
    code: "#",
    medium: "#",
  },
];

// ====== helpers ======
const grid = document.getElementById("projectsGrid");

function renderPrimaryBtn({ hasCode, hasMedium, code, medium }) {
  if (hasCode) {
    return `
      <a class="code-link" href="${code}" target="_blank" rel="noopener">
        <span class="code-badge"><i class='bx bxl-github'></i></span>
        <span class="code-text">Code</span>
      </a>`;
  }
  if (hasMedium) {
    return `
      <a class="code-link" href="${medium}" target="_blank" rel="noopener">
        <span class="code-badge"><i class='bx bxl-medium'></i></span>
        <span class="code-text">Medium</span>
      </a>`;
  }
  return ``;
}

function renderSecondaryBtn({ hasCode, hasMedium, code, medium }) {
  if (hasCode && hasMedium) {
    return `
      <a class="code-link" href="${medium}" target="_blank" rel="noopener">
        <span class="code-badge"><i class='bx bxl-medium'></i></span>
        <span class="code-text">Medium</span>
      </a>`;
  }
  return ``;
}

function card(p) {
  const hasId = typeof p.id === "string" && p.id.trim() !== "";
  const hasCode =
    typeof p.code === "string" && p.code.trim() !== "" && p.code !== "#";
  const hasMedium =
    typeof p.medium === "string" && p.medium.trim() !== "" && p.medium !== "#";

  const detailsCTA = hasId
    ? `
      <a class="card-cta" href="projectdata.html?id=${encodeURIComponent(
        p.id
      )}">
        <span>Details</span>
        <i class='bx bx-right-arrow-alt'></i>
      </a>`
    : `
      <a class="card-cta disabled" role="button" aria-disabled="true" tabindex="-1">
        <span>Details</span>
        <i class='bx bx-right-arrow-alt'></i>
      </a>`;

  return `
    <div class="project-card">
      <div class="project-image" style="background-image:url('${
        p.cover
      }')"></div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>

      <div class="tech-stack">
        ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
      </div>

      <div class="card-actions">
        <div class="btn-bar">
          ${
            p.demo && p.demo !== "#"
              ? `<a class="btn" href="${p.demo}" target="_blank" rel="noopener">
                   <i class='bx bx-play-circle'></i> Demo
                 </a>`
              : ``
          }

          ${renderPrimaryBtn({
            hasCode,
            hasMedium,
            code: p.code,
            medium: p.medium,
          })}
          ${renderSecondaryBtn({
            hasCode,
            hasMedium,
            code: p.code,
            medium: p.medium,
          })}
        </div>
        ${detailsCTA}
      </div>
    </div>
  `;
}

// ====== render grid ======
if (grid) {
  grid.innerHTML = PROJECTS.map(card).join("");
}
