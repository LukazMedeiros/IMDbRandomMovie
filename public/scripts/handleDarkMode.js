const toggle = document.getElementById("switch");
const currentTheme = localStorage.getItem("theme") || "light";
const documentTheme = document.querySelector("[data-theme]");

const isDarkMode =
  window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches;

documentTheme.setAttribute("data-theme", currentTheme);

if (isDarkMode) {
  toggle.checked = true;
  documentTheme.setAttribute("data-theme", "dark");
}

if (currentTheme !== "dark") {
  toggle.checked = false;
  documentTheme.setAttribute("data-theme", "light");
}

toggle.addEventListener("change", (event) => {
  let newTheme;
  if (event.target.checked) {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }
  documentTheme.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
