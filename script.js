/* Fateh Live — navigation and automatic footer year */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    toggle.textContent = "☰";
  };
  const open = () => {
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    toggle.textContent = "✕";
  };
  toggle.addEventListener("click", () => nav.classList.contains("open") ? close() : open());
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
  document.addEventListener("click", event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) close();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) close();
  });
});
