// ====== data contoh ======
const PROJECTS = [
  {
    id: "model-tester-ner",
    title: "Model Tester NER",
    desc: "Website sederhana untuk uji model AI untuk Named Entity Recognition menggunakan Python dan FastAPI.",
    tech: [],
    cover: "assets/web/card1/ner.jpeg",
    demo: "#",
    code: "https://github.com/your/repo",
  },
  {
    id: "company-profile",
    title: "Company Profile",
    desc: "Website profil perusahaan modern & responsive, CMS sederhana.",
    tech: [],
    cover: "assets/company-cover.png",
    demo: "#",
    code: "#",
  },
  {
    id: "resto-app",
    title: "Aplikasi Restoran",
    desc: "Menu digital, reservasi meja, & pembayaran terintegrasi.",
    tech: [],
    cover: "assets/resto-cover.png",
    demo: "#",
    code: "#",
  },

  {
    id: "resto-app",
    title: "Aplikasi Restoran",
    desc: "Menu digital, reservasi meja, & pembayaran terintegrasi.",
    tech: [],
    cover: "assets/resto-cover.png",
    demo: "#",
    code: "#",
  },



];

// ====== render grid ======
const grid = document.getElementById("projectsGrid");

function techTag(t) {
  return `<span class="tech-tag">${t}</span>`;
}
function card(p) {
  return `
  <div class="project-card">
    <div class="project-image" style="background-image:url('${p.cover}')"></div>

    <h3>${p.title}</h3>
    <p>${p.desc}</p>

    <div class="tech-stack">
      ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
    </div>

    <div class="card-actions">
  <div class="btn-bar">
    ${
      p.demo && p.demo !== "#"
        ? `
      <a class="btn" href="${p.demo}" target="_blank" rel="noopener">
        <i class='bx bx-play-circle'></i> Demo
      </a>`
        : ``
    }

    ${
      p.code && p.code !== "#"
        ? `
      <a class="code-link" href="${p.code}" target="_blank" rel="noopener">
        <span class="code-badge"><i class='bx bxl-github'></i></span>
        <span class="code-text">Code</span>
      </a>`
        : ``
    }
  </div>

  <a class="card-cta" href="projectweb1.html?id=${encodeURIComponent(p.id)}">
        <span>Details</span>
        <i class='bx bx-right-arrow-alt'></i>
      </a>
    </div>

  </div>`;
}

if (grid) grid.innerHTML = PROJECTS.map(card).join("");
