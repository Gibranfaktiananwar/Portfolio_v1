// ==== DATA KATEGORI ====
// Ganti path gambar 'assets/works/...'
const DATA = {
  web: {
    title: "Web Development",
    subtitle: "Details related to web development",
    chips: [],
    skills: [
      { group: "Programming", text: "PHP, JavaScrip, Python, Go, SQL, HTML, CSS" },
      { group: "Frameworks", text: "Laravel, Bootstrap, Streamlit, FastAPI" },
      { group: "Tools", text: "Git, VS Code, Chrome DevTools, Figma" },
      { group: "Database", text: "MySQL, MariaDB" }
    ],
    projects: [
      {
        banner: "NER Model Tester",
        title: "Model Tester NER",
        desc: "Simple website for testing AI models for extracting entities from sentences.",
        tech: ["Python", "FastAPI", "Uvicorn", "Docker"],
        images: ["assets/web/card1/ner.jpeg", 
          "assets/web/card1/ner2.jpeg", 
          "assets/web/card1/ner3.jpeg",
          "assets/web/card1/ner4.jpeg"
        ],
        captions: [
          "The main page of a website integrated with an artificial intelligence (AI) model for Named Entity Recognition tasks. ",
          "Example of predicted output from a sentence where entities are extracted directly.",
          "Page where users can upload .txt or .csv files to extract sentences contained in those files.",
          "Example of output from the extraction process on sentences contained in a .txt or .csv file.",


        ],
        captionStyles: [
          "font-size:15px;",                    // gambar 1
          "font-size:16px; font-weight:600;"    // gambar 2 (agak tebal)
        ],
      },
      {
        banner: "Corporate Website",
        title: "Company Profile",
        desc: "Website profil perusahaan modern & responsive, dengan CMS sederhana.",
        tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
        images: ["assets/works/web/company-1.jpg"],
        demo: "#",
        code: "#"
      },
      {
        banner: "Restaurant App",
        title: "Aplikasi Restoran",
        desc: "Menu digital, reservasi meja, dan pembayaran terintegrasi.",
        tech: ["Laravel", "Vue.js", "MySQL", "API"],
        images: ["assets/works/web/restaurant-1.jpg", "assets/works/web/restaurant-2.jpg"],
        demo: "#",
        code: "#"
      },
      {
        banner: "Freelance Project",
        title: "Wedding Organizer",
        desc: "Website WO dengan galeri portfolio, paket layanan, & booking konsultasi.",
        tech: ["WordPress", "Custom PHP", "MySQL", "JavaScript"],
        images: ["assets/works/web/wo-1.jpg"],
        demo: "#",
        code: "#"
      },
      {
        banner: "School System",
        title: "Sistem Informasi Sekolah",
        desc: "Manajemen siswa, guru, nilai, dan jadwal dengan RBAC.",
        tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
        images: ["assets/works/web/school-1.jpg"],
        demo: "#",
        code: "#"
      },
      {
        banner: "Portfolio Website",
        title: "Personal Portfolio",
        desc: "Portfolio interaktif dengan animasi & contact form terintegrasi email.",
        tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        images: ["assets/works/web/portfolio-1.jpg"],
        demo: "#",
        code: "#"
      }
    ]
  },

  // Contoh placeholder — isi nanti kalau siap
  server: {
    title: "Server Related",
    subtitle: "Home server, SNMP, & security headers hardening",
    chips: ["Linux", "SNMP", "Security"],
    skills: [
      { group: "Monitoring", text: "Instal & konfigurasi SNMP, verifikasi snmpwalk" },
      { group: "Security", text: "HSTS, X-Content-Type-Options, Referrer-Policy, dll." }
    ],
    projects: [
      {
        banner: "SNMP Monitoring",
        title: "Konfigurasi SNMP + Monitoring",
        desc: "Setup SNMP dan integrasi monitoring.",
        tech: ["Linux", "SNMP"],
        images: ["assets/works/server/snmp-1.png", "assets/works/server/snmp-2.png"]
      }
    ]
  },

  data: {
    title: "Data Analyst",
    subtitle: "Eksplorasi, pembersihan, visualisasi, dan insight",
    chips: ["Pandas", "Visualization", "Bangkit"],
    skills: [
      { group: "Toolkit", text: "Python, Pandas, Matplotlib, Jupyter" },
      { group: "Workflow", text: "EDA, cleaning, visualisasi, reporting" }
    ],
    projects: [
      {
        banner: "EDA Project",
        title: "Exploratory Data Analysis",
        desc: "Membersihkan data, analisis awal, dan insight.",
        tech: ["Python", "Pandas", "Matplotlib"],
        images: ["assets/works/data/eda-1.png", "assets/works/data/eda-2.png"]
      }
    ]
  }
};

