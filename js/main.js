
// main.js
// Global, site-wide behavior only

import { issues } from "./js/data.js";

import { blogs } from "./blogs.js";


document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
});

function highlightActiveNav() {
  const links = document.querySelectorAll("nav a");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.style.color = "#60a5fa";
    }
  });
}
