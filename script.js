const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const links = document.getElementById("links");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 8);
});

burger?.addEventListener("click", () => {
  links.classList.toggle("open");
});

links?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => links.classList.remove("open"));
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img[data-asset]").forEach((img) => {
    const src = window.MA_ASSETS?.[img.dataset.asset];
    if (src) img.src = src;
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = "1";
      img.style.display = "none";
      const fallback = document.createElement("div");
      fallback.className = "case-fallback";
      fallback.textContent = "Dashboard preview";
      img.parentElement?.insertBefore(fallback, img);
    });
  });
});