// ==== UTIL ====
const $ = (s, p = document) => p.querySelector(s);
const el = (tag, props = {}, ...kids) => {
  const n = document.createElement(tag);
  Object.assign(n, props);
  kids.forEach((k) => n.append(k));
  return n;
};

// ==== PARAM & DATA ====
const params = new URLSearchParams(location.search);
const cat = (params.get("cat") || "").toLowerCase();
const data = DATA[cat];

// ==== SET CARD IMAGE ====
function setCardImage(div, projIndex, imgIndex) {
  const list = DATA[cat]?.projects?.[projIndex]?.images || [];
  if (!list.length) return;
  div.style.backgroundImage = `url("${list[imgIndex]}")`;
  div.dataset.cur = String(imgIndex);

  // update indikator titik
  const dots = div.querySelectorAll(".img-dots .dot");
  dots.forEach((d, k) => d.classList.toggle("active", k === imgIndex));
}

// ==== RENDER ====
const titleEl = $("#title");
const subEl = $("#subtitle");
const chipsEl = $("#chips");
const skillsSection = $("#skillsSection");
const skillsGrid = $("#skillsGrid");
const projectsGrid = $("#projectsGrid");

if (!data) {
  if (titleEl) titleEl.textContent = "Kategori tidak ditemukan";
  if (subEl) subEl.textContent = "Gunakan details.html?cat=web | server | data";
} else {
  if (titleEl) titleEl.textContent = data.title;
  if (subEl) subEl.textContent = data.subtitle || "";

  if (chipsEl) {
    chipsEl.innerHTML = (data.chips || [])
      .map((c) => `<span class="chip">${c}</span>`)
      .join("");
  }

  // skills
  if (data.skills && data.skills.length) {
    if (skillsSection) skillsSection.hidden = false;
    data.skills.forEach((s) => {
      skillsGrid?.append(
        el(
          "div",
          { className: "skill-item" },
          el("h3", { textContent: s.group }),
          el("p", { textContent: s.text })
        )
      );
    });
  }

  // projects
  (data.projects || []).forEach((p, idx) => {
    const img0 = p.images && p.images[0];
    const imgDiv = el("div", { className: "project-image" });
    imgDiv.dataset.cur = "0";

    if (img0) {
      imgDiv.style.backgroundImage = `url("${img0}")`;
      imgDiv.style.backgroundSize = "cover";
      imgDiv.style.backgroundPosition = "center";
      imgDiv.style.backgroundRepeat = "no-repeat";
      imgDiv.style.filter = "saturate(1)";
      imgDiv.style.cursor = "zoom-in";
      imgDiv.title = "Klik untuk perbesar";
      imgDiv.addEventListener("click", () => {
        const cur = +(imgDiv.dataset.cur || 0);
        openLightbox(idx, cur);
      });
    } else {
      imgDiv.textContent = p.banner || p.title;
    }

    const techs = el("div", { className: "tech-stack" });
    (p.tech || []).forEach((t) =>
      techs.append(el("span", { className: "tech-tag", textContent: t }))
    );

    const links = el("div", { className: "project-links" });
    if (p.demo) {
      links.append(
        el("a", { href: p.demo, target: "_blank", className: "btn", textContent: "Demo" })
      );
    }
    if (p.code) {
      links.append(
        el("a", {
          href: p.code,
          target: "_blank",
          className: "btn btn-secondary",
          textContent: "Code"
        })
      );
    }
    if ((p.images || []).length > 1) {
      links.append(
        el("a", {
          href: "javascript:void(0)",
          className: "btn btn-secondary",
          textContent: "Lihat Gambar"
        })
      );
      links.lastChild.addEventListener("click", (e) => {
        e.preventDefault();
        const cur = +(imgDiv.dataset.cur || 0);
        openLightbox(idx, cur);
      });
    }

    // jika ada lebih dari 1 gambar, tambahkan tombol next/prev + dots
    if ((p.images || []).length > 1) {
      const prevBtn = el("button", { className: "img-nav left", innerHTML: "‹", title: "Sebelumnya" });
      const nextBtn = el("button", { className: "img-nav right", innerHTML: "›", title: "Berikutnya" });
      const dots = el("div", { className: "img-dots" });

      p.images.forEach((_, k) => {
        const dot = el("span", { className: "dot" });
        dot.addEventListener("click", (e) => {
          e.stopPropagation();
          setCardImage(imgDiv, idx, k);
        });
        dots.append(dot);
      });

      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const list = p.images;
        const cur = +(imgDiv.dataset.cur || 0);
        const next = (cur - 1 + list.length) % list.length;
        setCardImage(imgDiv, idx, next);
      });

      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const list = p.images;
        const cur = +(imgDiv.dataset.cur || 0);
        const next = (cur + 1) % list.length;
        setCardImage(imgDiv, idx, next);
      });

      imgDiv.append(prevBtn, nextBtn, dots);
      // sinkron awal + aktifkan dot
      setCardImage(imgDiv, idx, 0);
    }

    projectsGrid?.append(
      el(
        "article",
        { className: "project-card" },
        imgDiv,
        el("h3", { textContent: p.title }),
        el("p", { textContent: p.desc }),
        techs,
        links
      )
    );
  });
}

