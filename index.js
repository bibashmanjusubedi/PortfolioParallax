// index.js
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Save preference to localStorage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }
  
  // Check for saved preference on load
  document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
});