const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch {}
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

themeButton?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  try { localStorage.setItem("theme", nextTheme); } catch {}
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