// ==== LIGHTBOX ====
const lb = $("#lightbox");
const lbImg = $("#lbImg");
const lbClose = $("#lbClose");
const lbNext = $("#lbNext");
const lbPrev = $("#lbPrev");
const lbText = $("#lbText");
const lbTools = $("#lbTools");

let curIdx = 0;
let curImg = 0;
let captionSizePx = 16; // default

function getCaptionFor(i, j) {
  const proj = DATA[cat]?.projects?.[i];
  const list = proj?.images || [];
  const n = list.length;
  if (proj?.captions && proj.captions[j]) return proj.captions[j];
  const title = proj?.title || "Project";
  return `${title} — Gambar ${j + 1} dari ${n}`;
}

function updateLightboxContent() {
  const list = DATA[cat]?.projects?.[curIdx]?.images || [];
  if (!list.length) return;
  lbImg.src = list[curImg];
  if (lbText) {
    lbText.innerHTML = getCaptionFor(curIdx, curImg);
    lbText.style.setProperty("--cap-size", `${captionSizePx}px`);
  }
}

function openLightbox(i, j = 0) {
  const list = DATA[cat]?.projects?.[i]?.images || [];
  if (!list.length) return;
  curIdx = i;
  curImg = Math.max(0, Math.min(j, list.length - 1));
  captionSizePx = 16; // reset ukuran tiap buka
  updateLightboxContent();
  lb?.classList.add("open");
  lb?.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lb?.classList.remove("open");
  lb?.setAttribute("aria-hidden", "true");
}

function nav(d) {
  const list = DATA[cat]?.projects?.[curIdx]?.images || [];
  if (!list.length) return;
  curImg = (curImg + d + list.length) % list.length;
  updateLightboxContent();
}

// events
lbClose?.addEventListener("click", closeLightbox);
lbNext?.addEventListener("click", () => nav(+1));
lbPrev?.addEventListener("click", () => nav(-1));

lb?.addEventListener("click", (e) => {
  if (e.target === lb) closeLightbox();
});

window.addEventListener("keydown", (e) => {
  if (!lb?.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nav(+1);
  if (e.key === "ArrowLeft") nav(-1);
});

/* toolbar actions: ukuran & formatting dasar */
lbTools?.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  e.stopPropagation();
  const act = btn.dataset.action;
  if (act === "larger") {
    captionSizePx = Math.min(40, captionSizePx + 2);
    lbText?.style.setProperty("--cap-size", `${captionSizePx}px`);
    lbText?.focus();
  } else if (act === "smaller") {
    captionSizePx = Math.max(10, captionSizePx - 2);
    lbText?.style.setProperty("--cap-size", `${captionSizePx}px`);
    lbText?.focus();
  } else if (act === "bold" || act === "italic" || act === "underline") {
    lbText?.focus();
    document.execCommand(act); // apply ke seleksi di lbText
  }
});

// ...existing code...

function openLightbox(i, j = 0) {
  const list = DATA[cat]?.projects?.[i]?.images || [];
  if (!list.length) return;
  curIdx = i;
  curImg = Math.max(0, Math.min(j, list.length - 1));
  captionSizePx = 16; // reset ukuran tiap buka
  updateLightboxContent();
  lb?.classList.add("open");
  lb?.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll"); // Tambahkan class no-scroll
}

function closeLightbox() {
  lb?.classList.remove("open");
  lb?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll"); // Hapus class no-scroll
}
