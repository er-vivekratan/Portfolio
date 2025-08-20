// PROJECTS
const projects = [
  { name: "Tic Tac Toe", url: "#", description: "Simple game" },
  { name: "Krishi Mitra", url: "#", description: "Hackathon project" }
];

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <a href="${p.url}" target="_blank"><i class="fa-brands fa-github"></i> Code</a>
    `;
    grid.appendChild(card);
  });
}

// RESUME
const resume = { updates: ["20250820.00", "20250630.00"] };
function renderResume() {
  const list = document.getElementById("resumeUpdates");
  if (!list) return;
  list.innerHTML = "";
  resume.updates.forEach(u => {
    const li = document.createElement("li");
    li.textContent = u;
    list.appendChild(li);
  });
}

// CONTACT
const contact = { mob: "+91 1234567890", mail: "vivek@gmail.com" };
function renderContact() {
  const container = document.getElementById("contactInfo");
  if (!container) return;
  container.innerHTML = `
    <p><i class="fa fa-phone"></i> ${contact.mob}</p>
    <p><i class="fa fa-envelope"></i> ${contact.mail}</p>
  `;
}

// PROFILE
const profile = {
  linkedin: "#", github: "#", x: "#",
  instagram: "#", whatsapp: "#", telegram: "#"
};
function renderProfile() {
  const container = document.getElementById("socialLinks");
  if (!container) return;
  container.innerHTML = `
    <a href="${profile.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="${profile.github}" target="_blank"><i class="fab fa-github"></i></a>
    <a href="${profile.x}" target="_blank"><i class="fab fa-x-twitter"></i></a>
    <a href="${profile.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="${profile.whatsapp}" target="_blank"><i class="fab fa-whatsapp"></i></a>
    <a href="${profile.telegram}" target="_blank"><i class="fab fa-telegram"></i></a>
  `;
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderResume();
  renderContact();
  renderProfile();
});
