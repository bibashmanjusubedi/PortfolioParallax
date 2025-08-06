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


document.addEventListener('DOMContentLoaded', function() {
  // Target the third image (rc.jpg)
  const targetImage = document.querySelector('.slider img[alt="Slide 3"]');
  
  function setSliderHeight() {
    if (targetImage && targetImage.naturalHeight) {
      const targetHeight = targetImage.naturalHeight;
      
      // Set CSS variable for all images
      document.documentElement.style.setProperty(
        '--slider-height', 
        `${targetHeight}px`
      );
      
      // Set container height to match
      document.querySelector('.background-image-section').style.height = 
        `${targetHeight}px`;
    }
  }

  // If image is already loaded
  if (targetImage.complete) {
    setSliderHeight();
  }
  
  // Wait for image to load if not cached
  targetImage.addEventListener('load', setSliderHeight);
  
  // Optional: Handle window resize
  window.addEventListener('resize', function() {
    if (targetImage.complete) {
      setSliderHeight();
    }
  });
});