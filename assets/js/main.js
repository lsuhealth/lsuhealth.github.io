const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

const closeNav = () => {
  if (!toggle || !nav) return;
  toggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  const icon = toggle.querySelector("i");
  if (icon) icon.className = "fa-solid fa-bars";
};

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(willOpen));
    nav.classList.toggle("is-open", willOpen);
    const icon = toggle.querySelector("i");
    if (icon) icon.className = willOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeNav));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeNav();
  });
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector("[data-header]");
if (header) {
  const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}
