// Toggle buka/tutup menu overlay
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// Tutup otomatis setelah klik link + smooth scroll
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu-overlay a");
  const menu = document.getElementById("menu");

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});