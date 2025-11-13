window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  // Hide after 2 seconds
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1000);
});

// show spinner again briefly on Login click
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login");
  const preloader = document.getElementById("preloader");
  if (!loginBtn || !preloader) return;

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    preloader.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = loginBtn.getAttribute("href");
    }, 1000);
  });
});
