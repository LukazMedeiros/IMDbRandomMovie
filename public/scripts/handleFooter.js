const currentYear = new Date().getFullYear();

if (currentYear !== 2022) {
  document.querySelector(
    "footer"
  ).innerHTML = `RandomMovie &copy; 2022 - ${currentYear}`;
} else {
  document.querySelector("footer").innerHTML = `RandomMovie &copy; 2022`;
}
