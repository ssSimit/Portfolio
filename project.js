const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = projects.find(p => p.id === id) || projects[0];
const container = document.getElementById("projectDetail");

const orientationClass = project.orientation === "portrait" ? "is-portrait" : "is-landscape";

const playButton = project.link
  ? `<a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener">${project.buttonText}</a>`
  : "";

container.innerHTML = `
  <p class="terminal-line back-line"><a href="index.html#projects">← back to ./projects</a></p>

  <div class="detail-video-wrap ${orientationClass}">
    <video
      src="${project.video}"
      poster="${project.poster}"
      autoplay muted loop playsinline controls>
    </video>
  </div>

  <h1 class="detail-title">${project.title}</h1>
    ${playButton ? `<div class="detail-cta">${playButton}</div>` : ""}

  <p class="detail-tagline">// ${project.tagline}</p>

  <div class="detail-body">${project.longDesc.split("\n\n").map(p => `<p>${p.trim()}</p>`).join("")}</div>

  <div class="detail-tech">
    <h3 class="col-heading">$ cat ./tech_stack</h3>
    <div class="tag-list">
      ${project.tech.map(t => `<span>[ ${t} ]</span>`).join("")}
    </div>
  </div>

`;