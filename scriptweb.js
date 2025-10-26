// ====== Data Projects ======
const PROJECTS = [
  {
    id: "model-tester-ner",
    title: "Model Tester NER",
    desc: "A simple website for testing AI models for Named Entity Recognition using Python and FastAPI.",
    tech: [],
    cover: "assets/web/card1/ner.jpeg",
    demo: "#",
    code: "https://github.com/Gibranfaktiananwar/Indonesia_ner_website",
    medium: "https://medium.com/@gibranfktian/connecting-an-indonesian-ner-ai-model-to-a-website-using-python-73e019ec42d8", 
  },
  {
    id: "BosonPOS",
    title: "BosonPOS",
    desc: "A point-of-sales web application for managing multi-store product operations with role-based access control and cross-store inventory checking.",
    tech: [],
    cover: "assets/web/card2/img1.jpeg",
    demo: "#",
    code: "https://github.com/Gibranfaktiananwar/Boson_POS",
    medium: "",
  },
  {
    id: "Portfolio",
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my projects and skills.",
    tech: [],
    cover: "assets/resto-cover.png",
    demo: "#",
    code: "#",
    medium: "",
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
      <a class="card-cta" href="projectweb.html?id=${encodeURIComponent(
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
