// ====== Data Projects ======
const PROJECTS = [
  {
    id: "deploy-aaPanel",
    title: "Deploy a website with aaPanel & Cloudflare",
    desc: "Summary of the process of activating a website online via aaPanel and Cloudflare Zero Trust Tunnel.",
    tech: [],
    cover: "assets/server/card1/img1.jpeg",
    demo: "",
    code: "",
    medium: "https://medium.com/@gibranfktian/deploy-a-website-with-aapanel-cloudflare-dc5ca5a68e41", 
  },
  {
    id: "deploy-Docker",
    title: "Deploy a website using Docker, Uvicorn and Reverse Proxy with AaPanel.",
    desc: "Guide to deploying a website with Docker containers, Uvicorn ASGI server, and Reverse Proxy using aaPanel",
    tech: [],
    cover: "assets/server/card2/img1.jpeg",
    demo: "",
    code: "", 
    medium: "https://medium.com/@gibranfktian/deploy-a-website-using-docker-uvicorn-and-reverse-proxy-with-aapanel-45fa99bced56", 
  },
  {
    id: "own-server",
    title: "Build Your Own Server With STB HG680P",
    desc: "Guide to transforming an STB HG680P TV Set Top Box into a fully functional home server using Armbian OS and aaPanel",
    tech: [],
    cover: "assets/server/card3/img1.jpeg",
    demo: "",
    code: "",
    medium: "https://medium.com/@gibranfktian/build-your-own-server-with-stb-hg680p-8eb5d93df7f1",
  },
  {
    id: "prtg-installation",
    title: "Installation of PRTG Sensors on 72 Servers",
    desc: "Installing and configuring PRTG Network Monitor on the server, including SNMP agent configuration on each VM.",
    tech: [],
    cover: "assets/server/card4/img2.jpeg",
    demo: "#",
    code: "#",
    medium: "#",
  },
  {
    id: "deploy-azure",
    title: "Deploy a Website in Microsoft Azure and Customize Domain Name",
    desc: "Deploy Static Sites on Azure App Services with CI/CD Pipeline & Customize the Domain Name",
    tech: [],
    cover: "assets/server/card5/img1.jpeg",
    demo: "#",
    code: "#",
    medium: "https://medium.com/@gibranfktian/deploy-your-website-using-app-services-in-microsoft-azure-and-customize-domain-name-087ddd8a822d",
  },
  {
    id: "prometheus-and-grafana",
    title: "Installing Prometheus and Grafana on Your Server",
    desc: "Deploying Prometheus and Grafana on ARM-based Linux server with systemd services and firewall configuration",
    tech: [],
    cover: "assets/server/card6/img19.jpeg",
    demo: "#",
    code: "#",
    medium: "https://medium.com/@gibranfktian/installing-prometheus-and-grafana-on-stb-hg680p-913ec17edfc6",
  },
  {
    id: "alert-grafana",
    title: "Coming Soon Project",
    desc: "Upcoming projects for server related, Stay tuned.",
    tech: [],
    cover: "assets/server/card7/img1.jpeg",
    demo: "#",
    code: "#",
    medium: "https://medium.com/@gibranfktian/get-grafana-alerts-via-telegram-d7d17814d55e",
  },
  {
    id: "",
    title: "Coming Soon Project",
    desc: "Upcoming projects for server related, Stay tuned.",
    tech: [],
    cover: "assets/coming-soon.jpeg",
    demo: "#",
    code: "#",
    medium: "#",
  },
  {
    id: "",
    title: "Coming Soon Project",
    desc: "Upcoming projects for server related, Stay tuned.",
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
      <a class="card-cta" href="projectserver.html?id=${encodeURIComponent(
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
