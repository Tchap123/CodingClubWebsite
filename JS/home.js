const toggleBtn = document.getElementById("toggleBtn");
const h_links = document.getElementById("h_links");

toggleBtn.addEventListener("click", () => {
  h_links.classList.toggle("active");
});
