const grid = document.getElementById("projectGrid");

const visibleProjects = projects.filter(p => p.showOnHome !== false);

grid.innerHTML = visibleProjects.map((p, i) => {
  const media = p.cardMedia === "image"
    ? `<img class="card-video" src="${p.poster}" alt="${p.title}">`
    : `<video class="card-video" src="${p.video}" poster="${p.poster}" autoplay muted loop playsinline preload="metadata"></video>`;

  const playButton = p.playUrl
    ? `<a href="${p.playUrl}" class="btn btn-primary btn-small" target="_blank" rel="noopener">PLAY GAME →</a>`
    : "";

  return `
    <article class="project-card">
      <div class="card-video-wrap">
        ${media}
        <span class="card-index">0${i + 1}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-tagline">${p.tagline}</p>
        <p class="card-desc">${p.shortDesc}</p>
        <div class="card-tags">
          ${p.tech.slice(0, 3).map(t => `<span>[${t}]</span>`).join("")}
        </div>
        <div class="card-buttons">
          ${playButton}
          <a href="project.html?id=${p.id}" class="btn btn-outline btn-small">VIEW DETAILS →</a>
        </div>
      </div>
    </article>
  `;
}).join("");

// mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}