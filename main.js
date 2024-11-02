// main.js
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggleButton");
  const navItems = document.querySelectorAll(".nav-item");
  const currentPage = window.location.pathname.split("/").pop();

  // Highlight the active page
  navItems.forEach((item) => {
    const page = item.getAttribute("data-page");
    if (page === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Toggle sidebar visibility
  toggleButton.addEventListener("click", () => {
      nav.classList.toggle("active");
  });
});


// Close sidebar if clicked outside
document.addEventListener('click', (event) => {
  // Check if the click was outside the sidebar and toggle button
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.remove('active'); // Remove the 'active' class to close sidebar
  }
});