// ====== Data Projects ======
const PROJECTS = [
  {
    id: "image-classification",
    title: "Image Classification Rock, Paper & Scissors",
    desc: "Building Rock-Paper-Scissors Image Classification with TensorFlow/Keras.",
    tech: [],
    cover: "assets/ml/card1/img1.jpeg",
    demo: "",
    code: "https://github.com/Gibranfaktiananwar/Image-Classification-Rock-Paper-Scissors",
    medium: "", 
  },
  {
    id: "applied-ml",
    title: "Liver Disease Prediction",
    desc: "Liver disease prediction using multiple algorithms with hyperparameter tuning and performance evaluation",
    tech: [],
    cover: "assets/ml/card2/img1.jpeg",
    demo: "",
    code: "https://github.com/Gibranfaktiananwar/ML-Terapan-Proyek-Pertama", 
    medium: "", 
  },
  {
    id: "Loan-Eligibility",
    title: "Loan Eligibility Prediction",
    desc: "Machine Learning project for Loan Eligibility Prediction using Naive Bayes algorithm",
    tech: [],
    cover: "assets/ml/card3/img3.jpeg",
    demo: "",
    code: "https://github.com/Gibranfaktiananwar/Loan-Eligibility-Prediction-using-Naive-Bayes_Mini-Python-Projects-For-Data-Science-",
    medium: "",
  },
  {
    id: "Crawling-Twitter-Data",
    title: "Crawling Twitter Data for Dataset NER Bahasa Indonesia",
    desc: "Building an Indonesian NER dataset from Twitter data. Dataset preparation for machine learning models.",
    tech: [],
    cover: "assets/ml/card4/img1.jpeg",
    demo: "#",
    code: "https://github.com/Gibranfaktiananwar/Crawling-Twitter-Data-for-Dataset-NER-Bahasa-Indonesia",
    medium: "https://medium.com/@gibranfktian/crawling-twitter-data-for-dataset-ner-bahasa-indonesia-ee3ffb29edc3",
  },
  {
    id: "",
    title: "Coming Soon Project",
    desc: "Upcoming projects for machine learning, Stay tuned.",
    tech: [],
    cover: "assets/coming-soon.jpeg",
    demo: "#",
    code: "#",
    medium: "#",
  },
  {
    id: "",
    title: "Coming Soon Project",
    desc: "Upcoming projects for machine learning, Stay tuned.",
    tech: [],
    cover: "assets/coming-soon.jpeg",
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
      <a class="card-cta" href="projectml.html?id=${encodeURIComponent(
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
